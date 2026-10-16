"use client";

import { useState } from "react";

const telegramHandle = "aidanyeva";
const phoneHref = "tel:+79193791119";
const phoneLabel = "+7 919 379-11-19";

function telegram(message: string) {
  return `https://t.me/${telegramHandle}?text=${encodeURIComponent(message)}`;
}

const quickOffers = [
  {
    number: "01",
    eyebrow: "понять, с чего начать",
    title: "AI-аудит проекта",
    price: "3 000 ₽",
    meta: "30 минут",
    text: "Разбираемся с задачей, смотрим решения прямо в AI-модели, выбираем подходящие нейросети и определяем следующие шаги.",
    note: "Если продолжаем работу, 3 000 ₽ входят в стоимость следующего продукта.",
    action: "Записаться на AI-аудит",
    href: telegram("Евгения, хочу записаться на AI-аудит проекта за 3 000 ₽."),
  },
  {
    number: "02",
    eyebrow: "сразу сделать задачу",
    title: "Практическая сессия",
    price: "10 000 ₽",
    meta: "60 минут",
    text: "Приходите со своей задачей. Открываем проект и делаем: сайт, продажи в соцсетях, предложение, воронку, настройку или план запуска.",
    note: "Не рассказываю, как сделать. Делаем вместе прямо на встрече.",
    action: "Прийти с задачей",
    href: telegram("Евгения, хочу практическую сессию за 10 000 ₽. Моя задача: "),
  },
];

const productOffers = [
  {
    tag: "AI под человека",
    title: "Персональная настройка нейросети",
    price: "10 000 ₽",
    meta: "1–1,5 часа · один созвон",
    text: "Настраиваем ChatGPT или другую нейросеть под ваши задачи: память, правила, стиль, рабочие сценарии, плагины и инструменты.",
    result: "На встрече сырая нейросеть превращается в ваш рабочий инструмент.",
    href: telegram("Евгения, хочу персонально настроить нейросеть за 10 000 ₽."),
  },
  {
    tag: "GEO / AI-видимость",
    title: "Индекс цифровой репутации",
    price: "14 900 ₽",
    meta: "точка А → настройка → точка Б",
    text: "Подготавливаю действующий сайт к нейровыдаче: персональные файлы, инструкция и понятная структура для AI-систем.",
    result: "Через 1,5 месяца вы самостоятельно повторяете замер и сравниваете изменения в 14 AI-системах.",
    href: telegram("Евгения, хочу заказать Индекс цифровой репутации за 14 900 ₽. Мой сайт: "),
  },
  {
    tag: "авторский метод",
    title: "Зебра в клеточку",
    price: "20 000 ₽",
    meta: "2 встречи · результат за 1–2 дня",
    text: "Находим вашу «клеточку» — сильное отличие продукта или личного бренда, которое рынок увидит, поймёт и запомнит.",
    result: "Позиционирование, идеи продвижения, каналы и письменный пошаговый план.",
    href: telegram("Евгения, хочу заказать «Зебру в клеточку» за 20 000 ₽."),
  },
];

const buildOffers = [
  {
    mark: "для Telegram",
    title: "Мини-сайт",
    price: "25 000 ₽",
    text: "Компактная страница для закрепа в канале: кто вы, что у вас можно купить, цены и прямые кнопки заказа.",
    href: telegram("Евгения, хочу мини-сайт для Telegram за 25 000 ₽."),
  },
  {
    mark: "сайт как канал продаж",
    title: "Сайт + SEO + AI",
    price: "50 000 ₽",
    text: "Продающий сайт вместе с SEO- и AI-оптимизацией — чтобы его могли находить люди, поисковые системы и нейросети.",
    href: telegram("Евгения, хочу сайт с SEO- и AI-оптимизацией за 50 000 ₽."),
  },
  {
    mark: "под ребёнка",
    title: "Персональный AI-репетитор",
    price: "20 000 ₽",
    text: "Создаю под ключ или вместе с родителем: под предмет, цель, уровень, учебники, авторов и методику преподавателя.",
    href: telegram("Евгения, хочу персонального AI-репетитора за 20 000 ₽."),
  },
  {
    mark: "под задачу бизнеса",
    title: "Маркетинговый проект",
    price: "от 50 000 ₽",
    text: "Позиционирование, инновационная воронка, сайт, AI-сервисы, креативы и точки контакта собираются в одну систему.",
    href: telegram("Евгения, хочу обсудить комплексный маркетинговый проект. Моя задача: "),
  },
];

const lectureDirections = [
  "AI и нейросети",
  "маркетинг и продажи",
  "AI в бизнесе и жизни",
  "beauty-сфера",
  "fashion и бренды одежды",
  "недвижимость",
  "психологи и мягкие ниши",
  "дети и родители",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Евгения Даныева — в начало">
          <strong>Евгения Даныева</strong>
          <span>маркетинг × AI × сильные идеи</span>
        </a>

        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Навигация">
          <a href="#start" onClick={() => setMenuOpen(false)}>С чего начать</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Продукты</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Проекты</a>
          <a href="#review" onClick={() => setMenuOpen(false)}>Отзыв</a>
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={phoneHref} aria-label={`Позвонить ${phoneLabel}`}>Позвонить</a>
          <a className="header-cta" href={telegram("Евгения, хочу обсудить мою задачу: ")} target="_blank" rel="noreferrer">Написать <span>↗</span></a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="hero section">
        <div className="hero-copy">
          <p className="kicker"><i /> Евгения Даныева · предприниматель · AI-интегратор</p>
          <h1>Приходите с задачей. <em>Уйдёте с решением.</em></h1>
          <p className="hero-lead">
            Сайты, продажи, нейросети, воронки и продукты. Я не оставляю вас с теорией — открываем ваш проект и делаем то, что должно заработать.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#start">Выбрать решение <span>↓</span></a>
            <a className="button button-secondary" href={telegram("Евгения, у меня есть задача. Хочу обсудить: ")} target="_blank" rel="noreferrer">Рассказать о задаче <span>↗</span></a>
          </div>
          <div className="hero-facts" aria-label="Ключевые факты">
            <div><strong>20+</strong><span>лет в бизнесе</span></div>
            <div><strong>AI</strong><span>сразу в практику</span></div>
            <div><strong>1:1</strong><span>работаем вместе</span></div>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="portrait-frame"><img src="/images/evgeniya-main.png" alt="Евгения Даныева за работой с ноутбуком" /></div>
          <div className="portrait-note"><span>Практическая сессия</span><strong>10 000 ₽</strong><small>за 60 минут можно многое успеть</small></div>
          <div className="portrait-orbit" aria-hidden="true"><i /><i /><i /></div>
        </div>
        <span className="section-number">01 / 08</span>
      </section>

      <section className="recognition section" id="start">
        <div className="section-heading">
          <p className="kicker dark"><i /> Не выбирайте услугу — выберите свою ситуацию</p>
          <h2>Что у вас <em>не двигается?</em></h2>
          <p>Можно начать с короткого аудита, сразу открыть проект на рабочей сессии или выбрать готовый продукт.</p>
        </div>
        <div className="situation-grid">
          <a href="#quick"><span>01</span><b>Не понимаю, с чего начать</b><small>AI-аудит проекта →</small></a>
          <a href="#quick"><span>02</span><b>Есть задача — хочу сделать её вместе</b><small>Практическая сессия →</small></a>
          <a href="#products"><span>03</span><b>Нейросеть отвечает поверхностно</b><small>Настройка под вас →</small></a>
          <a href="#zebra"><span>04</span><b>Продукт не отличается от рынка</b><small>«Зебра в клеточку» →</small></a>
          <a href="#build"><span>05</span><b>Нужен сайт, воронка или AI-сервис</b><small>Собрать проект →</small></a>
          <a href="#lectures"><span>06</span><b>Нужно обучить команду или аудиторию</b><small>Лекция-практикум →</small></a>
        </div>
        <span className="section-number">02 / 08</span>
      </section>

      <section className="quick section" id="quick">
        <div className="section-heading compact light-heading">
          <p className="kicker"><i /> Два способа начать</p>
          <h2>Разобраться <em>или сразу делать.</em></h2>
        </div>
        <div className="quick-grid">
          {quickOffers.map((offer) => (
            <article className="quick-card" key={offer.number}>
              <div className="quick-top"><span>{offer.number}</span><small>{offer.eyebrow}</small></div>
              <h3>{offer.title}</h3>
              <div className="offer-price"><strong>{offer.price}</strong><span>{offer.meta}</span></div>
              <p>{offer.text}</p>
              <em>{offer.note}</em>
              <a className="button button-primary" href={offer.href} target="_blank" rel="noreferrer">{offer.action} <span>↗</span></a>
            </article>
          ))}
        </div>
        <span className="section-number">03 / 08</span>
      </section>

      <section className="products section" id="products">
        <div className="section-heading">
          <p className="kicker dark"><i /> Готовые продукты с понятным результатом</p>
          <h2>Три сильных <em>следующих шага.</em></h2>
          <p>Здесь заранее понятны стоимость, формат работы и то, что останется у вас после.</p>
        </div>
        <div className="product-grid">
          {productOffers.map((offer, index) => (
            <article className={index === 2 ? "product-card zebra-card" : "product-card"} id={index === 2 ? "zebra" : undefined} key={offer.title}>
              {index === 2 && <img className="zebra-watermark" src="/images/zebra-clean.webp" alt="" aria-hidden="true" />}
              <span className="product-tag">{offer.tag}</span>
              <h3>{offer.title}</h3>
              <div className="offer-price"><strong>{offer.price}</strong><span>{offer.meta}</span></div>
              <p>{offer.text}</p>
              <div className="result-line"><span>На выходе</span><b>{offer.result}</b></div>
              <a className="card-link" href={offer.href} target="_blank" rel="noreferrer">Заказать <span>↗</span></a>
            </article>
          ))}
        </div>
        <div className="reputation-route">
          <div><small>Индекс цифровой репутации</small><strong>Точка А</strong><span>самостоятельный замер</span></div>
          <b>→</b>
          <div><strong>Настройка</strong><span>файлы и инструкция</span></div>
          <b>→</b>
          <div><strong>1,5 месяца</strong><span>время на обнаружение</span></div>
          <b>→</b>
          <div><strong>Точка Б</strong><span>повторный замер</span></div>
        </div>
        <p className="honesty-note"><strong>Без обещаний управлять чужими алгоритмами.</strong> Мы усиливаем доступные AI-системам сигналы и сравниваем наблюдаемые изменения одинаковым способом.</p>
        <span className="section-number">04 / 08</span>
      </section>

      <section className="build section" id="build">
        <div className="section-heading compact light-heading">
          <p className="kicker"><i /> Собрать готовый инструмент</p>
          <h2>Не идея в презентации. <em>Рабочий результат.</em></h2>
        </div>
        <div className="build-grid">
          {buildOffers.map((offer, index) => (
            <article key={offer.title} className={index === 1 ? "build-card featured-build" : "build-card"}>
              <span>{offer.mark}</span>
              <h3>{offer.title}</h3>
              <strong>{offer.price}</strong>
              <p>{offer.text}</p>
              <a href={offer.href} target="_blank" rel="noreferrer">Обсудить <b>↗</b></a>
            </article>
          ))}
        </div>
        <div className="custom-project">
          <div><small>Не нашли свою задачу?</small><h3>AI-сервис, инновационная воронка или идея, которой пока нет на рынке.</h3></div>
          <p>Опишите задачу лично. Мы продумаем решение — возможно, в нём будет несколько AI-сервисов, связанных в одну систему продаж.</p>
          <a className="button button-lime" href={telegram("Евгения, у меня нестандартная задача. Хочу придумать решение: ")} target="_blank" rel="noreferrer">Придумать решение <span>↗</span></a>
        </div>
        <span className="section-number">05 / 08</span>
      </section>

      <section className="worlds section" id="projects">
        <div className="section-heading">
          <p className="kicker dark"><i /> Обучение и отдельные миры</p>
          <h2>Практика для взрослых, <em>команд и детей.</em></h2>
          <p>Можно пригласить Евгению с лекцией-практикумом или перейти в готовую специализированную программу.</p>
        </div>

        <div className="lecture-panel" id="lectures">
          <div className="lecture-copy">
            <span>Выступления и практикумы</span>
            <h3>Евгения Даныева проводит лекции-практикумы по AI, маркетингу и интеграции нейросетей в бизнес и жизнь.</h3>
            <p>Участники не только слушают, но и сразу пробуют инструменты на своих задачах. Стоимость — по личному запросу.</p>
            <a className="button button-dark" href={telegram("Евгения, хочу пригласить вас провести лекцию-практикум. Аудитория и тема: ")} target="_blank" rel="noreferrer">Пригласить Евгению <span>↗</span></a>
          </div>
          <div className="lecture-tags" aria-label="Темы лекций-практикумов">
            {lectureDirections.map((direction, index) => <span key={direction}><i>{String(index + 1).padStart(2, "0")}</i>{direction}</span>)}
          </div>
        </div>

        <div className="project-links">
          <article>
            <small>Для психологов и мягких ниш</small>
            <h3>Психолог × AI</h3>
            <p>Цифровая система частной практики: продукты, сайт, контент, AI-сервисы и рабочие инструменты.</p>
            <div><a href="https://psiholog-ai-danyeva.danyeva.chatgpt.site" target="_blank" rel="noreferrer">Посмотреть программу ↗</a><a href={telegram("Евгения, хочу узнать о программе «Психолог × AI» без VPN.")} target="_blank" rel="noreferrer">Узнать без VPN</a></div>
            <em>Для открытия сайта может понадобиться VPN</em>
          </article>
          <article>
            <small>AI для детей и родителей</small>
            <h3>НейроДвиж</h3>
            <p>Детям — легче учиться и создавать с AI. Родителям — экономить время, деньги и нервы.</p>
            <div><a href="https://neurodvizh.danyeva.chatgpt.site/" target="_blank" rel="noreferrer">Посмотреть проект ↗</a><a href={telegram("Евгения, хочу узнать о проекте «НейроДвиж» без VPN.")} target="_blank" rel="noreferrer">Узнать без VPN</a></div>
            <em>Для открытия сайта может понадобиться VPN</em>
          </article>
        </div>
        <span className="section-number">06 / 08</span>
      </section>

      <section className="review section" id="review">
        <div className="review-copy">
          <p className="kicker"><i /> Вместо тысячи слов обо мне</p>
          <h2>Лучше послушайте, <em>что говорит клиент.</em></h2>
          <p>Одна минута о работе со мной — без длинной самопрезентации.</p>
          <div className="review-facts">
            <div><strong>20+</strong><span>лет предпринимательства</span></div>
            <div><strong>AI</strong><span>маркетинг и внедрение</span></div>
            <div><strong>LIVE</strong><span>работа на вашем проекте</span></div>
          </div>
          <a className="button button-lime" href={telegram("Евгения, посмотрел(а) отзыв. Хочу обсудить мою задачу: ")} target="_blank" rel="noreferrer">Обсудить мою задачу <span>↗</span></a>
        </div>
        <div className="video-shell">
          <video controls playsInline preload="metadata" poster="/images/client-review-poster.jpg" aria-label="Видеоотзыв клиента о работе с Евгенией Даныевой">
            <source src="/client-review.mp4" type="video/mp4" />
            Ваш браузер не поддерживает воспроизведение видео.
          </video>
          <div className="video-label"><span>отзыв клиента</span><strong>00:59</strong></div>
        </div>
        <span className="section-number">07 / 08</span>
      </section>

      <section className="final section" id="contact">
        <div className="final-mark" aria-hidden="true">Ж</div>
        <p className="kicker"><i /> Можно начать сегодня</p>
        <h2>Расскажите, <em>что нужно решить.</em></h2>
        <p className="final-lead">Если задача понятна — выбирайте продукт. Если пока нет — начните с AI-аудита или просто напишите. Я помогу выбрать следующий шаг.</p>
        <div className="final-actions">
          <a className="button button-primary" href={telegram("Евгения, хочу обсудить мою задачу: ")} target="_blank" rel="noreferrer">Написать в Telegram <span>↗</span></a>
          <a className="button button-secondary" href={phoneHref}>Позвонить: {phoneLabel} <span>↗</span></a>
        </div>
        <div className="contact-strip">
          <div><span>Telegram</span><a href={`https://t.me/${telegramHandle}`} target="_blank" rel="noreferrer">@{telegramHandle}</a></div>
          <div><span>Телефон</span><a href={phoneHref}>{phoneLabel}</a></div>
          <div><span>Формат</span><strong>онлайн · по всей России</strong></div>
        </div>
        <footer>
          <div><strong>Евгения Даныева</strong><span>маркетинг × AI × сильные идеи</span></div>
          <a href="#top">Вернуться наверх ↑</a>
          <p>© 2026</p>
        </footer>
        <span className="section-number">08 / 08</span>
      </section>
    </main>
  );
}
