(() => {
  'use strict';

  const data = window.SITE_DATA;
  if (!data) {
    console.error('SITE_DATA is unavailable. Ensure assets/site-data.js loads before assets/app.js.');
    return;
  }

  const root = document.documentElement;
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

  const state = {
    language: root.dataset.lang === 'en' ? 'en' : 'zh',
    theme: root.dataset.theme === 'dark' ? 'dark' : 'light'
  };

  const escapeHTML = (value = '') => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const getPath = (object, path) => path.split('.').reduce((value, key) => value?.[key], object);

  const localized = (value) => {
    if (value && typeof value === 'object' && !Array.isArray(value) && ('zh' in value || 'en' in value)) {
      return value[state.language] ?? value.zh ?? value.en ?? '';
    }
    return value ?? '';
  };

  const icon = (name) => {
    const paths = {
      foundation: '<path d="M12 3 4 7v10l8 4 8-4V7Z"/><path d="m4 7 8 4 8-4M12 11v10"/>',
      ovss: '<path d="M3 5h18v14H3z"/><path d="m3 15 4-4 4 3 4-6 6 7"/><circle cx="8" cy="9" r="1"/>',
      robust: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
      arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
      external: '<path d="M14 3h7v7M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>',
      zoom: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4M11 8v6M8 11h6"/>',
      star: '<path d="m12 3 2.6 5.3 5.9.9-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.9Z"/>'
    };
    return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
  };

  const savePreference = (key, value) => {
    try { localStorage.setItem(key, value); } catch (_) {}
  };

  const updateTextBindings = () => {
    $$('[data-text]').forEach((element) => {
      const value = getPath(data, element.dataset.text);
      const text = localized(value);
      if (text !== undefined && text !== null) element.textContent = text;
    });
  };

  const updateProfileLinks = () => {
    $$('[data-profile-link]').forEach((element) => {
      const type = element.dataset.profileLink;
      const map = {
        github: data.profile.github,
        repositories: `${data.profile.github}?tab=repositories`,
        scholar: data.profile.scholar,
        email: `mailto:${data.profile.email}`
      };
      if (map[type]) element.href = map[type];
    });
  };

  const renderHeroMetrics = () => {
    const container = $('#hero-metrics');
    if (!container) return;
    container.innerHTML = data.hero.metrics.map((item) => `
      <div class="metric-item">
        <strong>${escapeHTML(item.value)}</strong>
        <span>${escapeHTML(localized(item.label))}</span>
      </div>
    `).join('');
  };

  const renderAbout = () => {
    const paragraphs = $('#about-paragraphs');
    const details = $('#profile-details');
    if (paragraphs) {
      paragraphs.innerHTML = data.about.paragraphs
        .map((paragraph) => `<p>${escapeHTML(localized(paragraph))}</p>`)
        .join('');
    }
    if (details) {
      details.innerHTML = data.about.details.map((item) => `
        <div>
          <dt>${escapeHTML(localized(item.label))}</dt>
          <dd>${escapeHTML(localized(item.value))}</dd>
        </div>
      `).join('');
    }
  };

  const renderResearch = () => {
    const container = $('#research-grid');
    if (!container) return;
    container.innerHTML = data.researchSection.items.map((item) => `
      <article class="research-card reveal" data-tone="${escapeHTML(item.tone)}">
        <div class="card-head">
          <span class="card-index">${escapeHTML(item.index)}</span>
          <span class="research-symbol" aria-hidden="true">${icon(item.id)}</span>
        </div>
        <h3>${escapeHTML(localized(item.title))}</h3>
        <p>${escapeHTML(localized(item.text))}</p>
        <div class="tag-list">${item.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join('')}</div>
      </article>
    `).join('');
  };

  const authorsHTML = (authors) => authors.map((author) => {
    const name = escapeHTML(author.name);
    return author.self ? `<strong>${name}</strong>` : name;
  }).join(', ');

  const publicationLinksHTML = (publication) => publication.links.map((link) => `
    <a class="paper-link${link.primary ? ' primary' : ''}" href="${escapeHTML(link.url)}" target="_blank" rel="noreferrer">
      ${link.primary ? icon('external') : ''}
      <span>${escapeHTML(link.label)}</span>
    </a>
  `).join('');

  const renderPublications = () => {
    const container = $('#publication-list');
    if (!container) return;
    container.innerHTML = data.publications.map((publication) => `
      <article class="publication-card reveal" id="publication-${escapeHTML(publication.id)}">
        <button
          class="publication-figure-button"
          type="button"
          data-figure-src="${escapeHTML(publication.image)}"
          data-figure-title="${escapeHTML(publication.title)}"
          data-figure-alt="${escapeHTML(localized(publication.imageAlt))}"
          aria-label="${escapeHTML(localized(data.ui.accessibility.enlargeFigure))}">
          <img src="${escapeHTML(publication.thumbnail || publication.image)}" alt="${escapeHTML(localized(publication.imageAlt))}" loading="lazy" decoding="async" />
          <span class="figure-overlay">${icon('zoom')}<span>${escapeHTML(localized(data.ui.common.figureHint))}</span></span>
        </button>
        <div class="publication-content">
          <aside class="publication-side">
            <div class="venue-row">
              <span class="venue-badge">${escapeHTML(publication.venueShort)} ${escapeHTML(publication.year)}</span>
              <span class="paper-type">${escapeHTML(localized(publication.type))}</span>
            </div>
            <div class="paper-metadata">
              <span>${escapeHTML(publication.venue)}</span>
              ${publication.meta.map((meta) => `<span>${escapeHTML(meta)}</span>`).join('')}
            </div>
          </aside>
          <div class="publication-main">
            <h3>${escapeHTML(publication.title)}</h3>
            <p class="publication-authors">${authorsHTML(publication.authors)}</p>
            <p class="publication-abstract">${escapeHTML(localized(publication.abstract))}</p>
            <div class="publication-links">
              ${publicationLinksHTML(publication)}
              <button class="paper-link bibtex-button" type="button" data-publication-id="${escapeHTML(publication.id)}">
                ${escapeHTML(localized(data.ui.common.copyBibtex))}
              </button>
            </div>
          </div>
        </div>
      </article>
    `).join('');
  };

  const renderProjects = () => {
    const container = $('#project-grid');
    if (!container) return;
    container.innerHTML = data.projects.map((project) => `
      <article class="project-card reveal${project.featured ? ' featured' : ''}" data-repo="${escapeHTML(project.repo)}">
        <div class="project-topline">
          <span class="project-status">${escapeHTML(localized(project.status))}</span>
          <span class="star-count" hidden>${icon('star')}<b>0</b></span>
        </div>
        <h3>${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(localized(project.description))}</p>
        <div class="tag-list">${project.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join('')}</div>
        <a class="project-link" href="${escapeHTML(project.url)}" target="_blank" rel="noreferrer">
          <span>${escapeHTML(localized(data.ui.common.viewRepository))}</span>${icon('arrow')}
        </a>
      </article>
    `).join('');
  };

  const updateSEO = () => {
    const title = localized(data.seo.title);
    const description = localized(data.seo.description);
    document.title = title;
    $('meta[name="description"]')?.setAttribute('content', description);
    $('meta[property="og:title"]')?.setAttribute('content', title);
    $('meta[property="og:description"]')?.setAttribute('content', description);
  };

  const updateAccessibilityLabels = () => {
    $('.language-toggle')?.setAttribute('aria-label', localized(data.ui.accessibility.language));
    $('.theme-toggle')?.setAttribute('aria-label', localized(data.ui.accessibility.theme));
    $('.back-to-top')?.setAttribute('aria-label', localized(data.ui.accessibility.backTop));
    $('.dialog-close')?.setAttribute('aria-label', localized(data.ui.accessibility.closeFigure));
    const menuToggle = $('.menu-toggle');
    if (menuToggle) {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-label', localized(expanded ? data.ui.accessibility.menuClose : data.ui.accessibility.menuOpen));
    }
  };

  const renderLocalizedContent = () => {
    updateTextBindings();
    renderHeroMetrics();
    renderAbout();
    renderResearch();
    renderPublications();
    renderProjects();
    updateProfileLinks();
    updateSEO();
    updateAccessibilityLabels();
    bindDynamicEvents();
    initializeRevealObservers();
    updateGitHubStars();
  };

  const setLanguage = (language) => {
    state.language = language === 'en' ? 'en' : 'zh';
    root.dataset.lang = state.language;
    root.lang = state.language === 'zh' ? 'zh-CN' : 'en';
    $('.language-code').textContent = state.language === 'zh' ? 'EN' : '中';
    savePreference('site-language', state.language);
    renderLocalizedContent();
  };

  const setTheme = (theme) => {
    state.theme = theme === 'dark' ? 'dark' : 'light';
    root.dataset.theme = state.theme;
    savePreference('site-theme', state.theme);
    const themeColor = state.theme === 'dark' ? '#0c151b' : '#f5f8f9';
    $('meta[name="theme-color"]')?.setAttribute('content', themeColor);
  };

  const showToast = (message) => {
    const toast = $('.toast');
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => { toast.hidden = true; }, 2100);
  };

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (_) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
    }
  };

  const figureDialog = $('#figure-dialog');
  const dialogImage = $('#dialog-image');
  const dialogTitle = $('#dialog-title');

  const openFigure = (button) => {
    if (!figureDialog || !dialogImage || !dialogTitle) return;
    dialogImage.src = button.dataset.figureSrc;
    dialogImage.alt = button.dataset.figureAlt || '';
    dialogTitle.textContent = button.dataset.figureTitle || '';
    if (typeof figureDialog.showModal === 'function') figureDialog.showModal();
    else figureDialog.setAttribute('open', '');
  };

  const closeFigure = () => {
    if (!figureDialog) return;
    if (typeof figureDialog.close === 'function') figureDialog.close();
    else figureDialog.removeAttribute('open');
  };

  const bindDynamicEvents = () => {
    $$('.bibtex-button').forEach((button) => {
      button.addEventListener('click', async () => {
        const publication = data.publications.find((item) => item.id === button.dataset.publicationId);
        if (!publication?.bibtex) return;
        await copyText(publication.bibtex);
        showToast(localized(data.ui.common.copied));
      });
    });

    $$('.publication-figure-button').forEach((button) => {
      button.addEventListener('click', () => openFigure(button));
    });
  };

  let revealObserver;
  const initializeRevealObservers = () => {
    revealObserver?.disconnect();
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      $$('.reveal').forEach((element) => element.classList.add('visible'));
      return;
    }
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.09, rootMargin: '0px 0px -35px' });
    $$('.reveal').forEach((element) => {
      if (!element.classList.contains('visible')) revealObserver.observe(element);
    });
  };

  const updateGitHubStars = async () => {
    const cards = $$('[data-repo]');
    await Promise.all(cards.map(async (card) => {
      const counter = $('.star-count', card);
      const target = $('b', counter);
      if (!counter || !target) return;
      try {
        const response = await fetch(`https://api.github.com/repos/YanghuiSong/${encodeURIComponent(card.dataset.repo)}`, {
          headers: { Accept: 'application/vnd.github+json' }
        });
        if (!response.ok) return;
        const repository = await response.json();
        if (Number.isFinite(repository.stargazers_count)) {
          target.textContent = repository.stargazers_count.toLocaleString();
          counter.hidden = false;
          counter.title = `${repository.stargazers_count} GitHub stars`;
        }
      } catch (_) {
        // Star counts are optional; the card remains complete without GitHub API access.
      }
    }));
  };

  const languageToggle = $('.language-toggle');
  const themeToggle = $('.theme-toggle');
  const menuToggle = $('.menu-toggle');
  const mobileMenu = $('#mobile-menu');
  const backToTop = $('.back-to-top');

  languageToggle?.addEventListener('click', () => setLanguage(state.language === 'zh' ? 'en' : 'zh'));
  themeToggle?.addEventListener('click', () => setTheme(state.theme === 'dark' ? 'light' : 'dark'));

  menuToggle?.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    mobileMenu.hidden = expanded;
    updateAccessibilityLabels();
  });

  $$('#mobile-menu a').forEach((link) => link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (mobileMenu) mobileMenu.hidden = true;
    updateAccessibilityLabels();
  }));

  $('.dialog-close')?.addEventListener('click', closeFigure);
  figureDialog?.addEventListener('click', (event) => {
    if (event.target === figureDialog) closeFigure();
  });

  window.addEventListener('scroll', () => {
    backToTop?.classList.toggle('visible', window.scrollY > 680);
  }, { passive: true });

  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const navLinks = $$('.desktop-nav a');
  const sectionObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
        });
      }, { rootMargin: '-34% 0px -56%', threshold: 0 })
    : null;
  $$('main section[id]').forEach((section) => sectionObserver?.observe(section));

  $('#current-year').textContent = String(new Date().getFullYear());
  setTheme(state.theme);
  setLanguage(state.language);
})();
