/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2026-11-12
 *
 * Writes build/software/index.html after `react-scripts build`.
 *
 * The site is a client-rendered single-page app, so crawlers and link previews that do not
 * run JavaScript would otherwise see an empty page with the home page's metadata. This script
 * copies the built index.html and adds, for /software only:
 *   - a page-specific title, description, canonical URL, Open Graph and Twitter card tags
 *   - JSON-LD structured data
 *   - a plain HTML snapshot of the page content inside #root, which React replaces on load
 *
 * The content comes from src/content/software.json, the same file the React components use,
 * so the snapshot cannot drift from the page. nginx serves it through
 * `try_files $uri $uri/index.html /index.html`.
 */

const fs = require('fs');
const path = require('path');

const content = require('../src/content/software.json');

const buildDir = path.join(__dirname, '..', 'build');
const sourceFile = path.join(buildDir, 'index.html');
const targetDir = path.join(buildDir, 'software');
const targetFile = path.join(targetDir, 'index.html');

/**
 * Escape text for use in HTML content and attribute values.
 * @param {string} value - Text to escape.
 * @returns {string} Escaped text.
 */
const escapeHtml = value =>
  String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Build an HTML list.
 * @param {string[]} items - List items.
 * @returns {string} HTML.
 */
const list = items => `<ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;

/**
 * Build the head tags for the page.
 * @returns {string} HTML.
 */
const buildHead = () => {
  const { meta, person, skills } = content;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: meta.url,
    name: meta.title,
    description: meta.description,
    mainEntity: {
      '@type': 'Person',
      name: person.name,
      jobTitle: person.jobTitle,
      description: meta.description,
      url: meta.url,
      image: meta.image,
      address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA', addressCountry: 'US' },
      sameAs: [person.linkedin, person.github],
      knowsAbout: [...meta.keywords, ...skills[0].skills],
    },
  };

  return [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}"/>`,
    `<link rel="canonical" href="${escapeHtml(meta.url)}"/>`,
    `<meta property="og:type" content="profile"/>`,
    `<meta property="og:site_name" content="${escapeHtml(person.name)}"/>`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}"/>`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}"/>`,
    `<meta property="og:url" content="${escapeHtml(meta.url)}"/>`,
    `<meta property="og:image" content="${escapeHtml(meta.image)}"/>`,
    `<meta property="og:image:alt" content="${escapeHtml(meta.imageAlt)}"/>`,
    `<meta name="twitter:card" content="summary_large_image"/>`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}"/>`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}"/>`,
    `<meta name="twitter:image" content="${escapeHtml(meta.image)}"/>`,
    `<meta name="twitter:image:alt" content="${escapeHtml(meta.imageAlt)}"/>`,
    // Escape "<" so the JSON cannot close the script tag.
    `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>`,
  ].join('');
};

/**
 * Build the static snapshot of the page content.
 * @returns {string} HTML.
 */
const buildBody = () => {
  const { person, hero, about, skills, projects, experience, creative, contact, resume } = content;

  const projectHtml = projects
    .map(project => {
      const outcome = project.metric ? `${project.metric.value} ${project.metric.label}` : project.outcome;
      return [
        '<article>',
        `<h3>${escapeHtml(project.title)}</h3>`,
        `<p>${escapeHtml(project.context)}</p>`,
        `<p><strong>${escapeHtml(outcome)}</strong></p>`,
        `<p>${escapeHtml(project.summary)}</p>`,
        `<h4>Business challenge</h4><p>${escapeHtml(project.challenge)}</p>`,
        `<h4>My role</h4><p>${escapeHtml(project.role)}</p>`,
        `<h4>Solution</h4>${list(project.solution)}`,
        `<h4>Result</h4><p>${escapeHtml(project.result)}</p>`,
        `<h4>Key technologies</h4>${list(project.technologies)}`,
        '</article>',
      ].join('');
    })
    .join('');

  const experienceHtml = experience
    .map(
      item =>
        `<article><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.company)} · ${escapeHtml(item.date)}</p><p>${escapeHtml(item.description)}</p></article>`
    )
    .join('');

  const skillsHtml = skills.map(group => `<h3>${escapeHtml(group.title)}</h3>${list(group.skills)}`).join('');

  return [
    '<div style="max-width:960px;margin:0 auto;padding:24px;background:#0a0a0a;color:#e0e0e0;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif;line-height:1.6">',
    `<h1>${escapeHtml(person.name)}</h1>`,
    `<p>${escapeHtml(hero.headline.join(' | '))}</p>`,
    `<p>${escapeHtml(hero.intro)}</p>`,
    `<p><a href="${escapeHtml(resume.href)}" style="color:#00d4ff">${escapeHtml(resume.label)}</a></p>`,
    '<h2>About Me</h2>',
    about.paragraphs.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join(''),
    '<h2>Technical Expertise</h2>',
    skillsHtml,
    '<h2>Featured Projects</h2>',
    projectHtml,
    '<h2>Professional Journey</h2>',
    experienceHtml,
    `<h2>${escapeHtml(creative.title)}</h2>`,
    `<p>${escapeHtml(creative.intro)}</p>`,
    `<h3>${escapeHtml(creative.film.title)}</h3>`,
    `<p>${escapeHtml(creative.film.description)}</p>`,
    list(creative.film.laurels.map(laurel => laurel.lines.join(' '))),
    `<h2>${escapeHtml(contact.title)}</h2>`,
    `<p>${escapeHtml(contact.intro)}</p>`,
    '<ul>',
    `<li><a href="${escapeHtml(person.github)}" style="color:#00d4ff">GitHub</a></li>`,
    `<li><a href="${escapeHtml(person.linkedin)}" style="color:#00d4ff">LinkedIn</a></li>`,
    '<li><a href="/email" style="color:#00d4ff">Email</a></li>',
    '</ul>',
    '</div>',
  ].join('');
};

/**
 * Write the snapshot.
 */
const run = () => {
  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Cannot find ${sourceFile}. Run "react-scripts build" first.`);
  }

  let html = fs.readFileSync(sourceFile, 'utf8');

  // Remove the site-wide tags that this page overrides.
  html = html
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta\s+name="description"[^>]*>/i, '')
    .replace(/<link\s+rel="canonical"[^>]*>/gi, '')
    .replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, '')
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, '');

  // Add the page-specific head tags and the content snapshot.
  if (!html.includes('</head>') || !html.includes('<div id="root"></div>')) {
    throw new Error('build/index.html does not have the expected </head> and empty #root markers.');
  }
  html = html.replace('</head>', `${buildHead()}</head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${buildBody()}</div>`);

  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(targetFile, html);
  console.log(`Wrote ${path.relative(path.join(__dirname, '..'), targetFile)}`);
};

run();
