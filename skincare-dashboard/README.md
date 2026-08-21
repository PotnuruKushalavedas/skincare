# Skincare Product Analytics Dashboard

An interactive 3-page Power BI–style dashboard (Market Overview, Customer
Preference, Product Performance) built with React + Recharts, covering
300 skincare products.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Deploy to GitHub Pages

1. Create a new GitHub repo, e.g. `skincare-dashboard`, and push this folder to it:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: skincare analytics dashboard"
   git branch -M main
   git remote add origin https://github.com/<your-username>/skincare-dashboard.git
   git push -u origin main
   ```

2. In `vite.config.js`, set `base` to match your repo name exactly:

   ```js
   base: "/skincare-dashboard/",
   ```

   (Already set — just rename it if you name your repo something else.)

3. Install dependencies and deploy:

   ```bash
   npm install
   npm run build
   npx gh-pages -d dist
   ```

4. In your GitHub repo: **Settings → Pages → Source → set branch to `gh-pages`**.
   After a minute or two, your dashboard will be live at:

   ```
   https://<your-username>.github.io/skincare-dashboard/
   ```

## Alternative: Deploy to Vercel or Netlify (no gh-pages step needed)

Both platforms auto-detect Vite projects — just connect your GitHub repo:
- **Vercel**: Import the repo at vercel.com/new — build command `npm run build`, output dir `dist`.
- **Netlify**: Import the repo at app.netlify.com — build command `npm run build`, publish dir `dist`.

With either, you don't need to set a `base` path — you can leave it as `"/"` in `vite.config.js`.

## Project structure

```
skincare-dashboard/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx      # React entry point
│   └── App.jsx        # The dashboard (all 300 products embedded as data)
└── README.md
```
