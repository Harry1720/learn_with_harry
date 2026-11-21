import React, {Component, Suspense, lazy, type ErrorInfo, type ReactNode} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

const PDFViewerClient = lazy(() => import('./PDFViewerClient'));

class PDFViewerErrorBoundary extends Component<
  {children: ReactNode; src: string},
  {hasError: boolean}
> {
  state = {hasError: false};

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('PDF viewer failed to render:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.viewerFailure}>
          <object className={styles.nativePdfFallback} data={this.props.src} type="application/pdf" aria-label="Tài liệu PDF">
            <p>Trình duyệt không thể nhúng PDF. <a href={this.props.src} target="_blank" rel="noreferrer">Mở tài liệu PDF riêng</a>.</p>
          </object>
        </div>
      );
    }
    return this.props.children;
  }
}

export type PDFViewerProps = {
  src: string;
  title: string;
  initialPage?: number;
  showThumbnails?: boolean;
  allowDownload?: boolean;
  initialScale?: number;
  onDocumentLoadSuccess?: (pageCount: number) => void;
};

export default function PDFViewer({
  src,
  title,
  initialPage = 1,
  showThumbnails = true,
  allowDownload = true,
  initialScale = 1,
  onDocumentLoadSuccess,
}: PDFViewerProps) {
  const fileUrl = useBaseUrl(src);

  return (
    <BrowserOnly
      fallback={
        <div className={styles.viewerFallback} role="status">
          Trình xem PDF sẽ sẵn sàng sau khi trang tải xong.
        </div>
      }>
      {() => (
        <PDFViewerErrorBoundary key={src} src={fileUrl}>
          <Suspense
            fallback={
              <div className={styles.viewerFallback} role="status">
                Đang tải trình xem PDF…
              </div>
            }>
            <PDFViewerClient
              src={src}
              title={title}
              initialPage={initialPage}
              showThumbnails={showThumbnails}
              allowDownload={allowDownload}
              initialScale={initialScale}
              onDocumentLoadSuccess={onDocumentLoadSuccess}
            />
          </Suspense>
        </PDFViewerErrorBoundary>
      )}
    </BrowserOnly>
  );
}
