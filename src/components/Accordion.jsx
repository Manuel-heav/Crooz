import React, { useState } from "react";

const Accordion = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-[#d8c2b6] pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] px-10">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-[40px]/[48px] text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-orange-400 amharic">
                ጥያቄ አሎት?
              </h2>
              <p className="text-base text-body-color dark:text-dark-6 amharic">
              እርስዎ ሊኖሩዎት ከሚችሉት አንዳንድ ጥያቄዎች ጋር የሚዛመዱ መሆናቸውን ለማየት በብዛት የሚጠየቁትን ጥያቄዎቻችንን ይመልከቱ።
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="ከአገልግሎት ጋር በተያያዙ ጥያቄዎች ወይም ስጋቶች ውስጥ ወላጆች የ ክሩዝን የደንበኛ ድጋፍ ለማግኘት ምን ቻናሎች አሉ?"
              text="ስለ መርሐግብር፣ የአሽከርካሪ ዝርዝሮች ወይም ስለማንኛውም ከአገልግሎት ጋር በተያያዙ ጉዳዮች ላይ ጥያቄዎች ካልዎት፣ ክሩዝ የስልክ ድጋፍን፣ ኢሜይልን እና የተወሰነ የውስጠ-መተግበሪያ መልዕክት መላላኪያ ባህሪን ጨምሮ በርካታ የግንኙነት ሰርጦችን ያቀርባል።"
            />
            <AccordionItem
              header="ለወላጆች ለግል የተበጁ የመጓጓዣ ምርጫዎች ወይም ለልጆቻቸው ጉዞ ልዩ መስፈርቶች ከ ክሩዝ ጋር ለመወያየት የተለየ የግንኙነት ነጥብ አለ?"
              text="ክሩዝ እያንዳንዱ ቤተሰብ ልዩ መሆኑን ተረድቷል፣ እና ስለ ግላዊ ምርጫዎች ወይም ልዩ መስፈርቶች ውይይቶችን በደስታ እንቀበላለን። ወላጆች በቀላሉ በመተግበሪያው የመልእክት መላላኪያ ባህሪ ወይም የኛን የድጋፍ ቡድን በመገናኘት እንደዚህ አይነት ዝርዝሮችን በቀላሉ ማሳወቅ ይችላሉ።"
            />
            <AccordionItem
              header="የልጃቸውን የመጓጓዣ መርሃ ግብር በ ክሩዝ ማዘመን ወይም ማሻሻል ለሚያስፈልጋቸው ወላጆች የተለየ የመገናኛ መንገዶች አሉ?"
              text="ክሮዝ መርሃ ግብሮች ሊለወጡ እንደሚችሉ ተረድቷል። ወላጆች ያለልፋት የልጃቸውን የመጓጓዣ መርሃ ግብር በመተግበሪያው ማዘመን ወይም ማሻሻል ይችላሉ። ለማንኛውም ተጨማሪ እርዳታ ወይም የጊዜ ሰሌዳ ለውጦችን ለመወያየት፣ ለእርስዎ እና ለልጅዎ እንከን የለሽ ልምድን ለማረጋገጥ የደንበኛ ድጋፍ ቡድናችን በኢሜይል ወይም በስልክ ይገኛል።"
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="የወደፊት አሽከርካሪዎች የ ክሩዝ ቡድን አባል ለመሆን እንዴት ማመልከት ይችላሉ እና ዋናዎቹ ብቃቶች እና መስፈርቶች ምንድን ናቸው?"
              text="ፍላጎት ያላቸው አሽከርካሪዎች ድረ-ገጻችንን በመጎብኘት የተዘጋጀላቸውን ፎርም በትክክል ይሞላሉ፡፡ በመቀጠል ከ 3-5 የስራ ቀናቶች የአሽከርካሪ ቅጥር ቡድናችን በኢሜይል ወይም በስልክ ማለፍ አለማለፍዎትን ያሳውቀዎታል፡፡ ንጹህ የማሽከርከር ሪከርድ፣ ለደህንነት ቁርጠኝነት እና ለልጆች አስተማማኝ መጓጓዣ ለማቅረብ እውነተኛ ፍቅር ያላቸውን ግለሰቦች እንፈልጋለን።"
            />
            <AccordionItem
              header="ክሩዝ የሚያጓጉዙትን ልጆች ደህንነት ለማረጋገጥ በአሽከርካሪዎቹ ላይ የጀርባ ምርመራን እንዴት ያደርጋል?"
              text="ክሩዝ ደህንነትን በቁም ነገር ይመለከታል፣ እና የእኛ ጥልቅ የጀርባ ፍተሻ የወንጀል ታሪክን፣ የመንዳት መዝገቦችን እና የማጣቀሻ ፍተሻዎችን ያካትታሉ። እኛ ወላጆች ልጆቻቸው ታማኝ እና ችሎታ ያላቸው እጆች ውስጥ መሆናቸውን ማረጋገጫ ለመስጠት ዓላማ እናደርጋለን።"
            />
            <AccordionItem
              header="በአሽከርካሪዎች እና በሚያጓጉዟቸው ልጆች መካከል አዎንታዊ እና የተከበረ መስተጋብር እንዲኖር ክሩዝ ምን እርምጃዎች አሉት?"
              text="ክሩዝ ለሁለቱም አሽከርካሪዎች እና ልጆች አዎንታዊ እና የተከበረ አካባቢን ለመፍጠር ከፍተኛ ትኩረት ይሰጣል። የስልጠና ፕሮግራሞቻችን የትራንስፖርት ልምዱን አስደሳች እና ለሁሉም ሰው ምቹ ለማድረግ ወዳጃዊ ከባቢ አየርን በማጎልበት የግንኙነት መመሪያዎችን ያካትታሉ።"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >፟
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3056D3" stop-opacity="0.36" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5  dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill="orange"
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark amharic">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6 amharic">
          {text}
        </p>
      </div>
    </div>
  );
};
