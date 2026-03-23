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
          {["Программа", "Карьера", "Калькулятор", "Отзывы", "О нас"].map((item) => (
            <a
              key={item}
              href={`#${item === "Программа" ? "program" : item === "Карьера" ? "career" : item === "Калькулятор" ? "calculator" : item === "Отзывы" ? "reviews" : "about"}`}
              className="font-bold tracking-tight text-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <span className="text-primary font-bold text-sm hidden sm:inline">+374 (93) 128-696</span>
          <button className="bg-primary text-white font-bold tracking-tight text-sm px-5 py-2.5 rounded-lg active:scale-95 transform transition-transform">
            Консультация
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
            Профессия: QA-инженер
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.05]">
            Освойте профессию <span className="text-secondary">QA-инженера</span> с нуля
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-xl leading-relaxed">
            Войди в IT без опыта и программирования. Обучение с поддержкой трудоустройства. Доход от 350K до 1M AMD в перспективе 1–3 года. Бесплатная карьерная консультация.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-secondary text-white px-8 py-5 rounded-xl font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-secondary/20">
              Начать обучение
            </button>
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur px-6 py-4 rounded-xl">
              <img
                alt="Consultant"
                className="w-10 h-10 rounded-full border-2 border-white/20"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNQlvELy6WVWSI9Au5H1zMwF3Yfgf6GNRkB1000UNDM0VT5-AIVmnOKvhQILN5nbO0FnTV2NyBly-3Aakwk6iSK1b2sWqSpW6r4qDNYTBxFJBJXXzOfd8SDTBp4m5WCm2Np8-i65RAzm8-GyoWrQ6Krv5b7-dkRUD9YTYDr3vU9zDDqA_2nPcb6wrOwI49YbLRkaj22lYpCkznaa72XZiFe-7d14uhOfx6hOFu3UIDQCcTptcb7edPaRixWywoYY622r15ULUttEI"
                referrerPolicy="no-referrer"
              />
              <div className="text-sm text-left">
                <div className="font-bold">Ани Мартиросян</div>
                <div className="opacity-70">Карьерный консультант Gortsup</div>
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
                <div className="text-primary font-bold text-2xl">4 мес.</div>
                <div className="text-xs uppercase font-bold tracking-tighter opacity-60">До старта карьеры в IT</div>
              </div>
              <div className="h-10 w-px bg-outline-variant/30"></div>
              <div>
                <div className="text-secondary font-bold text-2xl">350К֏</div>
                <div className="text-xs uppercase font-bold tracking-tighter opacity-60">Стартовая ЗП (Junior)</div>
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
    { name: "Ани, 28 лет", before: "180 000 ֏", after: "450 000 ֏", role: "Manual QA", prev: "Продавец" },
    { name: "Арман, 31 год", before: "250 000 ֏", after: "750 000 ֏", role: "QA Automation", prev: "Офис-менеджер" },
    { name: "Мариам, 24 года", before: "Без опыта", after: "380 000 ֏", role: "Junior QA", prev: "Выпускница вуза" },
    { name: "Гор, 29 лет", before: "220 000 ֏", after: "600 000 ֏", role: "QA Engineer", prev: "Работник склада" },
    { name: "Лилит, 34 года", before: "Учитель", after: "400 000+ ֏", role: "Freelance QA", prev: "Преподаватель" },
    { name: "Давид, 27 лет", before: "300 000 ֏", after: "1 200 000 ֏", role: "QA Lead", prev: "Бухгалтер" },
    { name: "Элен, 33 года", before: "Декрет", after: "420 000 ֏", role: "Remote QA", prev: "В декрете" },
    { name: "Тигран, 36 лет", before: "100 000 ֏", after: "550 000 ֏", role: "Middle QA", prev: "Оператор кол-центра" },
  ];

  return (
    <section className="py-24 px-6 bg-surface" id="reviews">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
          Кейсы студентов. <span className="text-primary">Из разных профессий в IT</span>
        </h2>
        <p className="text-center text-on-surface-variant mb-16 text-lg max-w-2xl mx-auto">
          Сотни студентов сменили профессию с нашей помощью. Следующая история успеха — твоя.
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
                  <div className="text-[10px] uppercase font-bold opacity-50">До обучения</div>
                  <div className="font-bold text-error">{s.before}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold opacity-50">После ({s.role})</div>
                  <div className="font-bold text-secondary text-xl">{s.after}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all">
            Хочу такой же результат
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
        <h3 className="text-center text-xs font-bold uppercase tracking-widest opacity-40 mb-10">О нас говорят в медиа</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">
          {["Armenia Today", "Hayk Media", "Shant TV", "Recruit Days 2024", "Радио Ван"].map((m) => (
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
    { id: "OjkkJjG1ntM", title: "Gortsup Academy - QA Education" },
    { id: "rWGZSXyFOeI", title: "IT Revolution in Armenia" },
  ];

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center">Видео о нас и наших студентах</h2>
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
    { name: "Лилит П.", text: "Думала, что IT — только для суровых программистов. Оказалось, что в профессии тестировщика внимательность и логика важнее кода.", role: "Учитель → Manual QA" },
    { name: "Тигран М.", text: "Боялся, что не справлюсь с нагрузкой. Однако кураторы поддерживали на каждом этапе. Сейчас работаю удалённо на технологический стартап.", role: "Оператор → Middle QA" },
    { name: "Нарине С.", text: "Пробовала другие курсы — не хватало практики. Здесь всё по-настоящему. Это лучшее вложение в себя — обучение окупилось через 2 месяца работы.", role: "Продажи → QA Engineer" },
  ];

  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-extrabold mb-2">Отзывы наших выпускников</h2>
            <p className="text-on-surface-variant">Реальные истории тех, кто уже сменил профессию и изменил свою жизнь</p>
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
                  <div className="text-xs opacity-60">Курс "QA-инженер"</div>
                </div>
              </div>
              <p className="text-sm italic mb-6">«{r.text}»</p>
              <div className="pt-4 border-t border-outline-variant/10 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase opacity-40">Карьерный переход</span>
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
            <h2 className="text-3xl font-extrabold mb-10">Академия в цифрах</h2>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-5xl font-black text-secondary mb-2">1500+</div>
                <div className="text-sm opacity-60">студентов обучились с 2022 года</div>
              </div>
              <div>
                <div className="text-5xl font-black text-primary mb-2">≤3 мес</div>
                <div className="text-sm opacity-60">средний срок трудоустройства выпускников</div>
              </div>
              <div>
                <div className="text-5xl font-black text-secondary mb-2">450+</div>
                <div className="text-sm opacity-60">компаний-партнеров</div>
              </div>
              <div>
                <div className="text-5xl font-black text-primary mb-2">9.2</div>
                <div className="text-sm opacity-60">готовность рекомендовать нас (NPS)</div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold mb-10 text-center lg:text-left">Где работают выпускники</h2>
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

const PainPoints = () => {
  const pains = [
    "Зарплата стоит на месте год или больше, нет карьерного роста",
    "Работа забирает силы, но не приносит удовольствия и развития",
    "Боишься ошибиться с выбором профессии и потратить время впустую",
    "Близкие отговаривают от перемен, а нет примеров успешного перехода рядом",
    "Кажется, что уже поздно начинать или ты 'не технарь'",
    "Зависимость от жесткого графика (5/2), нет свободы и удалёнки",
  ];

  return (
    <section className="py-24 px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-extrabold mb-10">Проблемы, с которыми к нам приходят:</h2>
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
            <h2 className="text-3xl font-extrabold mb-10">Кому идеально подойдёт курс:</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Девушкам и мамам в декрете", desc: "Удаленная работа и гибкий график, идеальный возврат на рынок труда" },
                { title: "Офис-менеджерам", desc: "Свобода от рутины и прозрачный карьерный рост" },
                { title: "Бухгалтерам/Учителям", desc: "Умение работать с деталями — лучший навык для QA!" },
                { title: "Продавцам и специалистам кол-центров", desc: "Коммуникабельность и стрессоустойчивость помогут в IT" },
                { title: "Выпускникам вузов", desc: "Освой IT без опыта работы и программирования" },
                { title: "Всем 'не технарям'", desc: "Более 70% наших студентов пришли из нетехнических сфер" },
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
            <h2 className="text-3xl font-extrabold mb-10">Почему люди застревают в старой профессии?</h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Боятся потерять 'стабильный' доход",
                "Синдром самозванца: 'Я не технарь', 'Мне не дано программировать'",
                "Кажется, что уже поздно начинать",
                "Отсутствие чёткого плана действий и наставника",
                "Перегруженность противоречивой информацией про IT",
                "Мнение окружающих: 'Не лезь, куда не просят'",
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
            <h2 className="text-3xl font-extrabold mb-10">Почему перейти в IT лучше именно сейчас?</h2>
            <div className="space-y-6">
              {[
                { title: "Спрос превышает предложение", desc: "QA входит в топ-5 востребованных IT-профессий в мире." },
                { title: "Идеальный порог входа", desc: "Тестировщику на старте НЕ нужно уметь писать сложный код." },
                { title: "Быстрое обучение", desc: "Для получения оффера достаточно 4-6 месяцев сжатой теории и мощной практики." },
                { title: "Доход в крепкой валюте", desc: "Возможность работать на компании в ЕС и США из дома." },
                { title: "Стабильный рост ЗП", desc: "Ваша зарплата в IT за 2-3 года вырастет минимум в 2-3 раза." },
                { title: "Гарантированная удалёнка", desc: "Свобода передвижений: работайте из любого города, где есть Wi-Fi." },
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
        <h2 className="text-4xl font-extrabold mb-16 text-center">Сценарии вашей жизни: выбор за вами</h2>
        <div className="grid md:grid-cols-2 gap-px bg-outline-variant/20 rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-white p-12">
            <h3 className="text-2xl font-bold mb-8 text-error flex items-center gap-2">
              <span className="material-symbols-outlined">sentiment_dissatisfied</span>
              Если ничего не менять
            </h3>
            <ul className="space-y-6 opacity-70">
              {[
                "Зарплата не растет, несмотря на инфляцию",
                "Постоянный стресс на работе и выгорание",
                "Отпуск один раз в год по расписанию",
                "Риск потери работы из-за кризисов и автоматизации",
                "Жизнь от зарплаты до зарплаты: отсутствие 'подушки'",
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
              Стать QA-инженером
            </h3>
            <ul className="space-y-6">
              {[
                "Средняя ЗП QA в Армении — $1 000 – $3 300 в месяц",
                "Интересные задачи в сфере передовых технологий",
                "Работа на глобальном рынке из дома или офиса-ковёркинга",
                "ДМС, бонусы, фитнес и корпоративные плюшки",
                "Престижная профессия и уверенность в завтрашнем дне",
              ].map((text, i) => (
                <li key={i} className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary">check</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <button className="mt-12 bg-white text-primary w-full py-4 rounded-xl font-bold shadow-xl hover:scale-[1.02] transition-transform">
              Изменить свою жизнь сегодня
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
        <h2 className="text-4xl font-extrabold mb-4 text-center">Ваша карьерная лестница в QA</h2>
        <p className="text-center text-on-surface-variant mb-16">Четкий план: от первых баг-репортов до автоматизации и менеджмента.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              time: "0 — 1 год",
              title: "Manual QA",
              icon: "bug_report",
              items: ["Изучение документации", "Написание тест-кейсов", "Поиск багов", "Тестирование API и Frontend"],
              res: "Уверенный Junior/Middle с ЗП 350-500K AMD",
            },
            {
              time: "1 — 3 года",
              title: "QA Automation",
              icon: "terminal",
              items: ["Языки для тестирования (Python/Java)", "Пишем автотесты", "Настройка CI/CD (DevOps)"],
              res: "Middle+ Automation с ЗП от 800K AMD",
            },
            {
              time: "3+ года",
              title: "Lead QA / SDET",
              icon: "account_tree",
              items: ["Управление командой и процессами", "Построение архитектуры тестов", "Стратегическое качество продукта"],
              res: "Архитектор / Team Lead с доходом $3000+",
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
                <div className="text-xs uppercase font-bold opacity-50">{i === 2 ? "Будущее" : "Ориентир"}</div>
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
        <h2 className="text-4xl font-extrabold mb-16 text-center">Один день из жизни QA / Automation QA</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { time: "10:00 — Утро (Удаленно)", title: "Стендап и задачи", desc: "Синхронизация команд в Slack или Zoom. Обсуждаем задачи на день с разработчиками." },
            { time: "11:30 — День", title: "Тестирование фич", desc: "Проверка новых функций приложения. Написание автотестов в коде (Python, JS) или тест-кейсов." },
            { time: "16:00 — Вечер", title: "Баг-репорты", desc: "Занесение найденных багов в Jira, обсуждение исправлений с программистами." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl">
              <div className="text-primary font-bold mb-2">{item.time}</div>
              <h4 className="font-bold mb-3">{item.title}</h4>
              <p className="text-xs text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
          <div className="bg-secondary text-white p-6 rounded-2xl">
            <div className="font-bold mb-2">Итог дня</div>
            <h4 className="font-bold mb-3 text-lg">Качественный продукт</h4>
            <p className="text-xs opacity-90">Баги не прошли на прод. Новая версия приложения готова к релизу для миллионов пользователей.</p>
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
            <h2 className="text-4xl font-extrabold mb-6">Программа курса</h2>
            <p className="text-on-surface-variant mb-8">Более 50% практики. Мы учим только актуальному на рынке стеку и готовим к реальной работе с первого месяца.</p>
            <button className="bg-primary text-white w-full py-4 rounded-xl font-bold">Скачать подробную программу (PDF)</button>
          </div>
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Введение в QA", desc: "Основы, жизненный цикл разработки (SDLC), виды тестирования и тест-дизайн." },
              { num: "02", title: "Тест-документация", desc: "Jira, создание баг-репортов, написание мастер тест-кейсов и чек-листов." },
              { num: "03", title: "API-тестирование", desc: "Как работает клиент-серверная архитектура. Глубокое погружение в Postman." },
              { num: "04", title: "Базы данных", desc: "Основы SQL, запросы, DDL и DML, взаимодействие с базами данных." },
              { num: "05", title: "QA Automation (Автотесты)", desc: "Автоматизация тестирования (Selenium / Cypress / Playwright).", accent: true },
              { num: "06", title: "Трудоустройство", desc: "Оформление резюме, подготовка к техническим и HR-интервью (Mock-интервью).", accent: true },
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
    { year: 1, label: "Старт (Первый год)", role: "Junior QA", base: 350000, growth: 150000 },
    { year: 3, label: "Через 1-3 года", role: "Middle QA (Manual / Auto)", base: 600000, growth: 300000 },
    { year: 5, label: "Более 3 лет", role: "Senior QA / Lead", base: 900000, growth: 600000 },
  ];

  return (
    <section className="py-24 px-6 bg-surface-container-high" id="calculator">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Калькулятор дохода QA-инженера</h2>
          <p className="text-on-surface-variant text-lg">Ожидаемый рост вашей заработной платы после курса*</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-outline-variant/10 mb-12">
          <div className="max-w-2xl mx-auto mb-16">
            <div className="flex justify-between items-center mb-6">
              <label className="font-bold text-sm uppercase tracking-wider opacity-60">Темп вашего развития</label>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                {intensity < 33 ? "Ровный рост" : intensity < 66 ? "Уверенное развитие" : "Максимальная скорость"}
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
                  <div className="text-[10px] uppercase font-bold text-secondary">В месяц</div>

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
              <h4 className="font-bold text-sm mb-1">Окупаемость инвестиций</h4>
              <p className="text-xs opacity-70">Стоимость обучения окупается всего за 2–3 месяца после трудоустройства на стартовую позицию.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
            <span className="material-symbols-outlined text-secondary">verified</span>
            <div>
              <h4 className="font-bold text-sm mb-1">Карьерная поддержка</h4>
              <p className="text-xs opacity-70">Наши карьерные менеджеры и मॉक-интервью помогут вам быстрее получить оффер.</p>
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
      name: "САМОСТОЯТЕЛЬНЫЙ",
      desc: "Для тех, кто готов учиться сам",
      price: "400 000 ֏",
      features: [
        "Доступ к образовательной платформе (24/7)",
        "Записи лекций и видеоуроки в HD",
        "Интерактивные задания с автопроверкой",
        "Общий чат со студентами",
        "Сертификат об окончании",
      ],
    },
    {
      name: "С КУРАТОРОМ",
      desc: "Оптимальный для старта карьеры",
      price: "600 000 ֏",
      popular: true,
      features: [
        "Всё, что входит в Самостоятельный",
        "Персональный куратор на весь срок",
        "Проверка ДЗ с детальным видео-разбором",
        "Служба поддержки",
        "Оформление мощного резюме",
        { text: "Подготовка профилей в LinkedIn/Staff", accent: true },
        { text: "Практика на реальных 4 проектах", accent: true },
      ],
    },
    {
      name: "С ПОДДЕРЖКОЙ (PRO)",
      desc: "Максимальный результат и помощь",
      price: "800 000 ֏",
      dark: true,
      features: [
        "Всё, что входит в Куратор тариф",
        "Индивидуальный карьерный план",
        "Многократные Mock-интервью 1на1",
        "Поддержка вплоть до трудоустройства",
        "Личный ментор (Senior QA)",
        "Гарантия возврата / помощь до оффера**",
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-surface-container-low" id="pricing">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">Пакеты обучения QA</h2>
        <p className="text-center text-on-surface-variant mb-16 text-lg max-w-2xl mx-auto">Инвестируйте в свое стабильное будущее. Оплата возможна в рассрочку до 24 месяцев!</p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`${plan.dark ? "bg-slate-900 text-white" : "bg-white text-on-surface"} rounded-3xl p-8 shadow-sm border ${plan.popular ? "border-2 border-primary" : "border-outline-variant/10"} flex flex-col h-full relative transition-transform hover:scale-[1.02]`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Частый выбор
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
                  <div className="text-[10px] uppercase font-bold opacity-40">Единовременно или в рассрочку</div>
                </div>
                <button className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/10 hover:brightness-110 active:scale-95 transition-all">
                  Выбрать пакет
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-center text-on-surface-variant mt-8 max-w-2xl mx-auto">
          Рассрочка без первого взноса. Партнеры: Ameria Bank, Idram, VTB. Решение за 1 день с минимальным пакетом документов.
        </p>
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
          <p className="text-sm max-w-xs mb-6">Академия Gortsup. Комплексное обучение современным IT-профессиям с гарантией качества и менторской поддержкой.</p>
          <div className="flex gap-4">
            {["FB", "TG", "IN"].map((s) => (
              <span key={s} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-colors text-xs font-bold">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Обучение</h5>
          <ul className="text-sm space-y-2">
            {["QA-инженер", "Программа", "Карьера", "Отзывы", "Наш подход"].map((link) => (
              <li key={link} className="hover:text-white cursor-pointer">{link}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Контакты</h5>
          <div className="text-sm space-y-2">
            <div>Ереван, ул. Амирян 4/7</div>
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
