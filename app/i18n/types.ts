export type Language = "EN" | "BN";

export interface Translations {
  nav: {
    features: string;
    device: string;
    howItWorks: string;
    download: string;
    about: string;
    contact: string;
    getApp: string;
  };
  hero: {
    eyebrow: string;
    headlinePart1: string;
    headlinePart2: string;
    description: string;
    getItOn: string;
    downloadOn: string;
    seeHowItWorks: string;
    freeAppLabel: string;
  };
  trust: {
    item1Title: string;
    item1Desc: string;
    item2Title: string;
    item2Desc: string;
    item3Title: string;
    item3Desc: string;
    item4Title: string;
    item4Desc: string;
  };
  control: {
    eyebrow: string;
    title: string;
    description: string;
    needsModule: string;
    comingSoon: string;
    categories: {
      lighting: { title: string; desc: string };
      cooling: { title: string; desc: string };
      water: { title: string; desc: string };
      entertainment: { title: string; desc: string };
      power: { title: string; desc: string };
      security: { title: string; desc: string };
    };
  };
  appFeatures: {
    eyebrow: string;
    title: string;
    description: string;
    features: {
      title: string;
      desc: string;
    }[];
  };
  device: {
    eyebrow: string;
    title: string;
    description: string;
    checklist: string[];
    mh4Title: string;
    mh4Channels: string;
    mh4Desc: string;
    mh8Title: string;
    mh8Popular: string;
    mh8Channels: string;
    mh8Desc: string;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    description: string;
    steps: {
      num: string;
      title: string;
      desc: string;
    }[];
  };
  download: {
    eyebrow: string;
    title: string;
    description: string;
    scanTitle: string;
    scanDesc: string;
    requirements: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    description: string;
    missionTitle: string;
    missionDesc: string;
    values: {
      title: string;
      desc: string;
    }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    helpTitle: string;
    helpDesc: string;
    chatWhatsApp: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    formTitle: string;
    formDesc: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    emailLabel: string;
    interestLabel: string;
    interests: string[];
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    labels: {
      phone: string;
      whatsapp: string;
      messenger: string;
      email: string;
      office: string;
      officeCity: string;
      hours: string;
      hoursTime: string;
      officeMap: string;
    };
  };
  footer: {
    brandDesc: string;
    columns: {
      product: string;
      company: string;
      support: string;
    };
    links: {
      features: string;
      device: string;
      howItWorks: string;
      downloadApp: string;
      aboutUs: string;
      partner: string;
      contact: string;
      faq: string;
      installationGuide: string;
      privacyPolicy: string;
      termsOfUse: string;
    };
    copyright: string;
    builtWithPride: string;
  };
}

