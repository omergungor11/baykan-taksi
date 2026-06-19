import type { FaqItem } from "./types";

/** Site geneli SSS — /sss sayfası ve FAQPage JSON-LD için */
export const generalFaq: FaqItem[] = [
  {
    q: { tr: "Nasıl taksi çağırabilirim?", en: "How do I call a taxi?", ru: "Как вызвать такси?" },
    a: {
      tr: "Sitedeki WhatsApp veya 'Ara' butonuna dokunmanız yeterli. Konumunuzu ve gideceğiniz yeri belirtin, taksiniz yola çıksın.",
      en: "Just tap the WhatsApp or 'Call' button on the site. Share your location and destination, and your taxi is on the way.",
      ru: "Просто нажмите кнопку WhatsApp или «Позвонить». Укажите местоположение и пункт назначения — такси выезжает.",
    },
  },
  {
    q: { tr: "7/24 hizmet veriyor musunuz?", en: "Do you operate 24/7?", ru: "Вы работаете круглосуточно?" },
    a: {
      tr: "Evet. Gece gündüz, hafta sonu ve bayram tatili dahil her saat hizmetinizdeyiz.",
      en: "Yes. Day and night, including weekends and holidays, we are at your service.",
      ru: "Да. День и ночь, включая выходные и праздники, мы к вашим услугам.",
    },
  },
  {
    q: { tr: "Ödeme nasıl yapılır?", en: "How can I pay?", ru: "Как оплатить?" },
    a: {
      tr: "Nakit ve kart ile ödeyebilirsiniz. Kurumsal anlaşmalar için bizimle iletişime geçin.",
      en: "You can pay by cash or card. Contact us for corporate arrangements.",
      ru: "Можно оплатить наличными или картой. По корпоративным условиям свяжитесь с нами.",
    },
  },
  {
    q: { tr: "Havalimanı transferi için önceden rezervasyon gerekir mi?", en: "Do airport transfers need advance booking?", ru: "Нужно ли бронировать трансфер заранее?" },
    a: {
      tr: "Anlık talep de karşılıyoruz; ancak uçuş saatinizi önceden bildirmeniz transferi garanti eder ve karşılama düzenlememizi sağlar.",
      en: "We handle instant requests too, but sharing your flight time in advance guarantees the transfer and lets us arrange a meet & greet.",
      ru: "Принимаем и срочные заявки, но заранее сообщив время рейса, вы гарантируете трансфер и встречу.",
    },
  },
  {
    q: { tr: "Fiyatlar sabit mi, taksimetre mi?", en: "Are prices fixed or metered?", ru: "Цены фиксированные или по счётчику?" },
    a: {
      tr: "Popüler güzergahlarda sabit fiyat sunuyoruz; yolculuk öncesi ücreti net olarak öğrenirsiniz.",
      en: "We offer fixed prices on popular routes; you learn the exact fare before the trip.",
      ru: "На популярных маршрутах действует фикс. цена; точную стоимость узнаете до поездки.",
    },
  },
];
