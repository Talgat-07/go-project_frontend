export const BASE_URL = import.meta.env.VITE_API_URL

export const PATH = {
  home: '/',
  tours: '/tours',
  tourDetail: '/tours/:id',
  visaSupport: '/visa-support/:id',
  delivery: '/delivery',
  notFound: '*',
}

export const geeksLink = 'https://geeks.kg/geeks-pro'

export const tourCardColors = {
  Оранжевый:
    'linear-gradient(126deg, rgba(216, 133, 48, 0.86) 3%, rgba(189, 99, 46, 0.86) 16%, rgba(0, 0, 0, 0.86) 100%)',
  Берёзовый:
    'linear-gradient(126deg, rgba(168, 227, 199, 0.86) 0%, rgba(144.11, 194.72, 170.70, 0.86) 7%, rgba(0, 0, 0, 0.86) 100%)',
  Черный:
    'linear-gradient(126deg, rgba(49.51, 47.37, 47.37, 0.86) 21%, rgba(0, 0, 0, 0.86) 100%)',
}

export const costDeadlineData = [
  {
    title: 'Стоимость доставки',
    subTitle: 'Цена зависит от ряда факторов:',
    descriptions: [
      {
        description: 'Тип транспорта: морские перевозки дешевле авиадоставки.',
      },
      {
        description:
          'Объем и вес груза: чем больше объем, тем ниже стоимость за единицу.',
      },
      {
        description:
          'Дополнительные услуги: страхование, складирование, экспедирование.',
      },
    ],
  },
  {
    title: 'Сроки доставки',
    subTitle: 'Сроки зависят от способа:',
    descriptions: [
      {
        description: 'Морские перевозки занимают от 20 до 45 дней.',
      },
      {
        description: 'Железнодорожные — около 15–20 дней.',
      },
      {
        description:
          'Авиационные — 3–7 дней, но это более дорогостоящий вариант.',
      },
    ],
  },
  {
    title: 'Дополнительные услуги',
    descriptions: [
      {
        description: 'Консолидация грузов от разных поставщиков.',
      },
      {
        description: 'Отслеживание грузов в реальном времени.',
      },
      {
        description: 'Таможенное оформление.',
      },
      {
        description: 'Страхование груза для минимизации рисков',
      },
    ],
  },
]
