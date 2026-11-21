import type {ReactNode} from 'react';
import {useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {authorProfile, courses} from '../data/siteConfig';

import styles from './about.module.css';

function ArrowIcon({external = false}: {external?: boolean}): ReactNode {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {external ? <path d="M14 4h6v6m-.5-5.5-8 8M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" /> : <path d="M4.5 12h14M13 6.5l5.5 5.5-5.5 5.5" />}
    </svg>
  );
}

function ContactIcon({type}: {type: 'email' | 'github' | 'linkedin'}): ReactNode {
  if (type === 'email') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="14" rx="2" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </svg>
    );
  }
  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 19c-4.2 1.3-4.2-2.1-5.9-2.5M15 21v-3.3a2.9 2.9 0 0 0-.8-2.2c2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 18.4 6c.1-.4.6-1.9-.1-3.8 0 0-1.1-.4-3.7 1.4a12.7 12.7 0 0 0-6.8 0C5.2 1.8 4.1 2.2 4.1 2.2 3.4 4.1 3.9 5.6 4 6a4.7 4.7 0 0 0-1.3 3.5c0 4.7 2.8 5.7 5.5 6a2.9 2.9 0 0 0-.8 2.2V21" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7m0-10v.1M12 17v-7h3v1.2a2.2 2.2 0 0 1 4 1.2V17" />
    </svg>
  );
}

function AuthorAvatar(): ReactNode {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  if (!authorProfile.avatarSrc || imageUnavailable) {
    return <span className={styles.authorAvatar} aria-hidden="true">H</span>;
  }

  return (
    <img
      className={styles.authorAvatar}
      src={authorProfile.avatarSrc}
      alt={`Ảnh đại diện của ${authorProfile.name}`}
      onError={() => setImageUnavailable(true)}
    />
  );
}

export default function About(): ReactNode {
  const contactItems = [
    {
      label: 'Email',
      value: authorProfile.contacts.email.address,
      href: `mailto:${authorProfile.contacts.email.address}`,
      action: 'Gửi email',
      type: 'email' as const,
      external: false,
    },
    {
      label: 'GitHub',
      value: authorProfile.contacts.github.display,
      href: authorProfile.contacts.github.url,
      action: 'Xem GitHub',
      type: 'github' as const,
      external: true,
    },
    {
      label: 'LinkedIn',
      value: authorProfile.contacts.linkedin.display,
      href: authorProfile.contacts.linkedin.url,
      action: 'Xem LinkedIn',
      type: 'linkedin' as const,
      external: true,
    },
  ];

  return (
    <Layout
      title="Giới thiệu"
      description="Tìm hiểu về HarryHub, tác giả Harry và cách liên hệ.">
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="about-title">
          <div className={`container ${styles.heroInner}`}>
            <span className={styles.eyebrow}>HỌC TẬP · CHIA SẺ · PHÁT TRIỂN</span>
            <Heading as="h1" id="about-title">Giới thiệu HarryHub</Heading>
            <p>
              Một không gian học tập cá nhân, nơi kiến thức công nghệ được hệ thống
              hóa để dễ tiếp cận, tra cứu và ôn tập.
            </p>
            <Link className={styles.primaryLink} to="/docs/category/toan-roi-rac">
              Khám phá tài liệu <ArrowIcon />
            </Link>
          </div>
        </section>

        <div className={`container ${styles.content}`}>
          <section className={styles.aboutSection} aria-labelledby="hub-title">
            <div className={styles.sectionIntro}>
              <span className={styles.sectionLabel}>NỀN TẢNG</span>
              <Heading as="h2" id="hub-title">HarryHub là gì?</Heading>
            </div>
            <div className={styles.aboutCopy}>
              <p>
                HarryHub được xây dựng với mong muốn tạo ra một không gian học tập
                và chia sẻ kiến thức công nghệ, nơi những nội dung phức tạp được
                hệ thống hóa và trình bày theo cách dễ tiếp cận hơn.
              </p>
              <p>
                Bạn nên xem trang web này bằng máy tính để có trải nghiệm tốt nhất.
              </p>
              <p>
                Tài liệu hiện tập trung vào {courses.map((course, index) => (
                  <span key={course.title}>
                    {index > 0 && (index === courses.length - 1 ? ' và ' : ', ')}
                    {course.title}
                  </span>
                ))}. Mỗi môn được chia thành chương và bài để người học có thể
                theo dõi mạch nội dung, đọc ghi chú và mở tài liệu PDF khi có.
              </p>
              <p>
                Mục tiêu là tiếp tục hoàn thiện nội dung, cách trình bày và công cụ
                tra cứu để HarryHub ngày càng hữu ích cho việc học tập và ôn tập.
              </p>
              <p>
                Các nội dung bài học trong trang này chứa đựng kiến thức chung của nhân loại và công sức nghiên cứu của tất cả những cá nhân, tổ chức được tác giả đề cập, tìm hiểu và cố gắng trích dẫn, biên tập một cách phù hợp. Tác giả không có ý định sao chép, trích dẫn để kinh doanh, mua bán hay nhận làm bản quyền riêng.
              </p>
            </div>
          </section>

          <section className={styles.authorSection} aria-labelledby="author-title">
            <div className={styles.authorCopy}>
              <div className={styles.authorIdentity}>
                <AuthorAvatar />
                <div>
                  <span className={styles.sectionLabel}>ABOUT THE AUTHOR · TÁC GIẢ</span>
                  <Heading as="h2" id="author-title">{authorProfile.name}</Heading>
                </div>
              </div>
              <p>{authorProfile.bio}</p>
              {/* <div className={styles.authorPurpose}>
                <strong>Về HarryHub</strong>
                <p>{authorProfile.purpose}</p>
              </div> */}
            </div>
            <aside className={styles.portfolioCard}
            >
              <span className={styles.portfolioEyebrow}>VỀ HARRY</span>
              <Heading as="h3" id="portfolio-title">WHAT'S MORE ABOUT ME?</Heading>
              <p>Xem thêm về mình tại link dưới đây.</p>
              {authorProfile.portfolioUrl ? (
                <a href={authorProfile.portfolioUrl} target="_blank" rel="noopener noreferrer">
                  Xem Portfolio <ArrowIcon external />
                </a>
              ) : (
                <span className={styles.portfolioUnavailable}>Chưa cung cấp liên kết Portfolio</span>
              )}
            </aside>
          </section>

          <section className={styles.contactSection} aria-labelledby="contact">
            <div className={styles.contactIntro}>
              <span className={styles.sectionLabel}>CONNECT</span>
              <Heading as="h2" id="contact">Kết nối với mình</Heading>
              <p>Bạn có câu hỏi, góp ý hoặc muốn trao đổi về kiến thức công nghệ? Mình luôn sẵn sàng lắng nghe và kết nối.</p>
            </div>
            <div className={styles.contactLinks}>
              {contactItems.map((item) => (
                <a
                  className={styles.contactCard}
                  key={item.label}
                  href={item.href}
                  aria-label={`${item.action}: ${item.value}`}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}>
                  <span className={styles.contactIcon}><ContactIcon type={item.type} /></span>
                  <span className={styles.contactCardLabel}>{item.label}</span>
                  <strong className={styles.contactValue}>{item.value}</strong>
                  <span className={styles.contactAction}>
                    {item.action} <ArrowIcon external={item.external} />
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
