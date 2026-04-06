import { motion } from "motion/react";
import { useState } from "react";

import logoAmeriabank from "../../assets/logos/Ameriabank green.svg";
import logoIdram from "../../assets/logos/images.png";
import logoVtb from "../../assets/logos/Vtb-logo.png";
import logoAcba from "../../assets/logos/Acba-logo.png";
import logoUnibank from "../../assets/logos/2a2yfu6ff94si2slvcvl3kol9z9luzmj.jpg";
import logoServiceTitan from "../../assets/logos/ServiceTitan_logo.svg.png";
import logoPicsart from "../../assets/logos/Picsart-Logo.png";
import logoEpam from "../../assets/logos/Effective_Programming_for_America_logo.svg.png";
import logoSynopsys from "../../assets/logos/Synopsys_Logo.svg.png";
import logoKrisp from "../../assets/logos/Krisp_Logo.svg.png";

const NavbarAM = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center p-1.5 border border-outline-variant/10">
            <div className="w-full h-full bg-secondary rounded-lg" style={{ borderBottomLeftRadius: '50%' }}></div>
          </div>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {[
            { label: "Ծրագիր", ref: "program" },
            { label: "Կարիերա", ref: "career" },
            { label: "Հաշվիչ", ref: "calculator" },
            { label: "Կարծիքներ", ref: "reviews" },
            { label: "Մեր մասին", ref: "about" }
          ].map((item) => (
            <a
              key={item.label}
              href={`#${item.ref}`}
              className="font-bold tracking-tight text-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              {item.label}
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

const HeroAM = () => {
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
            Մասնագիտություն՝ QA-ինժեներ
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.05]">
            Տիրապետեք <span className="text-secondary">QA-ինժեների</span> մասնագիտությանը զրոյից
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-xl leading-relaxed">
            Մտեք IT առանց փորձի և ծրագրավորման։ Ուսուցում աշխատանքի տեղավորման աջակցությամբ։ Եկամուտ 350 000-ից մինչև 1 000 000 AMD 1–3 տարվա հեռանկարում։ Անվճար կարիերայի խորհրդատվություն։
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
                <div className="opacity-70">Gortsup-ի կարիերայի խորհրդատու</div>
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
              alt="QA Workspace"
              className="w-full h-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuBfFOw7SUiZFnxEZNyQTgV71q1cH0Y96utB23qxvomjheUS0_33vXSG0zSeKPUw_rJ0P2mhdZsaptG_QYpBSAhTzBJhHA-bpSoJ1HV3s-wc3vxEuCNCuDI-Jz1HbIdQlNCa6AdaGIC95JrOFNitNSyNZUJQbUDB0xHD0a0mK5PI53KC6jKN7pb1Du9GuQt276AMdHp6rVWHCccwiEbqHjZrM3Q9XgyWGnbSlEXQhkuZhm-wzaqrekyBuvBh-vFyXH9WGpmUy3sU4"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-6 rounded-xl flex justify-between items-center text-on-background">
              <div>
                <div className="text-primary font-bold text-2xl">4 ամիս</div>
                <div className="text-xs uppercase font-bold tracking-tighter opacity-60">Մինչ կարիերայի մեկնարկը IT-ում</div>
              </div>
              <div className="h-10 w-px bg-outline-variant/30"></div>
              <div>
                <div className="text-secondary font-bold text-2xl">350 000֏</div>
                <div className="text-xs uppercase font-bold tracking-tighter opacity-60">Մեկնարկային աշխատավարձ (Junior)</div>
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

const SuccessStoriesAM = () => {
  const students = [
    { name: "Անի, 28 տարեկան", before: "180 000 ֏", after: "450 000 ֏", role: "Manual QA", prev: "Վաճառող" },
    { name: "Արման, 31 տարեկան", before: "250 000 ֏", after: "750 000 ֏", role: "QA Automation", prev: "Գրասենյակի մենեջեր" },
    { name: "Մարիամ, 24 տարեկան", before: "Առանց փորձի", after: "380 000 ֏", role: "Junior QA", prev: "Բուհի շրջանավարտ" },
    { name: "Գոռ, 29 տարեկան", before: "220 000 ֏", after: "600 000 ֏", role: "QA Engineer", prev: "Պահեստի աշխատող" },
    { name: "Լիլիթ, 34 տարեկան", before: "Ուսուցիչ", after: "400 000+ ֏", role: "Freelance QA", prev: "Դասախոս" },
    { name: "Դավիթ, 27 տարեկան", before: "300 000 ֏", after: "1 200 000 ֏", role: "QA Lead", prev: "Հաշվապահ" },
    { name: "Էլեն, 33 տարեկան", before: "Դեկրետ", after: "420 000 ֏", role: "Remote QA", prev: "Ֆիզարձակուրդում" },
    { name: "Տիգրան, 36 տարեկան", before: "100 000 ֏", after: "550 000 ֏", role: "Middle QA", prev: "Քոլ-կենտրոնի օպերատոր" },
  ];

  return (
    <section className="py-24 px-6 bg-surface" id="reviews">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
          Ուսանողների քեյսերը: <span className="text-primary">Տարբեր մասնագիտություններից դեպի IT</span>
        </h2>
        <p className="text-center text-on-surface-variant mb-16 text-lg max-w-2xl mx-auto">
          Հարյուրավոր ուսանողներ փոխել են իրենց մասնագիտությունը մեր օգնությամբ։ Հաջորդ հաջողության պատմությունը քոնն է։
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

const MediaMentionsAM = () => {
  return (
    <section className="py-12 px-6 bg-surface-container-low border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-xs font-bold uppercase tracking-widest opacity-40 mb-10">Մենք մեդիայում</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">
          {["Armenia Today", "Hayk Media", "Shant TV", "Recruit Days 2024", "Radio Van"].map((m) => (
            <span key={m} className="text-2xl font-black">{m}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoGalleryAM = () => {
  const videos = [
    { id: "rcPMYpyHgWM", title: "Gortsup Academy on Armenia TV" },
    { id: "OjkkJjG1ntM", title: "Gortsup Academy - QA Education" },
    { id: "rWGZSXyFOeI", title: "IT Revolution in Armenia" },
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

const ReviewsAM = () => {
  const reviews = [
    { name: "Լիլիթ Պ.", text: "Կարծում էի, որ IT-ն միայն «խիստ» ծրագրավորողների համար է: Պարզվեց, որ թեստավորողի մասնագիտության մեջ ուշադրությունը և տրամաբանությունն ավելի կարևոր են, քան կոդը:", role: "Ուսուցիչ → Manual QA" },
    { name: "Տիգրան Մ.", text: "Վախենում էի, որ չեմ հաղթահարի ծանրաբեռնվածությունը: Սակայն կուրատորները աջակցում էին յուրաքանչյուր փուլում: Հիմա հեռավար աշխատում եմ տեխնոլոգիական ստարտափում:", role: "Օպերատոր → Middle QA" },
    { name: "Նարինե Ս.", text: "Փորձել էի այլ դասընթացներ՝ պրակտիկան չէր հերիքում: Այստեղ ամեն ինչ իրական է: Սա լավագույն ներդրումն է ինձ համար. ուսուցումը փոխհատուցվեց 2 ամիս աշխատելուց հետո:", role: "Վաճառք → QA Engineer" },
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
                  <div className="text-xs opacity-60">«QA-ինժեներ» դասընթաց</div>
                </div>
              </div>
              <p className="text-sm italic mb-6">«{r.text}»</p>
              <div className="pt-4 border-t border-outline-variant/10 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase opacity-40">Կարիերայի անցում</span>
                <span className="text-xs font-bold text-secondary">{r.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsAM = () => {
  return (
    <section className="py-16 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-10">Դպրոցի թվերով</h2>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-5xl font-black text-secondary mb-2">1500+</div>
                <div className="text-sm opacity-60">ուսանող է վերապատրաստվել</div>
              </div>
              <div>
                <div className="text-5xl font-black text-primary mb-2">≤3 ամիս</div>
                <div className="text-sm opacity-60">շրջանավարտների աշխատանքի տեղավորման միջին ժամկետը</div>
              </div>
              <div>
                <div className="text-5xl font-black text-secondary mb-2">450+</div>
                <div className="text-sm opacity-60">գործընկեր ընկերություններ</div>
              </div>
              <div>
                <div className="text-5xl font-black text-primary mb-2">9.2</div>
                <div className="text-sm opacity-60">մեզ խորհուրդ տալու պատրաստակամություն (NPS)</div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold mb-10 text-center lg:text-left">Որտեղ են աշխատում շրջանավարտները</h2>
            <div className="grid grid-cols-2 gap-4">
              {["EPAM", "Synopsys", "Picsart", "ServiceTitan", "Microsoft", "Krisp"].map((b) => (
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

const PainPointsAM = () => {
  const pains = [
    "Աշխատավարձը չի փոխվում մեկ տարի կամ ավելի, չկա կարիերայի աճ",
    "Աշխատանքը խլում է ուժերը, բայց չի բերում հաճույք և զարգացում",
    "Վախենում եք սխալվել մասնագիտության ընտրության հարցում և ժամանակ անիմաստ վատնել",
    "Հարազատները հետ են պահում փոփոխություններից, իսկ կողքին չկան հաջողված անցման օրինակներ",
    "Թվում է, թե արդեն ուշ է սկսել կամ դուք «տեխնիկական մարդ» չեք",
    "Կախվածություն խիստ գրաֆիկից (5/2), չկա ազատություն և հեռավար աշխատանք",
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
            <h2 className="text-3xl font-extrabold mb-10">Ում համար է իդեալական դասընթացը․</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Ֆիզարձակուրդում գտնվող մայրերի համար", desc: "Հեռավար աշխատանք և ճկուն գրաֆիկ, իդեալական վերադարձ աշխատաշուկա" },
                { title: "Գրասենյակի մենեջերներին", desc: "Ազատություն առօրյա միատեսակ աշխատանքից և թափանցիկ կարիերայի աճ" },
                { title: "Հաշվապահներին / Ուսուցիչներին", desc: "Մանրուքների հետ աշխատելու ունակությունը լավագույն հմտությունն է QA-ի համար" },
                { title: "Վաճառողներին և քոլ-կենտրոնների մասնագետներին", desc: "Հաղորդակցման հմտությունները և սթրեսակայունությունը կօգնեն IT-ում" },
                { title: "Բուհերի շրջանավարտներին", desc: "Տիրապետեք IT-ին առանց աշխատանքային փորձի և ծրագրավորման" },
                { title: "Բոլոր «ոչ տեխնիկական» մարդկանց", desc: "Մեր ուսանողների ավելի քան 70%-ը եկել են ոչ տեխնիկական ոլորտներից" },
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

const ComparisonAM = () => {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-extrabold mb-10">Ինչո՞ւ են մարդիկ մնում հին մասնագիտության մեջ</h2>
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
                { title: "Հնարավորությունների պատուհան", desc: "QA-ի շուկան դեռ բաց է, մրցակցությունն աճում է, բայց որակյալ մասնագետների պակաս կա:" },
                { title: "Մուտքի իդեալական շեմ", desc: "Թեստավորողին սկզբում պետք ՉԷ կարողանալ գրել բարդ կոդ:" },
                { title: "Արագ ուսուցում", desc: "Աշխատանքի առաջարկ ստանալու համար բավական է 4-6 ամիս սեղմ տեսություն և հզոր պրակտիկա:" },
                { title: "Եկամուտ կայուն արժույթով", desc: "Տանից ԵՄ և ԱՄՆ ընկերությունների համար աշխատելու հնարավորություն:" },
                { title: "Աշխատավարձի կայուն աճ", desc: "Ձեր աշխատավարձը IT-ում 2-3 տարվա ընթացքում կաճի առնվազն 2-3 անգամ:" },
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



const CareerMapAM = () => {
  return (
    <section className="py-24 px-6 bg-surface" id="career">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 text-center">QA-ինժեների կարիերայի քարտեզը</h2>
        <p className="text-center text-on-surface-variant mb-16">Ձեր ուղին առաջին բագ-ռեպորտներից մինչև սեփական թիմի ղեկավարում</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              time: "0 — 1 տարի",
              title: "Manual QA",
              icon: "bug_report",
              items: ["Փաստաթղթերի ուսումնասիրություն", "Թեստ-քեյսերի գրում", "Բագերի որոնում", "API-ի և Frontend-ի թեստավորում"],
              res: "Վստահ Junior/Middle 350 000-500 000 AMD աշխատավարձով",
            },
            {
              time: "1 — 3 տարի",
              title: "QA Automation",
              icon: "terminal",
              items: ["Թեստավորման լեզուներ (Python/Java)", "Գրում ենք ավտոթեստեր", "CI/CD-ի կարգավորում (DevOps)"],
              res: "Middle+ Automation 800 000 AMD-ից սկսած աշխատավարձով",
            },
            {
              time: "3+ տարի",
              title: "Lead QA / SDET",
              icon: "account_tree",
              items: ["Թիմի և գործընթացների կառավարում", "Թեստերի ճարտարապետության կառուցում", "Ապրանքի ռազմավարական որակ"],
              res: "Ճարտարապետ / Team Lead $3000+ եկամուտով",
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
                <div className="text-xs uppercase font-bold opacity-50">{i === 2 ? "Ապագա" : "Կողմնորոշիչ"}</div>
                <div className="font-bold">{stage.res}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DayInLifeAM = () => {
  return (
    <section className="py-24 px-6 bg-surface-container-high overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-16 text-center">Մեկ օր QA-ի / Automation QA-ի կյանքից</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { time: "10:00 — Առավոտ (Հեռավար)", title: "Սթենդափ և առաջադրանքներ", desc: "Թիմերի սինխրոնացում Slack-ում կամ Zoom-ում։ Օրվա առաջադրանքների քննարկում ծրագրավորողների հետ։" },
            { time: "11:30 — Ցերեկ", title: "Ֆունկցիաների թեստավորում", desc: "Հավելվածի նոր ֆունկցիաների ստուգում։ Ավտոթեստերի գրում կոդում (Python, JS) կամ թեստ-քեյսերի ստեղծում։" },
            { time: "16:00 — Երեկո", title: "Բագ-ռեպորտներ", desc: "Գտնված բագերի գրանցում Jira-ում, ուղղումների քննարկում ծրագրավորողների հետ։" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl">
              <div className="text-primary font-bold mb-2">{item.time}</div>
              <h4 className="font-bold mb-3">{item.title}</h4>
              <p className="text-xs text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
          <div className="bg-secondary text-white p-6 rounded-2xl">
            <div className="font-bold mb-2">Օրվա արդյունքը</div>
            <h4 className="font-bold mb-3 text-lg">Որակյալ ապրանք</h4>
            <p className="text-xs opacity-90">Բագերը չեն անցել փրոդաքշըն: Հավելվածի նոր տարբերակը պատրաստ է թողարկման միլիոնավոր օգտատերերի համար։</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProgramAM = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  type Module = {
    num: string; title: string; desc: string; accent?: boolean;
    skills: string[]; tools: string[]; artifacts: string[];
  };

  const modules: Module[] = [
    {
      num: "01",
      title: "Ներածություն QA-ի աշխարհ",
      desc: "Հիմունքներ, մշակման կենսապտույտը (SDLC) և թեստավորման տեսակները:",
      skills: ["QA-ինժեների դերը թիմում", "Agile / Scrum / Kanban", "Բագի կենսապտույտ", "Smoke / Regression / Sanity"],
      tools: ["Jira", "Confluence", "Trello", "Slack"],
      artifacts: ["Թեստլաբակութային պլան", "Արձագանք կընդհակութային հաշվարկներ"],
    },
    {
      num: "02",
      title: "Թեստային փաստաթղթավորում",
      desc: "Բագ-ռեպորտների, թեստ-քեյսերի և չեք-լիստերի ստեղծում:",
      skills: ["Թեստ-դիզայնի տեխնիկաներ (EP, BVA, Pairwise)", "Բագ-ռեպորտ (Priority, Severity)", "UI/UX չեքլիստ", "TestRail կազմկերպ"],
      tools: ["Jira", "Test IT", "TestRail", "Zephyr"],
      artifacts: ["Թեստ-քեյս-լիստ", "Չեք-լիստ", "Բագ-ռեփորթ", "Թեղթղ. հաշվետվություններ"],
    },
    {
      num: "03",
      title: "API թեստավորում",
      desc: "Խորացում Postman-ի և հաճախորդ-сերվեր ճարտարապետության մեջ:",
      skills: ["HTTP մեթոդներ (GET, POST, PUT, DELETE)", "Status codes ու սխալների կարգ.", "JSON/XML հ/ու ձևաչ.", "Authorization (API Key, Bearer Token)", "REST vs SOAP, Swagger"],
      tools: ["Postman", "Swagger", "Insomnia"],
      artifacts: ["Postman Collection", "Ավտոմ. API թեստեր", "Test Report"],
    },
    {
      num: "04",
      title: "Տվյալների բազաներ (SQL)",
      desc: "SQL-ի հիմունքները և աշխատանք տվյալների հետ:",
      skills: ["SELECT, WHERE, GROUP BY, ORDER BY", "JOIN-ներ (INNER, LEFT, RIGHT)", "Տվ. բազայի կառուց.", "INSERT / UPDATE / DELETE", "SQL թ. դեպ. կիर."],
      tools: ["DBeaver", "PostgreSQL", "MySQL"],
      artifacts: ["SQL հ֊ումների հ/ու.", "Տ. բազ. valid. կ/ու."],
    },
    {
      num: "05",
      title: "QA Automation & AI",
      desc: "Ավտոմատացում և AI-ի (Արհ. բանականություն) կիրառում արագ. համար:",
      accent: true,
      skills: ["Python հիմ. (ֆ֊ններ, OOP, մոդ.)", "Selenium WebDriver / Playwright", "pytest շ/ամբ.", "ChatGPT / AI թ. գ/ելու", "CI/CD (GitHub Actions)"],
      tools: ["Python", "Selenium", "Playwright", "pytest", "GitHub Actions", "ChatGPT"],
      artifacts: ["Ավ/թ. թ. ն/ախ.", "CI/CD Pipeline", "AI-գ/աց. թ-քեյս."],
    },
    {
      num: "06",
      title: "Աշխատանքի տեղավորում",
      desc: "Պատրաստում աշխատանքի առաջարկին և կարիերայի պլանավորում:",
      accent: true,
      skills: ["LinkedIn-ի ու ռ/ումի օ/ացում", "HR մոք-հ/ազ. QA թ/ատ.", "Տեխ. հ/ազ. ա/ներով", "Բ. հաստ. որ. ա/ութ.", "Staff.am / LinkedIn / hh.ru"],
      tools: ["LinkedIn", "Staff.am", "hh.ru", "Canva (CV)"],
      artifacts: ["Կ/ած CV", "Պ/ֆոլ.", "LinkedIn-էջ"],
    },
  ];

  return (
    <section className="py-24 px-6 bg-surface" id="program">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-extrabold mb-6">Ուսումնական ծրագիր</h2>
            <p className="text-on-surface-variant mb-8 text-lg">Ժամանակի ավելի քան 80%-ը պրակտիկա է իրական նախագծերի վրա: Սեղմե՛ք մոդուլի վրա՝ մանրամասները տեսնելու համար:</p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary">verified</span>
                <span>Հավերժ հասանելիություն</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="material-symbols-outlined text-primary">verified</span>
                <span>Թարմացում յուրաքանչյուր 3 ամիսը մեկ</span>
              </div>
            </div>
            <button className="bg-primary text-white w-full py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all">
              Ներբեռնել PDF ծրագիրը
            </button>
          </div>
          <div className="lg:w-2/3 space-y-4">
            {modules.map((item, i) => (
              <div
                key={i}
                className={`bg-surface-container-low rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${openIndex === i ? (item.accent ? "border-secondary" : "border-primary") : "border-transparent"}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className={`${item.accent ? "text-secondary" : "text-primary"} font-black text-2xl`}>{item.num}</span>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-sm opacity-60">{item.desc}</p>
                    </div>
                  </div>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}>
                    expand_more
                  </span>
                </div>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="px-6 pb-6 pt-2 border-t border-outline-variant/10 space-y-5"
                  >
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">Skills</div>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {item.skills.map((s, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm opacity-80">
                            <span className={`${item.accent ? "text-secondary" : "text-primary"} text-xs mt-1`}>●</span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">Tools</div>
                      <div className="flex flex-wrap gap-2">
                        {item.tools.map((t, j) => (
                          <span key={j} className={`text-xs font-bold px-3 py-1 rounded-full ${item.accent ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary"}`}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">Artifacts</div>
                      <div className="flex flex-wrap gap-2">
                        {item.artifacts.map((a, j) => (
                          <span key={j} className="text-xs px-3 py-1 bg-surface-container-highest rounded-full opacity-70">📄 {a}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitCalculatorAM = () => {
  const [intensity, setIntensity] = useState(50);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " ֏";
  };

  const projections = [
    { year: 1, label: "Մեկնարկ (Առաջին տարի)", role: "Junior QA", base: 350000, growth: 150000 },
    { year: 3, label: "1-3 տարի անց", role: "Middle QA (Manual / Auto)", base: 600000, growth: 300000 },
    { year: 5, label: "3 տարուց ավելի", role: "Senior QA / Lead", base: 900000, growth: 600000 },
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
              <label className="font-bold text-sm uppercase tracking-wider opacity-60">Ձեր զարգացման տեմպը</label>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                {intensity < 33 ? "Հավասարաչափ աճ" : intensity < 66 ? "Վստահ զարգացում" : "Առավելագույն արագություն"}
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
              <h4 className="font-bold text-sm mb-1">Ներդրումների փոխհատուցում</h4>
              <p className="text-xs opacity-70">Ուսուցման արժեքը փոխհատուցվում է ընդամենը 2-3 ամսում՝ սկզբնական հաստիքով աշխատանքի տեղավորվելուց հետո:</p>
            </div>
          </div>
          <div className="flex gap-4 items-start p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
            <span className="material-symbols-outlined text-secondary">verified</span>
            <div>
              <h4 className="font-bold text-sm mb-1">Կարիերայի աջակցություն</h4>
              <p className="text-xs opacity-70">Մեր կարիերայի մենեջերները և մոկ-հարցազրույցները կօգնեն ձեզ ավելի արագ ստանալ աշխատանքի առաջարկ:</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingAM = () => {
  const plans = [
    {
      name: "MINI",
      desc: "Արագ մեկնարկ QA-ում և IT-ում",
      price: "399 000 ֏",
      monthly: "33 250",
      oldMonthly: "55 416",
      features: [
        "4 ամիս ուսուցում",
        "16 դաս",
        "Տելեգրամ-չաթ՝ տնային առաջադրանքների ստուգմամբ",
        "1 իրական նախագիծ պորտֆոլիոյի համար",
        "Ռեզյումեի ստեղծում",
        "Պրոֆիլ LinkedIn-ում",
      ],
    },
    {
      name: "BASE",
      desc: "Ամբողջական մասնագիտություն",
      price: "618 000 ֏",
      monthly: "51 500",
      oldMonthly: "85 833",
      popular: true,
      features: [
        "6 ամիս ուսուցում",
        "24 դաս",
        "Տելեգրամ-չաթ՝ տնային առաջադրանքների ստուգմամբ",
        "2 իրական նախագիծ պորտֆոլիոյի համար",
        "Ռեզյումեի ստեղծում",
        "Պրոֆիլ Staff, LinkedIn, hh.ru հարթակներում",
        "QA Vocabulary — տեխնիկական անգլերեն",
        "Վեբինարների շարք աշխատանքի տեղավորման և պատվիրատուների փնտրման վերաբերյալ",
        { text: "Մեր ստանդարտը", accent: true },
      ],
    },
    {
      name: "PRO MAX",
      desc: "Առավելագույն արդյունք",
      price: "810 000 ֏",
      monthly: "67 500",
      oldMonthly: "112 500",
      dark: true,
      features: [
        "6 ամիս ուսուցում",
        "24 դաս",
        "Տելեգրամ-չաթ՝ տնային առաջադրանքների ստուգմամբ",
        "2 իրական նախագիծ պորտֆոլիոյի համար",
        "Ռեզյումեի ստեղծում",
        "Պրոֆիլ Staff, LinkedIn, Upwork, hh.ru հարթակներում",
        "QA Vocabulary — տեխնիկական անգլերեն",
        "Հարցազրույցի նախապատրաստում անգլերենով",
        "Մինի-կուրս Upwork-ի վերաբերյալ",
        "Վեբինարների շարք աշխատանքի տեղավորման և պատվիրատուների փնտրման վերաբերյալ",
        "1–2 անհատական նախապատրաստում հարցազրույցին",
        "QA կարիերայի ստրատեգիա",
        { text: "Մեր ստանդարտը", accent: true },
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
                  ՀԱՆՐԱՃԱՆԱՉ ԸՆՏՐՈՒԹՅՈՒՆ
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
                  <div className="text-[10px] uppercase font-bold opacity-40">ՄԻԱՆՎԱԳ ՎՃԱՐ</div>
                </div>
                <button className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/10 hover:brightness-110 active:scale-95 transition-all">
                  Ընտրել սակագինը
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-center text-on-surface-variant mt-8 max-w-2xl mx-auto">
          Տարաժամկետ վճարում առանց կանխավճարի: Գործընկերներ․ Ameria Bank, Idram, VTB: Որոշում 1 օրում՝ փաստաթղթերի նվազագույն փաթեթով:
        </p>
      </div>
    </section>
  );
};

const FooterAM = () => {
  return (
    <footer className="bg-slate-900 text-white/60 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="h-8 w-8 bg-secondary rounded-lg mb-6" style={{ borderBottomLeftRadius: '50%' }}></div>
          <p className="text-sm max-w-xs mb-6">Ակադեմիա Gortsup. Կոմպլեքսային ուսուցում ժամանակակից IT մասնագիտությունների գծով՝ որակի երաշխիքով և մենթորական աջակցությամբ:</p>
          <div className="flex gap-4">
            {["FB", "TG", "IN"].map((s) => (
              <span key={s} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-colors text-xs font-bold">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Ուսուցում</h5>
          <ul className="text-sm space-y-2">
            {["QA-ինժեներ", "Ծրագիր", "Կարիերա", "Կարծիքներ", "Մեր մոտեցումը"].map((link) => (
              <li key={link} className="hover:text-white cursor-pointer">{link}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Կապ</h5>
          <div className="text-sm space-y-2">
            <div>Երևան, Ամիրյան փող․ 4/7</div>
            <div className="text-white font-bold">+374 (93) 128-696</div>
           </div>
        </div>
      </div>
    </footer>
  );
};

export { 
  NavbarAM, 
  HeroAM, 
  SuccessStoriesAM,
  MediaMentionsAM,
  VideoGalleryAM,
  ReviewsAM,
  StatsAM,
  PainPointsAM,
  ComparisonAM,
  CareerMapAM,
  ProgramAM,
  BenefitCalculatorAM,
  PricingAM,
  FooterAM
};
