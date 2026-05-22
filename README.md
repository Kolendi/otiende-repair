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
git remote add origin https://github.com/<your-username>/otiende-repair.git
git push -u origin main
```

Replace `<your-username>` with your GitHub username.

## Deploy to GitHub Pages

1. In GitHub, go to repository settings.
2. Under **Pages**, choose the `main` branch and `/ (root)` folder.
3. Save.
4. If you are not using a build step on GitHub, commit the generated `dist/styles.css` file to the repo.

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
