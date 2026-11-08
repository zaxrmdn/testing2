# CV Portfolio Workshop — CI/CD

Portfolio statis responsif untuk workshop GitHub Actions. Stack: HTML, CSS, JavaScript, HTMLHint, ESLint, Playwright, Trivy, dan GitHub Pages.

## Struktur
- `index.html`, `style.css`, `script.js`: source website.
- `scripts/build.js`: menyalin source ke folder `dist`.
- `tests/portfolio.spec.js`: browser tests.
- `.github/workflows/ci-cd.yml`: lint → test → security scan → build → deploy.

## Mulai
1. Extract seluruh isi ZIP.
2. Upload **isi folder** ke root repository GitHub (jangan membuat folder bertingkat `cv-portfolio-workshop/cv-portfolio-workshop`).
3. Pastikan branch utama bernama `main`.
4. Buka **Settings → Pages → Build and deployment → Source**, pilih **GitHub Actions**.
5. Commit dan push. Buka tab **Actions** untuk melihat setiap stage.

## Validasi lokal (opsional)
Gunakan Node.js 22:
```bash
npm install
npm run lint
npm run build
npx playwright install chromium
npx playwright test --list
npm test
```

## Sesuaikan konten sebelum dipublikasikan
Cari dan ganti:
- `Zakaria Ramadan`
- `hello@example.com`
- tautan LinkedIn dan GitHub (saat ini placeholder)
- deskripsi pengalaman, project, dan skill agar akurat.
Hapus atau ubah angka ringkasan pengalaman jika tidak ingin menampilkan estimasi.

## Catatan workshop
- `npm install` dipakai agar peserta dapat memulai tanpa `package-lock.json`. Untuk workflow produksi, commit `package-lock.json` lalu gunakan `npm ci`.
- Trivy dapat menggagalkan pipeline bila menemukan temuan HIGH/CRITICAL. Itu perilaku yang disengaja untuk demonstrasi security gate; evaluasi temuan sebelum mengubah kebijakan.
- Website memakai Google Fonts dari CDN; tampilan tetap memakai fallback jika font eksternal tidak tersedia.
