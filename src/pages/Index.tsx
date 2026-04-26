import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const PORTFOLIO_IMAGE = "https://cdn.poehali.dev/projects/16348c51-c09c-4ff6-8393-866fe76f0c6e/files/c0539ee5-e08b-4b0d-8d4e-f8a8e85b0cd5.jpg";

const navLinks = [
  { label: "Обо мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Кейсы", href: "#cases" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contact" },
];

const services = [
  {
    num: "01",
    title: "Брендинг",
    desc: "Создаю визуальную систему с нуля: логотип, палитра, типографика, паттерны, руководство по стилю. Работаю так, чтобы бренд выглядел последовательно — от визитки до билборда.",
    detail: "от 80 000 ₽ · 3–4 недели",
  },
  {
    num: "02",
    title: "Веб-дизайн",
    desc: "Проектирую сайты, которые продают: лендинги, корпоративные порталы, интернет-магазины. Полный цикл — от исследования и прототипа до финального макета с анимациями.",
    detail: "от 60 000 ₽ · 2–3 недели",
  },
  {
    num: "03",
    title: "Дизайн упаковки",
    desc: "Разрабатываю упаковку, которую хочется взять в руки. Работаю с FMCG, beauty, food и lifestyle-брендами. Предоставляю макеты, готовые к печати, с учётом технических требований производства.",
    detail: "от 40 000 ₽ · 1–2 недели",
  },
  {
    num: "04",
    title: "Ребрендинг",
    desc: "Помогаю компаниям обновить устаревший образ без потери узнаваемости. Провожу аудит текущего стиля, анализирую конкурентов и предлагаю эволюционное или революционное решение.",
    detail: "от 120 000 ₽ · 4–6 недель",
  },
];

const portfolioWorks = [
  {
    title: "MAISON DORÉE",
    cat: "Брендинг",
    year: "2024",
    img: "https://cdn.poehali.dev/projects/16348c51-c09c-4ff6-8393-866fe76f0c6e/files/a5fac17e-38dc-4398-9e39-721f24b977cd.jpg",
    desc: "Полная визуальная идентичность для ювелирного дома",
  },
  {
    title: "Бюро Form",
    cat: "Веб-дизайн",
    year: "2024",
    img: "https://cdn.poehali.dev/projects/16348c51-c09c-4ff6-8393-866fe76f0c6e/files/2e8a2547-50c7-44e2-a3f9-061a87efd919.jpg",
    desc: "Сайт-портфолио для архитектурного бюро, Москва",
  },
  {
    title: "Noir Cosmetics",
    cat: "Упаковка",
    year: "2023",
    img: "https://cdn.poehali.dev/projects/16348c51-c09c-4ff6-8393-866fe76f0c6e/files/29ddb682-1794-467b-9bb0-770bacf2f1bb.jpg",
    desc: "Линейка из 12 продуктов категории luxury skincare",
  },
  {
    title: "Meridian Group",
    cat: "Ребрандинг",
    year: "2023",
    img: "https://cdn.poehali.dev/projects/16348c51-c09c-4ff6-8393-866fe76f0c6e/files/ad0c4421-2f94-4108-b13f-b3ef9f9e094e.jpg",
    desc: "Обновление корпоративного стиля девелопера",
  },
];

const cases = [
  {
    num: "01",
    title: "Перезапуск бренда MAISON DORÉE",
    result: "+340% узнаваемость",
    desc: "Ювелирный дом с 15-летней историей выходил в новый сегмент — молодая аудитория 25–35 лет. Разработал новую айдентику: лаконичный логотип, золотую монограмму, систему из 140+ фирменных элементов. Запустил обновлённый сайт и Instagram-визуал.",
    tags: ["Брендинг", "Упаковка", "Digital", "SMM-визуал"],
    period: "Март – Июнь 2024",
  },
  {
    num: "02",
    title: "Сайт бюро Form — архитектура и интерьер",
    result: "×2.4 конверсия в заявки",
    desc: "Старый сайт не отражал уровень работ. Провёл UX-аудит, спроектировал новую структуру с акцентом на портфолио. Адаптивная вёрстка, скорость загрузки 1.2с, удобная CMS для самостоятельного обновления проектов.",
    tags: ["Веб-дизайн", "UX/UI", "Прототипирование"],
    period: "Январь – Февраль 2024",
  },
  {
    num: "03",
    title: "Упаковка линейки Noir Cosmetics",
    result: "Вход в 3 федеральные сети",
    desc: "Стартап без узнаваемости хотел попасть на полки «Золотого Яблока» и «Лэтуаль». Разработал концепцию, иллюстрации, технические макеты для 12 SKU. Упаковка прошла проверку байеров с первого раза.",
    tags: ["Упаковка", "Иллюстрация", "Полиграфия"],
    period: "Сентябрь – Октябрь 2023",
  },
];

const reviews = [
  {
    name: "Елена Морозова",
    role: "CEO, Maison Dorée",
    avatar: "ЕМ",
    text: "Александр полностью погрузился в DNA нашего бренда. Результат — не просто красиво, а точно в цель. После обновления мы получили запросы от байеров, которые раньше нас игнорировали.",
    rating: 5,
    date: "Июнь 2024",
  },
  {
    name: "Артём Волков",
    role: "Основатель, Бюро Form",
    avatar: "АВ",
    text: "Работаем уже второй раз. Редкое сочетание визуального вкуса и понимания бизнес-задачи. Сдал в срок, объяснил каждое решение, никаких правок после финала.",
    rating: 5,
    date: "Март 2024",
  },
  {
    name: "Мария Соколова",
    role: "CMO, Noir Cosmetics",
    avatar: "МС",
    text: "Мы боялись, что не пройдём проверку байеров — уж слишком нишевая эстетика. Прошли. Упаковка стала нашим главным аргументом на переговорах с ретейлерами.",
    rating: 5,
    date: "Ноябрь 2023",
  },
  {
    name: "Игорь Беляев",
    role: "Директор, Meridian Group",
    avatar: "ИБ",
    text: "Поставили жёсткий дедлайн — 3 недели на ребрендинг. Уложились. Ни разу не пожалел о выборе — работа системная, без хаоса и лишних итераций.",
    rating: 5,
    date: "Август 2023",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-obsidian text-ivory font-body overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between"
        style={{ background: "linear-gradient(to bottom, rgba(14,14,14,0.95), transparent)" }}>
        <a href="#" className="font-display text-xl font-light tracking-[0.3em] text-ivory uppercase">
          A.Studio
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="nav-link text-sm tracking-widest uppercase text-ivory/60 hover:text-ivory transition-colors duration-300">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-ivory/60 hover:text-gold transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-obsidian flex flex-col items-center justify-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-display text-3xl font-light tracking-widest uppercase text-ivory/80 hover:text-gold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-end px-8 md:px-16 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-charcoal to-obsidian" />
          <div
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: `radial-gradient(ellipse 80% 60% at 70% 40%, rgba(201,168,76,0.25) 0%, transparent 70%)` }}
          />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10"
            style={{ background: "linear-gradient(135deg, transparent 40%, rgba(201,168,76,0.3) 100%)" }} />
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 font-display text-[20vw] font-light text-white/[0.03] select-none leading-none">
          2024
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="flex items-center gap-4 mb-8 animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
            <span className="block w-12 h-px bg-gold" />
            <span className="text-xs tracking-[0.4em] uppercase text-gold font-body">Дизайн-студия</span>
          </div>

          <h1 className="font-display font-light leading-[0.9] mb-8 animate-fade-up"
            style={{ fontSize: "clamp(3rem, 9vw, 8rem)", animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}>
            Визуальные<br />
            <em className="not-italic text-gold">решения</em><br />
            высшего класса
          </h1>

          <p className="text-ivory/50 font-body font-light text-lg max-w-md leading-relaxed mb-12 animate-fade-up"
            style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}>
            Брендинг, веб-дизайн и упаковка для компаний,<br />
            которые ценят эстетику и результат.
          </p>

          <div className="flex items-center gap-6 animate-fade-up" style={{ animationDelay: "0.8s", opacity: 0, animationFillMode: "forwards" }}>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 border border-gold text-gold font-body text-sm tracking-widest uppercase hover:bg-gold hover:text-obsidian transition-all duration-500"
            >
              Смотреть работы
              <Icon name="ArrowRight" size={16} />
            </a>
            <a href="#contact" className="text-sm tracking-widest uppercase text-ivory/40 hover:text-ivory transition-colors duration-300">
              Написать
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-3 text-ivory/30">
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold/40 animate-pulse" />
        </div>
      </section>

      <div className="px-8 md:px-16">
        <span className="gold-line" />
      </div>

      {/* ABOUT */}
      <section id="about" className="py-28 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimSection>
            <div className="relative">
              <img
                src={PORTFOLIO_IMAGE}
                alt="Портфолио"
                className="w-full aspect-[4/5] object-cover"
                style={{ filter: "grayscale(20%) contrast(1.05)" }}
              />
              <div className="absolute -bottom-6 -right-6 border border-gold/30 w-full h-full -z-10" />
              <div className="absolute bottom-6 left-6 bg-obsidian/90 border border-gold/20 px-6 py-4 backdrop-blur-sm">
                <div className="font-display text-4xl text-gold font-light">8+</div>
                <div className="text-xs tracking-widest uppercase text-ivory/50 mt-1">лет опыта</div>
              </div>
            </div>
          </AnimSection>

          <AnimSection>
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-px bg-gold" />
              <span className="text-xs tracking-[0.4em] uppercase text-gold">О мне</span>
            </div>
            <h2 className="font-display font-light leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Александр Нечаев —<br />
              <em className="not-italic text-gold">дизайнер брендов</em>
            </h2>
            <p className="text-ivory/60 leading-relaxed mb-6">
              Начинал как арт-директор в агентстве Depot WPF, затем ушёл в самостоятельную практику. Сейчас работаю напрямую с владельцами бизнеса — без посредников и «испорченного телефона».
            </p>
            <p className="text-ivory/60 leading-relaxed mb-6">
              Специализируюсь на премиум-сегменте: мода, ювелирное дело, архитектура, beauty и lifestyle. Мои работы выходили в Adweek, Packaging Digest и номинировались на Red Dot Award 2023.
            </p>
            <p className="text-ivory/50 text-sm leading-relaxed mb-10 border-l-2 border-gold/40 pl-4 italic">
              «Хороший дизайн — это не украшение. Это аргумент.»
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[["153", "проекта"], ["47", "клиентов"], ["8", "наград"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl text-gold font-light">{n}</div>
                  <div className="text-xs tracking-widest uppercase text-ivory/40 mt-1">{l}</div>
                </div>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-8 md:px-16 bg-charcoal">
        <div className="max-w-6xl mx-auto">
          <AnimSection>
            <div className="flex items-center gap-4 mb-4">
              <span className="block w-8 h-px bg-gold" />
              <span className="text-xs tracking-[0.4em] uppercase text-gold">Услуги</span>
            </div>
            <h2 className="font-display font-light leading-tight mb-16" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Что я создаю
            </h2>
          </AnimSection>

          <div className="grid md:grid-cols-2 gap-px bg-white/5">
            {services.map((s, i) => (
              <AnimSection key={s.num}>
                <div className="bg-charcoal p-10 group hover:bg-obsidian transition-colors duration-500 cursor-default"
                  style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-display text-5xl font-light text-gold/20 group-hover:text-gold/40 transition-colors duration-500 leading-none">
                      {s.num}
                    </span>
                    <div className="w-8 h-px bg-gold/20 group-hover:bg-gold/60 transition-all duration-500 mt-4 group-hover:w-12" />
                  </div>
                  <h3 className="font-display text-2xl font-light mb-4 group-hover:text-gold transition-colors duration-300">{s.title}</h3>
                  <p className="text-ivory/50 text-sm leading-relaxed mb-6">{s.desc}</p>
                  <span className="text-xs tracking-widest uppercase text-gold/50 border-t border-white/10 pt-4 block">{s.detail}</span>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-28 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <AnimSection>
            <div className="flex items-center justify-between mb-16">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="block w-8 h-px bg-gold" />
                  <span className="text-xs tracking-[0.4em] uppercase text-gold">Портфолио</span>
                </div>
                <h2 className="font-display font-light" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                  Избранные работы
                </h2>
              </div>
              <a href="#contact" className="hidden md:flex items-center gap-2 text-sm tracking-widest uppercase text-ivory/40 hover:text-gold transition-colors">
                Все работы <Icon name="ArrowRight" size={14} />
              </a>
            </div>
          </AnimSection>

          <div className="grid md:grid-cols-2 gap-4">
            {portfolioWorks.map((w, i) => (
              <AnimSection key={w.title}>
                <div className="group relative overflow-hidden cursor-pointer"
                  style={{ transitionDelay: `${i * 0.1}s` }}>
                  <img
                    src={w.img}
                    alt={w.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "grayscale(15%)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">{w.cat} · {w.year}</p>
                        <h3 className="font-display text-xl font-light text-ivory mb-1">{w.title}</h3>
                        <p className="text-ivory/40 text-xs font-body">{w.desc}</p>
                      </div>
                      <div className="w-10 h-10 border border-gold/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Icon name="ArrowUpRight" size={16} className="text-gold" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-28 px-8 md:px-16 bg-charcoal">
        <div className="max-w-6xl mx-auto">
          <AnimSection>
            <div className="flex items-center gap-4 mb-4">
              <span className="block w-8 h-px bg-gold" />
              <span className="text-xs tracking-[0.4em] uppercase text-gold">Кейсы</span>
            </div>
            <h2 className="font-display font-light mb-16" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Результаты в цифрах
            </h2>
          </AnimSection>

          <div className="space-y-px">
            {cases.map((c, i) => (
              <AnimSection key={c.num}>
                <div className="bg-charcoal/50 border border-white/5 p-8 md:p-12 group hover:border-gold/20 transition-colors duration-500 cursor-default"
                  style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="grid md:grid-cols-[80px_1fr_220px] gap-6 items-start">
                    <span className="font-display text-5xl font-light text-gold/20 group-hover:text-gold/50 transition-colors duration-500">
                      {c.num}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-light mb-3 group-hover:text-gold transition-colors duration-300">{c.title}</h3>
                      <p className="text-ivory/50 text-sm leading-relaxed mb-5">{c.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {c.tags.map(t => (
                          <span key={t} className="text-xs tracking-widest uppercase px-3 py-1 border border-white/10 text-ivory/40">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right md:border-l md:border-white/5 md:pl-6">
                      <div className="font-display text-2xl text-gold font-light mb-2">{c.result}</div>
                      <div className="text-xs tracking-widest uppercase text-ivory/30">{c.period}</div>
                    </div>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-28 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <AnimSection>
            <div className="flex items-center gap-4 mb-4">
              <span className="block w-8 h-px bg-gold" />
              <span className="text-xs tracking-[0.4em] uppercase text-gold">Отзывы</span>
            </div>
            <h2 className="font-display font-light mb-16" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Говорят клиенты
            </h2>
          </AnimSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r, i) => (
              <AnimSection key={r.name}>
                <div className="border border-white/10 p-7 hover:border-gold/30 transition-colors duration-500 flex flex-col h-full"
                  style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.rating }).map((_, j) => (
                        <span key={j} className="text-gold text-xs">★</span>
                      ))}
                    </div>
                    <span className="text-xs text-ivory/25 tracking-widest">{r.date}</span>
                  </div>
                  <p className="font-display text-base font-light text-ivory/75 leading-relaxed italic flex-1 mb-7">
                    «{r.text}»
                  </p>
                  <div className="border-t border-white/10 pt-5 flex items-center gap-3">
                    <div className="w-9 h-9 bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-gold text-xs font-body font-medium tracking-wider">{r.avatar}</span>
                    </div>
                    <div>
                      <div className="font-body font-medium text-sm text-ivory leading-tight">{r.name}</div>
                      <div className="text-xs text-ivory/35 mt-0.5">{r.role}</div>
                    </div>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-8 md:px-16 bg-charcoal">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <AnimSection>
            <div className="flex items-center gap-4 mb-4">
              <span className="block w-8 h-px bg-gold" />
              <span className="text-xs tracking-[0.4em] uppercase text-gold">Контакты</span>
            </div>
            <h2 className="font-display font-light mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Начнём<br />работу вместе?
            </h2>
            <p className="text-ivory/50 leading-relaxed mb-4">
              Расскажите о проекте — отвечу в течение 24 часов, обсудим задачи и форматы сотрудничества.
            </p>
            <p className="text-ivory/35 text-sm leading-relaxed mb-10">
              Принимаю 2–3 новых проекта в месяц. Если свободных мест нет — поставлю в лист ожидания.
            </p>

            <div className="space-y-5">
              {[
                { icon: "Mail", label: "Email", val: "bogatyrevdima131@gmail.com", href: "mailto:bogatyrevdima131@gmail.com" },
                { icon: "Phone", label: "Телефон", val: "+7 (958) 232-30-41", href: "tel:+79582323041" },
                { icon: "MessageCircle", label: "WhatsApp / MAX", val: "+7 (958) 232-30-41", href: "https://wa.me/79582323041" },
                { icon: "MapPin", label: "Работаю из", val: "Москва · удалённо", href: null },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as "Mail"} size={14} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs tracking-widest uppercase text-ivory/30 mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        className="text-ivory/80 text-sm hover:text-gold transition-colors duration-300">
                        {item.val}
                      </a>
                    ) : (
                      <div className="text-ivory/80 text-sm">{item.val}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimSection>

          <AnimSection>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="w-16 h-16 border border-gold/40 flex items-center justify-center mb-6">
                  <Icon name="Check" size={24} className="text-gold" />
                </div>
                <h3 className="font-display text-3xl font-light mb-4 text-gold">Отправлено</h3>
                <p className="text-ivory/50 text-sm">Отвечу в течение 24 часов</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: "name", label: "Ваше имя", type: "text", placeholder: "Александр Иванов" },
                  { id: "email", label: "Email", type: "email", placeholder: "email@company.ru" },
                ].map(field => (
                  <div key={field.id}>
                    <label className="text-xs tracking-widest uppercase text-ivory/40 block mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={e => setFormData(p => ({ ...p, [field.id]: e.target.value }))}
                      className="w-full bg-transparent border-b border-white/15 focus:border-gold outline-none py-3 text-ivory text-sm placeholder-ivory/25 transition-colors duration-300"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs tracking-widest uppercase text-ivory/40 block mb-2">Сообщение</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    className="w-full bg-transparent border-b border-white/15 focus:border-gold outline-none py-3 text-ivory text-sm placeholder-ivory/25 transition-colors duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full py-4 border border-gold text-gold font-body text-sm tracking-widest uppercase hover:bg-gold hover:text-obsidian transition-all duration-500 flex items-center justify-center gap-3"
                >
                  Отправить заявку
                  <Icon name="ArrowRight" size={16} />
                </button>
              </form>
            )}
          </AnimSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-8 md:px-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-light tracking-[0.3em] text-ivory/40 uppercase">A.Studio</span>
          <span className="text-xs text-ivory/20 tracking-widest">© 2024 · Все права защищены</span>
          <div className="flex items-center gap-5">
            {["Instagram", "Behance", "Telegram"].map(s => (
              <a key={s} href="#" className="text-xs tracking-widest uppercase text-ivory/30 hover:text-gold transition-colors duration-300">
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}