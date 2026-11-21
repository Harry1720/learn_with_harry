import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {useDocById} from '@docusaurus/plugin-content-docs/client';
import type {
  PropSidebarItem,
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs';
import {findFirstSidebarItemLink} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

function countMaterials(items: PropSidebarItem[]): number {
  return items.reduce((total, item) => {
    if (item.type === 'category') return total + countMaterials(item.items);
    return total + (item.type === 'link' ? 1 : 0);
  }, 0);
}

function isPdfDocumentId(docId?: string) {
  return !!docId && /^(?:(?:oop|cvip|ltdt|ktdl)\/chapter-\d{2}|cpp\/chap\d+\/chap\d+|cpp\/phuluc\/phuluc|attt\/chap\d+\/chap\d+|kcpm\/chap(?:4_1\/chap4_1|5\/chap5)|nhapmonit\/(?:chap\d+|example))$/.test(docId);
}

function countPdfDocuments(items: PropSidebarItem[]): number {
  return items.reduce((total, item) => {
    if (item.type === 'category') return total + countPdfDocuments(item.items);
    return total + (item.type === 'link' && isPdfDocumentId(item.docId) ? 1 : 0);
  }, 0);
}

function CardIcon({pdf}: {pdf: boolean}): ReactNode {
  return (
    <span className={styles.icon} aria-hidden="true">
      {pdf ? 'PDF' : (
        <svg viewBox="0 0 24 24">
          <path d="M6 3.75h8l4 4v12.5H6zM14 3.75v4h4M9 12h6M9 15.5h6" />
        </svg>
      )}
    </span>
  );
}

function CategoryCard({item}: {item: PropSidebarItemCategory}): ReactNode {
  const docCount = countMaterials(item.items);
  const pdfCount = countPdfDocuments(item.items);
  const href = item.href ?? findFirstSidebarItemLink(item);
  const isSubject = !!item.href && /^\/docs\/category\/(toan-roi-rac|attt|cpp|kcpm|oop|ktdl|cvip|ltdt|nhapmonit)\/?$/.test(item.href);
  const hasChapterPdf = pdfCount > 0 || (!!item.href && /^\/docs\/(?:category\/)?toan-roi-rac\/chapter[1-5](?:\/|$)/.test(item.href));
  const countLabel = isSubject
    ? pdfCount > 0 ? `${pdfCount} mục có PDF` : `${item.items.filter((child) => child.type === 'category').length} mục trong mục lục`
    : `${docCount} tài liệu`;

  if (!href) return null;

  return (
    <Link href={href} className={`card ${styles.card}`}>
      <div className={styles.cardHeader}>
        <CardIcon pdf={hasChapterPdf} />
        {isSubject && <span className={styles.type}>Môn học</span>}
      </div>
      <Heading as="h2" className={styles.title}>{item.label}</Heading>
      {item.description && <p className={styles.description}>{item.description}</p>}
      <div className={styles.cardFooter}>
        <span>{countLabel}</span>
        <span className={styles.openLabel}>Mở nội dung <span aria-hidden="true">→</span></span>
      </div>
    </Link>
  );
}

function DocumentCard({item}: {item: PropSidebarItemLink}): ReactNode {
  const doc = useDocById(item.docId ?? undefined);
  const href = item.href;
  const pdfDocument = isPdfDocumentId(item.docId);

  return (
    <Link href={href} className={`card ${styles.card}`}>
      <div className={styles.cardHeader}>
        <CardIcon pdf={pdfDocument} />
      </div>
      <Heading as="h2" className={styles.title}>{item.label}</Heading>
      {(item.description ?? doc?.description) && (
        <p className={styles.description}>{item.description ?? doc?.description}</p>
      )}
      <div className={styles.cardFooter}>
        <span>{pdfDocument ? 'Tài liệu PDF' : 'Tài liệu học tập'}</span>
        <span className={styles.openLabel}>Mở nội dung <span aria-hidden="true">→</span></span>
      </div>
    </Link>
  );
}

export default function DocCard({item}: {item: PropSidebarItem}): ReactNode {
  if (item.type === 'category') return <CategoryCard item={item} />;
  if (item.type === 'link') return <DocumentCard item={item} />;
  return null;
}
