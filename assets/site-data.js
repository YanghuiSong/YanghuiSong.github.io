/* Edit bilingual content, publications and honors here. */
window.SITE_DATA = {
  profile: {
    email: 'yanghuisong55@gmail.com',
    github: 'https://github.com/YanghuiSong',
    scholar: 'https://scholar.google.com/citations?user=zi6ZBp8AAAAJ'
  },
  ui: {
    skip: { en: 'Skip to main content', zh: '跳转到主要内容' },
    email: { en: 'Email', zh: '邮件' },
    paper: { en: 'Paper', zh: '论文' },
    back: { en: 'Back to top ↑', zh: '返回顶部 ↑' },
    nav: {
      publications: { en: 'Publications', zh: '论文' },
      about: { en: 'About', zh: '简介' },
      news: { en: 'News', zh: '动态' },
      honors: { en: 'Honors', zh: '荣誉' }
    },
    languageSwitch: { en: 'Switch to Chinese', zh: '切换为英文' }
  },
  hero: {
    eyebrow: { en: 'Remote-Sensing Image Intelligence', zh: '遥感图像智能解译' },
    role: { en: 'Graduate Student · Yunnan Normal University', zh: '云南师范大学 · 电子信息专业研究生' },
    summary: {
      en: 'My research focuses on intelligent interpretation of remote-sensing imagery, with an interest in open-vocabulary segmentation and vision-language understanding.',
      zh: '主要研究遥感图像智能解译，关注开放词汇分割、视觉语言理解与遥感基础模型。'
    },
    focus: {
      en: 'Remote Sensing · Visual Grounding · Foundation Models',
      zh: '遥感图像处理 · 视觉定位 · 基础模型'
    }
  },
  publications: {
    title: { en: 'Publications', zh: '论文发表' },
    subtitle: { en: 'Selected peer-reviewed work', zh: '代表性研究成果' },
    items: [
      {
        id: 'c2i-dino',
        year: '2026',
        venue: 'IEEE Geoscience and Remote Sensing Letters',
        venueShort: 'IEEE GRSL',
        title: 'C2I-DINO: Category-to-Instance Discrimination for Remote Sensing Visual Grounding',
        authors: [
          { name: 'Linghong Cai' },
          { name: 'Yongpeng Wen' },
          { name: 'Yanghui Song', self: true },
          { name: 'Wanghao Sun' },
          { name: 'Yaming Zhang' },
          { name: 'Nanqing Liu' }
        ],
        summary: {
          en: 'Improving remote-sensing visual grounding through category-focused prompting and spatial instance learning.',
          zh: '通过类别聚焦提示与空间实例学习，提升遥感图像中的语言指代目标定位能力。'
        },
        image: 'assets/paper-c2i-dino.webp',
        imageFull: 'assets/paper-c2i-dino.png',
        links: [
          { label: 'Paper', url: 'https://ieeexplore.ieee.org/document/11743839' },
          { label: 'DOI', url: 'https://doi.org/10.1109/LGRS.2026.3745178' },
          { label: 'Code', url: 'https://github.com/YongpengWen/C2I-DINO' }
        ]
      },
      {
        id: 'proc-sam3',
        year: '2026',
        venue: 'IEEE Geoscience and Remote Sensing Letters',
        venueShort: 'IEEE GRSL',
        title: 'Prompt-Calibrated SAM 3 for Open-Vocabulary Remote-Sensing Semantic Segmentation',
        authors: [
          { name: 'Yanghui Song', self: true },
          { name: 'Nanqing Liu' },
          { name: 'Haonan Yin' },
          { name: 'Yingjie Gao' },
          { name: 'Chengfu Yang' },
          { name: 'Qi Ming' }
        ],
        summary: {
          en: 'A training-free approach that calibrates prompts and frozen SAM 3 responses for open-vocabulary remote-sensing segmentation.',
          zh: '面向开放词汇遥感语义分割，校准文本提示及冻结 SAM 3 响应的免训练方法。'
        },
        image: 'assets/paper-proc-sam3.webp',
        imageFull: 'assets/paper-proc-sam3.png',
        links: [
          { label: 'Paper', url: 'https://ieeexplore.ieee.org/document/11609477' },
          { label: 'DOI', url: 'https://doi.org/10.1109/LGRS.2026.3713378' },
          { label: 'arXiv', url: 'https://arxiv.org/abs/2606.21863' },
          { label: 'Code', url: 'https://github.com/YanghuiSong/ProC-SAM3' }
        ]
      }
    ]
  },
  about: {
    title: { en: 'About', zh: '个人简介' },
    bio: {
      en: 'I am from Kunming, Yunnan. I completed my undergraduate studies at Yunnan Normal University (2022–2026) and joined the Excellence Engineer Program through recommended postgraduate admission. I am now pursuing graduate studies in Electronic Information at Yunnan Normal University.',
      zh: '宋杨辉，云南昆明人。2022—2026年就读于云南师范大学信息学院，本科毕业后通过推荐免试入选卓越工程师培养计划，获得“4+2”本硕衔接培养资格，现于云南师范大学攻读电子信息专业硕士学位。'
    },
  },
  news: {
    title: { en: 'News', zh: '近期动态' },
    items: [
      {
        date: { en: 'Oct. 2026', zh: '2026.10' },
        text: {
          en: 'Our paper **C2I-DINO** was published in **IEEE GRSL**. Special thanks to **Linghong Cai** and **Yongpeng Wen** for their help and collaboration.',
          zh: '论文 **C2I-DINO** 发表于 **IEEE GRSL**。特别感谢 **Linghong Cai** 和 **Yongpeng Wen** 的帮助与合作。'
        },
        url: 'https://ieeexplore.ieee.org/document/11743839'
      },
      {
        date: { en: 'Jul. 2026', zh: '2026.07' },
        text: {
          en: 'Our paper **ProC-SAM3** was published in **IEEE GRSL**.',
          zh: '论文 **ProC-SAM3** 发表于 **IEEE GRSL**。'
        },
        url: 'https://ieeexplore.ieee.org/document/11609477'
      }
    ]
  },

  honors: {
    title: { en: 'Selected Honors', zh: '主要荣誉' },
    items: [
      {
        date: { en: 'May 2026', zh: '2026.05' },
        text: {
          en: 'Provincial Five-Good Student and Outstanding Graduate (Class of 2026)',
          zh: '省级五好学生、2026届优秀毕业生'
        },
        url: 'https://jyt.yn.gov.cn/article/2147452911'
      },
      {
        date: { en: 'Jan. 2026', zh: '2026.01' },
        text: {
          en: 'Outstanding Graduate, Yunnan Normal University',
          zh: '云南师范大学校级优秀毕业生'
        },
        url: 'https://ynnu.jysd.com/news/view/aid/341849/tag/tzgg'
      },
      {
        date: { en: 'Oct. 2025', zh: '2025.10' },
        text: {
          en: 'National Scholarship for Undergraduate Students (2024–2025)',
          zh: '2024—2025学年本科生国家奖学金'
        },
        url: 'https://cic.ynnu.edu.cn/info/1069/1496.htm'
      }
    ]
  },
  footer: {
    note: {
      en: 'Yunnan Normal University · Remote-Sensing Image Interpretation',
      zh: '云南师范大学 · 遥感图像智能解译'
    }
  },
  seo: {
    title: {
      en: 'Yanghui Song | Academic Homepage',
      zh: '宋杨辉 | 个人学术主页'
    },
    description: {
      en: 'Yanghui Song — remote-sensing image interpretation, visual grounding and open-vocabulary segmentation.',
      zh: '宋杨辉的个人学术主页：遥感图像智能解译、视觉定位与开放词汇分割。'
    }
  }
};
