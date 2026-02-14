# ✝️ Mùa Chay - Báo cáo Nghiên cứu Thần học

Ứng dụng web hiện đại tra cứu Thần học, Phụng vụ và Lịch sử Mùa Chay trong Giáo hội Công giáo. Dự án được thiết kế với phong cách học thuật (Academic), trang trọng và tôn nghiêm, phục vụ cho việc nghiên cứu và học hỏi.

![Giáo hội Công giáo](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Emblem_of_the_Papacy_SE.svg/1200px-Emblem_of_the_Papacy_SE.svg.png)

## 🌟 Tính Năng Nổi Bật

### 1. Giao diện Học thuật (Academic UI)
- **Typography**: Sử dụng font chữ tin cậy (`Merriweather` cho tiêu đề, `Inter` cho nội dung) tối ưu cho việc đọc văn bản dài.
- **Canh lề**: Văn bản được canh đều (justify) chuẩn in ấn sách báo.
- **Trích dẫn**: Hệ thống chú thích (footnote) dạng superscript `[1]` có thể click để tra cứu nhanh.

### 2. Mục Lục Thông Minh (Dynamic TOC)
- **Desktop**: Sidebar mục lục cố định bên trái, tự động đánh dấu mục đang đọc.
- **Mobile**: Nút "Mục Lục" nổi (Floating Action Button) và ngăn kéo (Drawer) trượt lên từ dưới, giúp dễ dàng điều hướng trên điện thoại mà không chiếm diện tích màn hình.

### 3. Hệ thống Tài liệu Tham khảo APA
- Tự động định dạng tài liệu tham khảo theo chuẩn APA 7th Edition.
- Đánh số thứ tự `[1]`, `[2]` đồng bộ với chú thích trong bài viết.
- Link gốc (URL) dẫn trực tiếp đến nguồn tài liệu.

### 4. Màu sắc Phụng vụ
- Sử dụng tông màu **Tím Phụng vụ** (`#330072`) và **Vàng Kim** (`#d4af37`) làm chủ đạo, thể hiện tinh thần Mùa Chay và sự trang trọng của Giáo hội.

---

## 🛠️ Công Nghệ Sử Dụng

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Ngôn ngữ**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Font**: [Google Fonts](https://fonts.google.com/) (Merriweather, Inter, Noto Serif)
- **Icons**: SVG Icons

---

## 🚀 Cài Đặt và Chạy Dự Án

### 1. Yêu cầu hệ thống
- Node.js 18.17 trở lên.

### 2. Cài đặt dependency
```bash
npm install
```

### 3. Chạy môi trường phát triển (Development)
```bash
npm run dev
```
Truy cập `http://localhost:3000` để xem kết quả.

### 4. Xây dựng bản Production
```bash
npm run build
npm start
```

---

## 📦 Cấu Trúc Thư Mục

```
.
├── app/
│   ├── components/         # Các thành phần giao diện (Header, TOC, Section...)
│   ├── layout.tsx          # Layout chính (Font, Metadata)
│   ├── page.tsx            # Trang chủ nội dung
│   └── globals.css         # CSS toàn cục & Tailwind config
├── lib/
│   ├── reportData.ts       # Dữ liệu bài viết (Văn bản, Trích dẫn)
│   └── sections/           # Các phần nội dung chi tiết (I-IX)
└── public/                 # Tài nguyên tĩnh (Hình ảnh, Font...)
```

---

## ☁️ Hướng Dẫn Deploy (Triển khai)

### Cách 1: Deploy lên Vercel (Khuyên dùng)
Vercel là nền tảng tối ưu nhất cho Next.js.
1. Đẩy code lên GitHub.
2. Truy cập [Vercel Dashboard](https://vercel.com).
3. "Add New..." -> "Project".
4. Chọn repository GitHub vừa đẩy lên và bấm "Deploy".

### Cách 2: Deploy lên GitHub Pages
Dự án đã được cấu hình sẵn để deploy dạng tĩnh (Static Export nếu cần).
1. Thêm cấu hình `output: 'export'` vào `next.config.ts` (nếu chưa có).
2. Chạy `npm run build`.
3. Upload thư mục `out` lên host hoặc cấu hình GitHub Actions.

---

## 📜 Bản Quyền & Nguồn Dữ Liệu

- Nội dung nghiên cứu được tổng hợp từ các nguồn tài liệu Công giáo chính thống.
- Mã nguồn thuộc về dự án nghiên cứu cá nhân.

*Ad Majorem Dei Gloriam (A.M.D.G) - Để tôn vinh Thiên Chúa hơn.*
