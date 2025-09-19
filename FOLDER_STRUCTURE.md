# Dokumentasi Struktur Folder

Dokumen ini menjelaskan struktur folder utama untuk proyek `next-laundry` dan `react-laundry`.

## `next-laundry` (Next.js dengan App Router)

Proyek ini menggunakan App Router dari Next.js, yang berarti struktur folder di dalam `src/app` mendefinisikan rute-rute aplikasi.

```
next-laundry/
├── public/               # Aset statis (gambar, font)
├── src/
│   ├── app/
│   │   ├── (app)/        # Grup rute untuk pengguna terotentikasi
│   │   │   ├── dashboard/
│   │   │   ├── orders/
│   │   │   └── ... (halaman lainnya)
│   │   │   └── layout.tsx  # Layout bersama untuk grup (app)
│   │   ├── auth/         # Grup rute untuk otentikasi
│   │   │   └── login/
│   │   ├── components/     # Komponen React yang dapat digunakan kembali
│   │   ├── contexts/       # Manajemen state global (React Context)
│   │   ├── layout.tsx      # Layout root untuk seluruh aplikasi
│   │   └── page.tsx        # Halaman utama (Homepage)
└── next.config.ts        # Konfigurasi Next.js
```

### Direktori & File Kunci

*   `src/app/`: Inti dari aplikasi. Struktur direktori ini memetakan langsung ke path URL.
    *   `(app)/` & `auth/`: Ini adalah **grup rute (route groups)**. Tanda kurung `()` mencegah nama grup menjadi bagian dari URL. Ini berguna untuk mengorganisir rute (misalnya, yang terotentikasi vs. yang tidak) dan menerapkan layout spesifik pada mereka.
    *   `layout.tsx`: Mendefinisikan kerangka UI yang dibagikan di beberapa halaman.
    *   `page.tsx`: UI untuk rute tertentu.
*   `src/components/`: Berisi komponen yang dapat digunakan kembali seperti tombol, modal, dan header yang digunakan di berbagai halaman.
*   `src/contexts/`: Untuk manajemen state global. Sebagai contoh, `AuthContext.tsx` akan mengelola status otentikasi pengguna.
*   `public/`: Untuk file statis seperti gambar, font, atau SVG. File-file ini disajikan langsung dari URL root.

---

## `react-laundry` (React dengan Vite)

Proyek ini menggunakan struktur folder React yang lebih tradisional, dengan routing ditangani oleh pustaka seperti React Router.

```
react-laundry/
├── public/               # Aset statis
├── src/
│   ├── assets/           # Aset yang diimpor ke dalam komponen (gambar, dll.)
│   ├── components/       # Komponen React yang dapat digunakan kembali
│   ├── context/          # Manajemen state global (React Context)
│   ├── pages/            # Komponen halaman (mis., Dashboard, Login)
│   ├── App.jsx           # Komponen root dengan pengaturan rute
│   └── main.jsx          # Titik masuk (entry point) aplikasi
└── vite.config.js        # Konfigurasi Vite
```

### Direktori & File Kunci

*   `src/pages/`: Berisi komponen utama untuk setiap halaman atau rute aplikasi (misalnya, `Dashboard.jsx`, `LoginPage.jsx`).
*   `src/components/`: Rumah bagi komponen yang lebih kecil dan dapat digunakan kembali yang digunakan untuk membangun halaman (misalnya, `Sidebar.jsx`, `Header.jsx`).
*   `src/context/`: Untuk state global yang perlu diakses oleh beberapa komponen, seperti status otentikasi pengguna.
*   `src/App.jsx`: Komponen aplikasi utama. Biasanya berisi pengaturan router yang menentukan komponen halaman mana yang akan dirender untuk URL tertentu.
*   `src/main.jsx`: Titik masuk (entry point) untuk aplikasi. Di sinilah komponen `App` dirender ke dalam DOM.
*   `public/`: Berisi file statis yang disalin ke direktori build tanpa diproses oleh Vite.
