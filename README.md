# Otiende Appliance Repair & Cooling Systems

Static website for Otiende Appliance Repair & Cooling Systems.

## Project setup

This project now uses a production-friendly Tailwind workflow.

### Requirements

- Node.js and npm installed locally
- Git installed locally for repository management

### Install dependencies

```bash
npm install
```

### Build the site CSS

```bash
npm run build
```

This generates `dist/styles.css`, which is referenced by `index.html`.

### Local preview

Open `index.html` in a browser after building. For live reload during development, run:

```bash
npm run watch
```

## GitHub repository setup

Create a GitHub repository and push this project:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/Kolendi/otiende-repair.git
git push -u origin main
```

## GitHub Actions deployment

This project includes an automated GitHub Actions workflow at `.github/workflows/pages.yml`.
Every push to `main` will:

- install dependencies
- build the Tailwind CSS bundle
- copy `index.html`, `dist/styles.css`, and `images/` into a `public/` folder
- deploy that folder to GitHub Pages

Once the workflow runs successfully, your site should be available at:

- `https://Kolendi.github.io/otiende-repair/`

## Manual GitHub Pages settings

If you prefer to use GitHub Pages settings directly, configure the repository as follows:

1. In GitHub, go to repository `Settings` → `Pages`.
2. Under **Source**, choose `gh-pages` branch if you are using the deployment action, or `main` branch with `/ (root)` if you want root deployment.
3. Save.

> The GitHub Actions workflow in this repo uses GitHub Pages artifact deployment, so no manual `dist/styles.css` commit is required.

## Custom domain setup

If you have a custom domain, create a `CNAME` file in the repository root with your domain name, for example:

```text
www.example.com
```

Then configure your DNS:

- `A` records to GitHub Pages IP addresses: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- Or a `CNAME` record for `www` pointing to `Kolendi.github.io`

Finally, verify the custom domain from the GitHub Pages settings.

## Custom domain setup

If you have a custom domain, create a `CNAME` file in the repository root with your domain name, for example:

```text
www.example.com
```

Then configure your DNS:

- `A` records to GitHub Pages IP addresses: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME` record for `www` pointing to `<your-username>.github.io`

Finally, verify the custom domain from the GitHub Pages settings.

## Notes

- The current environment used to prepare this site does not have Git or Node installed, so the actual `git init` and `npm install` steps must be run locally.
- After `npm run build`, the site is ready for deployment as a static HTML project.
