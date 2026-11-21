import React, {useEffect, useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import PDFViewer from './index';
import styles from './styles.module.css';

export type PDFDocumentItem = {
  src: string;
  title: string;
  description: string;
  initialPage?: number;
};

type Props = {
  documents: PDFDocumentItem[];
};

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function DocumentCard({
  document,
  fileUrl,
  pageCount,
  fileSize,
}: {
  document: PDFDocumentItem;
  fileUrl: string;
  pageCount?: number;
  fileSize?: number;
}) {
  return (
    <div className={styles.documentCard}>
      <span className={styles.pdfBadge} aria-hidden="true">PDF</span>
      <div className={styles.documentInfo}>
        <h2>{document.title}</h2>
        <p>{document.description}</p>
        {(pageCount || fileSize) && (
          <div className={styles.documentMetadata}>
            {pageCount && <span>{pageCount} trang</span>}
            {fileSize && <span>{formatFileSize(fileSize)}</span>}
          </div>
        )}
      </div>
      <div className={styles.documentActions}>
        <a className={styles.downloadButton} href={fileUrl} download>Tải PDF</a>
      </div>
    </div>
  );
}

export default function PDFDocumentPage({documents}: Props) {
  return (
    <div className={styles.documentStack}>
      {documents.map((document) => (
        <PDFDocument key={document.src} document={document} />
      ))}
    </div>
  );
}

function PDFDocument({document}: {document: PDFDocumentItem}) {
  const fileUrl = useBaseUrl(document.src);
  const [fileSize, setFileSize] = useState<number>();
  const [pageCount, setPageCount] = useState<number>();

  useEffect(() => {
    const controller = new AbortController();
    fetch(fileUrl, {method: 'HEAD', signal: controller.signal})
      .then((response) => {
        const size = Number(response.headers.get('content-length'));
        if (response.ok && Number.isFinite(size) && size > 0) setFileSize(size);
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, [fileUrl]);

  return (
    <article className={styles.documentEntry}>
      <DocumentCard
        document={document}
        fileUrl={fileUrl}
        pageCount={pageCount}
        fileSize={fileSize}
      />
      <div className={styles.embeddedViewer}>
        <PDFViewer
          src={document.src}
          title={document.title}
          initialPage={document.initialPage}
          onDocumentLoadSuccess={setPageCount}
        />
      </div>
    </article>
  );
}
