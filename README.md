# Beauty Scripts Landing Page

Современный высококонверсионный лендинг для продажи скриптов продаж в beauty-индустрии.

## Особенности

- **Две цветовые темы**: Orange и Nude
- **Адаптивный дизайн**: оптимизирован для всех устройств
- **Плавные анимации**: современные микро-взаимодействия
- **Высокая производительность**: Lighthouse Score 90+
- **SEO-оптимизация**: семантическая разметка
- **Готовность к Stripe**: интеграция платежей

## Структура проекта

```
/
├── index.html          # Основная страница
├── css/
│   └── styles.css      # Стили с поддержкой тем
├── js/
│   └── main.js         # JavaScript функциональность
├── images/
│   ├── hero_final.jpg  # Основное hero изображение
│   └── hero.jpg        # Fallback изображение
└── README.md           # Документация
```

## Переключение тем

### Программно:
```javascript
// Переключение на Orange тему
switchTheme('orange');

// Переключение на Nude тему
switchTheme('nude');
```

### CSS переменные:
```css
/* Orange Theme (по умолчанию) */
:root {
  --primary: #D54B2A;
  --primary2: #F06A3F;
  --highlight: rgba(213, 75, 42, .16);
}

/* Nude Theme */
.theme-nude {
  --primary: #8A5A44;
  --primary2: #B37A64;
  --highlight: rgba(179, 122, 100, .18);
}
```

## Настройка цветов

Все цвета настраиваются через CSS переменные в `:root`:

- `--primary` - основной акцентный цвет
- `--primary2` - второй оттенок для градиентов
- `--brand-grad` - градиент для кнопок
- `--highlight` - цвет подсветки текста
- `--bonus-grad` - градиент для секции бонусов

## Интеграция Stripe

В файле `js/main.js` найдите секцию "Payment buttons" и раскомментируйте код для интеграции:

```javascript
const response = await fetch('/api/checkout', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    plan: button.dataset.pay
  })
});
```

## Оптимизация изображений

Hero изображения должны быть:
- Формат: WebP с fallback на JPG
- Качество: 85-90%
- Размеры: 1920x1080 для desktop, 768x1024 для mobile
- Оптимизация: сжатие без потери качества

## Производительность

- Минифицированные CSS и JS
- Оптимизированные изображения
- Ленивая загрузка анимаций
- Debounced scroll events
- Intersection Observer для анимаций

## Браузерная поддержка

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Развертывание

1. Загрузите все файлы на сервер
2. Убедитесь, что изображения в папке `/images/`
3. Настройте HTTPS для безопасности
4. Подключите Stripe для приема платежей

## Техническая поддержка

Для изменения контента редактируйте:
- Тексты: `index.html`
- Стили: `css/styles.css`
- Функциональность: `js/main.js`