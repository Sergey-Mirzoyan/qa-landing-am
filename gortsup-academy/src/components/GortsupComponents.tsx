import { motion } from "motion/react";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <img
            alt="Gortsup Academy"
            className="h-10"
            src="https://lh3.googleusercontent.com/aida/ADBb0uhWGK-a5FYE4BxldVcsGO2WX4trYOGVn4cc7LrKHwnAKP8cQgTYB8_SCP6ZFDk-QPxm2O5Vod-Q3D639oHSxi-2Z8qdfhpAFPOK1Vz_SGJRpo35884RcuWf-3VS8HzHTfcwAp5rtIklrK9Hi0d1T7rIa85-AhwSO8ZZC61o6R8CPSRBbzl-D8HlgP0KYKgEJ-UWtKFVm0drjL0VKncPvUm926vYo4a42fcGdkFnfxmJelCbDgENm3l5T56N8G9_1DOByVCE0rLG5w"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {["Ծրագիր", "Կարիերա", "Հաշվիչ", "Կարծիքներ", "Մեր մասին"].map((item) => (
            <a
              key={item}
              href={`#${item === "Ծրագիր" ? "program" : item === "Կարիերա" ? "career" : item === "Հաշվիչ" ? "calculator" : item === "Կարծիքներ" ? "reviews" : "about"}`}
              className="font-bold tracking-tight text-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <span className="text-primary font-bold text-sm hidden sm:inline">+374 (93) 128-696</span>
          <button className="bg-primary text-white font-bold tracking-tight text-sm px-5 py-2.5 rounded-lg active:scale-95 transform transition-transform">
            Խորհրդատվություն
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="pt-32 pb-20 px-6 bg-gradient-to-br from-primary to-blue-700 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-secondary rounded-sm"></span>
            Մասնագիտություն՝ Vibe Coder (AI Specialist)
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.05]">
            Ստեղծեք պրոդուկտներ օրերի, այլ ոչ թե ամիսների ընթացքում <span className="text-secondary">AI-ի օգնությամբ</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-xl leading-relaxed">
            Տիրապետեք Vibe Coder մասնագիտությանը և ստացեք մինչև 1,500,000 դրամ եկամուտ՝ օգտագործելով AI-ի հզորությունը բիզնեսի համար:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-secondary text-white px-8 py-5 rounded-xl font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-secondary/20">
              Սկսել ուսուցումը
            </button>
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur px-6 py-4 rounded-xl">
              <img
                alt="Consultant"
                className="w-10 h-10 rounded-full border-2 border-white/20"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNQlvELy6WVWSI9Au5H1zMwF3Yfgf6GNRkB1000UNDM0VT5-AIVmnOKvhQILN5nbO0FnTV2NyBly-3Aakwk6iSK1b2sWqSpW6r4qDNYTBxFJBJXXzOfd8SDTBp4m5WCm2Np8-i65RAzm8-GyoWrQ6Krv5b7-dkRUD9YTYDr3vU9zDDqA_2nPcb6wrOwI49YbLRkaj22lYpCkznaa72XZiFe-7d14uhOfx6hOFu3UIDQCcTptcb7edPaRixWywoYY622r15ULUttEI"
                referrerPolicy="no-referrer"
              />
              <div className="text-sm text-left">
                <div className="font-bold">Անի Մարտիրոսյան</div>
                <div className="opacity-70">Gortsup-ի AI փորձագետ</div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img
              alt="AI Workspace"
              className="w-full h-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuBfFOw7SUiZFnxEZNyQTgV71q1cH0Y96utB23qxvomjheUS0_33vXSG0zSeKPUw_rJ0P2mhdZsaptG_QYpBSAhTzBJhHA-bpSoJ1HV3s-wc3vxEuCNCuDI-Jz1HbIdQlNCa6AdaGIC95JrOFNitNSyNZUJQbUDB0xHD0a0mK5PI53KC6jKN7pb1Du9GuQt276AMdHp6rVWHCccwiEbqHjZrM3Q9XgyWGnbSlEXQhkuZhm-wzaqrekyBuvBh-vFyXH9WGpmUy3sU4"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-6 rounded-xl flex justify-between items-center text-on-background">
              <div>
                <div className="text-primary font-bold text-2xl">4.5x</div>
                <div className="text-xs uppercase font-bold tracking-tighter opacity-60">Ավելի արագ, քան սովորական կոդը</div>
              </div>
              <div className="h-10 w-px bg-outline-variant/30"></div>
              <div>
                <div className="text-secondary font-bold text-2xl">1.2M֏</div>
                <div className="text-xs uppercase font-bold tracking-tighter opacity-60">Ֆրիլանսի միջին արժեքը</div>
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </header>
  );
};

const SuccessStories = () => {
  const students = [
    { name: "Անի, 27 տարեկան", before: "180 000 ֏", after: "520 000 ֏", role: "Jr Մարքեթոլոգ", prev: "Սալոնի ադմինիստրատոր էր" },
    { name: "Արման, 31 տարեկան", before: "~200 000 ֏", after: "750 000 ֏", role: "IT Sales", prev: "Վարորդ էր աշխատում" },
    { name: "Մարիամ, 24 տարեկան", before: "120 000 ֏", after: "430 000 ֏", role: "HR Assistant", prev: "Առանց փորձի էր" },
    { name: "Գոռ, 29 տարեկան", before: "220 000 ֏", after: "680 000 ֏", role: "QA Engineer", prev: "Պահեստի աշխատող" },
    { name: "Սոնա, 26 տարեկան", before: "150 000 ֏", after: "400 000+ ֏", role: "Freelance Designer", prev: "Գանձապահ էր աշխատում" },
    { name: "Դավիթ, 34 տարեկան", before: "250 000 ֏", after: "820 000 ֏", role: "Project Manager", prev: "Օֆիս-մենեջեր" },
    { name: "Լիլիթ, 28 տարեկան", before: "Առանց եկամտի", after: "350 000 ֏", role: "SMM Manager", prev: "Ֆիզարձակուրդում" },
    { name: "Տիգրան, 22 տարեկան", before: "100 000 ֏", after: "500 000 ֏", role: "Sales Manager", prev: "Ուսանող" },
  ];

  return (
    <section className="py-24 px-6 bg-surface" id="reviews">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
          Հաջողության պատմություններ. <span className="text-primary">սկսնակից մինչև պրոֆեսիոնալ</span>
        </h2>
        <p className="text-center text-on-surface-variant mb-16 text-lg max-w-2xl mx-auto">
          +2500 ուսանող արդեն անցել է այս ուղին: Հաջորդ հաջողված պատմությունը կարող է լինել ձերը:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {students.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10"
            >
              <h3 className="font-bold text-lg mb-1">{s.name}</h3>
              <p className="text-xs text-on-surface-variant mb-4">{s.prev}</p>
              <div className="space-y-3 pt-4 border-t border-outline-variant/10">
                <div>
                  <div className="text-[10px] uppercase font-bold opacity-50">Նախկինում</div>
                  <div className="font-bold text-error">{s.before}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold opacity-50">Հետո ({s.role})</div>
                  <div className="font-bold text-secondary text-xl">{s.after}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all">
            Ցանկանում եմ նույն արդյունքը
          </button>
        </div>
      </div>
    </section>
  );
};

const MediaMentions = () => {
  return (
    <section className="py-12 px-6 bg-surface-container-low border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-xs font-bold uppercase tracking-widest opacity-40 mb-10">Մենք մեդիայում</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">
          {["Armenia TV", "Hayk Media", "Shant TV"].map((m) => (
            <span key={m} className="text-2xl font-black">{m}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoGallery = () => {
  const videos = [
    { id: "rcPMYpyHgWM", title: "Gortsup Academy on Armenia TV" },
    { id: "OjkkJjG1ntM", title: "Gortsup Academy - AI Education" },
    { id: "rWGZSXyFOeI", title: "AI Revolution in Armenia" },
  ];

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center">Տեսանյութեր մեր մասին</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((v, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-lg aspect-video bg-black">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    { name: "Արմեն Կ.", text: "Չէի հավատում, որ 6 ամսում հնարավոր է հասնել նման մակարդակի: Երեկ փակեցի ֆրիլանսի իմ առաջին նախագիծը՝ 200,000 դրամով:", role: "Առաքիչ → AI Dev" },
    { name: "Ելենա Մ.", text: "Ամենահիանալին համայնքն է: 24/7 աջակցությունն օգնեց կիսատ չթողնել ճանապարհը, երբ դժվարություններ կային փրոմփթների հետ:", role: "Մատուցող → SMM AI" },
    { name: "Կարեն Գ.", text: "Ծրագիրը շատ հագեցած է, ավելորդ ոչինչ չկա: Արդեն 3-րդ ամսում սկսեցի ավտոմատացնել ընթացիկ աշխատանքիս առաջադրանքները:", role: "Հաշվապահ → Data AI" },
  ];

  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-extrabold mb-2">Ուսանողների կարծիքները</h2>
            <p className="text-on-surface-variant">Նրանց իրական էմոցիաները, ովքեր արդեն փոխել են մասնագիտությունը</p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-surface-container rounded-full"></div>
                <div>
                  <div className="font-bold">{r.name}</div>
                  <div className="text-xs opacity-60">Vibe Coder դասընթաց</div>
                </div>
              </div>
              <p className="text-sm italic mb-6">«{r.text}»</p>
              <div className="pt-4 border-t border-outline-variant/10 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase opacity-40">Արագ քեյս</span>
                <span className="text-xs font-bold text-secondary">{r.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-16 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-10">Դպրոցի թվերով</h2>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-5xl font-black text-secondary mb-2">2500+</div>
                <div className="text-sm opacity-60">ուսանող է վերապատրաստվել</div>
              </div>
              <div>
                <div className="text-5xl font-black text-primary mb-2">81%</div>
                <div className="text-sm opacity-60">աշխատանքի տեղավորում</div>
              </div>
              <div>
                <div className="text-5xl font-black text-secondary mb-2">450</div>
                <div className="text-sm opacity-60">գործընկեր ընկերություններ</div>
              </div>
              <div>
                <div className="text-5xl font-black text-primary mb-2">x4</div>
                <div className="text-sm opacity-60">եկամտի միջին աճ</div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold mb-10 text-center lg:text-left">Գործընկեր բանկեր</h2>
            <div className="grid grid-cols-2 gap-4">
              {["Ameria Bank", "IdBank", "VTB", "Ardshinbank"].map((b) => (
                <div key={b} className="bg-white/5 p-8 rounded-xl flex items-center justify-center font-bold text-xl hover:bg-white/10 transition-colors">
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PainPoints = () => {
  const pains = [
    "Աշխատավարձի «առաստաղ», որը տարիներով հնարավոր չէ հաղթահարել",
    "Վախ, որ AI-ը կփոխարինի ձեր ներկայիս մասնագիտությանը",
    "Կարիերայի աճի բացակայություն և ձանձրալի առաջադրանքներ",
    "Կյանքի համար ժամանակի պակաս՝ 5/2 գրաֆիկի պատճառով",
    "Դասական ծրագրավորման բարդությունը",
    "Կախվածություն Հայաստանում մեկ գործատուից",
  ];

  return (
    <section className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-extrabold mb-10">Հաճախորդների խնդիրները</h2>
            <div className="space-y-4">
              {pains.map((p, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-error">
                  <span className="material-symbols-outlined text-error">warning</span>
                  <span className="text-sm font-medium">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold mb-10">Հաճախորդների տեսակները</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Սվիթչերներ", desc: "Ցանկանում են զրոյից անցնել IT ոլորտ AI-ի միջոցով" },
                { title: "Ֆրիլանսերներ", desc: "Ցանկանում են նախագծերն անել 5 անգամ ավելի արագ" },
                { title: "Գործարարներ", desc: "Ցանկանում են ստեղծել MVP առանց ծրագրավորողների մեծ թիմի" },
                { title: "Ուսանողներ", desc: "Փնտրում են ապագայի պահանջված մասնագիտություն" },
                { title: "Ֆիզարձակուրդում մայրիկներ", desc: "Փնտրում են հեռավար աշխատանք՝ ճկուն գրաֆիկով" },
                { title: "Մարքեթոլոգներ", desc: "Ցանկանում են ներդնել AI-ն իրենց աշխատանքում" },
              ].map((t, i) => (
                <div key={i} className="p-5 bg-white rounded-2xl shadow-sm border border-outline-variant/10">
                  <div className="text-primary font-bold mb-1">{t.title}</div>
                  <p className="text-[10px] opacity-60 leading-tight">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-extrabold mb-10">Ինչու են մարդիկ մնում հին մասնագիտության մեջ</h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Անհայտության վախը բարդ IT-ի նկատմամբ",
                "Ներկայիս աշխատանքի կայունության պատրանքը",
                "Համոզմունքը, որ պետք է 5 տարի սովորել բուհում",
                "Անցման հստակ քայլ առ քայլ պլանի բացակայությունը",
                "«Ինքնակոչի սինդրոմ»՝ «ես տեխնիկական մարդ չեմ»",
                "Աջակցող միջավայրի պակասը",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-xs group-hover:bg-primary group-hover:text-white transition-colors">
                    {i + 1}
                  </div>
                  <p className="text-sm font-medium opacity-70">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-primary/5 p-10 rounded-3xl border border-primary/10">
            <h2 className="text-3xl font-extrabold mb-10">Պատճառներ, թե ինչու է պետք փոխել մասնագիտությունը հենց հիմա</h2>
            <div className="space-y-6">
              {[
                { title: "Հնարավորությունների պատուհան", desc: "Vibe Coding-ի շուկան դատարկ է, մրցակցություն գրեթե չկա:" },
                { title: "AI շուկայի աճ", desc: "Տեխնոլոգիաները զարգանում են ավելի արագ, քան մարդիկ սովորում են:" },
                { title: "Արտարժույթով եկամուտ", desc: "Արևմտյան հաճախորդների հետ աշխատելու հնարավորություն:" },
                { title: "Ուսուցման արագություն", desc: "Նախկինում IT-ի համար տարիներ էին պահանջվում, հիմա՝ 6 ամիս:" },
                { title: "Մուտքի արժեքը", desc: "Ուսուցումը դեռ հասանելի է, գները կբարձրանան:" },
                { title: "Անձնական ազատություն", desc: "Աշխատանք աշխարհի ցանկացած կետից, որտեղ կա Wi-Fi:" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <p className="text-sm">
                    <strong className="block">{item.title}</strong> {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ScenarioComparison = () => {
  return (
    <section className="py-24 px-6 bg-surface-container-high">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-16 text-center">Կյանքի սցենարների համեմատություն</h2>
        <div className="grid md:grid-cols-2 gap-px bg-outline-variant/20 rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-white p-12">
            <h3 className="text-2xl font-bold mb-8 text-error flex items-center gap-2">
              <span className="material-symbols-outlined">sentiment_dissatisfied</span>
              Եթե ոչինչ չփոխեք
            </h3>
            <ul className="space-y-6 opacity-70">
              {[
                "Աշխատավարձը տարիներով նույն մակարդակի վրա է",
                "Սթրես առօրյայից և աշխատանքի նկատմամբ հետաքրքրության բացակայություն",
                "Մշտական խնայողություն և «անվտանգության բարձիկի» բացակայություն",
                "Կրճատման ռիսկ՝ բիզնեսի ավտոմատացման պատճառով",
                "Արձակուրդ տարին մեկ անգամ և կախվածություն օֆիսային գրաֆիկից",
              ].map((text, i) => (
                <li key={i} className="flex gap-4">
                  <span className="material-symbols-outlined text-error">close</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary text-white p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined text-9xl">rocket_launch</span>
            </div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined">sentiment_very_satisfied</span>
              Եթե փոխեք մասնագիտությունը
            </h3>
            <ul className="space-y-6">
              {[
                "Ամսական 500,000-ից մինչև 1,500,000 դրամ եկամուտ",
                "Հետաքրքիր նախագծեր տեխնոլոգիաների առաջնագծում",
                "Աշխատանք գլոբալ շուկայում՝ տնից կամ քովորքինգից",
                "Դուք ինքներդ եք ընտրում, թե որ հաճախորդների հետ աշխատել",
                "Պահանջված AI մասնագետի կարգավիճակ",
              ].map((text, i) => (
                <li key={i} className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary">check</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <button className="mt-12 bg-white text-primary w-full py-4 rounded-xl font-bold shadow-xl hover:scale-[1.02] transition-transform">
              Ընտրել աճի ուղին
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const CareerMap = () => {
  return (
    <section className="py-24 px-6 bg-surface" id="career">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 text-center">Vibe Coder-ի կարիերայի քարտեզը</h2>
        <p className="text-center text-on-surface-variant mb-16">Ձեր ուղին առաջին փրոմփթներից մինչև սեփական SaaS-ի թողարկում</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              time: "0 — 1 ամիս",
              title: "AI-ի հիմունքներ",
              icon: "smart_toy",
              items: ["Փրոմփթ-ինժիներինգ", "AI գործիքներ (GPT, Claude)", "Մաքուր կոդի գեներացում"],
              res: "Առաջին պարզ սկրիպտները",
            },
            {
              time: "2 — 3 ամիս",
              title: "Պորտֆոլիո",
              icon: "dashboard",
              items: ["No-code հարթակներ", "Լենդինգների հավաքում", "Բոտերի ինտեգրում"],
              res: "3 իրական նախագիծ",
            },
            {
              time: "4 — 6 ամիս",
              title: "Junior+",
              icon: "rocket_launch",
              items: ["Բիզնես խնդիրներ", "Fullstack հավելվածներ", "Առաջին վճարովի պատվերները"],
              res: "Freelance / Սեփական պրոդուկտներ",
            },
          ].map((stage, i) => (
            <div key={i} className="bg-surface-container-low p-8 rounded-2xl relative overflow-hidden group border border-transparent hover:border-primary/20 transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl">{stage.icon}</span>
              </div>
              <div className="text-primary font-bold text-sm mb-2">{stage.time}</div>
              <h3 className="text-2xl font-black mb-4">{stage.title}</h3>
              <ul className="text-sm space-y-2 opacity-70 mb-8">
                {stage.items.map((item, j) => (
                  <li key={j}>• {item}</li>
                ))}
              </ul>
              <div className="pt-4 border-t border-outline-variant/10">
                <div className="text-xs uppercase font-bold opacity-50">{i === 2 ? "Ապագան" : "Արդյունքը"}</div>
                <div className="font-bold">{stage.res}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DayInLife = () => {
  return (
    <section className="py-24 px-6 bg-surface-container-high overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-16 text-center">Մեկ օր Vibe Coder-ի կյանքից</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { time: "09:00 — Առավոտ", title: "Առաջադրանքների ընդունում", desc: "Նախագծի վերլուծություն, դեկոմպոզիցիա փրոմփթների և AI ստեկի ընտրություն:" },
            { time: "13:00 — Ցերեկ", title: "AI Մշակում", desc: "Կոդի գեներացում, պրոդուկտի հավաքում, ինտեգրումների և ավտոմատացումների կարգավորում:" },
            { time: "17:00 — Երեկո", title: "Պրեզենտացիա", desc: "Արդյունքի ցուցադրում հաճախորդին, փոփոխությունների կատարում AI-ի միջոցով րոպեների ընթացքում:" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl">
              <div className="text-primary font-bold mb-2">{item.time}</div>
              <h4 className="font-bold mb-3">{item.title}</h4>
              <p className="text-xs text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
          <div className="bg-secondary text-white p-6 rounded-2xl">
            <div className="font-bold mb-2">Օրվա արդյունքը</div>
            <h4 className="font-bold mb-3 text-lg">Պատրաստի պրոդուկտ</h4>
            <p className="text-xs opacity-90">Աշխատող լենդինգ, բոտ կամ ավտոմատացված համակարգը պատրաստ է թողարկման:</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Program = () => {
  return (
    <section className="py-24 px-6 bg-surface" id="program">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-extrabold mb-6">Ուսումնական ծրագիր</h2>
            <p className="text-on-surface-variant mb-8">Մենք տարիներով չենք սովորեցնում: Մենք տալիս ենք գործիքներ անմիջապես արդյունքի հասնելու համար:</p>
            <button className="bg-primary text-white w-full py-4 rounded-xl font-bold">Ներբեռնել ամբողջական պլանը</button>
          </div>
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {[
              { num: "01", title: "First AI Tool", desc: "Միջավայրի կարգավորում և առաջին փրոմփթները կոդի գեներացման համար:" },
              { num: "02", title: "First AI Web Service", desc: "Աշխատող վեբ-ինտերֆեյսի ստեղծում ընդամենը մեկ երեկոյում:" },
              { num: "03", title: "Fullstack App", desc: "Ֆրոնտենդի, բեքենդի և տվյալների բազայի կապը AI-ի միջոցով:" },
              { num: "04", title: "SaaS Product", desc: "Բաժանորդագրությամբ ծառայության մշակում՝ անձնական կաբինետներով:" },
              { num: "05", title: "Advanced AI Product", desc: "Սեփական մոդելների ուսուցում բիզնեսի կոնկրետ խնդիրների համար:", accent: true },
              { num: "06", title: "Product Launch", desc: "Մուտք շուկա, առաջին վաճառքներ կամ աշխատանքի տեղավորում:", accent: true },
            ].map((item, i) => (
              <div key={i} className={`bg-surface-container-low p-6 rounded-xl border-l-4 ${item.accent ? "border-secondary" : "border-primary"}`}>
                <span className={`${item.accent ? "text-secondary" : "text-primary"} font-black text-xl mb-2 block`}>{item.num}</span>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-xs opacity-70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitCalculator = () => {
  const [intensity, setIntensity] = useState(50);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " ֏";
  };

  const projections = [
    { year: 1, label: "1 տարի անց", role: "Middle Vibe Coder", base: 450000, growth: 250000 },
    { year: 3, label: "3 տարի անց", role: "Senior / Lead Builder", base: 850000, growth: 550000 },
    { year: 5, label: "5 տարի անց", role: "AI Architect / Founder", base: 1400000, growth: 1100000 },
  ];

  return (
    <section className="py-24 px-6 bg-surface-container-high" id="calculator">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Ձեր օգուտի հաշվիչը</h2>
          <p className="text-on-surface-variant text-lg">Իմացեք, թե ինչպես կաճի ձեր եկամուտը Gortsup Academy-ում սովորելուց հետո</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-outline-variant/10 mb-12">
          <div className="max-w-2xl mx-auto mb-16">
            <div className="flex justify-between items-center mb-6">
              <label className="font-bold text-sm uppercase tracking-wider opacity-60">Զարգացման ինտենսիվությունը</label>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                {intensity < 33 ? "Հանգիստ տեմպ" : intensity < 66 ? "Վստահ աճ" : "Առավելագույն արագացում"}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={intensity}
              onChange={(e) => setIntensity(parseInt(e.target.value))}
              className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between mt-4 text-[10px] font-bold uppercase opacity-40">
              <span>Junior</span>
              <span>Middle</span>
              <span>Senior+</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projections.map((p, i) => {
              const salary = p.base + (p.growth * (intensity / 100));
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative p-8 rounded-2xl bg-surface-container-low border border-outline-variant/5 text-center group hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="text-primary font-bold text-sm mb-2">{p.label}</div>
                  <div className="text-xs opacity-50 mb-4 h-8">{p.role}</div>
                  <div className="text-3xl font-black text-on-surface mb-2">
                    {formatPrice(salary)}
                  </div>
                  <div className="text-[10px] uppercase font-bold text-secondary">Ամսական</div>
                  
                  {i === 2 && intensity > 80 && (
                    <div className="absolute -top-3 -right-3 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full animate-bounce">
                      TOP TIER
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex gap-4 items-start p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <span className="material-symbols-outlined text-primary">trending_up</span>
            <div>
              <h4 className="font-bold text-sm mb-1">Ուսման փոխհատուցումը</h4>
              <p className="text-xs opacity-70">Եկամտի միջին աճի դեպքում ուսումը փոխհատուցվում է նոր պաշտոնում 2-3 ամիս աշխատելուց հետո:</p>
            </div>
          </div>
          <div className="flex gap-4 items-start p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
            <span className="material-symbols-outlined text-secondary">verified</span>
            <div>
              <h4 className="font-bold text-sm mb-1">Եկամտի երաշխիք</h4>
              <p className="text-xs opacity-70">Մենք օգնում ենք աշխատանքի տեղավորման և ֆրիլանս հարթակներ դուրս գալու հարցում՝ այս թվերին հասնելու համար:</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "MiNI",
      desc: "Արագ մեկնարկ AI-ում",
      price: "249,000 ֏",
      features: [
        "2 ամիս ուսուցում",
        "8 դաս",
        "Տելեգրամ-չատ տնային առաջադրանքների ստուգմամբ",
        "2 իրական նախագիծ պորտֆոլիոյի համար",
        "Ռեզյումեի ստեղծում",
        "Պրոֆիլ LinkedIn-ում",
      ],
    },
    {
      name: "BASE",
      desc: "Ամբողջական մասնագիտություն",
      price: "618,000 ֏",
      popular: true,
      features: [
        "6 ամիս ուսուցում",
        "24 դաս",
        "Տելեգրամ-չատ տնային առաջադրանքների ստուգմամբ",
        "4 իրական նախագիծ պորտֆոլիոյի համար",
        "Ռեզյումեի ստեղծում",
        "Պրոֆիլ Staff, LinkedIn, hh.ru հարթակներում",
        { text: "Տեխնիկական անգլերեն (1 ամիս)", accent: true },
        { text: "Վեբինարների շարք պատվիրատուների փնտրման վերաբերյալ", accent: true },
      ],
    },
    {
      name: "PRO MAX",
      desc: "Առավելագույն արդյունք",
      price: "810,000 ֏",
      dark: true,
      features: [
        "BASE սակագնի բոլոր առավելությունները",
        "Պրոֆիլ Staff, LinkedIn, Upwork, hh.ru հարթակներում",
        "Նախապատրաստում հարցազրույցի անգլերենով",
        "Մինի-դասընթաց Upwork-ի վերաբերյալ",
        "1-2 անհատական նախապատրաստում",
        "QA կարիերայի ռազմավարություն",
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-surface-container-low" id="pricing">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">Ընտրեք ձեր սակագինը</h2>
        <p className="text-center text-on-surface-variant mb-16 text-lg max-w-2xl mx-auto">Ներդրում կատարեք ձեր ապագայում՝ արդյունքի երաշխիքով</p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`${plan.dark ? "bg-slate-900 text-white" : "bg-white text-on-surface"} rounded-3xl p-8 shadow-sm border ${plan.popular ? "border-2 border-primary" : "border-outline-variant/10"} flex flex-col h-full relative transition-transform hover:scale-[1.02]`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Հանրաճանաչ ընտրություն
                </div>
              )}
              <div className="mb-8">
                <h3 className={`text-2xl font-black mb-2 ${plan.dark ? "text-secondary" : ""}`}>{plan.name}</h3>
                <p className={`${plan.dark ? "text-white/60" : "text-on-surface-variant"} text-sm`}>{plan.desc}</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className={`flex items-start gap-3 text-sm ${typeof f === "object" && f.accent ? "font-semibold" : ""}`}>
                    <span className={`material-symbols-outlined ${plan.dark || (typeof f === "object" && f.accent) ? "text-secondary" : "text-primary"} text-lg`}>
                      {typeof f === "object" && f.accent ? "language" : "check_circle"}
                    </span>
                    <span>{typeof f === "string" ? f : f.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <div className="mb-6">
                  <div className="text-3xl font-black">{plan.price}</div>
                  <div className="text-[10px] uppercase font-bold opacity-40">Միանվագ վճար</div>
                </div>
                <button className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/10 hover:brightness-110 active:scale-95 transition-all">
                  Ընտրել սակագինը
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white/60 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <img
            alt="Gortsup"
            className="h-8 mb-6 brightness-0 invert opacity-100"
            src="https://lh3.googleusercontent.com/aida/ADBb0uhWGK-a5FYE4BxldVcsGO2WX4trYOGVn4cc7LrKHwnAKP8cQgTYB8_SCP6ZFDk-QPxm2O5Vod-Q3D639oHSxi-2Z8qdfhpAFPOK1Vz_SGJRpo35884RcuWf-3VS8HzHTfcwAp5rtIklrK9Hi0d1T7rIa85-AhwSO8ZZC61o6R8CPSRBbzl-D8HlgP0KYKgEJ-UWtKFVm0drjL0VKncPvUm926vYo4a42fcGdkFnfxmJelCbDgENm3l5T56N8G9_1DOByVCE0rLG5w"
            referrerPolicy="no-referrer"
          />
          <p className="text-sm max-w-xs mb-6">Առաջին Vibe Coding ակադեմիան Հայաստանում: Մենք սովորեցնում ենք ստեղծել IT պրոդուկտներ արհեստական բանականության օգնությամբ:</p>
          <div className="flex gap-4">
            {["FB", "TG"].map((s) => (
              <span key={s} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-colors text-xs font-bold">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Ուսուցում</h5>
          <ul className="text-sm space-y-2">
            {["Vibe Coder (AI)", "Ծրագիր", "Աշխատանքի տեղավորում"].map((link) => (
              <li key={link} className="hover:text-white cursor-pointer">{link}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Կոնտակտներ</h5>
          <div className="text-sm space-y-2">
            <div>Երևան, Ամիրյան փող. 4/7</div>
            <div className="text-white font-bold">+374 (93) 128-696</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export {
  Navbar,
  Hero,
  SuccessStories,
  MediaMentions,
  VideoGallery,
  Reviews,
  Stats,
  PainPoints,
  Comparison,
  ScenarioComparison,
  CareerMap,
  DayInLife,
  Program,
  BenefitCalculator,
  Pricing,
  Footer
};
