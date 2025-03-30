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
      about_me_description: "I'm a Japanese web developer based in rural France, with a certified qualification as a Full-Stack Developer from the French government. With a diverse professional background—ranging from sales, service design, marketing, social work, to translation—I bring a unique blend of technical and strategic insight to every project.\nIn all of my roles, I’ve been recognized for achieving high performance and delivering results efficiently within deadlines. I adapt quickly to new environments, whether international or community-based, and excel in solving complex problems—skills honed especially during my time as a social worker.Although I am relatively new to web development, my previous experience in fundraising and marketing enables me to design user interfaces with a strong focus on UX and customer engagement. \nI’m equally comfortable with technical implementation and strategic planning.I’m currently looking for fully remote opportunities and can work fluently in Japanese, French, and English.",
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
      about_me_description: "フランス在住の日本人ウェブ開発者です。営業、サービス企画、マーケティング、対人支援、翻訳など多様な職種を経験し、どの職場においても高い業績が評価されてきました。現在はフランス政府認定「フルスタック・ウェブ開発者」資格を取得し、UX/UIと集客を意識したサイト制作に強みを持っています。\n仕事は常に効率的かつ期日内に整理し、新しい環境や技術にも柔軟に適応できます。\n多文化・国際的な職場、地域密着型のビジネスの双方での勤務経験があり、高い問題解決力を活かして課題に取り組むことが得意です。技術的な実装にとどまらず、これまでのマーケティングやファンドレイジングの知見を活かし、事業の成果につながる提案・実装が可能です。現在は、フランスからフルリモートでのプロジェクト参画を希望しています。\n日・仏・英の三カ国語で対応可能です。",
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
      about_me_description:"Développeuse web japonaise basée en France, j’ai acquis une riche expérience dans des domaines variés : commercial, conception de services, marketing, accompagnement social, traduction. Mes performances ont toujours été saluées dans chaque poste occupé.\nTitulaire du diplôme français de “Développeur Web Full Stack”, je conçois des interfaces UX/UI orientées acquisition de clients, en mobilisant mes compétences techniques et mon parcours en marketing et levée de fonds.\nJe suis organisée, efficace dans le respect des délais, et m’adapte rapidement aux environnements nouveaux – qu’ils soient multiculturels ou ancrés localement. Mon expérience en travail social m’a permis de développer un solide sens de l’analyse et de résolution de problèmes.\nJe suis actuellement à la recherche d’un poste en télétravail complet ou accessible dans ma zone géographique. Je travaille en japonais, français et anglais.",
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
