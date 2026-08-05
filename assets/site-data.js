/**
 * Site content configuration
 * --------------------------
 * This is the only file you normally need to edit when updating:
 * - Chinese / English text
 * - publications
 * - projects
 * - personal links
 *
 * Keep both `zh` and `en` fields so the two interfaces stay synchronized.
 */
window.SITE_DATA = {
  profile: {
    name: 'Yanghui Song',
    email: 'yanghuisong55@gmail.com',
    github: 'https://github.com/YanghuiSong',
    scholar: 'https://scholar.google.com/citations?user=zi6ZBp8AAAAJ',
    affiliation: {
      zh: '云南师范大学 · 信息学院',
      en: 'Yunnan Normal University · School of Information Science and Technology'
    },
    location: {
      zh: '中国 · 昆明',
      en: 'Kunming, China'
    },
    role: {
      zh: '电子信息专业硕士研究生',
      en: 'Graduate Student in Electronic Information'
    },
    researchLabel: {
      zh: '遥感图像智能解译',
      en: 'Intelligent Interpretation of Remote-Sensing Imagery'
    },
    photo: 'assets/profile-photo.webp',
    photoSmall: 'assets/profile-photo-small.webp'
  },

  seo: {
    title: {
      zh: 'Yanghui Song | 遥感图像智能解译',
      en: 'Yanghui Song | Remote Sensing Image Intelligence'
    },
    description: {
      zh: 'Yanghui Song 的个人学术主页，研究方向为遥感图像智能解译、开放词汇分割、地理空间基础模型与鲁棒高效推理。',
      en: 'Academic homepage of Yanghui Song, focusing on remote sensing image interpretation, open-vocabulary segmentation, geospatial foundation models, and robust efficient inference.'
    }
  },

  ui: {
    nav: {
      about: { zh: '个人简介', en: 'About' },
      research: { zh: '研究方向', en: 'Research' },
      publications: { zh: '学术论文', en: 'Publications' },
      projects: { zh: '开源项目', en: 'Projects' },
      contact: { zh: '联系交流', en: 'Contact' }
    },
    accessibility: {
      skip: { zh: '跳转到主要内容', en: 'Skip to main content' },
      menuOpen: { zh: '打开导航菜单', en: 'Open navigation menu' },
      menuClose: { zh: '关闭导航菜单', en: 'Close navigation menu' },
      theme: { zh: '切换明暗主题', en: 'Switch color theme' },
      language: { zh: '切换为英文', en: 'Switch to Chinese' },
      backTop: { zh: '返回顶部', en: 'Back to top' },
      enlargeFigure: { zh: '查看论文主图大图', en: 'Open the paper figure in full size' },
      closeFigure: { zh: '关闭大图', en: 'Close figure' }
    },
    common: {
      viewPublication: { zh: '查看代表作', en: 'View publication' },
      github: { zh: 'GitHub', en: 'GitHub' },
      scholar: { zh: 'Google Scholar', en: 'Google Scholar' },
      paper: { zh: '论文', en: 'Paper' },
      code: { zh: '代码', en: 'Code' },
      copyBibtex: { zh: '复制 BibTeX', en: 'Copy BibTeX' },
      copied: { zh: 'BibTeX 已复制', en: 'BibTeX copied' },
      allRepositories: { zh: '查看全部仓库', en: 'All repositories' },
      viewRepository: { zh: '进入项目', en: 'View repository' },
      emailMe: { zh: '发送邮件', en: 'Send email' },
      figureHint: { zh: '点击主图可放大查看', en: 'Click the figure to enlarge' }
    }
  },

  hero: {
    eyebrow: {
      zh: '云南师范大学 · 硕士研究生',
      en: 'Yunnan Normal University · Graduate Researcher'
    },
    titleLead: {
      zh: '面向真实地球观测场景的',
      en: 'Reliable intelligence for'
    },
    titleAccent: {
      zh: '遥感图像智能解译',
      en: 'remote-sensing imagery.'
    },
    summary: {
      zh: '研究聚焦于遥感图像智能解译，重点探索视觉基础模型与视觉语言模型在开放词汇分割、鲁棒推理和高效地理空间感知中的方法与应用。',
      en: 'My research focuses on intelligent interpretation of remote-sensing imagery, especially vision foundation models and vision-language models for open-vocabulary segmentation, robust inference, and efficient geospatial perception.'
    },
    photoCaption: {
      zh: '从地球观测影像到开放世界理解',
      en: 'From Earth observation imagery to open-world understanding'
    },
    photoMeta: {
      zh: '视觉基础模型 · 开放词汇感知 · 鲁棒推理',
      en: 'Foundation Models · Open-Vocabulary Perception · Robust Inference'
    },
    metrics: [
      { value: 'IEEE GRSL', label: { zh: '正式发表论文', en: 'Journal publication' } },
      { value: '8', label: { zh: '遥感分割基准', en: 'RS benchmarks' } },
      { value: 'OVSS', label: { zh: '当前核心方向', en: 'Core research focus' } }
    ]
  },

  about: {
    kicker: { zh: '个人简介', en: 'About' },
    title: {
      zh: '围绕遥感图像智能解译，构建统一而持续的研究主线。',
      en: 'A coherent research agenda for intelligent interpretation of remote-sensing imagery.'
    },
    paragraphs: [
      {
        zh: '现为云南师范大学信息学院电子信息专业硕士研究生。主要关注通用视觉基础模型与视觉语言模型如何适应遥感影像中的尺度变化、密集目标、复杂背景和显著领域差异。',
        en: 'I am a graduate student in Electronic Information at the School of Information Science and Technology, Yunnan Normal University. I study how general-purpose vision and vision-language foundation models can adapt to scale variation, dense objects, complex backgrounds, and domain gaps in remote-sensing imagery.'
      },
      {
        zh: '当前工作重点包括免训练开放词汇遥感分割、提示可靠性建模、退化条件下的鲁棒推理，以及兼顾精度和计算开销的可部署方法。',
        en: 'My current work includes training-free open-vocabulary remote-sensing segmentation, prompt reliability modeling, robust inference under degradations, and deployable methods that balance accuracy with computational cost.'
      }
    ],
    details: [
      { label: { zh: '研究领域', en: 'Field' }, value: { zh: '遥感图像智能解译', en: 'Remote Sensing Image Intelligence' } },
      { label: { zh: '主要任务', en: 'Tasks' }, value: { zh: '语义分割 · 开放词汇感知 · 多模态理解', en: 'Semantic Segmentation · Open-Vocabulary Perception · Multimodal Understanding' } },
      { label: { zh: '方法关注', en: 'Methods' }, value: { zh: '基础模型 · 免训练推理 · 测试时适应', en: 'Foundation Models · Training-Free Inference · Test-Time Adaptation' } }
    ]
  },

  researchSection: {
    kicker: { zh: '研究方向', en: 'Research Directions' },
    title: {
      zh: '从基础模型到可靠推理的遥感智能解译。',
      en: 'Remote-sensing intelligence from foundation models to reliable inference.'
    },
    intro: {
      zh: '以开放世界地理空间感知为目标，关注方法的准确性、鲁棒性、可解释性与部署效率。',
      en: 'Toward open-world geospatial perception with accuracy, robustness, interpretability, and deployment efficiency.'
    },
    items: [
      {
        id: 'foundation', index: '01', tone: 'teal',
        title: { zh: '遥感与地理空间基础模型', en: 'Geospatial Foundation Models' },
        text: {
          zh: '研究视觉基础模型与视觉语言模型在航空、卫星及多尺度遥感影像中的迁移机制、表征能力和领域适应问题。',
          en: 'Studying transfer, representation, and domain adaptation of vision and vision-language foundation models for aerial, satellite, and multi-scale remote-sensing imagery.'
        },
        tags: ['SAM 3', 'VLM', 'Foundation Models']
      },
      {
        id: 'ovss', index: '02', tone: 'blue',
        title: { zh: '开放词汇遥感图像分割', en: 'Open-Vocabulary Remote-Sensing Segmentation' },
        text: {
          zh: '突破固定类别空间，通过文本提示和开放概念接口实现复杂地物的像素级识别，并抑制跨类别冲突与错误激活。',
          en: 'Moving beyond fixed label spaces through text prompts and open concept interfaces for pixel-level recognition while controlling inter-class conflicts and false activations.'
        },
        tags: ['OVSS', 'Prompting', 'Semantic Segmentation']
      },
      {
        id: 'robust', index: '03', tone: 'amber',
        title: { zh: '鲁棒与高效的测试时推理', en: 'Robust and Efficient Test-Time Inference' },
        text: {
          zh: '关注提示选择、分布偏移、图像退化与推理开销，探索无需大规模重新训练的可靠测试时适应和响应控制方法。',
          en: 'Addressing prompt selection, distribution shift, image degradation, and inference cost through reliable test-time adaptation and response control without large-scale retraining.'
        },
        tags: ['Robustness', 'TTA', 'Training-Free']
      }
    ]
  },

  publicationsSection: {
    kicker: { zh: '学术论文', en: 'Publications' },
    title: {
      zh: '代表性研究成果',
      en: 'Selected research output'
    },
    intro: {
      zh: '论文信息、主图、代码与 BibTeX 均由配置文件统一管理，后续可直接追加新条目。',
      en: 'Publication metadata, figures, code links, and BibTeX are managed from one configuration file for easy future updates.'
    }
  },

  publications: [
    {
      id: 'proc-sam3',
      featured: true,
      year: '2026',
      venue: 'IEEE Geoscience and Remote Sensing Letters',
      venueShort: 'IEEE GRSL',
      type: { zh: '期刊论文', en: 'Journal Article' },
      title: 'Prompt-Calibrated SAM 3 for Open-Vocabulary Remote-Sensing Semantic Segmentation',
      authors: [
        { name: 'Yanghui Song', self: true },
        { name: 'Nanqing Liu' },
        { name: 'Haonan Yin' },
        { name: 'Yingjie Gao' },
        { name: 'Chengfu Yang' },
        { name: 'Qi Ming' }
      ],
      meta: ['Vol. 23', 'Article 6015205'],
      abstract: {
        zh: 'ProC-SAM3 从提示语义、编码效率与响应融合三个层面校准冻结 SAM 3 的提示接口：离线构建受约束提示池并缓存文本嵌入，利用存在性引导残差融合抑制不可靠响应，再通过峰值保持类别聚合保留小目标和稀疏目标的细粒度激活。在八个遥感基准上取得 56.1% 的平均 mIoU，较此前最佳免训练方法提升 3.9 个百分点。',
        en: 'ProC-SAM3 calibrates the prompt interface of frozen SAM 3 across prompt semantics, encoding efficiency, and response fusion. It builds a constrained offline prompt pool with cached text embeddings, suppresses unreliable outputs through presence-guided residual fusion, and preserves fine-grained activations for small and sparse objects with peak-preserving class aggregation. Across eight remote-sensing benchmarks, it achieves 56.1% average mIoU, improving over the previous best training-free method by 3.9 points.'
      },
      thumbnail: 'assets/paper-proc-sam3.webp',
      image: 'assets/paper-proc-sam3.png',
      imageAlt: {
        zh: 'ProC-SAM3 方法总览图：离线提示池构建、提示优化协同推理和存在性引导残差融合。',
        en: 'Overview of ProC-SAM3: offline prompt pool construction, prompt-optimized coordinated inference, and presence-guided residual fusion.'
      },
      links: [
        { label: 'IEEE Xplore', url: 'https://ieeexplore.ieee.org/abstract/document/11609477', primary: true },
        { label: 'DOI', url: 'https://doi.org/10.1109/LGRS.2026.3713378' },
        { label: 'arXiv', url: 'https://arxiv.org/abs/2606.21863' },
        { label: 'Code', url: 'https://github.com/YanghuiSong/ProC-SAM3' }
      ],
      bibtex: `@ARTICLE{11609477,
  author={Song, Yanghui and Liu, Nanqing and Yin, Haonan and Gao, Yingjie and Yang, Chengfu and Ming, Qi},
  journal={IEEE Geoscience and Remote Sensing Letters},
  title={Prompt-Calibrated SAM 3 for Open-Vocabulary Remote-Sensing Semantic Segmentation},
  year={2026},
  volume={23},
  pages={6015205-6015205},
  doi={10.1109/LGRS.2026.3713378}
}`
    }
  ],

  projectsSection: {
    kicker: { zh: '开源项目', en: 'Open-Source Projects' },
    title: {
      zh: '与遥感图像智能解译相关的代码与研究资源',
      en: 'Code and research resources for remote-sensing image intelligence'
    }
  },

  projects: [
    {
      repo: 'ProC-SAM3',
      title: 'ProC-SAM3',
      status: { zh: '代表项目', en: 'Featured' },
      description: {
        zh: '面向开放词汇遥感语义分割的提示校准 SAM 3 免训练框架，对应 IEEE GRSL 2026 论文。',
        en: 'A prompt-calibrated, training-free SAM 3 framework for open-vocabulary semantic segmentation in remote-sensing imagery, accompanying the IEEE GRSL 2026 paper.'
      },
      tags: ['Python', 'SAM 3', 'OVSS'],
      url: 'https://github.com/YanghuiSong/ProC-SAM3',
      featured: true
    },
    {
      repo: 'RS-Falcon',
      title: 'RS-Falcon',
      status: { zh: '研究代码', en: 'Research Code' },
      description: {
        zh: '围绕遥感基础模型与提示驱动分割开展的实验管线和基准评估代码。',
        en: 'An experimental pipeline and benchmark suite for prompt-driven segmentation with remote-sensing foundation models.'
      },
      tags: ['Remote Sensing', 'Foundation Model', 'Segmentation'],
      url: 'https://github.com/YanghuiSong/RS-Falcon'
    },
    {
      repo: 'SAM3opinRS',
      title: 'SAM3opinRS',
      status: { zh: '模型分析', en: 'Model Analysis' },
      description: {
        zh: '分析 SAM 3 在遥感影像中的特征演化、语义响应与空间表征，为后续适配和改进提供依据。',
        en: 'Analysis of feature evolution, semantic responses, and spatial representations of SAM 3 on remote-sensing imagery.'
      },
      tags: ['SAM 3', 'Representation', 'Visualization'],
      url: 'https://github.com/YanghuiSong/SAM3opinRS'
    },
    {
      repo: 'SYH_GoGoGo',
      title: 'Remote Sensing Research Notes',
      status: { zh: '研究资源', en: 'Research Resources' },
      description: {
        zh: '持续整理遥感人工智能相关论文、代码复现、数据集与实验笔记。',
        en: 'A curated collection of papers, reproductions, datasets, and experiment notes on remote-sensing AI.'
      },
      tags: ['Reading', 'Reproduction', 'Resources'],
      url: 'https://github.com/YanghuiSong/SYH_GoGoGo'
    }
  ],

  contact: {
    kicker: { zh: '联系交流', en: 'Contact' },
    title: {
      zh: '欢迎围绕遥感基础模型、开放词汇感知与测试时适应开展交流。',
      en: 'Open to discussions on geospatial foundation models, open-vocabulary perception, and test-time adaptation.'
    },
    text: {
      zh: '欢迎学术讨论、复现合作和开源项目共建。邮件是最直接的联系方式。',
      en: 'I welcome research discussions, reproducibility collaborations, and open-source projects. Email is the most direct way to reach me.'
    }
  },

  footer: {
    note: {
      zh: '遥感图像智能解译 · 基于 GitHub Pages 构建',
      en: 'Remote Sensing Image Intelligence · Built with GitHub Pages'
    }
  }
};
