# HarryHub

HarryHub là website học tập cá nhân do Harry xây dựng để hệ thống hóa kiến thức, ghi lại quá trình học và chia sẻ tài liệu công nghệ. Nội dung được tổ chức theo môn học, chương và bài; mỗi bài có thể dùng Markdown/MDX hoặc tài liệu PDF.

## Nội dung hiện có

- Toán rời rạc
- An toàn thông tin
- Lập trình C++
- Kiểm chứng phần mềm
- Lập trình hướng đối tượng
- Khai thác dữ liệu
- Xử lý ảnh và thị giác máy tính
- Lý thuyết đồ thị
- Nhập môn IT & Lập trình Python

Các thư mục trong `docs/` là nguồn tài liệu và cấu trúc điều hướng của Docusaurus. Một số chương dùng PDF để giữ nguyên bố cục, công thức và hình minh họa của tài liệu gốc.

## Công nghệ

- Docusaurus 3.10.2, React 19 và TypeScript
- Markdown/MDX cho bài học
- `remark-math` và KaTeX để hiển thị công thức toán
- `react-pdf` và PDF.js cho trình xem PDF tích hợp

Yêu cầu Node.js từ phiên bản 20.16 trở lên và npm.

## Chạy dự án trên máy

Cài các gói phụ thuộc:

```bash
npm ci
```

Khởi chạy máy chủ phát triển:

```bash
npm run start
```

Docusaurus sẽ hiển thị địa chỉ local trong terminal và tự cập nhật khi nội dung hoặc mã nguồn thay đổi.

## Các lệnh thường dùng

| Lệnh | Công dụng |
| --- | --- |
| `npm run start` | Chạy website ở chế độ phát triển |
| `npm run typecheck` | Kiểm tra kiểu TypeScript |
| `npm run build` | Tạo website tĩnh trong thư mục `build/` |
| `npm run serve` | Phục vụ bản dựng để xem thử |
| `npm run clear` | Xóa cache Docusaurus trong `.docusaurus/` |

## Cấu trúc thư mục

```text
docs/                       Bài Markdown/MDX, chia theo môn học và chương
static/pdfs/<mon-hoc>/       Tài liệu PDF gốc
static/pdfjs/                PDF.js worker và dữ liệu hỗ trợ PDF
src/components/PDFViewer/    Trình xem PDF và thẻ thông tin tài liệu
src/data/siteConfig.ts       Danh sách môn học và thông tin tác giả
src/pages/                   Trang chủ và trang Giới thiệu
src/css/custom.css           Kiểu dáng chung và giao diện bài học
docusaurus.config.ts         Cấu hình website, menu và footer
sidebars.ts                  Cấu hình sidebar tài liệu
```

## Đường dẫn truy cập trang web

Dự án được deploy với Vercel.

https://learn-with-harry.vercel.app/