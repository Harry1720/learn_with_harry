import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Document, Page, Thumbnail, pdfjs, type DocumentProps} from 'react-pdf';
import useBaseUrl from '@docusaurus/useBaseUrl';

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import styles from './styles.module.css';
import type {PDFViewerProps} from './index';

type ViewerMode = 'fit-width' | 'fit-page' | 'custom';
type PDFDocumentProxy = Parameters<NonNullable<DocumentProps['onLoadSuccess']>>[0];

function Icon({name}: {name: string}) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.8,
    viewBox: '0 0 24 24',
    'aria-hidden': true as const,
  };

  const paths: Record<string, React.ReactNode> = {
    previous: <path d="m15 18-6-6 6-6" />,
    next: <path d="m9 18 6-6-6-6" />,
    zoomIn: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="M16 16l5 5M10.8 7.8v6M7.8 10.8h6" /></>,
    zoomOut: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="M16 16l5 5M7.8 10.8h6" /></>,
    fitWidth: <><path d="M3 8V5h3M21 8V5h-3M3 16v3h3M21 16v3h-3M7 12h10" /><path d="m9 10-2 2 2 2m6-4 2 2-2 2" /></>,
    fitPage: <><rect x="5" y="3" width="14" height="18" rx="1.5" /><path d="M9 7h6M9 11h6M9 15h4" /></>,
    download: <><path d="M12 3v12m-5-5 5 5 5-5M4 20h16" /></>,
    fullscreen: <><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" /></>,
    thumbnails: <><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="9" rx="1" /><rect x="3" y="15" width="7" height="6" rx="1" /><rect x="14" y="15" width="7" height="6" rx="1" /></>,
    close: <path d="m6 6 12 12M18 6 6 18" />,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function LoadingState({label}: {label: string}) {
  return (
    <div className={styles.status} role="status">
      <span className={styles.spinner} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}

export default function PDFViewerClient({
  src,
  title,
  initialPage = 1,
  showThumbnails = true,
  allowDownload = true,
  initialScale = 1,
  onDocumentLoadSuccess,
}: PDFViewerProps) {
  const fileUrl = useBaseUrl(src);
  const workerUrl = useBaseUrl('/pdfjs/pdf.worker.min.mjs');
  // Keep the worker URL base-path aware for both local development and deployed sites.
  pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;
  const viewerRef = useRef<HTMLDivElement>(null);
  const pageStageRef = useRef<HTMLDivElement>(null);
  const [pageCount, setPageCount] = useState(0);
  const [pdfDocument, setPdfDocument] = useState<PDFDocumentProxy | null>(null);
  const [pageNumber, setPageNumber] = useState(Math.max(1, initialPage));
  const [pageInput, setPageInput] = useState(String(Math.max(1, initialPage)));
  const [pageSize, setPageSize] = useState({width: 612, height: 792});
  const [stageSize, setStageSize] = useState({width: 0, height: 0});
  const [zoom, setZoom] = useState(initialScale);
  const [mode, setMode] = useState<ViewerMode>('fit-width');
  const [thumbnailsOpen, setThumbnailsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const cMapUrl = useBaseUrl('/pdfjs/cmaps/');
  const standardFontDataUrl = useBaseUrl('/pdfjs/standard_fonts/');
  const wasmUrl = useBaseUrl('/pdfjs/wasm/');
  const pdfOptions = useMemo(
    () => ({cMapUrl, cMapPacked: true, standardFontDataUrl, wasmUrl}),
    [cMapUrl, standardFontDataUrl, wasmUrl],
  );

  const onLoadSuccess = useCallback(
    (pdf: PDFDocumentProxy) => {
      setPdfDocument(pdf);
      setPageCount(pdf.numPages);
      setPageNumber((current) => Math.min(Math.max(1, initialPage || current), pdf.numPages));
      onDocumentLoadSuccess?.(pdf.numPages);
    },
    [initialPage, onDocumentLoadSuccess],
  );

  useEffect(() => {
    const stage = pageStageRef.current;
    if (!stage || typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;
      setStageSize({width: entry.contentRect.width, height: entry.contentRect.height});
    });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(document.fullscreenElement === viewerRef.current);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => setPageInput(String(pageNumber)), [pageNumber]);

  useEffect(() => {
    if (!pdfDocument) return undefined;
    let active = true;
    pdfDocument.getPage(pageNumber).then((page) => {
      if (!active) return;
      const viewport = page.getViewport({scale: 1});
      setPageSize({width: viewport.width, height: viewport.height});
    }).catch(() => undefined);
    return () => {
      active = false;
    };
  }, [pageNumber, pdfDocument]);

  const baseWidth = Math.max(180, stageSize.width);
  const fitPageScale = Math.min(
    1,
    (stageSize.height * pageSize.width) /
      (Math.max(180, stageSize.width) * pageSize.height),
  );
  const pageScale = mode === 'fit-page' ? fitPageScale * zoom : zoom;
  const thumbnailStart = Math.max(1, pageNumber - 7);
  const thumbnailEnd = Math.min(pageCount, thumbnailStart + 14);
  const thumbnailPages = useMemo(
    () => Array.from({length: Math.max(0, thumbnailEnd - thumbnailStart + 1)}, (_, index) => thumbnailStart + index),
    [thumbnailEnd, thumbnailStart],
  );

  const goToPage = (nextPage: number) => {
    setPageNumber(Math.min(pageCount || 1, Math.max(1, nextPage)));
  };

  const zoomIn = () => {
    setMode('custom');
    setZoom((current) => Math.min(3, Math.round((current + 0.15) * 100) / 100));
  };

  const zoomOut = () => {
    setMode('custom');
    setZoom((current) => Math.max(0.4, Math.round((current - 0.15) * 100) / 100));
  };

  const fitWidth = () => {
    setMode('fit-width');
    setZoom(1);
  };

  const fitPage = () => {
    setMode('fit-page');
    setZoom(1);
  };

  const toggleFullscreen = async () => {
    if (!viewerRef.current) return;
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await viewerRef.current.requestFullscreen();
    } catch {
      setIsFullscreen(false);
    }
  };

  const handleViewerKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLInputElement) return;
    if (event.key === 'ArrowLeft') goToPage(pageNumber - 1);
    if (event.key === 'ArrowRight') goToPage(pageNumber + 1);
  };

  return (
    <section
      className={styles.viewer}
      ref={viewerRef}
      tabIndex={0}
      aria-label={`Trình xem PDF: ${title}`}
      onKeyDown={handleViewerKeyDown}>
      <div className={styles.toolbar} role="toolbar" aria-label="Công cụ xem tài liệu PDF">
        <div className={styles.toolbarGroup}>
          <button type="button" className={styles.iconButton} onClick={() => setThumbnailsOpen((open) => !open)} disabled={!showThumbnails || !pageCount} aria-label={thumbnailsOpen ? 'Đóng hình thu nhỏ' : 'Mở hình thu nhỏ'} title="Hình thu nhỏ">
            {thumbnailsOpen ? <Icon name="close" /> : <Icon name="thumbnails" />}
          </button>
          <button type="button" className={styles.iconButton} onClick={() => goToPage(pageNumber - 1)} disabled={!pageCount || pageNumber <= 1} aria-label="Trang trước" title="Trang trước">
            <Icon name="previous" />
          </button>
          <label className={styles.pageControl}>
            <span className={styles.visuallyHidden}>Trang hiện tại</span>
            <input
              type="number"
              min={1}
              max={pageCount || 1}
              value={pageInput}
              disabled={!pageCount}
              onChange={(event) => setPageInput(event.target.value)}
              onBlur={() => goToPage(Number(pageInput) || pageNumber)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') goToPage(Number(pageInput) || pageNumber);
              }}
            />
            <span aria-hidden="true">/ {pageCount || '—'}</span>
          </label>
          <button type="button" className={styles.iconButton} onClick={() => goToPage(pageNumber + 1)} disabled={!pageCount || pageNumber >= pageCount} aria-label="Trang tiếp theo" title="Trang tiếp theo">
            <Icon name="next" />
          </button>
        </div>

        <div className={styles.toolbarGroup}>
          <button type="button" className={styles.iconButton} onClick={zoomOut} disabled={!pageCount || zoom <= 0.4} aria-label="Thu nhỏ" title="Thu nhỏ">
            <Icon name="zoomOut" />
          </button>
          <span className={styles.zoomLabel}>{Math.round(pageScale * 100)}%</span>
          <button type="button" className={styles.iconButton} onClick={zoomIn} disabled={!pageCount || zoom >= 3} aria-label="Phóng to" title="Phóng to">
            <Icon name="zoomIn" />
          </button>
          <button type="button" className={styles.iconButton} onClick={fitWidth} disabled={!pageCount} aria-label="Vừa chiều rộng" title="Vừa chiều rộng">
            <Icon name="fitWidth" />
          </button>
          <button type="button" className={styles.iconButton} onClick={fitPage} disabled={!pageCount} aria-label="Vừa trang" title="Vừa trang">
            <Icon name="fitPage" />
          </button>
        </div>

        <div className={styles.toolbarGroup}>
          {allowDownload && (
            <a className={styles.iconButton} href={fileUrl} download aria-label="Tải PDF xuống" title="Tải xuống">
              <Icon name="download" />
            </a>
          )}
          <button type="button" className={styles.iconButton} onClick={toggleFullscreen} aria-label={isFullscreen ? 'Thoát toàn màn hình' : 'Toàn màn hình'} title={isFullscreen ? 'Thoát toàn màn hình' : 'Toàn màn hình'}>
            <Icon name="fullscreen" />
          </button>
        </div>
      </div>

      <Document
        file={fileUrl}
        options={pdfOptions}
        onLoadSuccess={onLoadSuccess}
        loading={<LoadingState label="Đang tải tài liệu PDF…" />}
        error={<div className={styles.error} role="alert">Không thể mở tài liệu này. Hãy kiểm tra kết nối hoặc tải file PDF về thiết bị.</div>}
        noData={<div className={styles.error} role="alert">Chưa có đường dẫn đến tài liệu PDF.</div>}
        onLoadError={() => {
          setPageCount(0);
          setPdfDocument(null);
        }}>
        <div className={styles.viewerBody}>
        {thumbnailsOpen && showThumbnails && (
          <>
            <button className={styles.thumbnailScrim} type="button" aria-label="Đóng bảng hình thu nhỏ" onClick={() => setThumbnailsOpen(false)} />
            <aside className={styles.thumbnailPanel} aria-label="Hình thu nhỏ các trang">
              <div className={styles.thumbnailHeader}>
                <strong>Các trang</strong>
                <button type="button" className={styles.iconButton} onClick={() => setThumbnailsOpen(false)} aria-label="Đóng hình thu nhỏ"><Icon name="close" /></button>
              </div>
              <div className={styles.thumbnailList}>
                {thumbnailPages.map((page) => (
                  <button
                    key={page}
                    type="button"
                    className={`${styles.thumbnailItem} ${page === pageNumber ? styles.thumbnailActive : ''}`}
                    onClick={() => goToPage(page)}
                    aria-current={page === pageNumber ? 'page' : undefined}
                    aria-label={`Mở trang ${page}`}>
                    <Thumbnail pageNumber={page} width={116} />
                    <span>Trang {page}</span>
                  </button>
                ))}
              </div>
              {pageCount > thumbnailPages.length && (
                <div className={styles.thumbnailPager}>
                  <button type="button" onClick={() => goToPage(Math.max(1, thumbnailStart - 8))} disabled={thumbnailStart <= 1}>Trang trước</button>
                  <button type="button" onClick={() => goToPage(Math.min(pageCount, thumbnailEnd + 8))} disabled={thumbnailEnd >= pageCount}>Tiếp</button>
                </div>
              )}
            </aside>
          </>
        )}

        <div className={styles.pageStage} ref={pageStageRef} tabIndex={0} aria-label={`Trang ${pageNumber} của ${pageCount || 'tài liệu'}`}>
          {pageCount > 0 && (
            <Page
              pageNumber={pageNumber}
              width={baseWidth}
              scale={pageScale}
              renderTextLayer
              renderAnnotationLayer
              loading={<LoadingState label={`Đang dựng trang ${pageNumber}…`} />}
              error={<div className={styles.error} role="alert">Không thể hiển thị trang {pageNumber}.</div>}
            />
          )}
        </div>
        </div>
      </Document>
    </section>
  );
}
