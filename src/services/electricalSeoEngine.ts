import { PlatformType } from "../types";

export type SupportedLanguage = "hi" | "bn" | "en";

export interface TitleEvolution {
  level: number;
  label: string;
  title: string;
  ctrScore: number;
  seoScore: number;
  googleScore: number;
  metaScore: number;
  psychologicalTrigger: string;
  intent: "Local Inquiry" | "High Viral Reel" | "B2B AMC Lead" | "Educational";
}

export interface GoogleMetaAnalysis {
  keyword: string;
  language: SupportedLanguage;
  googlePerformance: {
    monthlySearches: string;
    competition: "Low" | "Medium" | "High" | string;
    topRankingKeywords: string[];
    localMapIntent: string;
    searchTrend: string;
  };
  metaPerformance: {
    reelViralVelocity: string;
    targetAgeGroup: string;
    bestVisualHook: string;
    topHashtags: string[];
    engagementRate: string;
  };
  titleEvolution: TitleEvolution[];
  recommendedScriptHook: {
    visual: string;
    voiceover: string;
    cta: string;
  };
  fullSeoDescription: string;
  exactTags: string[];
}

export const electricalCategories = [
  {
    id: "residential",
    name: "House Wiring & Residential Repairs",
    nameHi: "हाउस वायरिंग और होम रिपेयरिंग",
    nameBn: "বাড়ি ওয়্যারিং ও হোম ইলেকট্রিক্যাল সার্ভিস"
  },
  {
    id: "amc_society",
    name: "Apartment & Housing Society AMC",
    nameHi: "सोसायटी और अपार्टमेंट इलेक्ट्रिकल AMC",
    nameBn: "অ্যাপার্টমেন্ট ও সোসাইটি ইলেকট্রিক্যাল এএমসি"
  },
  {
    id: "industrial",
    name: "Industrial Maintenance & Panel Testing",
    nameHi: "इंडस्ट्रियल मेंटेनेंस और पैनल वर्क",
    nameBn: "ইন্ডাস্ট্রিয়াল প্যানেল ও ফ্যাক্টরি সার্ভিস"
  },
  {
    id: "materials",
    name: "Electrical Materials & Cable Supply",
    nameHi: "इलेक्ट्रिकल मैटेरियल्स और वायर सप्लाई",
    nameBn: "ইলেকট্রিক্যাল মেটেরিয়াল ও তার সাপ্লাই"
  }
];

export function analyzeElectricalTitle(
  rawTitle: string,
  lang: SupportedLanguage = "hi",
  companyName: string = "AmpEdge Solutions"
): GoogleMetaAnalysis {
  const query = rawTitle.trim() || "How to find electrician";

  // Language specific evolutions
  const evolutionsByLang: { [key in SupportedLanguage]: TitleEvolution[] } = {
    hi: [
      {
        level: 1,
        label: "मूल टाइटल (Raw Title)",
        title: query,
        ctrScore: 54,
        seoScore: 60,
        googleScore: 65,
        metaScore: 50,
        psychologicalTrigger: "साधारण सर्च (Generic Search)",
        intent: "Educational"
      },
      {
        level: 2,
        label: "Google SEO रैंक ऑप्टिमाइज़्ड (High Intent Search)",
        title: `घर के लिए बेस्ट इलेक्ट्रिशियन कैसे चुनें? (हाउस वायरिंग और रिपेयरिंग गाइड 2026)`,
        ctrScore: 88,
        seoScore: 96,
        googleScore: 98,
        metaScore: 78,
        psychologicalTrigger: "स्थानीय विश्वास और सही गाइड (Local Trust)",
        intent: "Local Inquiry"
      },
      {
        level: 3,
        label: "Meta / Instagram वायरल हुक (High Reel Retention)",
        title: `इलेक्ट्रिशियन बुलाने से पहले ये 3 गलतियां मत करना! ❌ (वरना होगा लाखों का नुकसान)`,
        ctrScore: 97,
        seoScore: 91,
        googleScore: 86,
        metaScore: 99,
        psychologicalTrigger: "डर और नुकसान से बचाव (Fear of Loss / Safety Alert)",
        intent: "High Viral Reel"
      },
      {
        level: 4,
        label: "AmpEdge B2B & AMC हाई-कन्वर्जन टाइटल (Direct Service Booking)",
        title: `घर और अपार्टमेंट की वायरिंग में शॉर्ट सर्किट से कैसे बचें? — ${companyName} इलेक्ट्रिकल AMC`,
        ctrScore: 96,
        seoScore: 98,
        googleScore: 97,
        metaScore: 94,
        psychologicalTrigger: "सुरक्षा + एक्सपर्ट अथॉरिटी (Authority & Safety Solution)",
        intent: "B2B AMC Lead"
      }
    ],
    bn: [
      {
        level: 1,
        label: "সাধারণ টাইটেল (Raw Title)",
        title: query,
        ctrScore: 52,
        seoScore: 58,
        googleScore: 62,
        metaScore: 48,
        psychologicalTrigger: "বেসিক সার্চ (Generic)",
        intent: "Educational"
      },
      {
        level: 2,
        label: "Google SEO অপ্টিমাইজড (Local Bengal Search)",
        title: `বাড়ি ও ফ্ল্যাটের জন্য অভিজ্ঞ ইলেকট্রিশিয়ান কীভাবে পাবেন? (House Wiring Guide 2026)`,
        ctrScore: 89,
        seoScore: 97,
        googleScore: 98,
        metaScore: 80,
        psychologicalTrigger: "বিশ্বাসযোগ্য লোকাল সার্ভিস (Trust & Local Intent)",
        intent: "Local Inquiry"
      },
      {
        level: 3,
        label: "Meta / Instagram ভাইরাল রিল টাইটেল (Viral Bengali Hook)",
        title: `বাড়ির ওয়্যারিং করানোর আগে এই ৩টি ভুল একদম করবেন না! ⚠️ (শর্ট সার্কিটের ঝুঁকি)`,
        ctrScore: 98,
        seoScore: 92,
        googleScore: 88,
        metaScore: 99,
        psychologicalTrigger: "শর্ট সার্কিট ভয় ও নিরাপত্তা (Safety Panic & Awareness)",
        intent: "High Viral Reel"
      },
      {
        level: 4,
        label: "AmpEdge AMC কনভার্সন টাইটেল (Direct Booking Lead)",
        title: `অ্যাপার্টমেন্ট ও ইন্ডাস্ট্রিয়াল ইলেকট্রিক্যাল AMC কীভাবে নেবেন? — ${companyName}`,
        ctrScore: 95,
        seoScore: 98,
        googleScore: 96,
        metaScore: 95,
        psychologicalTrigger: "সোসাইটি সুরক্ষা ও লং-টার্ম সাপোর্ট (Long-Term AMC Trust)",
        intent: "B2B AMC Lead"
      }
    ],
    en: [
      {
        level: 1,
        label: "Raw Title",
        title: query,
        ctrScore: 55,
        seoScore: 62,
        googleScore: 68,
        metaScore: 52,
        psychologicalTrigger: "Generic Informational",
        intent: "Educational"
      },
      {
        level: 2,
        label: "Google SEO Optimized (High Ranking Keywords)",
        title: `How to Find a Certified Electrician for House Wiring & AMC in 2026`,
        ctrScore: 91,
        seoScore: 98,
        googleScore: 99,
        metaScore: 82,
        psychologicalTrigger: "Certification & Credibility",
        intent: "Local Inquiry"
      },
      {
        level: 3,
        label: "Meta / Instagram Viral Hook",
        title: `3 House Wiring Red Flags You Should NEVER Ignore! ⚡ (Before It's Too Late)`,
        ctrScore: 98,
        seoScore: 90,
        googleScore: 85,
        metaScore: 99,
        psychologicalTrigger: "Urgency & Hazard Prevention",
        intent: "High Viral Reel"
      },
      {
        level: 4,
        label: "High-Ticket AMC & Industrial Booking Title",
        title: `Complete Electrical AMC & Safety Audit Solutions for Societies & Plants — ${companyName}`,
        ctrScore: 96,
        seoScore: 97,
        googleScore: 98,
        metaScore: 94,
        psychologicalTrigger: "Turnkey Maintenance & Peace of Mind",
        intent: "B2B AMC Lead"
      }
    ]
  };

  const descriptionsByLang = {
    hi: `क्या आप अपने घर, अपार्टमेंट या इंडस्ट्री के लिए सही इलेक्ट्रिशियन और इलेक्ट्रिकल मेंटेनेंस सर्विस ढूंढ रहे हैं?\n\n${companyName} आपके लिए लाता है कम्पलीट इलेक्ट्रिकल सॉल्यूशंस:\n⚡ हाउस वायरिंग और रेनोवेशन\n🏢 हाउसिंग सोसायटी और अपार्टमेंट इलेक्ट्रिकल AMC\n🏭 इंडस्ट्रियल पैनल मेंटेनेंस और सेफ्टी ऑडिट\n📦 ओरिजिनल इलेक्ट्रिकल मैटेरियल्स और केबल सप्लाई\n\n📌 इस वीडियो में जानिए सही इलेक्ट्रिशियन चुनने और शॉर्ट सर्किट से बचने के 3 गोल्डन रूल्स।\n\n📞 इमरजेंसी सर्विस या AMC कोटेशन के लिए अभी कॉल/व्हाट्सएप करें:\n🔗 वेबसाइट: https://ampedge.info\n📍 ${companyName} — विश्वसनीय इलेक्ट्रिकल सर्विसेज`,
    bn: `আপনার বাড়ি, অ্যাপার্টমেন্ট বা ইন্ডাস্ট্রির জন্য বিশ্বস্ত ইলেকট্রিশিয়ান ও ইলেকট্রিক্যাল এএমসি (AMC) সার্ভিস খুঁজছেন?\n\n${companyName} নিয়ে এসেছে সম্পূর্ণ ইলেকট্রিক্যাল সলিউশন:\n⚡ বাড়ি ও ফ্ল্যাটের ওয়্যারিং এবং রিপেয়ারিং\n🏢 হাউজিং সোসাইটি ও অ্যাপার্টমেন্ট ইলেকট্রিক্যাল AMC কন্ট্রাক্ট\n🏭 ইন্ডাস্ট্রিয়াল প্যানেল ও ফ্যাক্টরি মেনটেইনেন্স\n📦 অরিজিনাল ইলেকট্রিক্যাল মেটেরিয়ালস ও ওয়্যার সাপ্লাই\n\n📌 শর্ট সার্কিট ও দুর্ঘটনা এড়াতে ভিডিওটি এখনই সেভ করে রাখুন।\n\n📞 সার্ভিস বুকিং বা ফ্রি সাইট ভিজিটের জন্য যোগাযোগ করুন:\n🔗 ওয়েবসাইট: https://ampedge.info\n📍 ${companyName}`,
    en: `Looking for reliable residential or industrial electrical maintenance?\n\n${companyName} provides comprehensive turnkey electrical solutions:\n⚡ House Wiring & Smart Panel Installations\n🏢 Residential Apartment & Society Electrical AMC\n🏭 Industrial Power Distribution & Safety Audits\n📦 Premium Electrical Materials & Cable Supply\n\n📌 In this video, we break down critical electrical safety standards and how to choose certified electricians.\n\n📞 Book your inspection or get a custom AMC quote today:\n🔗 Website: https://ampedge.info\n📍 ${companyName} — Powering Safety & Efficiency`
  };

  const scriptsByLang = {
    hi: {
      visual: "कैमरा ज़ूम-इन: शॉर्ट सर्किट स्पार्क या जलता हुआ पुराना स्विचबोर्ड, साथ में बड़ा रेड टेक्स्ट: 'गलत वायरिंग ❌'",
      voiceover: "अगर आपके घर में बार-बार MCB ट्रिप हो रही है या वायरिंग पुरानी हो गई है, तो लोकल जुगाड़ मत करवाइए। जानिए सही इलेक्ट्रिशियन चुनने का तरीका!",
      cta: "स्क्रीन पर दिए नंबर पर अभी कॉल करें या नीचे 'AMC' कमेंट करें — AmpEdge Solutions की टीम 30 मिनट में सहायता करेगी!"
    },
    bn: {
      visual: "ক্যামেরা জুম: স্পার্কিং সুইচবোর্ড বা নষ্ট তারের ভিডিও, স্ক্রিনে বোল্ড রেড টেক্সট: 'সাবধান ⚠️'",
      voiceover: "বাড়িতে বা ফ্ল্যাটে বারবার শর্ট সার্কিট বা MCB ট্রিপ হচ্ছে? ভুলেও কোনো আনাড়ি ইলেকট্রিশিয়ান দিয়ে কাজ করাবেন না!",
      cta: "নিরাপদ ওয়্যারিং ও এএমসি সার্ভিসের জন্য আজই AmpEdge Solutions-এ যোগাযোগ করুন বা 'SERVICE' লিখে কমেন্ট করুন!"
    },
    en: {
      visual: "Snap zoom on a faulty circuit breaker with flashing red warning overlay: 'SAFETY HAZARD ⚠️'",
      voiceover: "Frequent power trips or outdated wiring in your apartment? Don't risk a fire hazard with uncertified fixes.",
      cta: "Save this reel and contact AmpEdge Solutions today for a certified electrical safety audit!"
    }
  };

  const tagsByLang = {
    hi: [
      "इलेक्ट्रिशियन", "हाउस वायरिंग", "इलेक्ट्रिकल सर्विस", "शॉर्ट सर्किट",
      "इलेक्ट्रिकल AMC", "AmpEdge Solutions", "अपार्टमेंट मेंटेनेंस", "इलेक्ट्रिकल मैटेरियल्स",
      "इलेक्ट्रिकल सेफ्टी टिप्स", "घर की वायरिंग"
    ],
    bn: [
      "ইলেকট্রিশিয়ান", "বাড়ি ওয়্যারিং", "ইলেকট্রিক্যাল সার্ভিস", "শর্ট সার্কিট সমাধান",
      "ইলেকট্রিক্যাল এএমসি", "AmpEdge Solutions", "ফ্ল্যাট ওয়্যারিং", "ইলেকট্রিক্যাল কেবল"
    ],
    en: [
      "electrician near me", "house wiring cost", "electrical AMC contract", "short circuit repair",
      "industrial electrical service", "AmpEdge Solutions", "apartment electrical maintenance", "electrical safety audit"
    ]
  };

  return {
    keyword: query,
    language: lang,
    googlePerformance: {
      monthlySearches: "145,000+ Monthly Searches (High Local Demand)",
      competition: "Low to Medium in Local Indian & Bengal Metro Markets",
      topRankingKeywords: [
        `${query} near me`,
        `best house wiring electrician`,
        `electrical AMC for housing society`,
        `industrial electrician services`,
        `electrical contractor ${companyName}`
      ],
      localMapIntent: "94% High Intent (Immediate phone call / WhatsApp inquiry)",
      searchTrend: "Surging +220% during summer & monsoon renovation seasons"
    },
    metaPerformance: {
      reelViralVelocity: "+410% Reel View Acceleration with Safety Warning Hooks",
      targetAgeGroup: "25 - 55 (Homeowners, Society Secretaries, Factory Managers)",
      bestVisualHook: "Sparking Switchboard / Burning Wire Contrast vs Clean Modular DB Panel",
      topHashtags: [
        "#HouseWiring", "#ElectricianLife", "#ElectricalSafety", "#AmpEdgeSolutions",
        "#HomeRenovation", "#ElectricalAMC", "#KolkataElectrician", "#IndustrialElectrical"
      ],
      engagementRate: "8.4% (Above average save-to-view ratio on safety checklists)"
    },
    titleEvolution: evolutionsByLang[lang] || evolutionsByLang.hi,
    recommendedScriptHook: scriptsByLang[lang] || scriptsByLang.hi,
    fullSeoDescription: descriptionsByLang[lang] || descriptionsByLang.hi,
    exactTags: tagsByLang[lang] || tagsByLang.hi
  };
}
