const doctors = [
  {
    id: 1,
    name: "ডাঃ ইমরান হোসেন",
    specialty: "হৃদরোগ বিশেষজ্ঞ",
    location: "ঢাকা মেডিকেল সেন্টার, ঢাকা",
    contact: {
      phone: "০১৭১২৩৪৫৬৭৮",
      email: "imran.hossain@dhakamedical.com",
    },
    availability: [
      { day: "সোমবার", time: "৯:০০ AM - ৫:০০ PM" },
      { day: "বুধবার", time: "৯:০০ AM - ৫:০০ PM" },
      { day: "শুক্রবার", time: "৯:০০ AM - ২:০০ PM" },
    ],
  },
  {
    id: 2,
    name: "ডাঃ মেহজাবিন চৌধুরী",
    specialty: "ত্বক বিশেষজ্ঞ",
    location: "চিটাগাং স্কিন ক্লিনিক, চট্টগ্রাম",
    contact: {
      phone: "০১৮১২৩৪৫৬৭৮",
      email: "mehzabin.chowdhury@ctgclinic.com",
    },
    availability: [
      { day: "মঙ্গলবার", time: "১০:০০ AM - ৪:০০ PM" },
      { day: "বৃহস্পতিবার", time: "১০:০০ AM - ৪:০০ PM" },
    ],
  },
  {
    id: 3,
    name: "ডাঃ মাইশা রহমান",
    specialty: "শিশু বিশেষজ্ঞ",
    location: "সিলেট শিশু হাসপাতাল, সিলেট",
    contact: {
      phone: "০১৯১২৩৪৫৬৭৮",
      email: "maisha.rahman@syletchildcare.com",
    },
    availability: [
      { day: "সোমবার", time: "৮:০০ AM - ৩:০০ PM" },
      { day: "শুক্রবার", time: "৮:০০ AM - ৩:০০ PM" },
    ],
  },
  {
    id: 4,
    name: "ডাঃ তানভীর আহমেদ",
    specialty: "অস্থি বিশেষজ্ঞ",
    location: "খুলনা অর্থো ক্লিনিক, খুলনা",
    contact: {
      phone: "০১৬১২৩৪৫৬৭৮",
      email: "tanvir.ahmed@khulnaortho.com",
    },
    availability: [
      { day: "বুধবার", time: "১১:০০ AM - ৬:০০ PM" },
      { day: "বৃহস্পতিবার", time: "৯:০০ AM - ১:০০ PM" },
    ],
  },
  {
    id: 5,
    name: "ডাঃ ফাহিমা সুলতানা",
    specialty: "মানসিক স্বাস্থ্য বিশেষজ্ঞ",
    location: "রাজশাহী মাইন্ডওয়েল ক্লিনিক, রাজশাহী",
    contact: {
      phone: "০১৫১২৩৪৫৬৭৮",
      email: "fahima.sultana@mindwellrajshahi.com",
    },
    availability: [
      { day: "মঙ্গলবার", time: "১:০০ PM - ৭:০০ PM" },
      { day: "বৃহস্পতিবার", time: "১:০০ PM - ৭:০০ PM" },
    ],
  },
  {
    id: 6,
    name: "ডাঃ সাঈদ আনোয়ার",
    specialty: "নিউরোলজিস্ট",
    location: "ঢাকা নিউরো ক্লিনিক, ঢাকা",
    contact: {
      phone: "০১৪১২৩৪৫৬৭৮",
      email: "saeed.anwar@dhakaneuro.com",
    },
    availability: [
      { day: "সোমবার", time: "১০:০০ AM - ৫:০০ PM" },
      { day: "বুধবার", time: "১০:০০ AM - ৫:০০ PM" },
    ],
  },
  {
    id: 7,
    name: "ডাঃ কামরুল ইসলাম",
    specialty: "চক্ষু বিশেষজ্ঞ",
    location: "জাতীয় চক্ষু ইনস্টিটিউট, ঢাকা",
    contact: {
      phone: "০১৭৬৫৪৩২১০৯",
      email: "kamrul.islam@eyeinstitute.com",
    },
    availability: [
      { day: "রবিবার", time: "৯:০০ AM - ৩:০০ PM" },
      { day: "বুধবার", time: "১০:০০ AM - ৪:০০ PM" },
    ],
  },
  {
    id: 8,
    name: "ডাঃ তানিয়া হক",
    specialty: "ক্যান্সার বিশেষজ্ঞ",
    location: "ইব্রাহিম কার্ডিয়াক হাসপাতাল, ঢাকা",
    contact: {
      phone: "০১৮৭৬৫৪৩২১০",
      email: "tania.haque@ibrahimhospital.com",
    },
    availability: [
      { day: "মঙ্গলবার", time: "৯:০০ AM - ৫:০০ PM" },
      { day: "বৃহস্পতিবার", time: "১০:০০ AM - ৩:০০ PM" },
    ],
  },
  {
    id: 9,
    name: "ডাঃ আরিফুল হক",
    specialty: "এন্ডোক্রাইনোলজিস্ট",
    location: "বারডেম হাসপাতাল, ঢাকা",
    contact: {
      phone: "০১৯৭৬৫৪৩২১০",
      email: "ariful.haque@bardem.com",
    },
    availability: [
      { day: "সোমবার", time: "১১:০০ AM - ৪:০০ PM" },
      { day: "শুক্রবার", time: "৯:০০ AM - ২:০০ PM" },
    ],
  },
  {
    id: 10,
    name: "ডাঃ মুশফিক রহমান",
    specialty: "অ্যানেস্থেসিয়োলজিস্ট",
    location: "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল, চট্টগ্রাম",
    contact: {
      phone: "০১৩৪৫৬৭৮৯০৯",
      email: "mushfiq.rahman@cmch.com",
    },
    availability: [
      { day: "শনিবার", time: "১০:০০ AM - ৫:০০ PM" },
      { day: "রবিবার", time: "৯:০০ AM - ২:০০ PM" },
    ],
  },
  {
    id: 11,
    name: "ডাঃ রুবিনা আক্তার",
    specialty: "স্ত্রীরোগ বিশেষজ্ঞ",
    location: "সিটি হাসপাতালে, খুলনা",
    contact: {
      phone: "০১৭৭৮৯০৯৮৭৬",
      email: "rubina.akhtar@cityhospital.com",
    },
    availability: [
      { day: "বুধবার", time: "১০:০০ AM - ৬:০০ PM" },
      { day: "শনিবার", time: "৮:০০ AM - ২:০০ PM" },
    ],
  },
  {
    id: 12,
    name: "ডাঃ ইকরাম হোসেন",
    specialty: "সার্জন",
    location: "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল, ময়মনসিংহ",
    contact: {
      phone: "০১৭৯৮৭৬৫৪৩২১",
      email: "ikram.hossain@mymmedical.com",
    },
    availability: [
      { day: "মঙ্গলবার", time: "৯:০০ AM - ৫:০০ PM" },
      { day: "বৃহস্পতিবার", time: "১১:০০ AM - ৪:০০ PM" },
    ],
  },
  {
    id: 13,
    name: "ডাঃ আরিফা সুলতানা",
    specialty: "ইউরোলজিস্ট",
    location: "জাতীয় কিডনি ইনস্টিটিউট, ঢাকা",
    contact: {
      phone: "০১৬৫৪৩২১০৯৮৭",
      email: "arifa.sultana@kidneyinstitute.com",
    },
    availability: [
      { day: "রবিবার", time: "১০:০০ AM - ৫:০০ PM" },
      { day: "বৃহস্পতিবার", time: "৯:০০ AM - ৩:০০ PM" },
    ],
  },
  {
    id: 14,
    name: "ডাঃ ইমরান চৌধুরী",
    specialty: "বক্ষব্যাধি বিশেষজ্ঞ",
    location: "রাজশাহী মেডিকেল কলেজ হাসপাতাল, রাজশাহী",
    contact: {
      phone: "০১৭৩৪৫৬৭৮৯০৯",
      email: "imran.chowdhury@rmch.com",
    },
    availability: [
      { day: "সোমবার", time: "৯:০০ AM - ৪:০০ PM" },
      { day: "বৃহস্পতিবার", time: "১০:০০ AM - ৫:০০ PM" },
    ],
  },
  {
    id: 15,
    name: "ডাঃ ফারহানা শবনম",
    specialty: "বাত বিশেষজ্ঞ",
    location: "পপুলার ডায়াগনস্টিক সেন্টার, ঢাকা",
    contact: {
      phone: "০১৮৭৬৫৪৩২১০",
      email: "farhana.shabnam@populardiagnostic.com",
    },
    availability: [
      { day: "শনিবার", time: "১০:০০ AM - ৫:০০ PM" },
      { day: "মঙ্গলবার", time: "১১:০০ AM - ৪:০০ PM" },
    ],
  },
  {
    id: 16,
    name: "ডাঃ ওয়াহিদুর রহমান",
    specialty: "হেমাটোলজিস্ট",
    location: "ইবনে সিনা হাসপাতাল, সিলেট",
    contact: {
      phone: "০১৭৪৩২১০৯৮৭৬",
      email: "wahidur.rahman@ibnesina.com",
    },
    availability: [
      { day: "বুধবার", time: "৯:০০ AM - ৪:০০ PM" },
      { day: "শুক্রবার", time: "৯:০০ AM - ২:০০ PM" },
    ],
  },
  {
    id: 17,
    name: "ডাঃ সেলিম খান",
    specialty: "রেডিওলজিস্ট",
    location: "ঢাকা মেডিকেল কলেজ হাসপাতাল, ঢাকা",
    contact: {
      phone: "০১৭১২৩৪৫৬৭৮৯",
      email: "selim.khan@dmch.com",
    },
    availability: [
      { day: "শনিবার", time: "৯:০০ AM - ৫:০০ PM" },
      { day: "রবিবার", time: "১০:০০ AM - ৪:০০ PM" },
    ],
  },
  {
    id: 18,
    name: "ডাঃ সামিরা আক্তার",
    specialty: "প্যাথলজিস্ট",
    location: "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়, ঢাকা",
    contact: {
      phone: "০১৮৯৮৭৬৫৪৩২১",
      email: "samira.akhtar@bsmmu.com",
    },
    availability: [
      { day: "সোমবার", time: "৯:০০ AM - ৪:০০ PM" },
      { day: "বুধবার", time: "১০:০০ AM - ৫:০০ PM" },
    ],
  },
  {
    id: 19,
    name: "ডাঃ লুবনা হাসান",
    specialty: "কিডনি বিশেষজ্ঞ",
    location: "ইউনাইটেড হাসপাতাল, ঢাকা",
    contact: {
      phone: "০১৯৭৬৫৪৩২১০৯",
      email: "lubna.hasan@unitedhospital.com",
    },
    availability: [
      { day: "রবিবার", time: "৯:০০ AM - ৩:০০ PM" },
      { day: "বৃহস্পতিবার", time: "৯:০০ AM - ২:০০ PM" },
    ],
  },
  {
    id: 20,
    name: "ডাঃ জাহিদুল ইসলাম",
    specialty: "গ্যাস্ট্রোলজিস্ট",
    location: "এপোলো হাসপাতাল, ঢাকা",
    contact: {
      phone: "০১৬৫৪৩২১০৯৮৭",
      email: "zahidul.islam@apollodhaka.com",
    },
    availability: [
      { day: "মঙ্গলবার", time: "১০:০০ AM - ৫:০০ PM" },
      { day: "বৃহস্পতিবার", time: "১১:০০ AM - ৪:০০ PM" },
    ],
  },
];

const policeStations = [
  {
    name: "কচুয়া থানা",
    location: "কচুয়া উপজেলা, চাঁদপুর",
    phone: "০২৩৩৪৪৮৯৩২২",
    mobile: "০১৯০১-০২১৭৬৫",
    telMobile: "tel:01901021765",
    color: "orange", // Adding a color property to "কচুয়া থানা"
  },
  {
    name: "শাহরাস্তি থানা",
    location: "শাহরাস্তি উপজেলা, চাঁদপুর",
    phone: "০২৩৩৪৪৮৮৮৭৭",
    mobile: "০১৯০১-০২১৭৬৯",
    telMobile: "tel:01901021769",
    color: "blue", // Adding color for the others
  },
  {
    name: "মতলব উত্তর থানা",
    location: "মতলব উত্তর উপজেলা, চাঁদপুর",
    phone: "০২৩৩৪৪৮৮৮৬৬",
    mobile: "০১৯০১-০২১৭৭১",
    telMobile: "tel:01901021771",
    color: "blue", // Adding color for the others
  },
  {
    name: "হাজীগঞ্জ থানা",
    location: "হাজীগঞ্জ উপজেলা, চাঁদপুর",
    phone: "০২৩৩৪৪৮৮৩৩৩",
    mobile: "০১৯০১-০২১৭৬১",
    telMobile: "tel:01901021761",
    color: "blue", // Adding color for the others
  },
];

const fireStations = [
  {
    name: "কচুয়া ফায়ার স্টেশন",
    location: "কচুয়া উপজেলা, চাঁদপুর",
    phone: "০২৩৩৪৪৮৯৩২২",
    mobile: "০১৯০১-০২১৭৬৫",
    telMobile: "tel:01901021765",
    color: "orange", // Adding a color property to "কচুয়া ফায়ার স্টেশন"
  },
  {
    name: "শাহরাস্তি ফায়ার স্টেশন",
    location: "শাহরাস্তি উপজেলা, চাঁদপুর",
    phone: "০২৩৩৪৪৮৮৮৭৭",
    mobile: "০১৯০১-০২১৭৬৯",
    telMobile: "tel:01901021769",
    color: "blue", // Adding color for the others
  },
  {
    name: "মতলব উত্তর ফায়ার স্টেশন",
    location: "মতলব উত্তর উপজেলা, চাঁদপুর",
    phone: "_", // No phone number provided
    mobile: "০১৯০১-০২১৭৭১",
    telMobile: "tel:01901021771",
    color: "blue", // Adding color for the others
  },
  {
    name: "হাজীগঞ্জ ফায়ার স্টেশন",
    location: "হাজীগঞ্জ উপজেলা, চাঁদপুর",
    phone: "০২৩৩৪৪৮৮৩৩৩",
    mobile: "০১৯০১-০২১৭৬১",
    telMobile: "tel:01901021761",
    color: "blue", // Adding color for the others
  },
];

const eduInstitutions = [
  {
    id: 1,
    name: "আলোর দিশারী স্কুল",
    institutionType: "স্কুল",
    location: "ঢাকা",
  },
  {
    id: 2,
    name: "চট্টগ্রাম উচ্চ বিদ্যালয়",
    institutionType: "স্কুল",
    location: "চট্টগ্রাম",
  },
  {
    id: 3,
    name: "রাজশাহী কলেজ",
    institutionTypeType: "কলেজ",
    location: "রাজশাহী",
  },
  {
    id: 4,
    name: "খুলনা কারিগরি পলিটেকনিক",
    institutionType: "পলিটেকনিক্যাল",
    location: "খুলনা",
  },
  {
    id: 5,
    name: "বরিশাল ইসলামী মাদ্রাসা",
    institutionType: "মাদ্রাসা",
    location: "বরিশাল",
  },
  {
    id: 6,
    name: "সিলেট পলিটেকনিক ইনস্টিটিউট",
    institutionType: "পলিটেকনিক্যাল",
    location: "সিলেট",
  },
  {
    id: 7,
    name: "রংপুর সরকারি কলেজ",
    institutionType: "কলেজ",
    location: "রংপুর",
  },
  {
    id: 8,
    name: "ময়মনসিংহ বিজ্ঞান বিদ্যালয়",
    institutionType: "স্কুল",
    location: "ময়মনসিংহ",
  },
  {
    id: 9,
    name: "বগুড়া আলিয়া মাদ্রাসা",
    institutionType: "মাদ্রাসা",
    location: "বগুড়া",
  },
  {
    id: 10,
    name: "কুমিল্লা কারিগরি প্রশিক্ষণ কেন্দ্র",
    institutionType: "পলিটেকনিক্যাল",
    location: "কুমিল্লা",
  },
  {
    id: 11,
    name: "জাতীয় আদর্শ স্কুল",
    institutionType: "স্কুল",
    location: "ঢাকা",
  },
  {
    id: 12,
    name: "আধুনিক চট্টগ্রাম কলেজ",
    institutionType: "কলেজ",
    location: "চট্টগ্রাম",
  },
  {
    id: 13,
    name: "রাজশাহী কারিগরি প্রশিক্ষণ কেন্দ্র",
    institutionType: "পলিটেকনিক্যাল",
    location: "রাজশাহী",
  },
  {
    id: 14,
    name: "খুলনা আলিয়া মাদ্রাসা",
    institutionType: "মাদ্রাসা",
    location: "খুলনা",
  },
  {
    id: 15,
    name: "বরিশাল উচ্চ বিদ্যালয়",
    institutionType: "স্কুল",
    location: "বরিশাল",
  },
  {
    id: 16,
    name: "সিলেট সরকারি কলেজ",
    institutionType: "কলেজ",
    location: "সিলেট",
  },
  {
    id: 17,
    name: "রংপুর কারিগরি পলিটেকনিক",
    institutionType: "পলিটেকনিক্যাল",
    location: "রংপুর",
  },
  {
    id: 18,
    name: "ময়মনসিংহ ইসলামী মাদ্রাসা",
    institutionType: "মাদ্রাসা",
    location: "ময়মনসিংহ",
  },
  {
    id: 19,
    name: "বগুড়া বিজ্ঞান বিদ্যালয়",
    institutionType: "স্কুল",
    location: "বগুড়া",
  },
  {
    id: 20,
    name: "কুমিল্লা সরকারি কলেজ",
    institutionType: "কলেজ",
    location: "কুমিল্লা",
  },
  {
    id: 21,
    name: "আল-ইসলাম মাদ্রাসা",
    institutionType: "মাদ্রাসা",
    location: "ঢাকা",
  },
  {
    id: 22,
    name: "আধুনিক বিজ্ঞান স্কুল",
    institutionType: "স্কুল",
    location: "চট্টগ্রাম",
  },
  {
    id: 23,
    name: "জাতীয় প্রযুক্তি পলিটেকনিক",
    institutionType: "পলিটেকনিক্যাল",
    location: "রাজশাহী",
  },
  {
    id: 24,
    name: "খুলনা উচ্চ বিদ্যালয়",
    institutionType: "স্কুল",
    location: "খুলনা",
  },
  {
    id: 25,
    name: "বরিশাল আলিয়া মাদ্রাসা",
    institutionType: "মাদ্রাসা",
    location: "বরিশাল",
  },
  {
    id: 26,
    name: "সিলেট আধুনিক কলেজ",
    institutionType: "কলেজ",
    location: "সিলেট",
  },
  {
    id: 27,
    name: "রংপুর বিজ্ঞান স্কুল",
    institutionType: "স্কুল",
    location: "রংপুর",
  },
  {
    id: 28,
    name: "ময়মনসিংহ কারিগরি প্রশিক্ষণ কেন্দ্র",
    institutionType: "পলিটেকনিক্যাল",
    location: "ময়মনসিংহ",
  },
  {
    id: 29,
    name: "বগুড়া সরকারি কলেজ",
    institutionType: "কলেজ",
    location: "বগুড়া",
  },
  {
    id: 30,
    name: "কুমিল্লা উচ্চ বিদ্যালয়",
    institutionType: "স্কুল",
    location: "কুমিল্লা",
  },
  {
    id: 31,
    name: "ঢাকা কারিগরি পলিটেকনিক",
    institutionType: "পলিটেকনিক্যাল",
    location: "ঢাকা",
  },
  {
    id: 32,
    name: "চট্টগ্রাম ইসলামী মাদ্রাসা",
    institutionType: "মাদ্রাসা",
    location: "চট্টগ্রাম",
  },
  {
    id: 33,
    name: "রাজশাহী সরকারি কলেজ",
    institutionType: "কলেজ",
    location: "রাজশাহী",
  },
  {
    id: 34,
    name: "খুলনা আধুনিক স্কুল",
    institutionType: "স্কুল",
    location: "খুলনা",
  },
  {
    id: 35,
    name: "বরিশাল বিজ্ঞান কলেজ",
    institutionType: "কলেজ",
    location: "বরিশাল",
  },
  {
    id: 36,
    name: "সিলেট কারিগরি পলিটেকনিক",
    institutionType: "পলিটেকনিক্যাল",
    location: "সিলেট",
  },
  {
    id: 37,
    name: "রংপুর আদর্শ মাদ্রাসা",
    institutionType: "মাদ্রাসা",
    location: "রংপুর",
  },
  {
    id: 38,
    name: "ময়মনসিংহ সরকারি বিদ্যালয়",
    institutionType: "স্কুল",
    location: "ময়মনসিংহ",
  },
  {
    id: 39,
    name: "বগুড়া বিজ্ঞান কলেজ",
    institutionType: "কলেজ",
    location: "বগুড়া",
  },
  {
    id: 40,
    name: "কুমিল্লা আধুনিক পলিটেকনিক",
    institutionType: "পলিটেকনিক্যাল",
    location: "কুমিল্লা",
  },
  {
    id: 41,
    name: "সৃজনশীল পাঠাগার",
    institutionType: "অন্যান্য",
    location: "ঢাকা",
  },
  {
    id: 42,
    name: "চট্টগ্রাম বিজ্ঞান ক্লাব",
    institutionType: "অন্যান্য",
    location: "চট্টগ্রাম",
  },
  {
    id: 43,
    name: "রাজশাহী সংগীত একাডেমি",
    institutionType: "অন্যান্য",
    location: "রাজশাহী",
  },
  {
    id: 44,
    name: "খুলনা যুব প্রশিক্ষণ কেন্দ্র",
    institutionType: "অন্যান্য",
    location: "খুলনা",
  },
  {
    id: 45,
    name: "বরিশাল কারুশিল্প কেন্দ্র",
    institutionType: "অন্যান্য",
    location: "বরিশাল",
  },
  {
    id: 46,
    name: "সিলেট সংস্কৃতি চর্চা কেন্দ্র",
    institutionType: "অন্যান্য",
    location: "সিলেট",
  },
  {
    id: 47,
    name: "রংপুর সাহিত্য একাডেমি",
    institutionType: "অন্যান্য",
    location: "রংপুর",
  },
  {
    id: 48,
    name: "ময়মনসিংহ প্রযুক্তি গবেষণা কেন্দ্র",
    institutionType: "অন্যান্য",
    location: "ময়মনসিংহ",
  },
  {
    id: 49,
    name: "বগুড়া কম্পিউটার ক্লাব",
    institutionType: "অন্যান্য",
    location: "বগুড়া",
  },
  {
    id: 50,
    name: "কুমিল্লা যুব উন্নয়ন কেন্দ্র",
    institutionType: "অন্যান্য",
    location: "কুমিল্লা",
  },
];

export default function fetchData(type, id) {
  if (id == undefined) {
    switch (type) {
      case "doctors":
        return doctors;
        break;
      case "police-stations":
        return policeStations;
        break;
      case "fire-stations":
        return fireStations;
        break;
      case "edu-institutions":
        return eduInstitutions;
        break;
      default:
        break;
    }
  } else {
    switch (type) {
      case "doctors":
        return doctors.find((doctor) => doctor.id == id);
        break;
      case "edu-institutions":
        return eduInstitutions.find((institution) => institution.id == id);
        break;
      default:
        break;
    }
  }
}
