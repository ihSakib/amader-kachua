import React from "react";

const Page = () => {
  const kachuaWebsites = [
    {
      institution: "কচুয়া উপজেলা প্রশাসন",
      link: "https://kachua.chandpur.gov.bd/",
    },
    {
      institution: "উপজেলা নির্বাচন অফিস, কচুয়া, চাঁদপুর",
      link: "https://ec.kachua.chandpur.gov.bd",
    },
    {
      institution: "কচুয়া উপজেলা স্বাস্থ্য কমপ্লেক্স",
      link: "https://hrm.dghs.gov.bd/public/facility-registry/facilities/710/profile?tab=detailed-information",
    },
    {
      institution: "কচুয়া উপজেলা পর্যটন তথ্য",
      link: "https://www.bangladesh.gov.bd/index.php?r=site/page&view=kachua-tourism",
    },
    {
      institution: "কচুয়া পৌরসভা",
      link: "https://kachuaupazilla.gov.bd/",
    },
    {
      institution: "কচুয়া উপজেলা যুব উন্নয়ন অধিদপ্তর",
      link: "https://www.dyd.gov.bd/site/page/5b943f08-56f1-4a3c-bb91-dfa6956ebedb",
    },
    {
      institution: "কচুয়া উপজেলা কৃষি অফিস",
      link: "https://www.dae.gov.bd/site/page/9c41c7ed-8f2e-4cfd-bc4b-78b5d04eae69",
    },
    {
      institution: "কচুয়া উপজেলা শিক্ষা অফিস",
      link: "https://www.dpe.gov.bd/dpe/view/news-details/2356",
    },
  ];

  const bdWebsites = [
    {
      institution: "বাংলাদেশ জাতীয় তথ্য বাতায়ন",
      link: "https://www.bangladesh.gov.bd/",
    },
    { institution: "বাংলাদেশ নির্বাচন কমিশন", link: "https://www.ecs.gov.bd/" },
    {
      institution: "বাংলাদেশ জাতীয় সংসদ",
      link: "http://www.parliament.gov.bd/",
    },
    {
      institution: "বাংলাদেশ স্বাস্থ্য অধিদপ্তর",
      link: "https://dghs.gov.bd/",
    },
    { institution: "বাংলাদেশ ব্যাংক", link: "https://www.bb.org.bd/" },
    { institution: "বাংলাদেশ পুলিশ", link: "https://www.police.gov.bd/" },
    {
      institution: "বাংলাদেশ পর্যটন কর্পোরেশন",
      link: "https://tourismboard.gov.bd/",
    },
    { institution: "জাতীয় বিশ্ববিদ্যালয়", link: "http://www.nu.ac.bd/" },
    { institution: "প্রাথমিক শিক্ষা অধিদপ্তর", link: "http://www.dpe.gov.bd/" },
    {
      institution: "বাংলাদেশ বিনিয়োগ উন্নয়ন কর্তৃপক্ষ (BIDA)",
      link: "http://www.bida.gov.bd/",
    },
    { institution: "বাংলাদেশ রেলওয়ে", link: "https://railway.gov.bd/" },
    {
      institution: "বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড (BPDB)",
      link: "http://www.bpdb.gov.bd/",
    },
    { institution: "বাংলাদেশ পরিবেশ অধিদপ্তর", link: "http://www.doe.gov.bd/" },
    {
      institution: "বাংলাদেশ পাসপোর্ট অফিস",
      link: "https://www.passport.gov.bd/",
    },
    {
      institution: "বাংলাদেশ পরিসংখ্যান ব্যুরো",
      link: "http://www.bbs.gov.bd/",
    },
    {
      institution: "বাংলাদেশ সড়ক পরিবহন কর্তৃপক্ষ (BRTA)",
      link: "https://brta.gov.bd/",
    },
    {
      institution: "বাংলাদেশ ডাক বিভাগ",
      link: "http://www.bangladeshpost.gov.bd/",
    },
    {
      institution: "বাংলাদেশ কৃষি গবেষণা কাউন্সিল",
      link: "http://www.barc.gov.bd/",
    },
    {
      institution: "বাংলাদেশ রেড ক্রিসেন্ট সোসাইটি",
      link: "https://www.bdrcs.org/",
    },
    {
      institution: "বাংলাদেশ টেলিযোগাযোগ নিয়ন্ত্রণ কমিশন (BTRC)",
      link: "http://www.btrc.gov.bd/",
    },
    {
      institution: "ঢাকা স্টক এক্সচেঞ্জ (DSE)",
      link: "https://www.dsebd.org/",
    },
    {
      institution: "চট্টগ্রাম স্টক এক্সচেঞ্জ (CSE)",
      link: "https://www.cse.com.bd/",
    },
    { institution: "বাংলাদেশ বিমান", link: "https://www.biman-airlines.com/" },
    {
      institution: "বাংলাদেশ ক্ষুদ্র ও কুটির শিল্প কর্পোরেশন (BSCIC)",
      link: "http://www.bscic.gov.bd/",
    },
    {
      institution: "বাংলাদেশ পর্যটন বোর্ড",
      link: "https://www.visitbangladesh.gov.bd/",
    },
    { institution: "ইনফো সরকার প্রকল্প", link: "https://a2i.gov.bd/" },
    {
      institution: "মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর",
      link: "http://www.dshe.gov.bd/",
    },
    {
      institution: "ইসলামিক ফাউন্ডেশন বাংলাদেশ",
      link: "http://www.islamicfoundation.gov.bd/",
    },
    {
      institution: "বাংলাদেশ সরকারি কর্ম কমিশন (PSC)",
      link: "http://www.bpsc.gov.bd/",
    },
    {
      institution: "বাংলাদেশ মান নিয়ন্ত্রণ সংস্থা (BSTI)",
      link: "http://www.bsti.gov.bd/",
    },
    { institution: "বাংলাদেশ টেলিভিশন (BTV)", link: "http://www.btv.gov.bd/" },
    {
      institution: "বাংলাদেশ রপ্তানি উন্নয়ন ব্যুরো (EPB)",
      link: "http://www.epb.gov.bd/",
    },
    {
      institution: "বাংলাদেশ ফায়ার সার্ভিস ও সিভিল ডিফেন্স",
      link: "http://www.fireservice.gov.bd/",
    },
    { institution: "বাংলাদেশ জাতীয় আর্কাইভ", link: "http://www.nanl.gov.bd/" },
    {
      institution: "বাংলাদেশ ধান গবেষণা ইনস্টিটিউট (BRRI)",
      link: "http://www.brri.gov.bd/",
    },
    {
      institution: "বাংলাদেশ কৃষি বিশ্ববিদ্যালয় (BAU)",
      link: "http://www.bau.edu.bd/",
    },
    {
      institution: "বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ (BCSIR)",
      link: "http://www.bcsir.gov.bd/",
    },
    {
      institution: "বাংলাদেশ মৎস্য গবেষণা ইনস্টিটিউট (BFRI)",
      link: "http://www.fri.gov.bd/",
    },
    {
      institution: "বাংলাদেশ কৃষি উন্নয়ন কর্পোরেশন (BADC)",
      link: "http://www.badc.gov.bd/",
    },
    {
      institution: "বাংলাদেশ রপ্তানি প্রক্রিয়াকরণ অঞ্চল কর্তৃপক্ষ (BEPZA)",
      link: "http://www.bepza.gov.bd/",
    },
    { institution: "বাংলাদেশ শ্রম অধিদপ্তর", link: "http://www.dol.gov.bd/" },
    { institution: "বাংলাদেশ আইসিটি বিভাগ", link: "https://ictd.gov.bd/" },
    {
      institution: "বাংলাদেশ কারিগরি শিক্ষা বোর্ড",
      link: "http://www.bteb.gov.bd/",
    },
    {
      institution: "জাতীয় বিজ্ঞান ও প্রযুক্তি জাদুঘর",
      link: "http://www.nmst.gov.bd/",
    },
    { institution: "জাতীয় গ্রন্থাগার", link: "http://www.library.gov.bd/" },
    {
      institution: "বাংলাদেশ ডাক্তারি গবেষণা ইনস্টিটিউট",
      link: "http://www.nih.gov.bd/",
    },
    { institution: "তথ্য অধিকার আইন", link: "http://www.infocom.gov.bd/" },
  ];

  return (
    <div className="flex gap-4 md:gap-6 lg:gap-10 flex-col pt-2 md:pt-4 pb-10 px-4 bg-gray-100  items-center">
      <div className="max-w-screen-lg w-full">
        <div className="overflow-hidden w-full  shadow-lg rounded-lg">
          <table className="table w-full text-center">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-3">প্রতিষ্ঠান</th>
                <th className="py-3">লিংক</th>
              </tr>
            </thead>
            <tbody>
              {kachuaWebsites.map((site, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                  } hover:bg-gray-200`}
                >
                  <td className="py-2 text-sm md:text-base md:py-3 px-4 md:px-6 font-medium  overflow-x-auto">
                    {site.institution}
                  </td>
                  <td className="py-2 text-sm md:text-base md:py-3 px-4 md:px-6 overflow-x-auto">
                    <a
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {site.link.slice(0, 30)}...
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="max-w-screen-lg w-full mt-2 md:mt-4">
        <h2 className="text-2xl font-bold  text-center mb-4 text-gray-800">
          গুরুত্বপূর্ণ ওয়েবসাইট সমূহ
        </h2>
        <div className="overflow-hidden w-full  shadow-lg rounded-lg">
          <table className="table w-full text-center">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-3">প্রতিষ্ঠান</th>
                <th className="py-3">লিংক</th>
              </tr>
            </thead>
            <tbody>
              {bdWebsites.map((site, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                  } hover:bg-gray-200`}
                >
                  <td className="py-2 text-sm md:text-base md:py-3 px-4 md:px-6 font-medium  overflow-x-auto">
                    {site.institution}
                  </td>
                  <td className="py-2 text-sm md:text-base md:py-3 px-4 md:px-6 overflow-x-auto">
                    <a
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {site.link.slice(0, 30)}...
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
