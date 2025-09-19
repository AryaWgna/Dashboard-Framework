Oke, sekarang kita bikin versi **Design Document Dashboard Laundry** tapi pakai **Next.js** 🚀.
Formatnya tetap **Markdown file** supaya konsisten.

---

# 📄 Laundry Dashboard Design Document (Next.js Version)

## 1. Overview

Laundry Dashboard adalah aplikasi web berbasis **Next.js** untuk mengelola usaha laundry. Aplikasi ini memanfaatkan fitur **Server-Side Rendering (SSR)** dan **App Router** agar lebih cepat, terstruktur, serta mudah di-deploy.

Tujuan: membantu pemilik usaha laundry mengontrol operasional harian (pesanan, status cucian, laporan).

---

## 2. Target User

* Pemilik laundry
* Karyawan laundry (kasir/admin)

---

## 3. Core Features

1. **Header**

   * Logo Laundry
   * Nama aplikasi
   * User profile menu

2. **Sidebar Navigation**

   * Dashboard (Ringkasan)
   * Pesanan
   * Status Cucian
   * Laporan
   * Pengaturan

3. **Main Content**

   * **Dashboard**: ringkasan jumlah pesanan, cucian selesai, pendapatan
   * **Pesanan**: tabel daftar order
   * **Status Cucian**: progress cucian (proses, selesai, diambil)
   * **Laporan**: grafik harian/mingguan
   * **Pengaturan**: konfigurasi laundry

4. **Footer**

   * Hak cipta & kontak

---

## 4. Design Principles

* **Modular**: gunakan komponen reusable (Header, Sidebar, Footer, Card, Table)
* **Responsive**: support desktop & mobile
* **Scalable**: folder struktur mengikuti best practice Next.js (App Router)

---

## 5. Folder Structure (Draft)

Menggunakan **App Router (Next.js 13+)**

```plaintext
src/
 ┣ app/                  # Next.js App Router
 ┃ ┣ layout.js           # layout global (header, sidebar, footer)
 ┃ ┣ page.js             # halaman dashboard utama
 ┃ ┣ orders/             # /orders
 ┃ ┃ ┗ page.js
 ┃ ┣ status/             # /status
 ┃ ┃ ┗ page.js
 ┃ ┣ reports/            # /reports
 ┃ ┃ ┗ page.js
 ┃ ┣ settings/           # /settings
 ┃ ┃ ┗ page.js
 ┣ components/           # Header, Sidebar, Footer, Card, Table
 ┣ styles/               # global.css, tailwind setup
 ┣ assets/               # gambar/logo
```

---

## 6. Tech Stack

* **Next.js (App Router)** → core framework
* **Tailwind CSS** → styling cepat
* **React Hooks** (`useState`, `useEffect`) → state management dasar
* **Next Image & Next Link** → optimisasi gambar & routing
* **Recharts** (opsional) → grafik laporan

---

## 7. Roadmap

### **MVP**

* Layout dasar (header, sidebar, footer, content)
* Halaman Dashboard + Orders dengan data dummy

### **Next Step**

* Status cucian (progress bar)
* Laporan (grafik)
* Autentikasi user (login/logout)
* Integrasi API/Database

---

📌 Catatan: Next.js akan memudahkan pengembangan ke arah **fullstack**, karena bisa pakai **API Routes** langsung tanpa backend tambahan.

---

Mau aku bikinkan juga **Implementation Guide untuk Next.js** (step-by-step bikin dashboard laundry pakai Next.js, dari setup sampai layout dasar)?
