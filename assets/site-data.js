/**
 * Yanghui Song — academic homepage content
 * ------------------------------------------------------------
 * Routine updates should happen in this file only.
 * Keep zh/en pairs synchronized. The interface is English-first,
 * while a visitor's manual language choice is remembered locally.
 */
window.SITE_DATA = {
  settings: {
    defaultLanguage: 'en',
    siteUrl: 'https://yanghuisong.github.io/'
  },

  profile: {
    name: 'Yanghui Song',
    nameZh: '宋杨辉',
    email: 'yanghuisong55@gmail.com',
    github: 'https://github.com/YanghuiSong',
    scholar: 'https://scholar.google.com/citations?user=zi6ZBp8AAAAJ',
    repositories: 'https://github.com/YanghuiSong?tab=repositories',
    affiliation: {
      zh: '云南师范大学 · 信息学院',
      en: 'Yunnan Normal University · School of Information Science and Technology'
    },
    role: {
      zh: '电子信息专业研究生',
      en: 'Graduate Student in Electronic Information'
    },
    location: {
      zh: '中国 · 云南昆明',
      en: 'Kunming, Yunnan, China'
    },
    researchLabel: {
      zh: '遥感图像智能解译',
      en: 'Intelligent Interpretation of Remote-Sensing Imagery'
    }
  },

  seo: {
    title: {
      zh: '宋杨辉 | 遥感图像智能解译',
      en: 'Yanghui Song | Remote-Sensing Image Intelligence'
    },
    description: {
      zh: '宋杨辉的个人学术主页，研究聚焦遥感图像智能解译、遥感基础模型、开放词汇分割与鲁棒测试时推理。',
      en: 'Academic homepage of Yanghui Song. Research interests include intelligent interpretation of remote-sensing imagery, geospatial foundation models, open-vocabulary segmentation, and robust test-time inference.'
    }
  },

  ui: {
    nav: {
      about: { zh: '简介', en: 'About' },
      education: { zh: '教育经历', en: 'Education' },
      research: { zh: '研究方向', en: 'Research' },
      publications: { zh: '论文', en: 'Publications' },
      projects: { zh: '项目', en: 'Projects' },
      contact: { zh: '联系', en: 'Contact' }
    },
    common: {
      scholar: { zh: 'Google Scholar', en: 'Google Scholar' },
      github: { zh: 'GitHub', en: 'GitHub' },
      email: { zh: '邮件', en: 'Email' },
      paper: { zh: '论文', en: 'Paper' },
      code: { zh: '代码', en: 'Code' },
      copyBibtex: { zh: '复制 BibTeX', en: 'Copy BibTeX' },
      copied: { zh: 'BibTeX 已复制', en: 'BibTeX copied' },
      viewFigure: { zh: '查看论文主图', en: 'View figure' },
      viewRepository: { zh: '查看仓库', en: 'Repository' },
      allRepositories: { zh: '全部 GitHub 仓库', en: 'All GitHub repositories' },
      selected: { zh: '代表作', en: 'Selected work' },
      present: { zh: '至今', en: 'Present' }
    },
    accessibility: {
      skip: { zh: '跳转到主要内容', en: 'Skip to main content' },
      language: { zh: '切换为英文', en: 'Switch to Chinese' },
      theme: { zh: '切换明暗主题', en: 'Switch color theme' },
      menuOpen: { zh: '打开导航菜单', en: 'Open navigation menu' },
      menuClose: { zh: '关闭导航菜单', en: 'Close navigation menu' },
      closeFigure: { zh: '关闭论文主图', en: 'Close publication figure' }
    }
  },

  hero: {
    eyebrow: {
      zh: '遥感图像智能解译 · Remote Sensing',
      en: 'Remote Sensing · Image Intelligence'
    },
    intro: {
      zh: '你好，我是',
      en: 'Hello, I am'
    },
    summary: {
      zh: '现于云南师范大学信息学院电子信息专业学习。我的研究聚焦遥感图像智能解译，关注基础模型如何在开放词汇、复杂退化与真实地球观测场景中实现更可靠、更高效的视觉理解。',
      en: 'I am a graduate student at Yunnan Normal University. My research focuses on intelligent interpretation of remote-sensing imagery, with an emphasis on making foundation models more reliable and efficient under open-vocabulary settings, image degradations, and real-world Earth observation conditions.'
    },
    focus: {
      zh: '遥感基础模型 · 开放词汇分割 · 鲁棒测试时推理',
      en: 'Geospatial Foundation Models · Open-Vocabulary Segmentation · Robust Test-Time Inference'
    },
    portraitCaption: {
      zh: '云南师范大学 · 信息学院',
      en: 'Yunnan Normal University · School of Information Science and Technology'
    }
  },

  about: {
    kicker: { zh: '关于我', en: 'About' },
    title: {
      zh: '以遥感图像智能解译为长期研究主线。',
      en: 'A focused research path in remote-sensing image intelligence.'
    },
    paragraphs: [
      {
        zh: '宋杨辉，云南昆明人。2022—2026年就读于云南师范大学信息学院。本科阶段结束后，通过推荐免试入选卓越工程师培养计划，获得“4+2”本硕衔接培养资格，现于云南师范大学信息学院电子信息专业继续深造。',
        en: 'I am Yanghui Song, from Kunming, Yunnan. I studied at the School of Information Science and Technology, Yunnan Normal University from 2022 to 2026. Through recommendation-based postgraduate admission, I was selected for the Excellence Engineer Training Program and entered a 4+2 integrated bachelor–master training track. I am now continuing my studies in Electronic Information at Yunnan Normal University.'
      },
      {
        zh: '研究方向聚焦遥感图像智能解译，主要关注遥感与地理空间基础模型、开放词汇遥感图像分割，以及分布偏移和图像退化条件下的鲁棒测试时推理。我希望研究不仅提升指标，也能够兼顾方法的可靠性、计算效率和实际部署价值。',
        en: 'My research centers on intelligent interpretation of remote-sensing imagery, especially geospatial foundation models, open-vocabulary remote-sensing segmentation, and robust test-time inference under distribution shift and image degradation. I am interested in methods that improve not only benchmark accuracy, but also reliability, computational efficiency, and practical deployability.'
      }
    ],
    facts: [
      { label: { zh: '研究领域', en: 'Field' }, value: { zh: '遥感图像智能解译', en: 'Remote-Sensing Image Intelligence' } },
      { label: { zh: '所在城市', en: 'Location' }, value: { zh: '云南 · 昆明', en: 'Kunming, Yunnan' } },
      { label: { zh: '培养方向', en: 'Program' }, value: { zh: '卓越工程师培养计划 · 4+2 本硕衔接', en: 'Excellence Engineer Program · 4+2 Integrated Track' } }
    ]
  },

  education: {
    kicker: { zh: '教育经历', en: 'Education' },
    title: {
      zh: '学习与培养经历',
      en: 'Academic training'
    },
    items: [
      {
        period: { zh: '2026—至今', en: '2026 — Present' },
        degree: { zh: '电子信息 · 研究生阶段', en: 'Electronic Information · Graduate Study' },
        school: { zh: '云南师范大学信息学院', en: 'School of Information Science and Technology, Yunnan Normal University' },
        note: { zh: '卓越工程师培养计划 · “4+2”本硕衔接培养', en: 'Excellence Engineer Training Program · 4+2 integrated bachelor–master track' }
      },
      {
        period: { zh: '2022—2026', en: '2022 — 2026' },
        degree: { zh: '本科阶段', en: 'Undergraduate Study' },
        school: { zh: '云南师范大学信息学院', en: 'School of Information Science and Technology, Yunnan Normal University' },
        note: { zh: '完成本科阶段学习，并通过推荐免试进入后续培养阶段', en: 'Completed undergraduate study and advanced to postgraduate training through recommendation-based admission' }
      }
    ]
  },

  research: {
    kicker: { zh: '研究方向', en: 'Research' },
    title: {
      zh: '围绕开放世界地球观测的三条研究线索',
      en: 'Three connected directions for open-world Earth observation'
    },
    intro: {
      zh: '研究方向保持集中：以遥感基础模型为能力底座，以开放词汇分割为核心任务，以鲁棒与高效推理为真实应用约束。',
      en: 'My research is intentionally focused: geospatial foundation models provide the capability base, open-vocabulary segmentation is a central task, and robust efficient inference provides the real-world constraint.'
    },
    items: [
      {
        index: '01',
        title: { zh: '遥感与地理空间基础模型', en: 'Geospatial Foundation Models' },
        text: { zh: '研究通用视觉基础模型、分割基础模型与视觉语言模型在航空和卫星影像中的表征能力、迁移机制与领域适配。', en: 'Representation, transfer, and domain adaptation of general vision, segmentation, and vision-language foundation models for aerial and satellite imagery.' },
        tags: ['SAM 3', 'VLM', 'Foundation Models']
      },
      {
        index: '02',
        title: { zh: '开放词汇遥感图像分割', en: 'Open-Vocabulary Remote-Sensing Segmentation' },
        text: { zh: '通过文本提示和开放概念接口突破固定类别空间，重点处理提示可靠性、跨类别竞争、小目标和复杂地物识别问题。', en: 'Going beyond fixed label spaces with textual prompts and open concept interfaces, with emphasis on prompt reliability, inter-class competition, small objects, and complex land-cover recognition.' },
        tags: ['OVSS', 'Prompting', 'Segmentation']
      },
      {
        index: '03',
        title: { zh: '鲁棒与高效的测试时推理', en: 'Robust & Efficient Test-Time Inference' },
        text: { zh: '面向分布偏移、图像退化和推理成本，探索无需大规模重新训练的测试时适应、响应控制和选择性计算方法。', en: 'Test-time adaptation, response control, and selective computation for distribution shift, image degradation, and inference cost without large-scale retraining.' },
        tags: ['Robustness', 'TTA', 'Training-Free']
      }
    ]
  },

  publications: {
    kicker: { zh: '学术论文', en: 'Publications' },
    title: { zh: '代表性研究成果', en: 'Selected publications' },
    intro: { zh: '论文条目由配置文件统一生成；以后新增论文只需在本文件中追加一项。', en: 'Publication entries are generated from this configuration file, so future papers can be added without editing page markup.' },
    items: [
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
          zh: 'ProC-SAM3 针对冻结 SAM 3 在开放词汇遥感语义分割中的提示语义、编码效率和响应融合问题进行系统校准。方法通过受约束提示池、缓存文本嵌入、存在性引导残差融合与峰值保持类别聚合，提高遥感复杂场景中的开放词汇分割表现。在八个遥感基准上的平均 mIoU 达到 56.1%。',
          en: 'ProC-SAM3 systematically calibrates prompt semantics, encoding efficiency, and response fusion for frozen SAM 3 in open-vocabulary remote-sensing semantic segmentation. It combines a constrained prompt pool, cached text embeddings, presence-guided residual fusion, and peak-preserving class aggregation, achieving 56.1% average mIoU across eight remote-sensing benchmarks.'
        },
        thumbnail: 'assets/paper-proc-sam3.webp',
        image: 'assets/paper-proc-sam3.png',
        imageAlt: { zh: 'ProC-SAM3 方法总览图', en: 'Overview of the ProC-SAM3 framework' },
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
    ]
  },

  projects: {
    kicker: { zh: '开源项目', en: 'Projects' },
    title: { zh: '研究代码与开源资源', en: 'Research code and open-source resources' },
    intro: { zh: '项目区只保留与研究主线直接相关的仓库，避免主页信息过载。', en: 'Only repositories directly related to the research agenda are highlighted here to keep the homepage focused.' },
    items: [
      {
        repo: 'ProC-SAM3',
        title: 'ProC-SAM3',
        label: { zh: '论文代码', en: 'Paper Code' },
        description: { zh: 'IEEE GRSL 2026 对应开源实现：面向开放词汇遥感语义分割的 Prompt-Calibrated SAM 3。', en: 'Official implementation accompanying the IEEE GRSL 2026 paper on prompt-calibrated SAM 3 for open-vocabulary remote-sensing segmentation.' },
        tags: ['SAM 3', 'OVSS', 'Python'],
        url: 'https://github.com/YanghuiSong/ProC-SAM3'
      },
      {
        repo: 'RS-Falcon',
        title: 'RS-Falcon',
        label: { zh: '研究代码', en: 'Research Code' },
        description: { zh: '围绕遥感基础模型与提示驱动分割开展的实验与评估代码。', en: 'Experimental and evaluation code for prompt-driven segmentation with remote-sensing foundation models.' },
        tags: ['Remote Sensing', 'Foundation Model'],
        url: 'https://github.com/YanghuiSong/RS-Falcon'
      },
      {
        repo: 'SAM3opinRS',
        title: 'SAM3opinRS',
        label: { zh: '模型分析', en: 'Model Analysis' },
        description: { zh: '分析 SAM 3 在遥感图像中的语义响应、特征演化和空间表征。', en: 'Analysis of semantic responses, feature evolution, and spatial representations of SAM 3 in remote-sensing imagery.' },
        tags: ['SAM 3', 'Representation'],
        url: 'https://github.com/YanghuiSong/SAM3opinRS'
      },
      {
        repo: 'SYH_GoGoGo',
        title: 'SYH_GoGoGo',
        label: { zh: '研究资源', en: 'Research Resources' },
        description: { zh: '遥感人工智能相关的论文阅读、代码复现、数据集和实验记录。', en: 'Research notes, paper reading, reproductions, datasets, and experiment records related to remote-sensing AI.' },
        tags: ['Reading', 'Reproduction'],
        url: 'https://github.com/YanghuiSong/SYH_GoGoGo'
      }
    ]
  },

  contact: {
    kicker: { zh: '联系交流', en: 'Contact' },
    title: { zh: '欢迎围绕遥感图像智能解译开展交流。', en: 'Open to research discussions in remote-sensing image intelligence.' },
    text: { zh: '欢迎学术讨论、论文复现和开源项目合作。邮件是最直接的联系方式。', en: 'I welcome research discussions, reproducibility efforts, and open-source collaborations. Email is the most direct way to reach me.' }
  },

  footer: {
    note: { zh: '遥感图像智能解译 · GitHub Pages', en: 'Remote-Sensing Image Intelligence · GitHub Pages' }
  }
};
