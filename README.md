# TIJE Digital Hub

Paket landing page statis untuk `tije.my.id`.

## Isi
- `index.html` — halaman utama
- `styles.css` — desain responsif
- `app.js` — navigasi, modal akses, animasi, dan PWA
- `config.js` — tautan publik, WhatsApp, dan dashboard pemilik
- `manifest.webmanifest` + `service-worker.js` — dukungan PWA
- `assets/tri-tjahyono.webp` — foto hero

## Cara memasang di GitHub Pages
1. Buat repository baru, misalnya `tije-my-id`.
2. Unggah semua isi folder ini ke root repository.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/root`, lalu simpan.
6. Tambahkan file `CNAME` berisi `tije.my.id`.
7. Di pengelola domain, arahkan DNS sesuai petunjuk GitHub Pages.

## Mengubah tautan
Edit `config.js`.

```js
publicApps: {
  bukutije: "https://s.id/bukutije",
  guekuat: "https://s.id/guekuat",
  abs: "https://s.id/absremajahub"
}
```

Nomor WhatsApp tidak ditampilkan di layar, hanya digunakan pada tombol.

## Catatan keamanan
Landing page ini sengaja tidak menyimpan URL aplikasi privat atau PIN dalam kode publik.
Tombol **Masuk Pemilik** baru akan aktif setelah `ownerDashboardUrl` diisi dengan halaman autentikasi aman, misalnya Supabase Auth.
Jangan menyimpan password/PIN di `index.html`, `config.js`, atau JavaScript publik.
