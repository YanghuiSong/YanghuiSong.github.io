(() => {
  const article = document.getElementById("article");
  const toc = document.getElementById("toc");
  const sidebar = document.getElementById("sidebar");
  const menuButton = document.getElementById("menuButton");
  const overlay = document.getElementById("sidebarOverlay");
  const backToTop = document.getElementById("backToTop");

  const slugify = (text, index) => {
    const base = text
      .trim()
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s-]/gu, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
    return base || `section-${index + 1}`;
  };

  // Wrap wide tables for mobile scrolling.
  article.querySelectorAll("table").forEach((table) => {
    if (table.parentElement.classList.contains("table-wrap")) return;
    const wrap = document.createElement("div");
    wrap.className = "table-wrap";
    table.parentNode.insertBefore(wrap, table);
    wrap.appendChild(table);
  });

  // Build TOC from H1-H3.
  const headings = [...article.querySelectorAll("h1, h2, h3")];
  const used = new Set();

  headings.forEach((heading, index) => {
    let id = slugify(heading.textContent, index);
    let finalId = id;
    let n = 2;
    while (used.has(finalId)) finalId = `${id}-${n++}`;
    used.add(finalId);
    heading.id = finalId;

    const a = document.createElement("a");
    a.href = `#${encodeURIComponent(finalId)}`;
    a.textContent = heading.textContent.trim();
    a.className = `level-${heading.tagName.slice(1)}`;
    a.dataset.target = finalId;
    toc.appendChild(a);
  });

  // Scroll spy.
  const tocLinks = [...toc.querySelectorAll("a")];
  const setActive = (id) => {
    tocLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.target === id);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length) setActive(visible[0].target.id);
    },
    { rootMargin: "-92px 0px -72% 0px", threshold: [0, 1] }
  );

  headings.forEach((h) => observer.observe(h));
  if (headings[0]) setActive(headings[0].id);

  // Code copy buttons.
  article.querySelectorAll("pre").forEach((pre) => {
    const button = document.createElement("button");
    button.className = "copy-button";
    button.type = "button";
    button.textContent = "复制";
    button.addEventListener("click", async () => {
      const code = pre.querySelector("code")?.innerText || pre.innerText;
      try {
        await navigator.clipboard.writeText(code);
        button.textContent = "已复制";
        setTimeout(() => (button.textContent = "复制"), 1200);
      } catch {
        button.textContent = "复制失败";
      }
    });
    pre.appendChild(button);
  });

  const closeMenu = () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
    menuButton.setAttribute("aria-expanded", "false");
  };

  menuButton.addEventListener("click", () => {
    const open = !sidebar.classList.contains("open");
    sidebar.classList.toggle("open", open);
    overlay.classList.toggle("show", open);
    menuButton.setAttribute("aria-expanded", String(open));
  });

  overlay.addEventListener("click", closeMenu);
  toc.addEventListener("click", (event) => {
    if (event.target.closest("a") && window.innerWidth <= 980) closeMenu();
  });

  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 700);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
