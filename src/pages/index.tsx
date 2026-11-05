import type {ReactNode} from 'react';
import {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type Course = {
  title: string;
  label: string;
  description: string;
  chapters: string;
  tags: string[];
  href: string;
  icon: 'logic' | 'shield';
  tone: 'violet' | 'blue';
};

const courses: Course[] = [
  {
    title: 'Toán rời rạc',
    label: 'NỀN TẢNG TOÁN HỌC',
    description:
      'Logic, tập hợp, phép đếm, quan hệ và các kiến thức nền tảng cho khoa học máy tính.',
    chapters: '5 chương',
    tags: ['Logic', 'Tập hợp', 'Đếm', 'Quan hệ'],
    href: '/docs/category/toan-roi-rac',
    icon: 'logic',
    tone: 'violet',
  },
  {
    title: 'An toàn thông tin',
    label: 'MẬT MÃ & BẢO MẬT',
    description:
      'Từ lỗ hổng mạng và giao thức đến mật mã, chữ ký số, chứng chỉ số và hàm băm.',
    chapters: '11 chương',
    tags: ['Mật mã', 'Mạng máy tính', 'Chữ ký số', 'SHA-256'],
    href: '/docs/category/an-toan-thong-tin',
    icon: 'shield',
    tone: 'blue',
  },
];

function Icon({name, size = 20}: {name: string; size?: number}) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  };

  switch (name) {
    case 'logic':
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
          <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
          <path d="M10.5 7h3a2 2 0 0 1 2 2v4.5M7 10.5v3a2 2 0 0 0 2 2h4.5" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3 19 6v5c0 4.6-2.8 8-7 10-4.2-2-7-5.4-7-10V6l7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'search':
      return (
        <svg {...common}>
          <circle cx="10.8" cy="10.8" r="6.3" />
          <path d="m16 16 4.2 4.2" />
        </svg>
      );
    case 'arrow':
      return (
        <svg {...common}>
          <path d="M4.5 12h14M13 6.5l5.5 5.5-5.5 5.5" />
        </svg>
      );
    case 'book':
      return (
        <svg {...common}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z" />
          <path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20M8 7h8M8 10h6" />
        </svg>
      );
    case 'route':
      return (
        <svg {...common}>
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="6" r="2" />
          <path d="M8 18h4a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8m0-12.8L5.6 18.4" />
        </svg>
      );
  }
}

function CourseCard({course}: {course: Course}) {
  return (
    <article className={`${styles.courseCard} ${styles[course.tone]}`}>
      <div className={styles.courseCardTop}>
        <span className={styles.courseIcon}>
          <Icon name={course.icon} size={21} />
        </span>
        <span className={styles.courseLabel}>{course.label}</span>
      </div>
      <Heading as="h3">{course.title}</Heading>
      <p className={styles.courseDescription}>{course.description}</p>
      <div className={styles.tagList}>
        {course.tags.map((tag) => (
          <span className={styles.tag} key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.courseCardBottom}>
        <span>{course.chapters}</span>
        <Link className={styles.courseLink} to={course.href}>
          Xem mục lục <Icon name="arrow" size={17} />
        </Link>
      </div>
    </article>
  );
}

export default function Home(): ReactNode {
  const [query, setQuery] = useState('');
  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('vi');
    if (!normalizedQuery) return courses;
    return courses.filter((course) =>
      [course.title, course.label, course.description, ...course.tags]
        .join(' ')
        .toLocaleLowerCase('vi')
        .includes(normalizedQuery),
    );
  }, [query]);

  return (
    <Layout
      title="Học IT theo cách của bạn"
      description="Ghi chú học tập về Toán rời rạc và An toàn thông tin, trình bày theo chương bằng tiếng Việt.">
      <main className={styles.homepage}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>
                <span className={styles.sparkle}>✦</span> GHI CHÚ HỌC TẬP CÔNG NGHỆ BẰNG TIẾNG VIỆT
              </span>
              <Heading as="h1">
                Học IT theo <span>cách của bạn.</span>
              </Heading>
              <p className={styles.heroSubtitle}>
                Từng khái niệm được sắp xếp rõ ràng theo chương, giúp bạn ôn tập
                dễ dàng và xây nền tảng vững chắc.
              </p>

              <form
                className={styles.searchBox}
                role="search"
                onSubmit={(event) => {
                  event.preventDefault();
                  document.getElementById('courses')?.scrollIntoView({behavior: 'smooth'});
                }}>
                <Icon name="search" size={20} />
                <input
                  aria-label="Tìm môn học hoặc chủ đề"
                  placeholder="Tìm môn học, ví dụ: mật mã, logic..."
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <button type="submit">Tìm kiếm</button>
              </form>

              <div className={styles.quickTopics}>
                <span>Chủ đề:</span>
                {['Logic', 'Mật mã', 'Mạng máy tính', 'SHA-256'].map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => {
                      setQuery(topic);
                      document.getElementById('courses')?.scrollIntoView({behavior: 'smooth'});
                    }}>
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.heroAside} aria-hidden="true">
              <div className={`${styles.orbit} ${styles.orbitOne}`} />
              <div className={`${styles.orbit} ${styles.orbitTwo}`} />
              <div className={styles.heroBook}>
                <div className={styles.bookSpine} />
                <div className={styles.bookSymbol}>∑</div>
                <div className={styles.bookLines}>
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <span className={`${styles.floatChip} ${styles.floatChipTop}`}>
                <Icon name="logic" size={18} /> Logic
              </span>
              <span className={`${styles.floatChip} ${styles.floatChipBottom}`}>
                <Icon name="shield" size={18} /> Bảo mật
              </span>
              <span className={styles.floatDot} />
            </div>
          </div>

          <div className={`container ${styles.statsWrap}`}>
            <div className={styles.stats}>
              <div>
                <strong>2</strong>
                <span>Môn học</span>
              </div>
              <div>
                <strong>16</strong>
                <span>Chương học</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Nội dung tiếng Việt</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.courseSection} id="courses">
          <div className="container">
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.sectionEyebrow}>BẮT ĐẦU HỌC</span>
                <Heading as="h2">Chủ đề học tập trọng tâm</Heading>
                <p>Chọn một môn để xem mục lục và bắt đầu từ chương đầu tiên.</p>
              </div>
              <Link className={styles.textLink} to="/docs/category/toan-roi-rac">
                Xem tất cả môn học <Icon name="arrow" size={17} />
              </Link>
            </div>

            {filteredCourses.length > 0 ? (
              <div className={styles.courseGrid}>
                {filteredCourses.map((course) => (
                  <CourseCard course={course} key={course.title} />
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <span className={styles.courseIcon}>
                  <Icon name="search" />
                </span>
                <p>Chưa tìm thấy môn học phù hợp với “{query}”. Thử chủ đề khác nhé.</p>
                <button type="button" onClick={() => setQuery('')}>
                  Xóa tìm kiếm
                </button>
              </div>
            )}
          </div>
        </section>

        <section className={styles.learningSection}>
          <div className="container">
            <div className={styles.sectionHeadingCentered}>
              <span className={styles.sectionEyebrow}>HỌC TẬP CÓ HỆ THỐNG</span>
              <Heading as="h2">Tập trung vào điều bạn cần hiểu</Heading>
              <p>
                Nội dung được chia nhỏ để bạn dễ đọc, dễ tra cứu và quay lại ôn
                tập bất cứ lúc nào.
              </p>
            </div>

            <div className={styles.benefitGrid}>
              <article className={styles.benefitCard}>
                <span className={`${styles.benefitIcon} ${styles.benefitViolet}`}>
                  <Icon name="book" />
                </span>
                <Heading as="h3">Ghi chú theo chương</Heading>
                <p>
                  Mục lục và tiêu đề rõ ràng giúp bạn tìm nhanh phần kiến thức
                  đang cần.
                </p>
              </article>
              <article className={styles.benefitCard}>
                <span className={`${styles.benefitIcon} ${styles.benefitBlue}`}>
                  <Icon name="route" />
                </span>
                <Heading as="h3">Theo dõi mạch học</Heading>
                <p>
                  Đi từ khái niệm nền tảng đến các chủ đề chuyên sâu theo trình
                  tự của từng môn.
                </p>
              </article>
              <article className={styles.benefitCard}>
                <span className={`${styles.benefitIcon} ${styles.benefitOrange}`}>
                  <Icon name="logic" />
                </span>
                <Heading as="h3">Công thức dễ đọc</Heading>
                <p>
                  Công thức toán và hình minh họa được trình bày ngay cạnh phần
                  giải thích liên quan.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaCard}>
              <div className={styles.ctaPattern} />
              <div className={styles.ctaCopy}>
                <span className={styles.ctaEyebrow}>SẴN SÀNG BẮT ĐẦU?</span>
                <Heading as="h2">Chọn môn học và bắt đầu ôn tập hôm nay.</Heading>
                <p>Mở mục lục để xem các chương và nội dung chi tiết.</p>
                <div className={styles.ctaButtons}>
                  <Link className={styles.ctaPrimary} to="/docs/category/toan-roi-rac">
                    <Icon name="book" size={17} /> Khám phá môn học
                  </Link>
                  <Link className={styles.ctaSecondary} to="/docs/category/an-toan-thong-tin">
                    An toàn thông tin <Icon name="arrow" size={16} />
                  </Link>
                </div>
              </div>
              <div className={styles.ctaBadge} aria-hidden="true">
                <Icon name="book" size={34} />
                <span>Học theo<br />từng bước</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
