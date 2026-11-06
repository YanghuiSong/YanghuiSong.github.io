(() => {
  'use strict';
  const data = window.SITE_DATA;
  if (!data) return;
  const root = document.documentElement;
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));
  let language = root.dataset.lang === 'zh' ? 'zh' : 'en';

  const translated = (value) => typeof value === 'string' ? value : (value?.[language] ?? value?.en ?? '');
  const escapeHTML = (value) => String(value ?? '')
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#39;');
  const lookup = (path) => path.split('.').reduce((obj, key) => obj?.[key], data);

  function renderStaticText() {
    $$('[data-i18n]').forEach((node) => { node.textContent = translated(lookup(node.dataset.i18n)); });
    $$('[data-profile]').forEach((link) => {
      const key = link.dataset.profile;
      link.href = key === 'email' ? `mailto:${data.profile.email}` : data.profile[key];
    });
  }

  function renderPublications() {
    const container = $('#publication-list');
    container.innerHTML = data.publications.items.map((paper) => {
      const authors = paper.authors.map((author) => author.self
        ? `<strong>${escapeHTML(author.name)}</strong>`
        : escapeHTML(author.name)).join(', ');
      const links = paper.links.map((link) =>
        `<a href="${escapeHTML(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(link.label)} <span aria-hidden="true">↗</span></a>`
      ).join('');
      return `<article class="paper">
        <a class="paper-image-link" href="${escapeHTML(paper.imageFull || paper.image)}" target="_blank" rel="noopener noreferrer" aria-label="View figure: ${escapeHTML(paper.title)}">
          <img src="${escapeHTML(paper.image)}" alt="Method diagram for ${escapeHTML(paper.title)}" loading="lazy">
        </a>
        <div class="paper-copy">
          <p class="paper-venue">${escapeHTML(paper.venueShort)} · ${escapeHTML(paper.year)}</p>
          <h3>${escapeHTML(paper.title)}</h3>
          <p class="paper-authors">${authors}</p>
          <p class="paper-summary">${escapeHTML(translated(paper.summary))}</p>
          <div class="paper-links">${links}</div>
        </div>
      </article>`;
    }).join('');
  }

  function newsHTML(value) {
    // Escape all content before interpreting **emphasis** in editorial text.
    return escapeHTML(translated(value)).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }

  function renderNews() {
    const container = $('#news-list');
    if (!container) return;
    container.innerHTML = data.news.items.map((item) => `
      <div class="news-item">
        <time class="news-date">${escapeHTML(translated(item.date))}</time>
        <div class="news-content">
          <p>${newsHTML(item.text)}</p>
          <a class="news-paper-link" href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(translated(data.ui.paper))} <span aria-hidden="true">↗</span></a>
        </div>
      </div>`).join('');
  }

  function renderHonors() {
    $('#honor-list').innerHTML = data.honors.items.map((item) =>
      `<a class="honor-item" href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer">
        <span class="honor-date">${escapeHTML(translated(item.date))}</span>
        <span class="honor-title">${escapeHTML(translated(item.text))}</span>
        <span class="honor-arrow" aria-hidden="true">↗</span>
      </a>`
    ).join('');
  }

  function render() {
    renderStaticText();
    renderNews();
    renderPublications();
    renderHonors();
    $('.language-code').textContent = language === 'en' ? '中' : 'EN';
    $('.language-toggle').setAttribute('aria-label', translated(data.ui.languageSwitch));
    document.title = translated(data.seo.title);
    $('meta[name="description"]').setAttribute('content', translated(data.seo.description));
    $('meta[property="og:title"]').setAttribute('content', translated(data.seo.title));
    $('meta[property="og:description"]').setAttribute('content', translated(data.seo.description));
  }

  $('.language-toggle')?.addEventListener('click', () => {
    language = language === 'en' ? 'zh' : 'en';
    root.dataset.lang = language;
    root.lang = language === 'zh' ? 'zh-CN' : 'en';
    try { localStorage.setItem('site-language', language); } catch (_) {}
    render();
  });
  $('#year').textContent = new Date().getFullYear();
  render();
})();
