import { motion } from "motion/react";
import { useState } from "react";

// Partner & employer logos
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

// New fixed logos from user (Commented out until restored)
/*
import logo2gis from "../../New logos/2gis-logo-1.svg";
import logoTeamTelecom from "../../New logos/Team_Telecom_Armenia.png.webp.png";
import logoUcom from "../../New logos/UCom-logo.png.webp.png";
import logoArdshin from "../../New logos/ardshin.svg";
import logoSoftconstruct from "../../New logos/softconstruct.svg";
*/

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-snug">
            Տիրապետե՛ք <span className="text-secondary">QA-ինժեների</span> մասնագիտությանը զրոյից
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-xl leading-relaxed">
            Մուտք գործե՛ք IT ոլորտ՝ առանց փորձի և ծրագրավորման գիտելիքների: Ուսուցում՝ աշխատանքի տեղավորման աջակցությամբ:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-secondary text-white px-8 py-5 rounded-xl font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-secondary/20">
              Սկսել ուսուցումը
            </button>
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
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-6 rounded-xl flex justify-between items-center text-on-background">
              <div>
                <div className="text-primary font-bold text-2xl">4 ամիս</div>
                <div className="text-xs uppercase font-bold tracking-normal opacity-60">Մինչ IT կարիերայի մեկնարկը</div>
              </div>
              <div className="h-10 w-px bg-outline-variant/30"></div>
              <div>
                <div className="text-secondary font-bold text-2xl">350 000 ֏</div>
                <div className="text-xs uppercase font-bold tracking-normal opacity-60">Մեկնարկային աշխատավարձ (Junior)</div>
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
    { name: "Անի, 28 տարեկան", before: "180 000 ֏", after: "450 000 ֏", role: "Junior QA", prev: "Վաճառողուհի" },
    { name: "Արման, 31 տարեկան", before: "250 000 ֏", after: "750 000 ֏", role: "QA Automation", prev: "Գրասենյակի մենեջեր" },
    { name: "Մարիամ, 24 տարեկան", before: "Առանց փորձի", after: "380 000 ֏", role: "Junior QA", prev: "Բուհի շրջանավարտ" },
    { name: "Գոռ, 29 տարեկան", before: "220 000 ֏", after: "600 000 ֏", role: "QA Engineer", prev: "Պահեստի աշխատակից" },
    { name: "Լիլիթ, 34 տարեկան", before: "Ուսուցիչ", after: "400 000+ ֏", role: "Freelance QA", prev: "Դասախոս" },
    { name: "Դավիթ, 27 տարեկան", before: "300 000 ֏", after: "1 200 000 ֏", role: "QA Lead", prev: "Հաշվապահ" },
    { name: "Էլեն, 33 տարեկան", before: "Ֆիզարձակուրդ", after: "420 000 ֏", role: "Հեռահար QA", prev: "Ֆիզարձակուրդում" },
    { name: "Տիգրան, 36 տարեկան", before: "100 000 ֏", after: "550 000 ֏", role: "Middle QA", prev: "Զանգերի կենտրոնի օպերատոր" },
  ];

  return (
    <section className="py-24 px-6 bg-surface" id="reviews">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center leading-snug">
          Ուսանողների քեյսերը: <span className="text-primary">Տարբեր մասնագիտություններից դեպի IT</span>
        </h2>
        <p className="text-center text-on-surface-variant mb-16 text-lg max-w-2xl mx-auto">
          Հարյուրավոր ուսանողներ փոխել են իրենց մասնագիտությունը մեր օգնությամբ: Հաջորդ հաջողության պատմությունը քոնն է:
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
                  <div className="text-[10px] uppercase font-bold opacity-50">Մինչ ուսուցումը</div>
                  <div className="font-bold text-error">{s.before}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold opacity-50">Ուսուցումից հետո ({s.role})</div>
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
        <h3 className="text-center text-xs font-bold uppercase tracking-widest opacity-40 mb-10">Մեդիան մեր մասին</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">
          {["Armenia Today", "Hayk Media", "Shant TV", "Recruit Days 2024", "Ռադիո Վան"].map((m) => (
            <span key={m} className="text-2xl font-black">{m}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnersAM = () => {
  const partners = [
    { name: "Ամերիաբանկ", logo: logoAmeriabank },
    { name: "Իդրամ", logo: logoIdram },
    { name: "ՎՏԲ Բանկ", logo: logoVtb },
    { name: "ԱՔՌԱ", logo: logoAcba },
    { name: "Յունիբանկ", logo: logoUnibank },
    { name: "ServiceTitan", logo: logoServiceTitan },
    { name: "Picsart", logo: logoPicsart },
    { name: "EPAM", logo: logoEpam },
    { name: "Synopsys", logo: logoSynopsys },
    { name: "Krisp", logo: logoKrisp },
    /*
    { name: "2GIS", logo: logo2gis },
    { name: "Team Telecom", logo: logoTeamTelecom },
    { name: "Ucom", logo: logoUcom },
    { name: "Ardshinbank", logo: logoArdshin },
    { name: "SoftConstruct", logo: logoSoftconstruct },
    */
  ];

  return (
    <section className="py-20 px-6 bg-white border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-xs font-bold uppercase tracking-widest opacity-40 mb-10">Մեր գործընկերները և մասնակից բանկերը</h3>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {partners.map((p) => (
            <img key={p.name} src={p.logo} alt={p.name} className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
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
        <h2 className="text-4xl font-extrabold mb-12 text-center">Տեսանյութ մեր և մեր ուսանողների մասին</h2>
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
    { name: "Լիլիթ Պ.", text: "Կարծում էի, թե IT-ն միայն խիստ ծրագրավորողների համար է: Պարզվեց, որ թեստավորողի մասնագիտության մեջ ուշադրությունը և տրամաբանությունն ավելի կարևոր են, քան կոդ գրելը:", role: "Ուսուցիչ → Junior QA" },
    { name: "Տիգրան Մ.", text: "Վախենում էի, որ չեմ հաղթահարի ծանրաբեռնվածությունը: Սակայն կուրատորներն ինձ աջակցում էին յուրաքանչյուր փուլում: Այժմ հեռահար աշխատում եմ տեխնոլոգիական սթարթափում", role: "Օպերատոր → Middle QA" },
    { name: "Նարինե Ս.", text: "Փորձել եմ այլ դասընթացներ, բայց պրակտիկան չէր հերիքում: Այստեղ ամեն ինչ իրական է: Սա լավագույն ներդրումն էր իմ մեջ. ուսուցումը հետգնվեց աշխատանքի անցնելուց 2 ամիս անց:", role: "Վաճառքներ → QA Engineer" },
  ];

  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-extrabold mb-2">Մեր շրջանավարտների կարծիքները</h2>
            <p className="text-on-surface-variant">Իրական պատմություններ նրանցից, ովքեր արդեն փոխել են իրենց մասնագիտությունը և կյանքը:</p>
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
                  <div className="text-xs opacity-60">Դասընթաց «QA-ինժեներ»</div>
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
            <h2 className="text-3xl font-extrabold mb-10">Ակադեմիան թվերով</h2>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-5xl font-black text-secondary mb-2">2500+</div>
                <div className="text-sm opacity-60">ուսանող՝ սովորել են 2022 թվականից ի վեր</div>
              </div>
              <div>
                <div className="text-5xl font-black text-secondary mb-2">450+</div>
                <div className="text-sm opacity-60">գործընկեր ընկերություն</div>
              </div>
              <div>
                <div className="text-5xl font-black text-primary mb-2">9.2</div>
                <div className="text-sm opacity-60">մեզ խորհուրդ տալու պատրաստակամությունը (NPS)</div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold mb-10 text-center lg:text-left">Որտե՞ղ են աշխատում շրջանավարտները</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "EPAM", logo: logoEpam },
                { name: "Synopsys", logo: logoSynopsys },
                { name: "Picsart", logo: logoPicsart },
                { name: "ServiceTitan", logo: logoServiceTitan },
                { name: "Krisp", logo: logoKrisp },
                { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" },
              ].map((c) => (
                <div key={c.name} className="bg-white p-6 rounded-xl flex items-center justify-center hover:bg-white/90 transition-colors shadow-sm">
                  <img src={c.logo} alt={c.name} className="h-8 md:h-10 object-contain opacity-90 hover:opacity-100" />
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
    "Աշխատավարձը կանգնած է նույն տեղում մեկ տարի կամ ավելի, չկա կարիերայի աճ:",
    "Աշխատանքը խլում է ուժերը, բայց չի բերում հաճույք և զարգացում:",
    "Վախենում եք սխալվել մասնագիտության ընտրության հարցում և ժամանակն անիմաստ վատնել:",
    "Մտերիմները հետ են պահում փոփոխություններից, իսկ կողքին չկան հաջողված օրինակներ:",
    "Թվում է, թե արդեն ուշ է սկսելը կամ Դուք «տեխնիկական մարդ» չեք:",
    "Կախվածություն խիստ գրաֆիկից (5/2), չկա ազատություն և հեռահար աշխատանքի հնարավորություն:",
  ];

  return (
    <section className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-extrabold mb-10">Խնդիրներ, որոնցով դիմում են մեզ.</h2>
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
            <h2 className="text-3xl font-extrabold mb-10">Ու՞մ համար է կատարյալ այս դասընթացը.</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Ֆիզարձակուրդում գտնվող մայրիկներին", desc: "Հեռահար աշխատանք և ճկուն գրաֆիկ. իդեալական վերադարձ աշխատաշուկա:" },
                { title: "Գրասենյակի մենեջերներին", desc: "Ազատություն միօրինակությունից և կարիերայի թափանցիկ աճ:" },
                { title: "Հաշվապահներին / Ուսուցիչներին", desc: "Մանրուքների հետ աշխատելու ունակությունը QA-ի լավագույն հմտությունն է:" },
                { title: "Վաճառողներին և զանգերի կենտրոնի մասնագետներին", desc: "Հաղորդակցման հմտությունները և սթրեսակայունությունը կօգնեն IT ոլորտում:" },
                { title: "Բուհերի շրջանավարտներին", desc: "Մուտք գործե՛ք IT ոլորտ՝ առանց աշխատանքային փորձի և ծրագրավորման" },
                { title: "Բոլոր նրանց համար, ովքեր «տեխնիկական մարդ» չեն", desc: "Մեր ուսանողների ավելի քան 70%-ը եկել են ոչ տեխնիկական ոլորտներից:" },
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
            <h2 className="text-3xl font-extrabold mb-10">Ինչու՞ են մարդիկ մնում հին մասնագիտության մեջ</h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Վախենում են կորցնել «կայուն» եկամուտը:",
                "Ինքնակոչի սինդրոմ. «Ես տեխնիկական մարդ չեմ», «Ինձ տրված չէ ծրագրավորել»:",
                "Թվում է, թե արդեն ուշ է սկսելը:",
                "Գործողությունների հստակ պլանի և մենթորի բացակայություն:",
                "Հակասական տեղեկատվությամբ ծանրաբեռնվածություն IT-ի մասին:",
                "Շրջապատի կարծիքը. «Մի՛ խառնվիր այնտեղ, որտեղ քեզ չեն խնդրել»:",
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
            <h2 className="text-3xl font-extrabold mb-10">Ինչու՞ է IT ոլորտ անցնելը լավագույն որոշումը հենց հիմա</h2>
            <div className="space-y-6">
              {[
                { title: "Պահանջարկը գերազանցում է առաջարկին", desc: "QA-ը մտնում է աշխարհում ամենապահանջված IT մասնագիտությունների թոփ 5-յակի մեջ:" },
                { title: "Մուտքի իդեալական շեմ", desc: "Թեստավորողին սկզբնական փուլում պետք ՉԷ կարողանալ բարդ կոդ գրել:" },
                { title: "Արագ ուսուցում", desc: "Աշխատանքի առաջարկ (offer) ստանալու համար բավական է 4-6 ամիս սեղմ տեսություն և հզոր պրակտիկա:" },
                { title: "Եկամուտ կայուն արժույթով", desc: "Տնից ԵՄ և ԱՄՆ ընկերությունների համար աշխատելու հնարավորություն:" },
                { title: "Աշխատավարձի կայուն աճ", desc: "IT-ում Ձեր աշխատավարձը 2-3 տարում կաճի առնվազն 2-3 անգամ:" },
                { title: "Երաշխավորված հեռահար աշխատանք", desc: "Տեղաշարժվելու ազատություն. աշխատե՛ք ցանկացած քաղաքից, որտեղ կա Wi-Fi:" },
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

const ScenarioComparisonAM = () => {
  return (
    <section className="py-24 px-6 bg-surface-container-high">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-16 text-center">Ձեր կյանքի սցենարները. ընտրությունը Ձերն է</h2>
        <div className="grid md:grid-cols-2 gap-px bg-outline-variant/20 rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-white p-12">
            <h3 className="text-2xl font-bold mb-8 text-error flex items-center gap-2">
              <span className="material-symbols-outlined">sentiment_dissatisfied</span>
              Եթե ոչինչ չփոխեք
            </h3>
            <ul className="space-y-6 opacity-70">
              {[
                "Աշխատավարձը չի աճում՝ չնայած գնաճին",
                "Մշտական սթրես աշխատավայրում և մասնագիտական այրում:",
                "Արձակուրդ տարեկան մեկ անգամ՝ ըստ ժամանակացույցի:",
                "Աշխատանքը կորցնելու ռիսկ՝ ճգնաժամերի և ավտոմատացման պատճառով:",
                "Կյանք՝ աշխատավարձից աշխատավարձ. «ֆինանսական բարձիկի» բացակայություն:",
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
              Դառնալ QA-ինժեներ
            </h3>
            <ul className="space-y-6">
              {[
                "QA-ի միջին աշխատավարձը Հայաստանում՝ $1,000 – $3,300 ամսական:",
                "Հետաքրքիր առաջադրանքներ առաջատար տեխնոլոգիաների ոլորտում:",
                "Աշխատանք գլոբալ շուկայում՝ տնից կամ քովորքինգ-գրասենյակից:",
                "Առողջության ապահովագրություն, բոնուսներ, ֆիթնես և կորպորատիվ արտոնություններ:",
                "Հեղինակավոր մասնագիտություն և վստահություն վաղվա օրվա հանդեպ:",
              ].map((text, i) => (
                <li key={i} className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary">check</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <button className="mt-12 bg-white text-primary w-full py-4 rounded-xl font-bold shadow-xl hover:scale-[1.02] transition-transform">
              Փոխե՛ք Ձեր կյանքն այսօր:
            </button>
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
        <h2 className="text-4xl font-extrabold mb-4 text-center">Ձեր կարիերայի սանդուղքը QA-ում</h2>
        <p className="text-center text-on-surface-variant mb-16">Հստակ պլան՝ առաջին բագ-ռեպորտներից մինչև ավտոմատացում և մենեջմենթ:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              time: "0 — 1 տարի",
              title: "Junior QA",
              icon: "bug_report",
              items: ["Փաստաթղթերի ուսումնասիրում", "Թեստ-քեյսերի գրում", "Բագերի որոնում", "API-ի և Frontend-ի թեստավորում"],
              res: "Վստահ Junior/Middle՝ 350,000–500,000 ֏ աշխատավարձով",
            },
            {
              time: "1 — 3 տարի",
              title: "QA Automation",
              icon: "terminal",
              items: ["Լեզուներ թեստավորման համար (Python/Java)", "Գրում ենք ավտոթեստեր", "CI/CD-ի կարգավորում (DevOps)"],
              res: "Middle+ Automation՝ 800,000 AMD-ից սկսվող աշխատավարձով",
            },
            {
              time: "3+ տարի",
              title: "Lead QA / SDET",
              icon: "account_tree",
              items: ["Թիմի և գործընթացների կառավարում", "Թեստերի ճարտարապետության կառուցում", "Արտադրանքի որակի ռազմավարություն"],
              res: "Ճարտարապետ / Team Lead՝ $3000+ եկամտով",
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
                <div className="text-xs uppercase font-bold opacity-50">{i === 2 ? "Ապագա" : "Ուղենիշ"}</div>
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
        <h2 className="text-4xl font-extrabold mb-16 text-center">Մեկ օր QA / Automation QA-ի կյանքից</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { time: "10:00 — Առավոտ (Հեռահար):", title: "Միթափ և առաջադրանքներ", desc: "Թիմերի սինխրոնիզացիա Slack-ում կամ Zoom-ում: Օրվա առաջադրանքների քննարկում ծրագրավորողների հետ:" },
            { time: "11:30 — Ցերեկ:", title: "Ֆիչերի թեստավորում", desc: "Հավելվածի նոր ֆունկցիաների ստուգում: Ավտոթեստերի գրում կոդով (Python, JS) կամ թեստ-քեյսերի մշակում:" },
            { time: "16:00 — Երեկո:", title: "Բագ-ռեպորտներ", desc: "Հայտնաբերված բագերի գրանցում Jira-ում, ուղղումների քննարկում ծրագրավորողների հետ:" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl">
              <div className="text-primary font-bold mb-2">{item.time}</div>
              <h4 className="font-bold mb-3">{item.title}</h4>
              <p className="text-xs text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
          <div className="bg-secondary text-white p-6 rounded-2xl">
            <div className="font-bold mb-2">Օրվա արդյունքը</div>
            <h4 className="font-bold mb-3 text-lg">Որակյալ արտադրանք</h4>
            <p className="text-xs opacity-90">Բագերը չեն անցել հիմնական միջավայր: Հավելվածի նոր տարբերակը պատրաստ է թողարկման միլիոնավոր օգտատերերի համար:</p>
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
    lessons: string[];
  };

  const modules: Module[] = [
    {
      num: "01",
      title: "QA հիմունքներ և առաջին բագեր",
      desc: "Բագի բնույթը, կյանքի ցիկլը և պրոֆեսիոնալ նկարագրությունը:",
      skills: ["Բագի կյանքի ցիկլ", "Severity vs Priority", "ОР / ФР ձևաչափ", "Էկոնոմիկա և որակ"],
      tools: ["Jira", "Test IT", "Trello"],
      artifacts: ["10 բագ-ռեփորթ", "Դեկոմպոզիցիայի հաշվետվություն"],
    },
    {
      num: "02",
      title: "QA-փաստաթղթավորում և պրոցեսներ",
      desc: "Թեստ-քեյսեր, ստրատեգիաներ և մոբիլ թեստավորում:",
      skills: ["Test Day", "Risk-based testing", "Black/White/Grey Box", "iOS/Android սպեցիֆիկա"],
      tools: ["TestRail", "Figma", "Android Studio / Xcode"],
      artifacts: ["Test Plan Lite", "Test Suite (20+ քեյս)", "Մոբիլ չեք-լիստ"],
    },
    {
      num: "03",
      title: "Տեխնիկական թեստավորում (API & DevTools)",
      desc: "Charles Proxy, HTTP պրոտոկոլ, API (Postman) և Performance (Lighthouse):",
      skills: ["Charles Proxy (Rewrite/Breaking)", "REST API (CRUD)", "HTTP Status Codes", "Performance audit"],
      tools: ["Charles Proxy", "Postman", "Google Lighthouse", "Swagger"],
      artifacts: ["Postman Collection", "Lighthouse Audit", "Charles սցենարներ"],
    },
    {
      num: "04",
      title: "QA Engineer-ը իրական մշակման մեջ",
      desc: "Աշխատանք տվյալների բազաների հետ և սխալների որոնում լոգերում:",
      skills: ["SQL (JOIN, GROUP BY)", "NoSQL (MongoDB)", "Լոգերի վերլուծություն (Kibana)", "Տվյալների վալիդացիա"],
      tools: ["DBeaver", "PostgreSQL", "Kibana", "MongoDB"],
      artifacts: ["SQL հարցումների հավաքածու", "Լոգերի վերլուծության հաշվետվություն"],
    },
    {
      num: "05",
      title: "Ավտոմատացում (Python + Selenium)",
      desc: "Ծրագրավորման հիմունքներ և բրաուզերի ավտոմատացում:",
      accent: true,
      skills: ["Python (PEP8, Fixtures)", "Pytest framework", "Selenium WebDriver", "Page Object Pattern"],
      tools: ["Python", "PyCharm / VS Code", "Pytest", "Selenium"],
      artifacts: ["Ավտոթեստերի նախագիծ", "Allure Report"],
    },
    {
      num: "06",
      title: "AI-QA Engineer և DevOps",
      desc: "GitLab CI/CD, Docker և հետազոտական թեստավորում AI-ի օգնությամբ:",
      accent: true,
      skills: ["CI/CD Pipeline", "Docker (Containers/Images)", "Exploratory Testing", "Charter-based testing"],
      tools: ["GitLab CI", "Docker", "ChatGPT", "Jenkins"],
      artifacts: ["Կարգավորված CI/CD Pipeline", "Docker-compose ֆայլ", "Exploratory Test Report"],
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
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-3">Ուսումնական մոդուլներ</div>
                      <div className="space-y-2 mb-4">
                        {item.lessons.map((lesson, j) => (
                          <div key={j} className="flex gap-3 items-center bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/5">
                            <span className={`w-6 h-6 rounded-full ${item.accent ? 'bg-secondary' : 'bg-primary'} text-white text-[10px] flex items-center justify-center flex-shrink-0 font-bold`}>{j + 1}</span>
                            <span className="text-sm font-medium">{lesson}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 pt-2">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">Skills</div>
                        <ul className="space-y-1">
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
    { year: 5, label: "Ավելի քան 3 տարի", role: "Senior QA / Lead", base: 900000, growth: 600000 },
  ];

  return (
    <section className="py-24 px-6 bg-surface-container-high" id="calculator">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">QA-ինժեների եկամտի հաշվիչ</h2>
          <p className="text-on-surface-variant text-lg">Գործիք՝ Ձեր աշխատավարձի աճի հեռանկարները հասկանալու համար*</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-outline-variant/10 mb-12">
          <div className="max-w-2xl mx-auto mb-16">
            <div className="flex justify-between items-center mb-6">
              <label className="font-bold text-sm uppercase tracking-wider opacity-60">Ձեր զարգացման տեմպը</label>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                {intensity < 33 ? "Կայուն աճ" : intensity < 66 ? "Վստահ զարգացում" : "Առավելագույն արագություն"}
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
                  <div className="text-[10px] uppercase font-bold text-secondary">Ամսական եկամուտը</div>

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
        "QA Vocabulary — տեխնիկական անգլերեն թեստավորողների համար",
        "Վեբինարների շարք աշխատանքի տեղավորման և պատվիրատուների փնտրման վերաբերյալ",
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
        "QA Vocabulary — տեխնիկական անգլերեն թեստավորողների համար",
        "Հարցազրույցի նախապատրաստում անգլերենով",
        "Մինի-կուրս Upwork-ի վերաբերյալ",
        "Վեբինարների շարք աշխատանքի տեղավորման և պատվիրատուների փնտրման վերաբերյալ",
        "1–2 անհատական նախապատրաստում հարցազրույցին",
        "QA կարիերայի ստրատեգիա",
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-surface-container-low" id="pricing">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">QA ուսուցման փաթեթներ</h2>
        <p className="text-center text-on-surface-variant mb-16 text-lg max-w-2xl mx-auto">Ներդրում կատարե՛ք Ձեր կայուն ապագայի մեջ: Հնարավոր է վճարում՝ տարաժամկետ տարբերակով մինչև 24 ամիս ժամկետով:</p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`${plan.dark ? "bg-slate-900 text-white" : "bg-white text-on-surface"} rounded-3xl p-8 shadow-sm border ${plan.popular ? "border-2 border-primary" : "border-outline-variant/10"} flex flex-col h-full relative transition-transform hover:scale-[1.02]`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Հաճախակի ընտրվող
                </div>
              )}
              <div className="mb-8 font-bold">
                <h3 className={`text-4xl font-black mb-2 ${plan.dark ? "text-secondary" : "text-primary"}`}>{plan.name}</h3>
                <p className={`${plan.dark ? "text-white/60" : "text-on-surface-variant"} text-sm`}>{plan.desc}</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <span className={`material-symbols-outlined ${plan.dark ? "text-secondary" : "text-primary"} text-lg`}>
                      check_circle
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <div className="mb-6">
                  <div className="flex flex-col mb-1">
                    <span className="text-sm opacity-50 line-through">{plan.oldMonthly} դրամ</span>
                    <span className="text-3xl font-black">ամսական {plan.monthly} դրամ</span>
                  </div>
                  <div className="text-[10px] uppercase font-bold opacity-40">Ընդհանուր արժեքը՝ {plan.price}</div>
                </div>
                <button className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/10 hover:brightness-110 active:scale-95 transition-all">
                  Ընտրել փաթեթը
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FooterAM = () => {
  return (
    <footer className="bg-slate-900 text-white/60 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-9 w-9 flex-shrink-0 bg-secondary rounded-xl" style={{ borderBottomLeftRadius: '50%' }}></div>
            <span className="text-white font-extrabold text-xl tracking-tight">Gortsup Academy</span>
          </div>
          <p className="text-sm max-w-xs mb-6">Gortsup Academy</p>
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
          <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Կոնտակտներ</h5>
          <div className="text-sm space-y-2">
            <div>ք. Երևան, Եկմալյան 1</div>
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
  ScenarioComparisonAM,
  CareerMapAM,
  DayInLifeAM,
  ProgramAM,
  BenefitCalculatorAM,
  PricingAM,
  FooterAM,
  PartnersAM
};
