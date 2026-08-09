# MyTije Landing Full v2

Versi ini mempertahankan karakter desain cerah MyTije versi 1 dan menambahkan:
- Logo MyTije baru lebih besar di header/footer
- Icon PWA bersih
- Insight
- Catatan
- Instagram, Facebook, Email dengan icon
- Tidak ada tombol/menu admin di landing page
- Koneksi ke Apps Script memakai JSONP agar stabil dari GitHub Pages

## Hubungkan ke Apps Script
Buka:
`assets/js/config.js`

Isi URL Apps Script yang sama dengan admin:

```js
window.MYTIJE_CONFIG = {
  API_URL: "https://script.google.com/macros/s/XXXXX/exec",
  SITE_URL: "https://mytije.com",
  INSTAGRAM_URL: "https://instagram.com/tritjahyono_dharmatara",
  FACEBOOK_URL: "URL_FACEBOOK_ANDA",
  EMAIL: "EMAIL_ANDA"
};
```

## Aset versi 1
Agar foto/cover asli tetap tampil, salin file berikut dari repo MyTije versi 1 ke:
`assets/img/`

- tije-ruang-kerja.png
- tije-seminar.png
- being-logo.png
- book-anak-bersinar.png
- book-abs-remaja.jpg
- book-hadir-sepenuh-jiwa.png
- book-penyuluh-hebat.png
- book-kekuatan-dalam-diam.png

Jika belum disalin, halaman tetap berjalan dan menampilkan placeholder.

## GitHub
Anda dapat memakai repo MyTije yang sekarang:
1. Backup repo.
2. Upload seluruh isi paket ini.
3. Salin kembali foto dan cover versi 1 ke `assets/img/`.
4. Ubah `CNAME.example` menjadi `CNAME` jika repo ini yang langsung melayani `mytije.com`.
5. Isi `config.js`.
6. Commit.
7. Hard refresh / tunggu service worker memperbarui cache.

## Admin
Admin tetap repo terpisah. Landing page ini tidak mempunyai link admin.
