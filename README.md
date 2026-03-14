# Personal Portfolio — GitHub Pages

A clean, editorial-style portfolio built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages. Supports engineering projects, blog posts, a resume, and a contact form — all from plain Markdown files.

---

## Table of Contents

1. [Folder Structure](#folder-structure)
2. [Quick Start (GitHub Pages — no local install needed)](#quick-start)
3. [Local Development](#local-development)
4. [Customizing Your Site](#customizing-your-site)
5. [Adding Projects](#adding-projects)
6. [Writing Blog Posts](#writing-blog-posts)
7. [Resume & Transcript](#resume--transcript)
8. [Contact Form Setup](#contact-form-setup)
9. [Search](#search)
10. [Deploying to GitHub Pages](#deploying-to-github-pages)

---

## Folder Structure

```
portfolio/
├── _config.yml          ← Site-wide settings (name, URLs, social links)
├── Gemfile              ← Ruby dependency file (don't edit)
│
├── _layouts/
│   ├── default.html     ← Master HTML shell (nav + footer)
│   ├── page.html        ← Generic page layout
│   ├── post.html        ← Blog post layout
│   └── project.html     ← Project detail layout
│
├── _includes/
│   ├── nav.html         ← Navigation bar + search overlay
│   └── footer.html      ← Site footer
│
├── _posts/              ← Blog posts (Markdown)
│   └── YYYY-MM-DD-title.md
│
├── _projects/           ← Project pages (Markdown)
│   └── project-name.md
│
├── assets/
│   ├── css/main.css     ← All styles
│   ├── js/
│   │   ├── main.js      ← Nav, filters, animations
│   │   └── search.js    ← Search overlay logic
│   ├── images/          ← Your photos and project images
│   │   └── projects/    ← Project-specific images
│   └── resume.pdf       ← Upload your actual resume here
│
├── index.html           ← Home page
├── about.html           ← About page
├── projects.html        ← Projects index
├── blog.html            ← Blog index
├── resume.html          ← Resume/CV page
├── contact.html         ← Contact form
├── 404.html             ← Not-found page
└── search.json          ← Search index (auto-built by Jekyll)
```

---

## Quick Start

### Deploy directly on GitHub (no local setup required)

1. **Create a new repository** named exactly `<yourusername>.github.io` on GitHub.
   - Go to github.com → New repository
   - Name: `yourusername.github.io` (replace with your actual GitHub username)
   - Set to **Public**

2. **Upload all files** from this folder to the repository root.
   - Drag-and-drop via the GitHub web interface, or use `git push`

3. **Enable GitHub Pages**
   - Repository → Settings → Pages
   - Source: `Deploy from a branch`
   - Branch: `main` / `(root)`
   - Click Save

4. Your site will be live at `https://yourusername.github.io` within 1–2 minutes.

5. **Edit `_config.yml`** to set your name, email, GitHub/LinkedIn handles, and university.

---

## Local Development

Running locally lets you preview changes before pushing.

### Prerequisites

- Ruby 3.1+ (`ruby -v` to check)
- Bundler (`gem install bundler`)

### Setup

```bash
# Clone your repo
git clone https://github.com/yourusername/yourusername.github.io
cd yourusername.github.io

# Install dependencies
bundle install

# Serve locally (auto-reloads on file changes)
bundle exec jekyll serve

# Open http://localhost:4000
```

---

## Customizing Your Site

### 1. `_config.yml` — the most important file

Open `_config.yml` and fill in every field marked with `(*)`:

```yaml
title: "Jane Smith"
tagline: "Mechanical Engineering Student & Photographer"
description: "Portfolio of engineering projects and creative work."
url: "https://janesmith.github.io"

author:
  name: "Jane Smith"
  email: "jane@email.com"
  github: "janesmith"
  linkedin: "janesmith"

education:
  university: "MIT"
  degree: "B.S. Mechanical Engineering"
  year: "Class of 2026"
```

After saving, push to GitHub — changes go live within ~30 seconds.

### 2. Colors and fonts

Open `assets/css/main.css`. The `:root` block at the top controls the entire design system:

```css
:root {
  --bg:      #f7f4ef;    /* page background */
  --ink:     #1a1814;    /* primary text */
  --accent:  #c05a3a;    /* terracotta accent — change this to any color */
  ...
}
```

Change `--accent` to your preferred color (e.g. `#2563eb` for blue, `#16a34a` for green).

### 3. Home page text

Edit `index.html` — look for the hero section and the "About snippet" section:

```html
<h1 class="hero-title">
  Engineer.<br>
  <em>Creator.</em><br>  ← Change these words
  Thinker.
</h1>
```

### 4. Profile photo

1. Add your photo to `assets/images/profile.jpg`
2. In `about.html`, find the photo placeholder and replace it:

```html
<!-- Replace the placeholder div with: -->
<img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="Photo of Your Name" />
```

3. Do the same in `index.html` for the home page snippet.

---

## Adding Projects

Create a new file in `_projects/` named `project-slug.md`.

### Minimal project

```markdown
---
title: "My Project Title"
description: "One sentence summary for cards and meta tags."
category: mechanical   # mechanical | design | research | software | creative
date: 2024-03-01
status: Completed      # Completed | Ongoing | Concept
featured: true         # show on home page

skills:
  - SolidWorks
  - MATLAB

tags: [design, fabrication]
---

## Overview

Write your project description here using normal Markdown.

Use `##` headings to organize sections (Overview, Design Process, Results, etc.)
```

### Full project with images

```markdown
---
title: "Pneumatic Gripper"
description: "Soft robotic gripper for prosthetics."
category: mechanical
date: 2024-05-01
featured: true
status: Completed

thumbnail: /assets/images/projects/gripper-thumb.jpg   # card image (16:9)
hero_image: /assets/images/projects/gripper-hero.jpg   # detail page banner

skills:
  - SolidWorks
  - Silicone Casting

stats:
  - value: "400g"
    label: Grip Force
  - value: "12 weeks"
    label: Duration

links:
  - label: "GitHub"
    url: "https://github.com/you/project"
  - label: "Report PDF"
    url: "/assets/projects/report.pdf"

gallery:
  - src: /assets/images/projects/gripper-1.jpg
    alt: "Mold setup"
    caption: "Two-part FDM mold"
  - src: /assets/images/projects/gripper-2.jpg
    alt: "Final gripper"
    caption: "Finished actuator"

tags: [robotics, fabrication]
---

## Overview
...
```

### Adding project images

1. Upload images to `assets/images/projects/`
2. Reference them in the front matter as `/assets/images/projects/filename.jpg`

**Recommended image sizes:**
- Thumbnail: 800 × 450 px (16:9)
- Hero: 1400 × 600 px
- Gallery: 800 × 600 px

### Filter categories

The projects page has filter buttons. The `category` field in your project controls which filter it responds to:

| `category` value | Filter button |
|-----------------|--------------|
| `mechanical`    | Mechanical   |
| `design`        | Design       |
| `research`      | Research     |
| `software`      | Software     |
| `creative`      | Creative     |

To add new categories, open `projects.html` and add a button:
```html
<button class="filter-btn" data-filter="your-category">Your Label</button>
```

---

## Writing Blog Posts

Create files in `_posts/` with this exact naming format: `YYYY-MM-DD-title-slug.md`

```markdown
---
layout: post
title: "Your Post Title"
subtitle: "Optional subtitle"       # optional
date: 2024-11-01
category: Essays                    # Essays | Poetry | Reflections | Photography | Music
read_time: 5                        # optional, minutes
tags: [writing, reflection]
cover_image: /assets/images/posts/cover.jpg   # optional
excerpt: "First sentence shown in previews."
---

Your post content here in Markdown.

## Headings work normally

So do **bold**, *italic*, `code`, and [links](https://example.com).

> Blockquotes are styled nicely.

![Alt text](/assets/images/posts/image.jpg)
*Caption goes here in italics below the image*
```

### Categories

The blog sidebar groups posts by category. Use consistent category names:
- `Essays` — long-form prose
- `Poetry` — poems and verse
- `Reflections` — personal notes and journaling
- `Photography` — photo essays
- `Music` — writing about or around music
- `Notes` — short, informal posts

---

## Resume & Transcript

### Updating the HTML resume

Edit `resume.html` directly. Each section has comments like `(* Edit this)` to guide you.

### Adding a PDF resume

1. Export your resume as `resume.pdf`
2. Upload to `assets/resume.pdf`
3. The download button in `resume.html` links there automatically

### Adding a transcript

1. Export as `transcript.pdf`
2. Upload to `assets/transcript.pdf`
3. The transcript button links there automatically

### Showing the PDF inline

In `resume.html`, find the commented-out section near the bottom and uncomment it:

```html
<section class="resume-section">
  <h2>Full PDF</h2>
  <div class="pdf-embed">
    <iframe src="{{ '/assets/resume.pdf' | relative_url }}" ...></iframe>
  </div>
</section>
```

---

## Contact Form Setup

The contact form uses [Formspree](https://formspree.io), a free service that emails you form submissions.

1. Go to [formspree.io](https://formspree.io) and sign up (free tier allows 50 submissions/month)
2. Create a new form — you'll get an ID like `xpzgdkqb`
3. Open `contact.html` and replace `YOUR_FORM_ID`:

```html
<form action="https://formspree.io/f/xpzgdkqb" ...>
```

That's it. Test by submitting the form — you'll receive an email.

### Alternative: Netlify Forms

If you ever move to Netlify hosting, you can use their built-in forms by replacing `action` with:
```html
<form name="contact" netlify ...>
```

---

## Search

Search is built-in and works automatically. It indexes all posts and projects.

- Click the 🔍 icon in the nav bar, or press `Ctrl+K` / `Cmd+K`
- Results update as you type
- Searches title, content, and tags

No configuration needed — Jekyll builds `search.json` automatically on every deploy.

---

## Deploying to GitHub Pages

### After any change:

```bash
git add .
git commit -m "Update about page"
git push
```

GitHub Actions will rebuild your site automatically. Changes are live in ~30–60 seconds.

### Custom domain (optional)

1. Buy a domain (e.g. `yourname.com`)
2. In your domain registrar's DNS, add a CNAME record: `www → yourusername.github.io`
3. In GitHub → Settings → Pages → Custom domain, enter your domain
4. Check "Enforce HTTPS"
5. Create a file called `CNAME` in the repo root containing just your domain:
   ```
   yourname.com
   ```

---

## Tips

- **Images not showing?** Check the path starts with `/assets/...` (absolute path)
- **Build failing?** Check the Actions tab in your GitHub repo for error messages
- **Front matter errors** (the `---` block) cause build failures — YAML is sensitive to indentation
- **New posts not appearing?** Make sure the date in the filename is not in the future
- **Drafts:** Put posts in `_drafts/` folder — they only appear when running `jekyll serve --drafts` locally

---

## License

Template code is yours to use and modify freely. Content (posts, project descriptions, photos) is your own work — all rights reserved.
