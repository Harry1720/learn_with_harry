export type Course = {
  title: string;
  label: string;
  description: string;
  chapterCount?: number;
  tags: string[];
  href: string;
  icon: 'logic' | 'shield' | 'code' | 'verify' | 'data' | 'image' | 'graph';
  hasChapterPdfs: boolean;
  searchTerms?: string[];
};

// Keep this list in sync with the subject directories under docs/.
export const courses: Course[] = [
  {
    title: 'Toán rời rạc',
    label: 'NỀN TẢNG TOÁN HỌC',
    description:
      'Logic, tập hợp, phép đếm, quan hệ và kiến thức nền tảng cho khoa học máy tính.',
    chapterCount: 5,
    tags: ['Logic', 'Tập hợp', 'Đếm', 'Quan hệ'],
    href: '/docs/category/toan-roi-rac',
    icon: 'logic',
    hasChapterPdfs: true,
  },
  {
    title: 'An toàn thông tin',
    label: 'MẬT MÃ & BẢO MẬT',
    description:
      'Các chủ đề về bảo mật, mạng, mật mã, chữ ký số, chứng chỉ số và hàm băm.',
    chapterCount: 11,
    tags: ['Mật mã', 'Mạng máy tính', 'Chữ ký số', 'Hàm băm'],
    href: '/docs/category/attt',
    icon: 'shield',
    hasChapterPdfs: true,
  },
  {
    title: 'C++',
    label: 'LẬP TRÌNH',
    description:
      'Tài liệu học C++ từ tổng quan ngôn ngữ đến các khái niệm lập trình cốt lõi.',
    chapterCount: 7,
    tags: ['C++', 'Lập trình', 'Cấu trúc dữ liệu'],
    href: '/docs/category/cpp',
    icon: 'code',
    hasChapterPdfs: true,
  },
  {
    title: 'Kiểm chứng phần mềm',
    label: 'KIỂM CHỨNG PHẦN MỀM',
    description: 'Tài liệu học tập về môn Kiểm chứng phần mềm.',
    tags: [],
    chapterCount: 7,
    searchTerms: ['KCPM'],
    href: '/docs/category/kcpm',
    icon: 'verify',
    hasChapterPdfs: true,
  },
  {
    title: 'Lập trình hướng đối tượng',
    label: 'LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG',
    description: 'Tài liệu học tập về môn Lập trình hướng đối tượng.',
    tags: [],
    chapterCount: 7,
    searchTerms: ['OOP'],
    href: '/docs/category/oop',
    icon: 'code',
    hasChapterPdfs: true,
  },
  {
    title: 'Khai thác dữ liệu',
    label: 'KHAI THÁC DỮ LIỆU',
    description: 'Tài liệu học tập về môn Khai thác dữ liệu.',
    tags: [],
    chapterCount: 7,
    searchTerms: ['KTDL'],
    href: '/docs/category/ktdl',
    icon: 'data',
    hasChapterPdfs: true,
  },
  {
    title: 'Xử lý ảnh và thị giác máy tính',
    label: 'XỬ LÝ ẢNH & THỊ GIÁC MÁY TÍNH',
    description: 'Tài liệu học tập về môn Xử lý ảnh và thị giác máy tính.',
    tags: [],
    chapterCount: 5,
    searchTerms: ['CVIP'],
    href: '/docs/category/cvip',
    icon: 'image',
    hasChapterPdfs: true,
  },
  {
    title: 'Lý thuyết đồ thị',
    label: 'LÝ THUYẾT ĐỒ THỊ',
    description: 'Tài liệu học tập về môn Lý thuyết đồ thị.',
    tags: [],
    chapterCount: 7,
    searchTerms: ['LTĐT', 'LTDT'],
    href: '/docs/category/ltdt',
    icon: 'graph',
    hasChapterPdfs: true,
  },
  {
    title: 'Nhập môn IT',
    label: 'NHẬP MÔN CÔNG NGHỆ THÔNG TIN',
    description: 'Nền tảng công nghệ thông tin và lập trình Python.',
    chapterCount: 9,
    tags: ['Công nghệ thông tin', 'Python', 'Lập trình'],
    searchTerms: ['nhapmonit', 'Nhập môn IT', 'IT'],
    href: '/docs/category/nhapmonit',
    icon: 'code',
    hasChapterPdfs: true,
  },
];

export const authorProfile = {
  name: 'Huỳnh Nguyễn Quốc Bảo (Harry)',
  avatarSrc: '/img/harry-avatar.png',
  bio: 'Xin chào, mình là Harry. Mình xây dựng HarryHub với mong muốn hệ thống hóa kiến thức, ghi lại quá trình học tập và chia sẻ những nội dung công nghệ theo cách dễ tiếp cận hơn.',
  // purpose: 'HarryHub là không gian học tập cá nhân, nơi mình tổng hợp, biên soạn và chia sẻ kiến thức về công nghệ, lập trình và các môn học liên quan.',
  portfolioUrl: 'https://harrybao.is-a.dev', // Dán URL portfolio vào đây.
  contacts: {
    email: {address: 'baohuynh4107@gmail.com'},
    github: {url: 'https://github.com/Harry1720', display: '@Harry1720'},
    linkedin: {
      url: 'https://www.linkedin.com/in/harrydevbaohuynh/',
      display: 'in/harrydevbaohuynh',
    },
  },
};
