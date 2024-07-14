const translation = {
  welcome: {
    firstStepTip: 'Для початку,',
    enterKeyTip: 'введіть свій ключ API OpenAI нижче',
    getKeyTip: 'Отримайте свій ключ API з панелі OpenAI',
    placeholder: 'Ваш ключ API OpenAI (напр. sk-xxxx)',
  },
  apiKeyInfo: {
    cloud: {
      trial: {
        title: 'Ви використовуєте квоту пробного періоду {{providerName}}.',
        description: 'Квота пробного періоду надається для вашого тестувального використання. Перш ніж будуть вичерпані виклики квоти пробного періоду, налаштуйте свого власного постачальника моделей або придбайте додаткову квоту.',
      },
      exhausted: {
        title: 'Вашу квоту пробного періоду вичерпано, налаштуйте свій ключ API.',
        description: 'Вашу квоту пробного періоду вичерпано. Налаштуйте свого власного постачальника моделей або придбайте додаткову квоту.',
      },
    },
    selfHost: {
      title: {
        row1: 'Для початку,',
        row2: 'спочатку налаштуйте постачальника моделей.',
      },
    },
    callTimes: 'Кількість викликів',
    usedToken: 'Використані токени',
    setAPIBtn: 'Перейти до налаштування постачальника моделей',
    tryCloud: 'Або спробуйте хмарну версію Mlchain з безкоштовним цитатою',
  },
  overview: {
    title: 'Огляд',
    appInfo: {
      explanation: 'Готовий до використання веб-додаток зі штучним інтелектом',
      accessibleAddress: 'Публічний URL',
      preview: 'Попередній перегляд',
      regenerate: 'Відновити',
      regenerateNotice: 'Бажаєте згенерувати новий публічний URL?',
      preUseReminder: 'Будь ласка, активуйте веб-додаток перед продовженням.',
      settings: {
        entry: 'Налаштування',
        title: 'Налаштування веб-додатку',
        webName: 'Назва веб-додатку',
        webDesc: 'Опис веб-додатку',
        webDescTip: 'Цей текст буде відображений на клієнтському боці, надаючи базові вказівки щодо використання додатка',
        webDescPlaceholder: 'Введіть опис веб-додатку',
        language: 'Мова',
        workflow: {
          title: 'Кроки робочого процесу',
          show: 'Показати',
          hide: 'Приховати',
        },
        chatColorTheme: 'Тема кольору чату',
        chatColorThemeDesc: 'Встановіть тему кольору чат-бота',
        chatColorThemeInverted: 'Інвертовано',
        invalidHexMessage: 'Недійсне шістнадцяткове значення',
        more: {
          entry: 'Показати додаткові налаштування',
          copyright: 'Авторське право',
          copyRightPlaceholder: 'Введіть ім\'я автора або організації',
          privacyPolicy: 'Політика конфіденційності',
          privacyPolicyPlaceholder: 'Введіть посилання на політику конфіденційності',
          privacyPolicyTip: 'Допомагає відвідувачам зрозуміти дані, зібрані додатком, див. <privacyPolicyLink>Політику конфіденційності</privacyPolicyLink> Mlchain.',
          customDisclaimer: 'Відмова від відповідальності',
          customDisclaimerPlaceholder: 'Введіть відмову від відповідальності',
          customDisclaimerTip: 'Відображається на клієнтському боці, щоб визначити відповідальність за використання додатка',
        },
      },
      embedded: {
        entry: 'Вбудоване',
        title: 'Вбудувати на веб-сайт',
        explanation: 'Виберіть спосіб вбудування чат-додатка на ваш веб-сайт',
        iframe: 'Для додавання чат-додатка в будь-яке місце на вашому веб-сайті, додайте цей iframe до вашого HTML-коду.',
        scripts: 'Для додавання чат-додатка в правий нижній кут вашого веб-сайту додайте цей код до вашого HTML.',
        chromePlugin: 'Встановити розширення Chrome Mlchain Chatbot',
        copied: 'Скопійовано',
        copy: 'Скопіювати',
      },
      qrcode: {
        title: 'QR-код для обміну',
        scan: 'Сканувати та обмінюватися додатком',
        download: 'Завантажити QR-код',
      },
      customize: {
        way: 'спосіб',
        entry: 'Налаштувати',
        title: 'Налаштування веб-додатку зі штучним інтелектом',
        explanation: 'Ви можете налаштувати інтерфейс користувача веб-додатка, щоб він відповідав вашим потребам у сценаріях та стилі.',
        way1: {
          name: 'Склонуйте клієнтський код, відредагуйте його та розгорніть на Vercel (рекомендовано)',
          step1: 'Склонуйте клієнтський код та відредагуйте його',
          step1Tip: 'Натисніть тут, щоб склонувати вихідний код у ваш обліковий запис GitHub та відредагувати код',
          step1Operation: 'Клієнт-Web-Mlchain',
          step2: 'Розгорніть на Vercel',
          step2Tip: 'Натисніть тут, щоб імпортувати репозиторій у Vercel та розгорнути',
          step2Operation: 'Імпорт репозиторію',
          step3: 'Налаштуйте змінні середовища',
          step3Tip: 'Додайте наступні змінні середовища у Vercel',
        },
        way2: {
          name: 'Напишіть клієнтський код для виклику API та розгорніть його на сервері',
          operation: 'Документація',
        },
      },
    },
    apiInfo: {
      title: 'API сервісу Backend',
      explanation: 'Легко інтегрований у вашу програму',
      accessibleAddress: 'Кінцева точка API сервісу',
      doc: 'Довідка з API',
    },
    status: {
      running: 'У роботі',
      disable: 'Вимкнути',
    },
  },
  analysis: {
    title: 'Аналіз',
    ms: 'мс',
    tokenPS: 'Токени/с',
    totalMessages: {
      title: 'Загальна кількість повідомлень',
      explanation: 'Щоденна кількість взаємодій з штучним інтелектом; інженерія/налагодження запитів виключено.',
    },
    activeUsers: {
      title: 'Активні користувачі',
      explanation: 'Унікальні користувачі, які взаємодіють з AI; інженерія/налагодження запитів виключено.',
    },
    tokenUsage: {
      title: 'Використання токенів',
      explanation: 'Відображає щоденне використання токенів мовної моделі для додатка, корисно для контролю витрат.',
      consumed: 'Спожито',
    },
    avgSessionInteractions: {
      title: 'Середня кількість взаємодій за сесію',
      explanation: 'Кількість продовжуючихся спілкувань користувача з AI; для програм, що базуються на розмові.',
    },
    avgUserInteractions: {
      title: 'Середня кількість взаємодій на користувача',
      explanation: 'Відображає щоденну частоту використання користувачами. Ця метрика відображає лояльність користувачів.',
    },
    userSatisfactionRate: {
      title: 'Показник задоволення користувача',
      explanation: 'Кількість лайків на 1000 повідомлень. Це вказує на те, наскільки задоволені користувачі відповідями.',
    },
    avgResponseTime: {
      title: 'Середній час відповіді',
      explanation: 'Час (мс) для обробки/відповіді AI; для текстових програм.',
    },
    tps: {
      title: 'Швидкість виведення токенів',
      explanation: 'Вимірює продуктивність LLM. Підраховує швидкість виведення токенів LLM від початку запиту до завершення виведення.',
    },
  },
}

export default translation
