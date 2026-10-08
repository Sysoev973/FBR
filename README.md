# TechShop — многостраничный HTML/CSS-сайт

## Контрольная работа №1
Тема: «HTML и CSS: разработка многостраничного сайта».
В проекте реализован многостраничный HTML/CSS-сайт интернет-магазина компьютерной периферии (дисциплина «Фронтенд и бэкенд разработка», 3 семестр, 2026/2027).

## Автор
ФИО: Сысоев Георгий Михайлович
Группа: ЭФБО-10_25

## Ссылка на опубликованный проект
GitHub Pages: https://Sysoev973.github.io/FBR/

## Как посмотреть проект
1. Откройте ссылку GitHub Pages выше **или** клонируйте репозиторий и откройте `index.html` в браузере.
2. Сборка и сервер не нужны: проект состоит из статических файлов.

## Структура проекта
```
kr1-html-css-shop/
├── index.html      — главная: hero, преимущества, популярные товары
├── catalog.html    — каталог: сетка карточек и блок фильтров (Grid)
├── product.html    — карточка товара: описание, 2 таблицы, FAQ
├── order.html      — форма заявки
├── contacts.html   — контакты и форма обратной связи
├── sitemap.xml     — карта сайта
├── css/style.css   — все стили (переменные, БЭМ, Flex/Grid)
├── js/main.js      — только открытие/закрытие модального окна
├── images/         — SVG-изображения товаров
├── README.md
└── .gitignore
```

## Используемые технологии
HTML5, CSS3 (переменные, Flexbox, Grid, sticky/fixed), минимальный JavaScript для `<dialog>`, Git, GitHub Pages. Без CSS-фреймворков.

## Обязательные страницы и элементы
| Требование | Где реализовано |
|---|---|
| Семантика `header, nav, main, section, article, aside, footer` | все страницы |
| Единая навигация + якорные ссылки (`#advantages`, `#popular`, `#contacts`, `#specs`, `#delivery`, `#faq`) | шапка и подвал |
| Карточки товаров (БЭМ, бейджи, модификаторы `--featured`, `--discount`) | `index.html`, `catalog.html` |
| Таблицы с `caption/thead/tbody/th/td` | `product.html` |
| Форма (label/for/id, name, required, type=email, согласие) | `order.html`, `contacts.html`, модалка |
| Модальное окно `<dialog>` | `index.html`, `catalog.html` |
| CSS-переменные, `:hover`, `:focus-visible`, `:disabled` | `css/style.css` |
| Flexbox и Grid | навигация, карточки, формы; `products-grid`, `catalog-layout` с `grid-template-areas` |
| Позиционирование | `relative` (карточка), `absolute` (бейдж), `sticky` (шапка, фильтры), `fixed` (кнопка «Наверх», уведомление), `z-index` |

## Самостоятельные доработки
- собственная тематика магазина, SVG-иллюстрации товаров;
- бейджи «Хит», «Новинка», «Скидка» и модификатор `product-card--discount`;
- блок фильтров каталога (sticky) и хлебные крошки на внутренних страницах;
- две таблицы на странице товара и блок FAQ на `<details>`;
- кнопка «Наверх» и ссылка «Перейти к содержимому» (skip-link);
- доступность: видимый фокус, связанные label/id, `aria-current`, `aria-invalid`, `role="status"`;
- подсветка цели якоря через `:target`, Open Graph-разметка и `sitemap.xml` (дополнительные задания ПР5);
- модальное окно закрывается по кнопке, `Esc` и клику по фону; в нём показывается выбранный товар.

## История выполнения

- Практическая работа 1: создан Git-репозиторий, опубликован проект на GitHub Pages.
- Практическая работа 2: создан HTML-каркас стартовой страницы и выполнено базовое CSS-оформление.
- Практическая работа 3: добавлена форма заявки, модальное окно и базовая валидация.
- Практическая работа 4: добавлены CSS-переменные, состояния интерфейса и упорядочена структура стилей.
- Практическая работа 5: создана многостраничная структура сайта, добавлены единая навигация, якорные ссылки, хлебные крошки, `:target`, Open Graph и `sitemap.xml`.
- Практическая работа 6: добавлены Flexbox-навигация и Grid-раскладка карточек и каталога (`grid-template-areas`, `grid-area`).
- Практическая работа 7: выполнен рефакторинг CSS-стилей по методологии БЭМ.

## Использование Flexbox и Grid

- `site-nav__list` — `display: flex` с `justify-content`, `align-items`, `gap`;
- `product-card` — `display: flex; flex-direction: column`, блок кнопок прижат к низу карточки;
- `products-grid` — `display: grid` с `repeat(auto-fill, minmax(260px, 1fr))` и `gap`;
- `catalog-layout` — `display: grid`, `grid-template-columns: 260px 1fr`, `grid-template-areas: "filters products"`; `catalog-filters` и `catalog-products` занимают свои области через `grid-area`;
- `catalog-filters__form` — `display: grid` для групп полей фильтра;
- `order-form`, `order-form__actions`, `hero__actions` — Flexbox.

## БЭМ-структура проекта

Блоки (элементы — `block__element`, модификаторы — `block--modifier`):

- `site-header` — шапка сайта (`__inner`, `__logo`);
- `site-nav` — основная навигация (`__list`, `__item`, `__link`, `__link--active`);
- `breadcrumbs` — хлебные крошки (`__list`, `__item`, `__link`, `__current`);
- `hero` — первый экран главной страницы;
- `section`, `advantages`, `note` — разделы и информационные блоки;
- `products-grid` — сетка товаров;
- `product-card` — карточка товара (`__image`, `__title`, `__description`, `__price`, `__actions`, `__button`; модификаторы `--featured`, `--discount`);
- `badge` — бейдж (`--hit`, `--new`, `--sale`);
- `catalog-layout` — структура страницы каталога;
- `catalog-filters` — фильтры каталога (`__form`, `__group`, `__legend`, `__list`, `__item`, `__label`, `__input`);
- `catalog-products` — область списка товаров;
- `product-page`, `spec-table`, `faq` — страница товара, таблицы, FAQ;
- `order-dialog` — модальное окно заявки (`__title`);
- `order-form` — форма заявки (`__field`, `__label`, `__input`, `__select`, `__textarea`, `__actions`, `__actions--start`);
- `button` — кнопка (`--primary`, `--secondary`, `--disabled`);
- `success-message`, `to-top`, `skip-link` — вспомогательные компоненты;
- `site-footer` — подвал сайта.

Стилизация через `id` и inline-стили не используются; `id` оставлены только для якорей, `label for` и JavaScript.

## Курс
Проект — основа для КР №3 (адаптивность), КР №4 (JavaScript), КР №5 (SPA).
