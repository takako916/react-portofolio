import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 翻訳データ
const resources = {
  en: {
    translation: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      contact: "Get In Touch",
      resume: "Resume",
      project1_title: "benoitreiss.com",
      project2_title: "Google Seach Console Analyzer",
      project1_description: "This is a website introducing the works of author Benoit Reiss based in France. It includes introductions to each work, a search function, and a contact form.",
      project2_description: "An in-house application that analyzes trends in frequently searched keywords on websites. Uploading data from Google Search Console allows you to create graphs of search trends for each keyword. I was in charge of everything from design to implementation.",
      published: "Published",
      get_in_touch: "I'm currently looking for full-time development opportunities! If you know of any positions available, please feel free to <1>email me</1>.",
      email: "takako.onodera@gmail.com",
      techskills:"Technical Skills",
      softskills:"Soft Skills",
      maintitle:"Fullstack Web Developper",
      myname: "Takako Onodera-Reiss",
      goal_oriented: "Goal-Oriented",
      collaboration: "Collaboration",
      positivity: "Positivity",
      adaptability: "Adaptability",
      problem_solving: "Problem Solving",
      empathy: "Empathy",
      organization: "Organization",
      creativity: "Creativity",
      about_me: "About Me",
      about_me_description: "A Japanese woman living in the French countryside. Experienced a number of different jobs, and is currently looking for work after gaining qualifications as a web developer. Mother of two children. Trilingual in Japanese, English and French.",
      about_portofolio:" About this portofolio",
      portofolio_description:"This portfolio was developed using React-bootstrap. It has a three-language switching function for English, Japanese and French.",
      resume_link:"https://docs.google.com/document/d/14g-F-LQlybBYIuhZJNYSmpKhcCWJq3kRcl3qKERUfGQ/edit?tab=t.0",
    },
  },
  ja: {
    translation: {
      home: "ホーム",
      projects: "プロジェクト",
      skills: "スキル",
      contact: "お問い合わせ",
      resume: "履歴書",
      project1_title: "benoitreiss.com",
      project2_title: "Google Seach Console Analyzer",
      project1_description: "このサイトは、フランスの作家ブノワ・レスの作品を紹介するウェブサイトです。各作品の紹介、検索機能、お問い合わせフォームが含まれています。",
      project2_description: "ウェブサイトの頻出検索キーワードの傾向を分析する社内使用アプリケーションです。Google Search Consoleのデータをアップロードするとキーワードごとに検索傾向をグラフ化できるアプリケーションです。。デザイン、設計、実装までを単独で担当しました。",
      published: "公開日",
      get_in_touch: "現在、フルタイムの開発の仕事を探しています。もしポジションがあれば、お気軽に <1>メールでご連絡ください</1>。",
      email: "takako.onodera@gmail.com",
      techskills:"開発スキル",
      softskills:"ビジネススキル",
      maintitle:"ウェブ開発エンジニア",
      myname: "小野寺貴子",
      goal_oriented: "目標志向",
      collaboration: "協調性",
      positivity: "ポジティブ思考",
      adaptability: "適応力",
      problem_solving: "問題解決力",
      empathy: "共感力",
      organization: "組織力",
      creativity: "創造力",
      about_me: "自己紹介",
      about_me_description: "フランスの田舎に在住する日本人。数多くの職種を経験し、現在フランス政府公認「フルスタックウェブ開発者」の資格取得後、ウェブエンジニアとしてフランスからのフルリモートプロジェクトを探しています。二児の母。日仏英、三カ国語で業務に対応できます。",
      about_portofolio: "このポートフォリオについて",
      portofolio_description:"このポートフォリオはReact-bootstrapで開発しました。英語、日本語、フランス語の3カ国語切り替え機能を実装しています。 ",
      resume_link:"https://docs.google.com/document/d/10XNHQz_9lvB1hD_a4LKDwwuM62HKxj1KeQ9gseZpmjU/edit?tab=t.0",
    },
  },
  fr: {
    translation: {
      home: "Accueil",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contacter",
      resume: "CV",
      project1_title: "benoitreiss.com",
      project2_title: "Google Seach Console Analyzer",
      project2_description: "Une application à usage interne pour analyser les tendances des termes de recherche fréquemment utilisés sur les sites web, grâce à laquelle les données de Google Console peuvent être téléchargées pour représenter graphiquement les tendances de recherche par mot-clé. J'étais entièrement responsable de la conception, du design et de la mise en œuvre",
      project1_description: "Ceci est un site web présentant les œuvres de l'auteur Benoît Reiss. Il comprend des introductions à chaque œuvre, une fonction de recherche et un formulaire de contact.",
      published: "Publié",
      get_in_touch: "Je suis actuellement à la recherche d'opportunités de développement à plein temps ! Si vous connaissez des postes disponibles, n'hésitez pas à me contacter par <1>e-mail</1>.",
      email: "takako.onodera@gmail.com",
      techskills:"Compétences techniques",
      softskills:"Compétences comportementales",
      maintitle:"Développeuse Web Fullstack",
      myname: "Takako ONODERA-REISS",
      goal_oriented: "Orientation vers les objectifs",
      collaboration: "Collaboration",
      positivity: "Positivité",
      adaptability: "Adaptabilité",
      problem_solving: "Résolution de problèmes",
      empathy: "Empathie",
      organization: "Organisation",
      creativity: "Créativité",
      about_me: "Qui suis-je?",
      about_me_description:"Une Japonaise basée dans la campagne française. Expérience professionnelle variée. Actuellement à la recherche d'un emploi après avoir obtenu un diplôme de développeur web. Mère de deux enfants. Trilingue japonais, anglais et français.",
      about_portofolio:"À propos de ce portofolio", 
      portofolio_description:"Ce portfolio a été développé en React-bootstrap. Il permet de passer d'une langue à l'autre (anglais, japonais et français).",
      resume_link:"https://docs.google.com/document/d/1DFxgz960OKvm0EdR659GMl2IWzaPVqRUfEYx7VUxE9s/edit?tab=t.0#heading=h.6spx5nbo2mdw",
    },
  },
};

// `i18n` の初期化
i18n
  .use(initReactI18next)
  .use(LanguageDetector) // 言語を自動検出
  .init({
    resources,
    lng: localStorage.getItem("language") || "en", // デフォルトの言語を設定
    fallbackLng: "en", // 言語が見つからない場合は英語
    interpolation: {
      escapeValue: false, // ReactではXSS対策不要
    },
  });

export default i18n;
