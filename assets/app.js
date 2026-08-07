(() => {
  'use strict';

  const data = window.SITE_DATA;
  if (!data) return;

  const root = document.documentElement;
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const getPath = (object, path) => path.split('.').reduce((value, key) => value?.[key], object);
  const initialLanguage = root.dataset.lang === 'zh' ? 'zh' : (data.settings?.defaultLanguage || 'en');
  let language = initialLanguage;

  const localized = (value) => {
    if (value == null) return '';
    if (typeof value === 'string' || typeof value === 'number') return String(value);
    return value[language] ?? value.en ?? value.zh ?? '';
  };

  const escapeHTML = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const arrowIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5"/></svg>';

  function setProfileLinks() {
    $$('[data-profile-link]').forEach((element) => {
      const key = element.dataset.profileLink;
      if (key === 'email') element.href = `mailto:${data.profile.email}`;
      else if (data.profile[key]) element.href = data.profile[key];
    });
    $$('[data-profile-email]').forEach((element) => { element.textContent = data.profile.email; });
  }

  function renderTextBindings() {
    $$('[data-text]').forEach((element) => {
      const value = getPath(data, element.dataset.text);
      if (value !== undefined) element.textContent = localized(value);
    });
  }

  function renderAbout() {
    const paragraphs = $('#about-paragraphs');
    const facts = $('#about-facts');
    if (paragraphs) {
      paragraphs.innerHTML = data.about.paragraphs
        .map((item) => `<p>${escapeHTML(localized(item))}</p>`)
        .join('');
    }
    if (facts) {
      facts.innerHTML = data.about.facts.map((item) => `
        <div>
          <dt>${escapeHTML(localized(item.label))}</dt>
          <dd>${escapeHTML(localized(item.value))}</dd>
        </div>
      `).join('');
    }
  }

  function renderEducation() {
    const container = $('#education-list');
    if (!container) return;
    container.innerHTML = data.education.items.map((item) => `
      <article class="timeline-item">
        <div class="timeline-period">${escapeHTML(localized(item.period))}</div>
        <div class="timeline-body">
          <h3>${escapeHTML(localized(item.degree))}</h3>
          <p class="timeline-school">${escapeHTML(localized(item.school))}</p>
          <p class="timeline-note">${escapeHTML(localized(item.note))}</p>
        </div>
      </article>
    `).join('');
  }

  function renderResearch() {
    const container = $('#research-list');
    if (!container) return;
    container.innerHTML = data.research.items.map((item) => `
      <article class="research-item">
        <span class="research-item-index">${escapeHTML(item.index)}</span>
        <h3>${escapeHTML(localized(item.title))}</h3>
        <p>${escapeHTML(localized(item.text))}</p>
        <div class="tag-row">${item.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join('')}</div>
      </article>
    `).join('');
  }

  function authorsHTML(authors) {
    return authors.map((author) => author.self
      ? `<strong>${escapeHTML(author.name)}</strong>`
      : escapeHTML(author.name)).join(', ');
  }

  function publicationLinksHTML(publication) {
    return publication.links.map((link) => `
      <a class="paper-link${link.primary ? ' primary' : ''}" href="${escapeHTML(link.url)}" target="_blank" rel="noreferrer">${escapeHTML(link.label)}</a>
    `).join('');
  }

  function renderPublications() {
    const container = $('#publication-list');
    if (!container) return;
    container.innerHTML = data.publications.items.map((publication) => `
      <article class="publication-card">
        <figure class="publication-figure">
          <button type="button" data-figure-src="${escapeHTML(publication.image)}" data-figure-alt="${escapeHTML(localized(publication.imageAlt))}" data-figure-title="${escapeHTML(publication.title)}" aria-label="${escapeHTML(localized(data.ui.common.viewFigure))}">
            <img src="${escapeHTML(publication.thumbnail)}" alt="${escapeHTML(localized(publication.imageAlt))}" loading="lazy" />
          </button>
          <figcaption>
            <span class="publication-badge">${escapeHTML(publication.venueShort)} · ${escapeHTML(publication.year)}</span>
            <span>${escapeHTML(localized(data.ui.common.viewFigure))}</span>
          </figcaption>
        </figure>
        <div class="publication-content">
          <div class="publication-meta">
            ${publication.featured ? `<span>${escapeHTML(localized(data.ui.common.selected))}</span>` : ''}
            <span class="venue">${escapeHTML(publication.venueShort)}</span>
            <span>${escapeHTML(localized(publication.type))}</span>
            ${publication.meta.map((item) => `<span>${escapeHTML(item)}</span>`).join('')}
          </div>
          <h3>${escapeHTML(publication.title)}</h3>
          <p class="publication-authors">${authorsHTML(publication.authors)}</p>
          <p class="publication-abstract">${escapeHTML(localized(publication.abstract))}</p>
          <div class="publication-links">
            ${publicationLinksHTML(publication)}
            <button class="paper-link bibtex-button" type="button" data-publication-id="${escapeHTML(publication.id)}">${escapeHTML(localized(data.ui.common.copyBibtex))}</button>
          </div>
        </div>
      </article>
    `).join('');
  }

  function renderProjects() {
    const container = $('#project-grid');
    if (!container) return;
    container.innerHTML = data.projects.items.map((project) => `
      <article class="project-card">
        <span class="project-label">${escapeHTML(localized(project.label))}</span>
        <h3>${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(localized(project.description))}</p>
        <div class="tag-row">${project.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join('')}</div>
        <a class="project-link" href="${escapeHTML(project.url)}" target="_blank" rel="noreferrer">
          <span>${escapeHTML(localized(data.ui.common.viewRepository))}</span>${arrowIcon}
        </a>
      </article>
    `).join('');
  }

  function updateSEO() {
    const title = localized(data.seo.title);
    const description = localized(data.seo.description);
    document.title = title;
    $('meta[name="description"]')?.setAttribute('content', description);
    $('meta[property="og:title"]')?.setAttribute('content', title);
    $('meta[property="og:description"]')?.setAttribute('content', description);
  }

  function updateControls() {
    const languageButton = $('.language-toggle');
    const themeButton = $('.theme-toggle');
    const menuButton = $('.menu-toggle');
    if (languageButton) {
      languageButton.setAttribute('aria-label', localized(data.ui.accessibility.language));
      $('.language-code', languageButton).textContent = language === 'en' ? '中' : 'EN';
    }
    themeButton?.setAttribute('aria-label', localized(data.ui.accessibility.theme));
    if (menuButton) {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-label', localized(open ? data.ui.accessibility.menuClose : data.ui.accessibility.menuOpen));
    }
    $('.dialog-close')?.setAttribute('aria-label', localized(data.ui.accessibility.closeFigure));
  }

  function render() {
    renderTextBindings();
    renderAbout();
    renderEducation();
    renderResearch();
    renderPublications();
    renderProjects();
    setProfileLinks();
    updateSEO();
    updateControls();
    bindDynamicEvents();
  }

  function setLanguage(next) {
    language = next === 'zh' ? 'zh' : 'en';
    root.dataset.lang = language;
    root.lang = language === 'zh' ? 'zh-CN' : 'en';
    try { localStorage.setItem('site-language', language); } catch (_) {}
    render();
  }

  function setTheme(next) {
    const theme = next === 'dark' ? 'dark' : 'light';
    root.dataset.theme = theme;
    try { localStorage.setItem('site-theme', theme); } catch (_) {}
    $('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#101617' : '#f7f8f7');
  }

  function showToast(message) {
    const toast = $('.toast');
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => { toast.hidden = true; }, 1800);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (_) {
      const area = document.createElement('textarea');
      area.value = text;
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
  }

  const figureDialog = $('#figure-dialog');
  const dialogImage = $('#dialog-image');
  const dialogTitle = $('#dialog-title');

  function openFigure(button) {
    if (!figureDialog || !dialogImage || !dialogTitle) return;
    dialogImage.src = button.dataset.figureSrc;
    dialogImage.alt = button.dataset.figureAlt || '';
    dialogTitle.textContent = button.dataset.figureTitle || '';
    if (typeof figureDialog.showModal === 'function') figureDialog.showModal();
    else figureDialog.setAttribute('open', '');
  }

  function closeFigure() {
    if (!figureDialog) return;
    if (typeof figureDialog.close === 'function') figureDialog.close();
    else figureDialog.removeAttribute('open');
  }

  function bindDynamicEvents() {
    $$('.bibtex-button').forEach((button) => {
      button.onclick = async () => {
        const publication = data.publications.items.find((item) => item.id === button.dataset.publicationId);
        if (!publication?.bibtex) return;
        await copyText(publication.bibtex);
        showToast(localized(data.ui.common.copied));
      };
    });
    $$('.publication-figure button').forEach((button) => {
      button.onclick = () => openFigure(button);
    });
  }

  const languageButton = $('.language-toggle');
  const themeButton = $('.theme-toggle');
  const menuButton = $('.menu-toggle');
  const mobileMenu = $('#mobile-menu');

  languageButton?.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
  themeButton?.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    if (mobileMenu) mobileMenu.hidden = open;
    updateControls();
  });
  $$('#mobile-menu a').forEach((link) => link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    if (mobileMenu) mobileMenu.hidden = true;
    updateControls();
  }));

  $('.dialog-close')?.addEventListener('click', closeFigure);
  figureDialog?.addEventListener('click', (event) => { if (event.target === figureDialog) closeFigure(); });

  const navLinks = $$('.desktop-nav a');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
      });
    }, { rootMargin: '-36% 0px -58%', threshold: 0 });
    $$('main section[id]').forEach((section) => observer.observe(section));
  }

  $('#current-year').textContent = String(new Date().getFullYear());
  setProfileLinks();
  setTheme(root.dataset.theme);
  setLanguage(root.dataset.lang === 'zh' ? 'zh' : 'en');
})();
