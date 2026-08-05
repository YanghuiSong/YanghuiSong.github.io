const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const languageToggle = document.querySelector('.language-toggle');
const languageCode = document.querySelector('.language-code');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-nav');
const backToTop = document.querySelector('.back-to-top');

const storage = {
  get(key) {
    try { return window.localStorage.getItem(key); } catch { return null; }
  },
  set(key, value) {
    try { window.localStorage.setItem(key, value); } catch { /* Storage may be unavailable in local previews. */ }
  }
};

const translations = {
  en: {
    brandRole: 'Remote Sensing AI', navAbout: 'About', navResearch: 'Research', navPublications: 'Publications', navProjects: 'Projects', navContact: 'Contact',
    heroEyebrow: 'Graduate researcher · Yunnan Normal University', heroLead: 'Interpreting Earth imagery with', heroAccent: 'open and reliable AI.',
    heroSummary: 'I study remote sensing image intelligent interpretation, with a focus on vision foundation models, open-vocabulary segmentation, and robust geospatial perception.',
    viewResearch: 'View research', metaPaper: 'Journal publication', metaBenchmarks: 'RS benchmarks evaluated', metaFocus: 'Current core focus',
    visualLabel: 'Geospatial interpretation', legendSemantic: 'semantic evidence', legendInstance: 'instance evidence', legendPrompt: 'prompt calibration',
    aboutKicker: 'About', aboutTitle: 'A focused research profile in remote sensing image intelligent interpretation.',
    aboutP1: 'I am a graduate student in Electronic Information at the School of Information Science and Technology, Yunnan Normal University. My work explores how general-purpose vision and vision-language foundation models can be adapted to complex Earth observation imagery.',
    aboutP2: 'My current research centers on training-free and label-efficient methods for open-vocabulary remote sensing segmentation, with particular interest in prompt reliability, robust inference, and deployable geospatial intelligence.',
    affiliationTitle: 'Yunnan Normal University', affiliationText: 'School of Information Science and Technology · Kunming, China',
    researchKicker: 'Research directions', researchTitle: 'One coherent agenda: intelligent interpretation of remote sensing imagery.',
    researchIntro: 'From pixel-level parsing to open-world understanding, the goal is accurate, robust, and efficient Earth observation intelligence.',
    r1Title: 'Open-Vocabulary Segmentation', r1Text: 'Pixel-level recognition beyond a fixed label space for diverse aerial and satellite scenes.',
    r2Title: 'Geospatial Foundation Models', r2Text: 'Adapting large vision and vision-language models to remote sensing scale, density, and domain gaps.',
    r3Title: 'Robust & Efficient Inference', r3Text: 'Reliable prompt selection, corruption robustness, and low-overhead inference without retraining.',
    r4Title: 'Multimodal Earth Understanding', r4Text: 'Connecting imagery, language, prompts, and spatial priors for richer geospatial reasoning.',
    publicationKicker: 'Selected publication', publicationTitle: 'Research published in IEEE Geoscience and Remote Sensing Letters.',
    paperAbstract: 'ProC-SAM3 calibrates the prompt interface of frozen SAM 3 through an offline prompt pool, cached text embeddings, presence-guided residual fusion, and peak-preserving class aggregation. Across eight remote sensing benchmarks, it reaches 56.1% average mIoU and improves over the previous best training-free method by 3.9 points.',
    copyBibtex: 'Copy BibTeX', citationCopied: 'BibTeX copied.', projectsKicker: 'Open-source projects', projectsTitle: 'Code and research resources for remote sensing interpretation.', allRepositories: 'All repositories',
    featuredProject: 'Featured', researchCode: 'Research code', analysisProject: 'Analysis', knowledgeBase: 'Knowledge base',
    project1Text: 'Prompt-calibrated SAM 3 for training-free open-vocabulary semantic segmentation in remote sensing imagery.',
    project2Text: 'A prompt-calibrated Falcon-Perception pipeline evaluated across diverse remote sensing segmentation benchmarks.',
    project3Text: 'Feature evolution and representation analysis of SAM 3 for remote sensing images and semantic alignment.',
    project4Text: 'A curated and continuously updated collection of papers, code reproductions, and technical notes on remote sensing AI.',
    viewRepository: 'View repository', contactKicker: 'Collaboration', contactTitle: 'Interested in remote sensing foundation models or open-vocabulary perception?',
    contactText: 'I welcome research discussions, reproducibility collaborations, and open-source projects in intelligent Earth observation.', sendEmail: 'Send email',
    footerFocus: 'Remote Sensing Image Intelligent Interpretation', footerBuilt: 'Built for GitHub Pages.'
  },
  zh: {
    brandRole: '遥感图像智能解译', navAbout: '简介', navResearch: '研究方向', navPublications: '学术论文', navProjects: '开源项目', navContact: '联系',
    heroEyebrow: '云南师范大学 · 硕士研究生', heroLead: '以开放、可靠的人工智能', heroAccent: '理解地球观测影像。',
    heroSummary: '研究方向统一聚焦于遥感图像智能解译，重点关注视觉基础模型、开放词汇分割与鲁棒地理空间感知。',
    viewResearch: '查看研究成果', metaPaper: 'IEEE期刊论文', metaBenchmarks: '遥感基准数据集', metaFocus: '当前核心方向',
    visualLabel: '地理空间智能解译', legendSemantic: '语义证据', legendInstance: '实例证据', legendPrompt: '提示校准',
    aboutKicker: '个人简介', aboutTitle: '围绕遥感图像智能解译构建统一、清晰的研究主线。',
    aboutP1: '现为云南师范大学信息学院电子信息专业硕士研究生，主要研究通用视觉基础模型与视觉语言模型如何适应复杂的地球观测影像。',
    aboutP2: '当前工作聚焦于开放词汇遥感图像分割中的免训练与低标注方法，重点研究提示可靠性、鲁棒推理以及可部署的地理空间智能。',
    affiliationTitle: '云南师范大学', affiliationText: '信息学院 · 中国昆明',
    researchKicker: '研究方向', researchTitle: '一条统一的研究主线：遥感图像智能解译。',
    researchIntro: '从像素级解析到开放世界理解，目标是实现准确、鲁棒且高效的地球观测智能。',
    r1Title: '开放词汇遥感分割', r1Text: '突破固定类别空间，在多样化航空与卫星场景中实现像素级开放世界识别。',
    r2Title: '地理空间基础模型', r2Text: '研究大型视觉与视觉语言模型对遥感影像尺度、密集目标与领域差异的适应机制。',
    r3Title: '鲁棒与高效推理', r3Text: '面向提示选择、退化鲁棒性与低开销推理，探索无需重新训练的可靠方法。',
    r4Title: '多模态地球理解', r4Text: '融合影像、语言、提示与空间先验，提升地理空间场景的细粒度理解能力。',
    publicationKicker: '代表性论文', publicationTitle: '发表于 IEEE Geoscience and Remote Sensing Letters 的研究成果。',
    paperAbstract: 'ProC-SAM3 通过离线提示池、文本嵌入缓存、存在性引导残差融合和峰值保持类别聚合，对冻结 SAM 3 的提示接口进行系统校准。在八个遥感基准上取得 56.1% 的平均 mIoU，较此前最佳免训练方法提升 3.9 个百分点。',
    copyBibtex: '复制 BibTeX', citationCopied: 'BibTeX 已复制。', projectsKicker: '开源项目', projectsTitle: '面向遥感图像智能解译的代码与研究资源。', allRepositories: '全部仓库',
    featuredProject: '代表项目', researchCode: '研究代码', analysisProject: '模型分析', knowledgeBase: '知识库',
    project1Text: '面向开放词汇遥感语义分割的提示校准 SAM 3 免训练框架。',
    project2Text: '在多类遥感分割基准上评估的提示校准 Falcon-Perception 研究管线。',
    project3Text: '分析 SAM 3 在遥感影像中的特征演化、表示结构与语义对齐能力。',
    project4Text: '持续整理遥感人工智能论文、代码复现与技术笔记的研究资源库。',
    viewRepository: '查看代码仓库', contactKicker: '交流合作', contactTitle: '关注遥感基础模型或开放词汇感知？',
    contactText: '欢迎围绕智能地球观测开展学术交流、复现合作与开源项目共建。', sendEmail: '发送邮件',
    footerFocus: '遥感图像智能解译', footerBuilt: '基于 GitHub Pages 构建。'
  }
};

const bibtex = `@ARTICLE{11609477,
  author={Song, Yanghui and Liu, Nanqing and Yin, Haonan and Gao, Yingjie and Yang, Chengfu and Ming, Qi},
  journal={IEEE Geoscience and Remote Sensing Letters},
  title={Prompt-Calibrated SAM 3 for Open-Vocabulary Remote-Sensing Semantic Segmentation},
  year={2026},
  volume={23},
  pages={6015205-6015205},
  doi={10.1109/LGRS.2026.3713378}
}`;

function setTheme(theme) {
  root.dataset.theme = theme;
  storage.set('theme', theme);
}

const savedTheme = storage.get('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

themeToggle?.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

function setLanguage(lang) {
  root.dataset.lang = lang;
  root.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[lang]?.[key];
    if (value) element.textContent = value;
  });
  languageCode.textContent = lang === 'en' ? '中' : 'EN';
  storage.set('language', lang);
}
setLanguage(storage.get('language') || 'en');
languageToggle?.addEventListener('click', () => setLanguage(root.dataset.lang === 'en' ? 'zh' : 'en'));

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  mobileMenu.hidden = expanded;
});
mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  mobileMenu.hidden = true;
}));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const navLinks = [...document.querySelectorAll('.desktop-nav a')];
const sections = [...document.querySelectorAll('main section[id]')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }
  });
}, { rootMargin: '-35% 0px -55%', threshold: 0 });
sections.forEach((section) => sectionObserver.observe(section));

window.addEventListener('scroll', () => {
  backToTop?.classList.toggle('visible', window.scrollY > 700);
}, { passive: true });
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.querySelector('.citation-button')?.addEventListener('click', async () => {
  const toast = document.querySelector('.citation-toast');
  try {
    await navigator.clipboard.writeText(bibtex);
  } catch {
    const textArea = document.createElement('textarea');
    textArea.value = bibtex;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
  }
  toast.hidden = false;
  window.setTimeout(() => { toast.hidden = true; }, 2200);
});

async function updateGitHubStars() {
  const cards = document.querySelectorAll('[data-repo]');
  await Promise.all([...cards].map(async (card) => {
    const repo = card.dataset.repo;
    try {
      const response = await fetch(`https://api.github.com/repos/YanghuiSong/${repo}`, { headers: { Accept: 'application/vnd.github+json' } });
      if (!response.ok) return;
      const data = await response.json();
      const target = card.querySelector('.star-count b');
      if (target && Number.isFinite(data.stargazers_count)) target.textContent = data.stargazers_count;
    } catch {
      // Keep the static fallback value when the GitHub API is unavailable.
    }
  }));
}
updateGitHubStars();

document.getElementById('current-year').textContent = new Date().getFullYear();
