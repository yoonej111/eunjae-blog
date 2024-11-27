export default {
  /**
   * basic Information
   */
  title: `eunjae.com`,
  description: `개발자 EJ`,
  language: `ko`,
  siteUrl: `https://eun-jae.com/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: ``, //`danmin20/danmin-gatsby-blog`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `윤은재`,
    nickname: `EJ`,
    stack: ['Solidity', 'Javascript', 'Blockchain'],
    bio: {
      email: `yoonej111@gmail.com`,
      residence: 'Seoul, South Korea',
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: 'LIFE',
      category: 'life',
    },
    {
      title: 'category2',
      category: 'featured-category2',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: 'Career',
      date: '2022.12 - Present',
      en: 'Hypedream',
      kr: 'Seoul',
      info: 'Smart Contract Developer',
    },
    {
      category: 'Career',
      date: '2018.01 - 2022.05',
      en: 'Amazon Web Services',
      kr: 'Seoul',
      info: 'Datacenter Opertaion Engineer',
    },
    {
      category: 'Career',
      date: '2016.06 - 2017.12',
      en: 'IBM Cloud',
      kr: 'Seoul',
      info: 'Datacenter Opertaions Engineer',
    },
    {
      category: 'Career',
      date: '2014.08 - 2015.06',
      en: 'BTI Solutions',
      kr: 'New Jersey',
      info: 'Protocol Team',
    }
  ],

  /**
  //  * metadata for Playground Page
  //  */
  // projects: [
  //   {
  //     title: 'Portfolio',
  //     description: '포트폴리오',
  //     techStack: ['React', 'Next.js', 'Typescript'],
  //     thumbnailUrl: '', // Path to your in the 'assets' folder
  //     links: {
  //       post: '',
  //       github: '',
  //       demo: '',
  //       googlePlay: '',
  //       appStore: '',
  //     },
  //   },
  // ],

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      link: 'https://toss.me/danmin',
      qrCode: 'toss_qr.svg', // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: 'kakao_qr.svg', // Path to your in the 'assets' folder
    },
  },
};
