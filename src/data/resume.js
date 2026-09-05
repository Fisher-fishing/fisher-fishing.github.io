export const navigation = [
  { id: 'skills', label: '能力' },
  { id: 'experience', label: '经历' },
  { id: 'projects', label: '项目' },
  { id: 'contact', label: '联系' },
];

export const profile = {
  name: '樊慕清',
  eyebrow: 'HANGZHOU · FRONTEND DEVELOPER',
  role: '前端开发工程师',
  direction: 'React 方向',
  summary:
    '以 JavaScript 为主要开发语言，专注业务页面、组件复用与接口联调。持续学习 AI Agent 与 AI 应用开发。',
  education: '华北理工大学 · 计算机科学与技术 · 本科',
  // location: '男 · 杭州',
  location: '杭州',
  portrait: '/assets/portrait.jpg',
  resumes: [
    {
      label: '前端开发工程师',
      description: 'JavaScript / React 方向',
      href: '/assets/樊慕清-前端开发工程师.docx',
      filename: '樊慕清-前端开发工程师.docx',
    },
    {
      label: 'AI 应用开发工程师',
      description: 'React / Node.js / 大模型 API 方向',
      href: '/assets/樊慕清-AI应用开发工程师.docx',
      filename: '樊慕清-AI应用开发工程师.docx',
    },
  ],
  highlights: [
    { title: '近 1 年', description: '前端全职开发经历' },
    { title: 'JavaScript / React', description: '主要开发技术' },
    { title: '1688 商家后台', description: '参与开发的已上线项目' },
  ],
};

export const skills = [
  {
    caption: '页面与交互',
    title: 'React 业务开发',
    description:
      '实现数据看板、商品管理和弹窗交互，使用 Hooks 管理页面状态，按设计稿还原界面。',
    tags: ['JavaScript', 'React', 'TypeScript', 'Ant Design'],
  },
  {
    caption: '接口与协作',
    title: '联调与问题排查',
    description:
      '配合后端完成接口联调，处理页面适配、浏览器兼容与 Bug 修复，使用 Git 进行协作。',
    tags: ['Node.js', 'Git', 'Figma', 'HTML / CSS'],
  },
  {
    caption: '学习与探索',
    title: 'AI 应用方向',
    description:
      '围绕面试练习与代码审查设计个人练习项目，关注模型接口、提示词与结构化反馈。',
    tags: ['个人练习项目', '大模型 API', 'Express'],
  },
];

export const experience = {
  caption: '前端开发工程师 · 全职',
  company: '金易宝软件（杭州）有限公司',
  date: '2025.11 — 2026.08',
  introduction:
    '负责 1688 商家后台前端功能开发，主要涉及销售数据看板、商品管理与弹窗模块。',
  details: [
    {
      title: '页面实现',
      description:
        '基于内部设计框架及 Figma 设计稿完成页面还原，处理响应式布局与浏览器兼容问题。',
    },
    {
      title: '业务协作',
      description:
        '配合后端完成接口联调，参与 Bug 排查修复及 Git 协作，维护和调整已有业务代码。',
    },
    {
      title: '需求交付',
      description:
        '任职期间累计交付约 50 项前端功能需求，涉及的数据看板、商品管理及弹窗功能已上线。',
    },
  ],
};

export const projects = {
  business: {
    badge: '企业项目 · 已上线',
    title: '1688 商家后台',
    date: '2025.11 — 2026.08',
    introduction:
      '面向商家运营的后台系统，将销售数据展示、商品操作与业务弹窗组织在日常管理流程中。',
    features: [
      {
        title: '销售数据看板',
        description:
          '统计卡片展示近期销售数据。支持近 7 天 / 近 30 天切换，重新请求接口并更新页面数据。',
      },
      {
        title: '商品管理',
        description:
          '商品列表、搜索筛选、新增与编辑、上下架、删除、分页和图片上传，并完成接口联调。',
      },
      {
        title: '弹窗复用',
        description:
          '复用 Ant Design 组件；针对复杂业务封装弹窗逻辑，并为删除操作增加二次确认。',
      },
    ],
    tags: ['JavaScript', 'React Hooks', 'TypeScript', 'Ant Design'],
  },
  practice: [
    {
      badge: '个人练习项目',
      title: 'AI 面试 Agent',
      date: '2026.09 — 至今',
      introduction:
        '围绕前端面试设计练习流程：选择方向与难度、生成题目、提交回答并查看结构化反馈。',
      details: [
        'React Hooks 管理题目、答题与加载状态。',
        'Node.js / Express 封装模型请求，环境变量管理 API Key。',
        'localStorage 保存练习记录；应用按本地运行方式设计，模型服务通过 API 接入。',
      ],
      tags: ['React', 'Node.js', 'Express', '大模型 API'],
    },
    {
      badge: '个人练习项目',
      title: '代码审查 Agent',
      date: '2026.09',
      introduction:
        '围绕 JavaScript / React 代码设计辅助审查流程，按潜在问题、原因与修改建议组织报告。',
      details: [
        '代码输入、审查规则选择、加载状态与报告展示。',
        '通过提示词约束反馈结构，归纳可读性与潜在 Bug。',
        '本地接口统一管理模型请求，localStorage 保存审查记录。',
      ],
      tags: ['JavaScript', 'React', 'Express', '大模型 API'],
    },
  ],
};

export const education = {
  school: '华北理工大学',
  major: '计算机科学与技术 · 本科',
  date: '2021.09 — 2025.06',
};

export const contact = {
  title: '联系我',
  description: '前端开发岗位 · 杭州',
  email: 'Fanmou1ren@hotmail.com',
  phone: '181 9193 3605',
  phoneHref: '+8618191933605',
};
