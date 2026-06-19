import type { ServiceData } from "./types";

export const services: ServiceData[] = [
  {
    slug: "taksi",
    icon: "Car",
    title: { tr: "Şehir İçi Taksi", en: "City Taxi", ru: "Такси по городу" },
    shortDesc: {
      tr: "Lefkoşa ve çevresinde 7/24 hızlı taksi hizmeti.",
      en: "Fast 24/7 taxi service in Nicosia and surroundings.",
      ru: "Быстрое такси 24/7 по Никосии и окрестностям.",
    },
    description: {
      tr: "Lefkoşa'nın her noktasına dakikalar içinde ulaşan, sabit ve şeffaf fiyatlı şehir içi taksi hizmeti. İster ev, ister iş, ister hastane; tek tıkla taksi çağırın, konforla yolculuk edin.",
      en: "City taxi service reaching every point of Nicosia within minutes, with fixed and transparent prices. Home, office or hospital — call a taxi in one tap and travel in comfort.",
      ru: "Городское такси, доезжающее до любой точки Никосии за минуты, с фиксированными и прозрачными ценами. Дом, офис или больница — вызовите такси в один клик.",
    },
    features: [
      { tr: "7/24 kesintisiz hizmet", en: "24/7 non-stop service", ru: "Круглосуточно без выходных" },
      { tr: "Sabit, sürprizsiz fiyat", en: "Fixed, no-surprise pricing", ru: "Фиксированная цена без сюрпризов" },
      { tr: "Bakımlı ve temiz araçlar", en: "Well-kept, clean vehicles", ru: "Ухоженные и чистые авто" },
      { tr: "Deneyimli yerel sürücüler", en: "Experienced local drivers", ru: "Опытные местные водители" },
    ],
    faq: [
      {
        q: { tr: "Taksi ne kadar sürede gelir?", en: "How fast does the taxi arrive?", ru: "Как быстро приедет такси?" },
        a: {
          tr: "Lefkoşa merkez ve çevresinde genellikle 5-10 dakika içinde kapınızdayız.",
          en: "In central Nicosia and nearby we are usually at your door within 5-10 minutes.",
          ru: "В центре Никосии и рядом мы обычно у вас через 5-10 минут.",
        },
      },
    ],
  },
  {
    slug: "havalimani-transfer",
    icon: "Plane",
    title: { tr: "Havalimanı Transfer", en: "Airport Transfer", ru: "Трансфер из аэропорта" },
    shortDesc: {
      tr: "Ercan ve Larnaka havalimanına/dan konforlu transfer.",
      en: "Comfortable transfers to/from Ercan and Larnaca airports.",
      ru: "Удобный трансфер в/из аэропортов Эрджан и Ларнака.",
    },
    description: {
      tr: "Ercan Havalimanı ve Larnaka Havalimanı transferlerinizi uçuş saatinize göre planlıyoruz. Karşılama tabelası, bagaj yardımı ve sabit fiyat ile stressiz bir transfer deneyimi yaşayın.",
      en: "We plan your Ercan and Larnaca airport transfers around your flight time. Meet-and-greet, luggage help and fixed pricing for a stress-free transfer.",
      ru: "Планируем трансфер из аэропортов Эрджан и Ларнака под время вашего рейса. Встреча с табличкой, помощь с багажом и фиксированная цена.",
    },
    features: [
      { tr: "Uçuş takipli karşılama", en: "Flight-tracked meet & greet", ru: "Встреча с отслеживанием рейса" },
      { tr: "Bagaj yardımı", en: "Luggage assistance", ru: "Помощь с багажом" },
      { tr: "Sabit transfer ücreti", en: "Fixed transfer fare", ru: "Фиксированная стоимость трансфера" },
      { tr: "Geniş ve VIP araç seçeneği", en: "Spacious & VIP vehicle options", ru: "Просторные и VIP авто" },
    ],
    faq: [
      {
        q: {
          tr: "Uçağım gecikirse ne olur?",
          en: "What if my flight is delayed?",
          ru: "Что если рейс задержится?",
        },
        a: {
          tr: "Uçuşunuzu takip ediyoruz; gecikme olsa bile sürücünüz sizi bekler, ek ücret almıyoruz.",
          en: "We track your flight; even if delayed, your driver waits with no extra charge.",
          ru: "Мы отслеживаем рейс; даже при задержке водитель ждёт без доплаты.",
        },
      },
    ],
  },
  {
    slug: "otel-transfer",
    icon: "Hotel",
    title: { tr: "Otel Transfer", en: "Hotel Transfer", ru: "Трансфер в отель" },
    shortDesc: {
      tr: "Otelinize/otelinizden güvenli kapıdan kapıya transfer.",
      en: "Safe door-to-door transfers to/from your hotel.",
      ru: "Безопасный трансфер от двери до двери в/из отеля.",
    },
    description: {
      tr: "Kıbrıs'taki otelinize kapıdan kapıya, konforlu ve zamanında transfer. Casino otelleri, sahil tesisleri ve şehir otelleri dahil tüm noktalara hizmet veriyoruz.",
      en: "Comfortable, on-time door-to-door transfers to your hotel in Cyprus, including casino resorts, coastal resorts and city hotels.",
      ru: "Удобный трансфер вовремя от двери до двери в ваш отель на Кипре, включая казино-отели, прибрежные и городские отели.",
    },
    features: [
      { tr: "Tüm otel ve tesislere", en: "To all hotels & resorts", ru: "Ко всем отелям и курортам" },
      { tr: "Zamanında varış", en: "On-time arrival", ru: "Прибытие вовремя" },
      { tr: "Grup ve aile araçları", en: "Group & family vehicles", ru: "Авто для групп и семей" },
      { tr: "Sabit fiyat garantisi", en: "Fixed-price guarantee", ru: "Гарантия фиксированной цены" },
    ],
    faq: [],
  },
  {
    slug: "ada-turu",
    icon: "MapPinned",
    title: { tr: "Ada Turu", en: "Island Tour", ru: "Тур по острову" },
    shortDesc: {
      tr: "Kıbrıs'ın tarihi ve doğal güzelliklerini özel araçla keşfedin.",
      en: "Discover Cyprus's history and nature by private car.",
      ru: "Откройте историю и природу Кипра на частном авто.",
    },
    description: {
      tr: "Girne Kalesi'nden Salamis Antik Kenti'ne, Karpaz'dan Güzelyurt'a kadar Kıbrıs'ın en güzel noktalarını rahat ve özel araçla, dilediğiniz programla gezin. Rehberlik desteği talep edilebilir.",
      en: "From Kyrenia Castle to ancient Salamis, from Karpaz to Guzelyurt — tour the most beautiful spots of Cyprus in a comfortable private car on your own schedule. Guide available on request.",
      ru: "От замка Кирения до древнего Саламиса, от Карпаза до Гюзельюрта — путешествуйте по красивейшим местам Кипра на комфортном авто по вашему плану. Гид по запросу.",
    },
    features: [
      { tr: "Esnek, kişiye özel program", en: "Flexible, custom itinerary", ru: "Гибкий индивидуальный маршрут" },
      { tr: "Tam gün veya yarım gün", en: "Full-day or half-day", ru: "Полный или полдня" },
      { tr: "Konforlu klimalı araç", en: "Comfortable air-conditioned car", ru: "Комфортное авто с кондиционером" },
      { tr: "İsteğe bağlı rehber", en: "Optional guide", ru: "Гид по желанию" },
    ],
    faq: [],
  },
  {
    slug: "gezi-turu",
    icon: "Camera",
    title: { tr: "Gezi Turu", en: "Sightseeing Tour", ru: "Экскурсионный тур" },
    shortDesc: {
      tr: "Şehir ve yöre turları — saatlik veya günlük.",
      en: "City and regional tours — hourly or daily.",
      ru: "Городские и региональные туры — по часам или дням.",
    },
    description: {
      tr: "Lefkoşa surları, Büyük Han, müzeler ve çarşılar; ya da çevre kasaba ve sahiller. Saatlik kiralama ile dilediğiniz kadar gezin, taksiniz sizi bekler.",
      en: "Nicosia's walls, the Great Inn, museums and bazaars; or nearby towns and beaches. With hourly hire, explore as long as you like while your taxi waits.",
      ru: "Стены Никосии, Бюйюк-Хан, музеи и базары; или соседние городки и пляжи. С почасовой арендой гуляйте сколько хотите — такси ждёт вас.",
    },
    features: [
      { tr: "Saatlik kiralama", en: "Hourly hire", ru: "Почасовая аренда" },
      { tr: "Bekleme dahil", en: "Waiting included", ru: "Ожидание включено" },
      { tr: "Yerel öneriler", en: "Local recommendations", ru: "Местные рекомендации" },
      { tr: "Fotoğraf molaları", en: "Photo stops", ru: "Остановки для фото" },
    ],
    faq: [],
  },
  {
    slug: "arac-kiralama",
    icon: "KeyRound",
    title: { tr: "Şoförlü Araç Kiralama", en: "Chauffeured Car Hire", ru: "Авто с водителем" },
    shortDesc: {
      tr: "Günlük veya saatlik şoförlü özel/VIP araç.",
      en: "Daily or hourly chauffeured private/VIP car.",
      ru: "Частное/VIP авто с водителем посуточно или почасово.",
    },
    description: {
      tr: "İş seyahati, düğün, özel günler ve VIP misafirleriniz için şoförlü araç kiralama. Konfor, gizlilik ve dakiklik önceliğimiz. Günlük veya saatlik paketler mevcuttur.",
      en: "Chauffeured car hire for business trips, weddings, special occasions and VIP guests. Comfort, discretion and punctuality first. Daily or hourly packages available.",
      ru: "Аренда авто с водителем для деловых поездок, свадеб, особых случаев и VIP-гостей. Комфорт, конфиденциальность и пунктуальность. Суточные и почасовые пакеты.",
    },
    features: [
      { tr: "Profesyonel şoför", en: "Professional chauffeur", ru: "Профессиональный водитель" },
      { tr: "VIP / lüks araç seçeneği", en: "VIP / luxury car option", ru: "VIP / люкс авто" },
      { tr: "Günlük & saatlik paket", en: "Daily & hourly packages", ru: "Суточные и почасовые пакеты" },
      { tr: "Düğün & etkinlik", en: "Weddings & events", ru: "Свадьбы и мероприятия" },
    ],
    faq: [],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
