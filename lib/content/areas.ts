import type { AreaData } from "./types";

/**
 * Anahtar kelime / bölge sayfaları — SEO/GEO çekirdeği.
 * Her giriş, kök seviyede temiz bir URL üretir: /lefkosa-taksi, /ercan-havalimani-taksi ...
 * Yeni kelime eklemek için bu listeye bir nesne eklemek yeterli.
 */
export const areas: AreaData[] = [
  {
    slug: "lefkosa-taksi",
    keyword: { tr: "Lefkoşa Taksi", en: "Nicosia Taxi", ru: "Такси Никосия" },
    h1: {
      tr: "Lefkoşa Taksi — 7/24 Hızlı ve Güvenilir",
      en: "Nicosia Taxi — Fast & Reliable 24/7",
      ru: "Такси Никосия — Быстро и надёжно 24/7",
    },
    metaTitle: {
      tr: "Lefkoşa Taksi | 7/24 Taksi Çağır - Sabit Fiyat",
      en: "Nicosia Taxi | Call a Taxi 24/7 - Fixed Price",
      ru: "Такси Никосия | Вызов такси 24/7 - Фикс. цена",
    },
    metaDescription: {
      tr: "Lefkoşa'da 7/24 taksi hizmeti. Şehir içi, havalimanı ve hastane transferi. Sabit fiyat, hızlı geliş. WhatsApp veya telefonla tek tıkla taksi çağırın.",
      en: "24/7 taxi service in Nicosia. City, airport and hospital transfers. Fixed price, fast pickup. Book a taxi via WhatsApp or phone in one tap.",
      ru: "Такси в Никосии 24/7. Город, аэропорт и больницы. Фикс. цена, быстрая подача. Вызов через WhatsApp или по телефону.",
    },
    intro: {
      tr: "Lefkoşa'nın her mahallesine 7/24 hizmet veren taksi hattıyız. Şehir merkezi, Gönyeli, Hamitköy, Ortaköy, Küçük Kaymaklı ve tüm çevre bölgelere dakikalar içinde ulaşıyoruz. Sabit ve şeffaf fiyatlandırma, bakımlı araçlar ve deneyimli sürücülerle güvenli yolculuk garantisi sunuyoruz. İster havalimanına transfer, ister hastane, üniversite veya alışveriş; tek tıkla taksi çağırın.",
      en: "We are a 24/7 taxi line serving every neighbourhood of Nicosia. We reach the city centre, Gonyeli, Hamitkoy, Ortakoy, Kucuk Kaymakli and all surrounding areas within minutes. Fixed, transparent pricing, well-maintained vehicles and experienced drivers guarantee a safe journey. Airport, hospital, university or shopping — call a taxi in one tap.",
      ru: "Мы — служба такси 24/7, обслуживающая каждый район Никосии. Доезжаем до центра, Гёнъели, Хамиткёя, Ортакёя и всех окрестностей за минуты. Фиксированные прозрачные цены, ухоженные авто и опытные водители гарантируют безопасную поездку. Аэропорт, больница, университет или шопинг — вызов в один клик.",
    },
    highlights: [
      { tr: "Şehir merkezine 5-10 dk içinde geliş", en: "5-10 min arrival to the centre", ru: "Подача в центр за 5-10 мин" },
      { tr: "Ercan Havalimanı sabit transfer ücreti", en: "Fixed Ercan Airport transfer fare", ru: "Фикс. трансфер в аэропорт Эрджан" },
      { tr: "Hastane ve üniversite transferleri", en: "Hospital & university transfers", ru: "Трансфер в больницы и вузы" },
      { tr: "Nakit ve kart ödeme", en: "Cash and card payment", ru: "Оплата наличными и картой" },
    ],
    routes: [
      "Lefkoşa → Ercan Havalimanı",
      "Lefkoşa → Girne",
      "Lefkoşa → Gazimağusa",
      "Lefkoşa → Larnaka Havalimanı",
      "Lefkoşa → Yakın Doğu Üniversitesi",
    ],
    nearby: ["gonyeli-taksi", "hamitkoy-taksi", "surlarici-taksi", "ortakoy-taksi", "hastane-taksi", "yakin-dogu-taksi", "ercan-havalimani-taksi"],
    faq: [
      {
        q: { tr: "Lefkoşa'da gece taksi bulabilir miyim?", en: "Can I get a taxi at night in Nicosia?", ru: "Можно ли вызвать такси ночью в Никосии?" },
        a: {
          tr: "Evet, 7/24 hizmet veriyoruz. Gece geç saatlerde de WhatsApp veya telefonla bize ulaşabilirsiniz.",
          en: "Yes, we operate 24/7. You can reach us by WhatsApp or phone even late at night.",
          ru: "Да, мы работаем 24/7. Свяжитесь с нами по WhatsApp или телефону даже поздно ночью.",
        },
      },
      {
        q: { tr: "Fiyatlar sabit mi?", en: "Are the prices fixed?", ru: "Цены фиксированные?" },
        a: {
          tr: "Popüler güzergahlarda sabit fiyat uyguluyoruz; yolculuk öncesi ücreti net olarak öğrenebilirsiniz.",
          en: "We apply fixed prices on popular routes; you can learn the exact fare before the trip.",
          ru: "На популярных маршрутах действует фикс. цена; точную стоимость узнаете до поездки.",
        },
      },
    ],
  },
  {
    slug: "ercan-havalimani-taksi",
    keyword: { tr: "Ercan Havalimanı Taksi", en: "Ercan Airport Taxi", ru: "Такси аэропорт Эрджан" },
    h1: {
      tr: "Ercan Havalimanı Taksi & Transfer",
      en: "Ercan Airport Taxi & Transfer",
      ru: "Такси и трансфер аэропорт Эрджан",
    },
    metaTitle: {
      tr: "Ercan Havalimanı Taksi | Transfer - Sabit Fiyat 7/24",
      en: "Ercan Airport Taxi | Transfer - Fixed Price 24/7",
      ru: "Такси Эрджан | Трансфер - Фикс. цена 24/7",
    },
    metaDescription: {
      tr: "Ercan Havalimanı taksi ve transfer hizmeti. Uçuş takipli karşılama, sabit fiyat, 7/24. Lefkoşa, Girne, Gazimağusa transferi. Tek tıkla rezervasyon.",
      en: "Ercan Airport taxi and transfer service. Flight-tracked meet & greet, fixed price, 24/7. Transfers to Nicosia, Kyrenia, Famagusta. Book in one tap.",
      ru: "Такси и трансфер из аэропорта Эрджан. Встреча с отслеживанием рейса, фикс. цена, 24/7. Трансфер в Никосию, Кирению, Фамагусту.",
    },
    intro: {
      tr: "Ercan Havalimanı'na iniş ve kalkışlarınızda konforlu, zamanında transfer. Uçuşunuzu takip ediyor, gecikme olsa bile ek ücret almadan sizi bekliyoruz. Karşılama tabelası ve bagaj yardımı ile Lefkoşa, Girne, Gazimağusa, Güzelyurt ve tüm Kıbrıs'a sabit fiyatlı havalimanı transferi sunuyoruz.",
      en: "Comfortable, on-time transfers for your arrivals and departures at Ercan Airport. We track your flight and wait at no extra charge even if delayed. With meet-and-greet and luggage help we offer fixed-price airport transfers to Nicosia, Kyrenia, Famagusta, Guzelyurt and all of Cyprus.",
      ru: "Комфортный трансфер вовремя при прилёте и вылете из аэропорта Эрджан. Отслеживаем рейс и ждём без доплаты даже при задержке. Встреча с табличкой и помощь с багажом; трансфер по фикс. цене в Никосию, Кирению, Фамагусту, Гюзельюрт и по всему Кипру.",
    },
    highlights: [
      { tr: "Uçuş takipli karşılama", en: "Flight-tracked meet & greet", ru: "Встреча с отслеживанием рейса" },
      { tr: "Gecikmede bekleme ücretsiz", en: "Free waiting on delays", ru: "Бесплатное ожидание при задержке" },
      { tr: "Sabit transfer ücreti", en: "Fixed transfer fare", ru: "Фикс. стоимость трансфера" },
      { tr: "Geniş bagaj & VIP araç", en: "Large luggage & VIP cars", ru: "Большой багаж и VIP авто" },
    ],
    routes: [
      "Ercan → Lefkoşa",
      "Ercan → Girne",
      "Ercan → Gazimağusa",
      "Ercan → Güzelyurt",
      "Ercan → Yakın Doğu Üniversitesi",
    ],
    nearby: ["lefkosa-taksi", "ercan-taksi", "kibris-taksi", "girne-taksi", "gazimagusa-taksi"],
    faq: [
      {
        q: { tr: "Karşılama nasıl oluyor?", en: "How does the meet & greet work?", ru: "Как происходит встреча?" },
        a: {
          tr: "Sürücümüz isminizin yazılı olduğu tabela ile çıkışta sizi karşılar ve bagajınızda yardımcı olur.",
          en: "Our driver greets you at the exit with a name sign and helps with your luggage.",
          ru: "Наш водитель встречает вас на выходе с табличкой и помогает с багажом.",
        },
      },
      {
        q: { tr: "Önceden rezervasyon şart mı?", en: "Is advance booking required?", ru: "Нужно ли бронировать заранее?" },
        a: {
          tr: "Anlık da taksi bulabilirsiniz; ancak uçuş saatinizi önceden bildirmeniz transferi garanti eder.",
          en: "Instant taxis are available, but sharing your flight time in advance guarantees the transfer.",
          ru: "Можно и сразу, но сообщив время рейса заранее, вы гарантируете трансфер.",
        },
      },
    ],
  },
  {
    slug: "kibris-taksi",
    keyword: { tr: "Kıbrıs Taksi", en: "Cyprus Taxi", ru: "Такси Кипр" },
    h1: { tr: "Kıbrıs Taksi — Tüm Adada Hizmet", en: "Cyprus Taxi — Service Across the Island", ru: "Такси Кипр — По всему острову" },
    metaTitle: {
      tr: "Kıbrıs Taksi | 7/24 Ada Geneli Taksi & Transfer",
      en: "Cyprus Taxi | 24/7 Island-wide Taxi & Transfer",
      ru: "Такси Кипр | Такси и трансфер 24/7 по острову",
    },
    metaDescription: {
      tr: "Kıbrıs genelinde 7/24 taksi ve transfer. Lefkoşa, Girne, Gazimağusa, Güzelyurt ve havalimanları. Sabit fiyat, ada turu ve özel araç seçenekleri.",
      en: "24/7 taxi and transfer across Cyprus. Nicosia, Kyrenia, Famagusta, Guzelyurt and airports. Fixed price, island tours and private car options.",
      ru: "Такси и трансфер 24/7 по всему Кипру. Никосия, Кирения, Фамагуста, Гюзельюрт и аэропорты. Фикс. цена, туры и частные авто.",
    },
    intro: {
      tr: "Kıbrıs'ın her yerinde yanınızdayız. Lefkoşa merkezli taksi hattımız adanın tüm şehirlerine — Girne, Gazimağusa, Güzelyurt, İskele ve Karpaz — şehirlerarası transfer, ada turu ve şoförlü araç hizmeti sunar. Hem Ercan hem Larnaka havalimanı transferleri sabit fiyatla planlanır.",
      en: "We are with you everywhere in Cyprus. Our Nicosia-based taxi line provides intercity transfers, island tours and chauffeured car service to all cities — Kyrenia, Famagusta, Guzelyurt, Iskele and Karpaz. Both Ercan and Larnaca airport transfers are planned at fixed prices.",
      ru: "Мы рядом по всему Кипру. Наша служба такси из Никосии предлагает междугородние трансферы, туры по острову и авто с водителем во все города — Кирения, Фамагуста, Гюзельюрт, Искеле и Карпаз. Трансфер из Эрджана и Ларнаки по фикс. цене.",
    },
    highlights: [
      { tr: "Tüm Kıbrıs şehirlerine transfer", en: "Transfers to all Cyprus cities", ru: "Трансфер во все города Кипра" },
      { tr: "Ercan & Larnaka havalimanı", en: "Ercan & Larnaca airports", ru: "Аэропорты Эрджан и Ларнака" },
      { tr: "Ada turu ve gezi paketleri", en: "Island tour & sightseeing packages", ru: "Туры и экскурсии по острову" },
      { tr: "Çok dilli sürücü desteği", en: "Multilingual driver support", ru: "Водители говорят на разных языках" },
    ],
    routes: [
      "Lefkoşa → Girne",
      "Lefkoşa → Gazimağusa",
      "Girne → Ercan Havalimanı",
      "Lefkoşa → Larnaka Havalimanı",
      "Lefkoşa → Karpaz",
    ],
    nearby: ["lefkosa-taksi", "ercan-havalimani-taksi", "girne-taksi", "gazimagusa-taksi", "guzelyurt-taksi", "iskele-taksi"],
    faq: [
      {
        q: { tr: "Güney Kıbrıs'a (Larnaka) transfer var mı?", en: "Do you transfer to South Cyprus (Larnaca)?", ru: "Есть трансфер на юг Кипра (Ларнака)?" },
        a: {
          tr: "Evet, Larnaka ve Baf havalimanlarına sınır geçişli transfer düzenliyoruz. Detay için bize ulaşın.",
          en: "Yes, we arrange cross-border transfers to Larnaca and Paphos airports. Contact us for details.",
          ru: "Да, организуем трансфер с переходом границы в аэропорты Ларнака и Пафос. Свяжитесь с нами.",
        },
      },
    ],
  },
  {
    slug: "yakin-dogu-taksi",
    keyword: { tr: "Yakın Doğu Taksi (YDÜ)", en: "Near East University Taxi", ru: "Такси Ближневосточный универ." },
    h1: { tr: "Yakın Doğu Üniversitesi (YDÜ) Taksi", en: "Near East University Taxi", ru: "Такси Ближневосточный университет" },
    metaTitle: {
      tr: "Yakın Doğu Taksi | YDÜ Kampüs & Hastane Taksi 7/24",
      en: "Near East University Taxi | Campus & Hospital 24/7",
      ru: "Такси Ближневосточный универ. | Кампус 24/7",
    },
    metaDescription: {
      tr: "Yakın Doğu Üniversitesi (YDÜ) öğrenci ve personeline 7/24 taksi. Kampüs, YDÜ Hastanesi, yurtlar ve Lefkoşa merkez transferi. Sabit öğrenci fiyatları.",
      en: "24/7 taxi for Near East University (NEU) students and staff. Campus, NEU Hospital, dorms and Nicosia centre transfers. Fixed student fares.",
      ru: "Такси 24/7 для студентов и персонала Ближневосточного университета. Кампус, больница, общежития и центр Никосии. Фикс. студенческие цены.",
    },
    intro: {
      tr: "Yakın Doğu Üniversitesi (YDÜ) kampüsü, yurtları ve YDÜ Hastanesi'ne 7/24 taksi hizmeti. Öğrenciler için uygun ve sabit fiyatlarla kampüs–merkez, kampüs–havalimanı ve yurt transferleri sağlıyoruz. Ders, sınav ve havalimanı saatlerinize tam zamanında ulaşım.",
      en: "24/7 taxi service to the Near East University (NEU) campus, dorms and NEU Hospital. We provide campus–centre, campus–airport and dorm transfers at affordable, fixed student prices. On-time travel for your classes, exams and flights.",
      ru: "Такси 24/7 в кампус Ближневосточного университета, общежития и больницу. Доступные фикс. студенческие цены на трансфер кампус–центр, кампус–аэропорт и общежития. Вовремя на занятия, экзамены и рейсы.",
    },
    highlights: [
      { tr: "Öğrenciye uygun sabit fiyat", en: "Affordable fixed student price", ru: "Доступная фикс. цена для студентов" },
      { tr: "Kampüs – Ercan transferi", en: "Campus – Ercan transfer", ru: "Трансфер кампус – Эрджан" },
      { tr: "YDÜ Hastanesi ulaşımı", en: "NEU Hospital access", ru: "Поездки в больницу университета" },
      { tr: "Yurt ve apart transferleri", en: "Dorm & apartment transfers", ru: "Трансфер в общежития и апарты" },
    ],
    routes: [
      "YDÜ → Lefkoşa Merkez",
      "YDÜ → Ercan Havalimanı",
      "YDÜ → Girne",
      "YDÜ Hastanesi → Merkez",
    ],
    nearby: ["lefkosa-taksi", "hastane-taksi", "gonyeli-taksi", "ercan-havalimani-taksi"],
    faq: [
      {
        q: { tr: "Öğrenci indirimi var mı?", en: "Is there a student discount?", ru: "Есть студенческая скидка?" },
        a: {
          tr: "Kampüs güzergahlarında uygun sabit fiyatlar uyguluyoruz. Düzenli yolculuklarda ek avantaj sağlıyoruz.",
          en: "We apply affordable fixed prices on campus routes, with extra benefits for regular trips.",
          ru: "На маршрутах кампуса действуют доступные фикс. цены, с бонусами за регулярные поездки.",
        },
      },
    ],
  },
  {
    slug: "ciu-taksi",
    keyword: { tr: "CIU Taksi (Uluslararası Kıbrıs Ü.)", en: "CIU Taxi", ru: "Такси CIU" },
    h1: { tr: "CIU — Uluslararası Kıbrıs Üniversitesi Taksi", en: "Cyprus International University (CIU) Taxi", ru: "Такси Международный университет Кипра (CIU)" },
    metaTitle: {
      tr: "CIU Taksi | Uluslararası Kıbrıs Üniversitesi 7/24",
      en: "CIU Taxi | Cyprus International University 24/7",
      ru: "Такси CIU | Международный университет Кипра 24/7",
    },
    metaDescription: {
      tr: "CIU (Uluslararası Kıbrıs Üniversitesi) öğrencilerine 7/24 taksi. Haspolat kampüsü, yurtlar, Ercan Havalimanı ve Lefkoşa merkez transferi. Sabit fiyat.",
      en: "24/7 taxi for CIU (Cyprus International University) students. Haspolat campus, dorms, Ercan Airport and Nicosia centre transfers. Fixed price.",
      ru: "Такси 24/7 для студентов CIU. Кампус Хасполат, общежития, аэропорт Эрджан и центр Никосии. Фикс. цена.",
    },
    intro: {
      tr: "Uluslararası Kıbrıs Üniversitesi (CIU) Haspolat kampüsüne ve yurtlarına 7/24 öğrenci dostu taksi hizmeti. Kampüs–merkez, kampüs–Ercan Havalimanı ve şehir içi transferlerinizi sabit ve uygun fiyatla planlıyoruz. Sınav ve uçuş saatlerinize dakik ulaşım.",
      en: "24/7 student-friendly taxi service to the Cyprus International University (CIU) Haspolat campus and dorms. We plan campus–centre, campus–Ercan Airport and city transfers at fixed, affordable prices. Punctual travel for exams and flights.",
      ru: "Такси 24/7 для студентов CIU: кампус Хасполат и общежития. Планируем трансфер кампус–центр, кампус–аэропорт Эрджан и по городу по фикс. доступной цене. Вовремя на экзамены и рейсы.",
    },
    highlights: [
      { tr: "Haspolat kampüs transferi", en: "Haspolat campus transfer", ru: "Трансфер в кампус Хасполат" },
      { tr: "Kampüs – Ercan Havalimanı", en: "Campus – Ercan Airport", ru: "Кампус – аэропорт Эрджан" },
      { tr: "Öğrenciye uygun fiyat", en: "Student-friendly price", ru: "Цены для студентов" },
      { tr: "7/24 yurt transferi", en: "24/7 dorm transfer", ru: "Трансфер в общежития 24/7" },
    ],
    routes: ["CIU → Lefkoşa Merkez", "CIU → Ercan Havalimanı", "CIU → Girne"],
    nearby: ["lefkosa-taksi", "yakin-dogu-taksi", "ercan-havalimani-taksi"],
    faq: [],
  },
  {
    slug: "gonyeli-taksi",
    keyword: { tr: "Gönyeli Taksi", en: "Gonyeli Taxi", ru: "Такси Гёнъели" },
    h1: { tr: "Gönyeli Taksi — 7/24 Hızlı Hizmet", en: "Gonyeli Taxi — Fast 24/7 Service", ru: "Такси Гёнъели — Быстро 24/7" },
    metaTitle: {
      tr: "Gönyeli Taksi | 7/24 Taksi Çağır - Sabit Fiyat",
      en: "Gonyeli Taxi | Call a Taxi 24/7 - Fixed Price",
      ru: "Такси Гёнъели | Вызов 24/7 - Фикс. цена",
    },
    metaDescription: {
      tr: "Gönyeli ve çevresinde 7/24 taksi hizmeti. Şehir içi, Ercan Havalimanı ve üniversite transferi. Hızlı geliş, sabit fiyat. Tek tıkla taksi çağırın.",
      en: "24/7 taxi service in Gonyeli and around. City, Ercan Airport and university transfers. Fast pickup, fixed price. Call a taxi in one tap.",
      ru: "Такси 24/7 в Гёнъели и окрестностях. Город, аэропорт Эрджан и вузы. Быстрая подача, фикс. цена.",
    },
    intro: {
      tr: "Gönyeli bölgesine 7/24 hızlı taksi hizmeti. Yoğun trafikte bile en kısa rotayı bilen yerel sürücülerimizle Gönyeli–Lefkoşa merkez, Gönyeli–Ercan Havalimanı ve üniversite transferlerinizi sabit fiyatla sağlıyoruz.",
      en: "Fast 24/7 taxi service to the Gonyeli area. With local drivers who know the shortest route even in heavy traffic, we provide Gonyeli–Nicosia centre, Gonyeli–Ercan Airport and university transfers at fixed prices.",
      ru: "Быстрое такси 24/7 в районе Гёнъели. Местные водители знают короткий путь даже в пробках; трансфер Гёнъели–центр Никосии, Гёнъели–аэропорт Эрджан и в вузы по фикс. цене.",
    },
    highlights: [
      { tr: "Bölgeye hızlı geliş", en: "Fast arrival to the area", ru: "Быстрая подача в район" },
      { tr: "Havalimanı sabit transfer", en: "Fixed airport transfer", ru: "Фикс. трансфер в аэропорт" },
      { tr: "Üniversite transferleri", en: "University transfers", ru: "Трансфер в вузы" },
      { tr: "7/24 ulaşılabilir", en: "Reachable 24/7", ru: "Доступны 24/7" },
    ],
    routes: ["Gönyeli → Lefkoşa Merkez", "Gönyeli → Ercan Havalimanı", "Gönyeli → Girne"],
    nearby: ["lefkosa-taksi", "hamitkoy-taksi", "yakin-dogu-taksi"],
    faq: [],
  },
  {
    slug: "hamitkoy-taksi",
    keyword: { tr: "Hamitköy Taksi", en: "Hamitkoy Taxi", ru: "Такси Хамиткёй" },
    h1: { tr: "Hamitköy Taksi — 7/24 Güvenilir", en: "Hamitkoy Taxi — Reliable 24/7", ru: "Такси Хамиткёй — Надёжно 24/7" },
    metaTitle: {
      tr: "Hamitköy Taksi | 7/24 Taksi & Transfer - Sabit Fiyat",
      en: "Hamitkoy Taxi | 24/7 Taxi & Transfer - Fixed Price",
      ru: "Такси Хамиткёй | Такси и трансфер 24/7",
    },
    metaDescription: {
      tr: "Hamitköy'de 7/24 taksi hizmeti. Şehir içi, Ercan Havalimanı, hastane ve üniversite transferi. Hızlı, güvenli ve sabit fiyatlı. Hemen taksi çağırın.",
      en: "24/7 taxi service in Hamitkoy. City, Ercan Airport, hospital and university transfers. Fast, safe and fixed price. Call a taxi now.",
      ru: "Такси 24/7 в Хамиткёе. Город, аэропорт Эрджан, больницы и вузы. Быстро, безопасно, фикс. цена.",
    },
    intro: {
      tr: "Hamitköy ve çevresine 7/24 güvenilir taksi hizmeti. Lefkoşa merkez, Ercan Havalimanı, hastane ve üniversite transferlerinizi deneyimli sürücülerle, sabit ve şeffaf fiyatla gerçekleştiriyoruz.",
      en: "Reliable 24/7 taxi service to Hamitkoy and surroundings. We handle your transfers to Nicosia centre, Ercan Airport, hospitals and universities with experienced drivers at fixed, transparent prices.",
      ru: "Надёжное такси 24/7 в Хамиткёй и окрестности. Трансфер в центр Никосии, аэропорт Эрджан, больницы и вузы с опытными водителями по фикс. прозрачной цене.",
    },
    highlights: [
      { tr: "Hızlı ve güvenli", en: "Fast and safe", ru: "Быстро и безопасно" },
      { tr: "Havalimanı & hastane", en: "Airport & hospital", ru: "Аэропорт и больницы" },
      { tr: "Sabit fiyat", en: "Fixed price", ru: "Фикс. цена" },
      { tr: "7/24 hizmet", en: "24/7 service", ru: "Сервис 24/7" },
    ],
    routes: ["Hamitköy → Lefkoşa Merkez", "Hamitköy → Ercan Havalimanı", "Hamitköy → YDÜ"],
    nearby: ["lefkosa-taksi", "gonyeli-taksi", "hastane-taksi"],
    faq: [],
  },
  {
    slug: "hastane-taksi",
    keyword: { tr: "Hastane Taksi", en: "Hospital Taxi", ru: "Такси в больницу" },
    h1: { tr: "Hastane Taksi — Hızlı ve Konforlu", en: "Hospital Taxi — Fast & Comfortable", ru: "Такси в больницу — Быстро и удобно" },
    metaTitle: {
      tr: "Hastane Taksi | Lefkoşa Hastane Transferi 7/24",
      en: "Hospital Taxi | Nicosia Hospital Transfer 24/7",
      ru: "Такси в больницу | Трансфер Никосия 24/7",
    },
    metaDescription: {
      tr: "Lefkoşa hastanelerine 7/24 taksi: Burhan Nalbantoğlu Devlet Hastanesi, YDÜ Hastanesi ve özel hastaneler. Randevu saatine dakik, konforlu transfer.",
      en: "24/7 taxi to Nicosia hospitals: Burhan Nalbantoglu State Hospital, NEU Hospital and private hospitals. Punctual, comfortable transfer for your appointment.",
      ru: "Такси 24/7 в больницы Никосии: госпиталь Бурхан Налбантоглу, больница NEU и частные клиники. Вовремя и удобно к приёму.",
    },
    intro: {
      tr: "Hastane randevularınız ve acil durumlar için 7/24 konforlu taksi. Dr. Burhan Nalbantoğlu Devlet Hastanesi, Yakın Doğu Üniversitesi Hastanesi ve özel hastanelere dakik, güvenli ve ihtiyaç halinde tekerlekli sandalye erişimine uygun araç desteğiyle ulaşım sağlıyoruz.",
      en: "Comfortable 24/7 taxi for your hospital appointments and emergencies. We provide punctual, safe travel to Dr. Burhan Nalbantoglu State Hospital, Near East University Hospital and private hospitals, with wheelchair-accessible vehicle support on request.",
      ru: "Удобное такси 24/7 для визитов к врачу и срочных случаев. Вовремя и безопасно доставим в госпиталь Бурхан Налбантоглу, больницу Ближневосточного университета и частные клиники; авто с доступом для колясок по запросу.",
    },
    highlights: [
      { tr: "Randevu saatine dakiklik", en: "Punctual to your appointment", ru: "Вовремя к приёму" },
      { tr: "Tüm Lefkoşa hastaneleri", en: "All Nicosia hospitals", ru: "Все больницы Никосии" },
      { tr: "İhtiyaç halinde erişilebilir araç", en: "Accessible vehicle on request", ru: "Доступное авто по запросу" },
      { tr: "7/24 acil ulaşım", en: "24/7 urgent transport", ru: "Срочный трансфер 24/7" },
    ],
    routes: [
      "Merkez → Burhan Nalbantoğlu Hastanesi",
      "Merkez → YDÜ Hastanesi",
      "Hastane → Ercan Havalimanı",
    ],
    nearby: ["lefkosa-taksi", "yakin-dogu-taksi", "gonyeli-taksi"],
    faq: [],
  },
  {
    slug: "ercan-taksi",
    keyword: { tr: "Ercan Taksi", en: "Ercan Taxi", ru: "Такси Эрджан" },
    h1: { tr: "Ercan Taksi — Havalimanı Bölgesi 7/24", en: "Ercan Taxi — Airport Area 24/7", ru: "Такси Эрджан — Район аэропорта 24/7" },
    metaTitle: {
      tr: "Ercan Taksi | Ercan Bölgesi & Havalimanı Taksi 7/24",
      en: "Ercan Taxi | Ercan Area & Airport Taxi 24/7",
      ru: "Такси Эрджан | Район и аэропорт 24/7",
    },
    metaDescription: {
      tr: "Ercan ve havalimanı bölgesinde 7/24 taksi. Lefkoşa, Girne, Gazimağusa transferi, uçuş takipli karşılama ve sabit fiyat. Tek tıkla taksi çağırın.",
      en: "24/7 taxi in Ercan and the airport area. Transfers to Nicosia, Kyrenia, Famagusta, flight-tracked meet & greet and fixed price.",
      ru: "Такси 24/7 в Эрджане и районе аэропорта. Трансфер в Никосию, Кирению, Фамагусту, встреча с отслеживанием рейса и фикс. цена.",
    },
    intro: {
      tr: "Ercan bölgesi ve havalimanı çevresine 7/24 taksi hizmeti. Havalimanı transferleri, çevre köyler ve şehir bağlantıları için hızlı, sabit fiyatlı ve güvenilir ulaşım sunuyoruz.",
      en: "24/7 taxi service to the Ercan area and around the airport. We offer fast, fixed-price and reliable transport for airport transfers, nearby villages and city connections.",
      ru: "Такси 24/7 в районе Эрджан и у аэропорта. Быстрый, надёжный трансфер по фикс. цене: аэропорт, соседние сёла и связь с городом.",
    },
    highlights: [
      { tr: "Havalimanı bölgesine hızlı", en: "Fast to the airport area", ru: "Быстро в район аэропорта" },
      { tr: "Sabit fiyatlı transfer", en: "Fixed-price transfer", ru: "Трансфер по фикс. цене" },
      { tr: "Şehir bağlantıları", en: "City connections", ru: "Связь с городом" },
      { tr: "7/24 ulaşım", en: "24/7 transport", ru: "Трансфер 24/7" },
    ],
    routes: ["Ercan → Lefkoşa", "Ercan → Girne", "Ercan → Gazimağusa"],
    nearby: ["ercan-havalimani-taksi", "lefkosa-taksi", "kibris-taksi"],
    faq: [],
  },
  {
    slug: "ortakoy-taksi",
    keyword: { tr: "Ortaköy Taksi", en: "Ortakoy Taxi", ru: "Такси Ортакёй" },
    h1: { tr: "Ortaköy Taksi — 7/24 Hızlı Hizmet", en: "Ortakoy Taxi — Fast 24/7 Service", ru: "Такси Ортакёй — Быстро 24/7" },
    metaTitle: {
      tr: "Ortaköy Taksi | 7/24 Taksi Çağır - Sabit Fiyat",
      en: "Ortakoy Taxi | Call a Taxi 24/7 - Fixed Price",
      ru: "Такси Ортакёй | Вызов 24/7 - Фикс. цена",
    },
    metaDescription: {
      tr: "Ortaköy (Lefkoşa) bölgesinde 7/24 taksi hizmeti. Şehir içi, Ercan Havalimanı, hastane ve üniversite transferi. Hızlı geliş, sabit fiyat.",
      en: "24/7 taxi service in Ortakoy (Nicosia). City, Ercan Airport, hospital and university transfers. Fast pickup, fixed price.",
      ru: "Такси 24/7 в Ортакёе (Никосия). Город, аэропорт Эрджан, больницы и вузы. Быстрая подача, фикс. цена.",
    },
    intro: {
      tr: "Lefkoşa'nın Ortaköy bölgesine 7/24 hızlı taksi hizmeti. Sanayi bölgesi, çevre mahalleler ve şehir merkezi arasında en kısa rotayı bilen yerel sürücülerimizle Ortaköy–merkez, Ortaköy–Ercan Havalimanı ve üniversite transferlerinizi sabit ve şeffaf fiyatla sağlıyoruz.",
      en: "Fast 24/7 taxi service to the Ortakoy area of Nicosia. With local drivers who know the shortest route between the industrial zone, surrounding neighbourhoods and the city centre, we provide Ortakoy–centre, Ortakoy–Ercan Airport and university transfers at fixed, transparent prices.",
      ru: "Быстрое такси 24/7 в район Ортакёй в Никосии. Местные водители знают короткий путь между промзоной, соседними кварталами и центром; трансфер Ортакёй–центр, Ортакёй–аэропорт Эрджан и в вузы по фикс. прозрачной цене.",
    },
    highlights: [
      { tr: "Bölgeye 5-10 dk içinde geliş", en: "5-10 min arrival to the area", ru: "Подача в район за 5-10 мин" },
      { tr: "Ercan Havalimanı sabit transfer", en: "Fixed Ercan Airport transfer", ru: "Фикс. трансфер в аэропорт Эрджан" },
      { tr: "Hastane ve üniversite ulaşımı", en: "Hospital & university access", ru: "Поездки в больницы и вузы" },
      { tr: "Nakit ve kart ödeme", en: "Cash and card payment", ru: "Оплата наличными и картой" },
    ],
    routes: ["Ortaköy → Lefkoşa Merkez", "Ortaköy → Ercan Havalimanı", "Ortaköy → YDÜ", "Ortaköy → Girne"],
    nearby: ["lefkosa-taksi", "gonyeli-taksi", "surlarici-taksi", "gocmenkoy-taksi"],
    faq: [
      {
        q: { tr: "Ortaköy'den havalimanına ne kadar sürede gidilir?", en: "How long is it from Ortakoy to the airport?", ru: "Сколько ехать из Ортакёя в аэропорт?" },
        a: {
          tr: "Ortaköy'den Ercan Havalimanı'na ortalama 25-30 dakikada ulaşıyoruz; trafik durumuna göre süreyi önceden bildiriyoruz.",
          en: "We reach Ercan Airport from Ortakoy in about 25-30 minutes; we inform you of the timing in advance based on traffic.",
          ru: "От Ортакёя до аэропорта Эрджан около 25-30 минут; время сообщаем заранее с учётом трафика.",
        },
      },
    ],
  },
  {
    slug: "terminal-taksi",
    keyword: { tr: "Terminal Taksi", en: "Bus Terminal Taxi", ru: "Такси автовокзал" },
    h1: { tr: "Terminal Taksi — Lefkoşa Otobüs Terminali 7/24", en: "Terminal Taxi — Nicosia Bus Terminal 24/7", ru: "Такси Терминал — Автовокзал Никосии 24/7" },
    metaTitle: {
      tr: "Terminal Taksi | Lefkoşa Otobüs Terminali Transfer 7/24",
      en: "Terminal Taxi | Nicosia Bus Terminal Transfer 24/7",
      ru: "Такси Терминал | Автовокзал Никосии 24/7",
    },
    metaDescription: {
      tr: "Lefkoşa şehirlerarası otobüs terminaline 7/24 taksi. Terminal–otel, terminal–üniversite ve havalimanı transferi. Bagaj yardımı, sabit fiyat.",
      en: "24/7 taxi to Nicosia intercity bus terminal. Terminal–hotel, terminal–university and airport transfers. Luggage help, fixed price.",
      ru: "Такси 24/7 к автовокзалу Никосии. Терминал–отель, терминал–вуз и аэропорт. Помощь с багажом, фикс. цена.",
    },
    intro: {
      tr: "Lefkoşa şehirlerarası otobüs terminaline 7/24 taksi hizmeti. Otobüs varış-kalkış saatlerinize uygun, bagaj yardımı sunan sürücülerimizle terminal–otel, terminal–üniversite, terminal–merkez ve terminal–Ercan Havalimanı transferlerinizi sabit fiyatla planlıyoruz.",
      en: "24/7 taxi service to the Nicosia intercity bus terminal. With drivers who match your bus arrival-departure times and help with luggage, we plan terminal–hotel, terminal–university, terminal–centre and terminal–Ercan Airport transfers at fixed prices.",
      ru: "Такси 24/7 к междугороднему автовокзалу Никосии. Водители подстраиваются под расписание автобусов и помогают с багажом; трансфер терминал–отель, терминал–вуз, терминал–центр и терминал–аэропорт Эрджан по фикс. цене.",
    },
    highlights: [
      { tr: "Otobüs saatine dakik karşılama", en: "Punctual meet at bus time", ru: "Пунктуальная встреча к автобусу" },
      { tr: "Bagaj yardımı", en: "Luggage assistance", ru: "Помощь с багажом" },
      { tr: "Otel ve üniversite transferi", en: "Hotel & university transfer", ru: "Трансфер в отель и вуз" },
      { tr: "7/24 sabit fiyat", en: "24/7 fixed price", ru: "Фикс. цена 24/7" },
    ],
    routes: ["Terminal → Lefkoşa Merkez", "Terminal → Ercan Havalimanı", "Terminal → YDÜ", "Terminal → Girne"],
    nearby: ["lefkosa-taksi", "surlarici-taksi", "ortakoy-taksi"],
    faq: [
      {
        q: { tr: "Terminalde sizi nasıl bulurum?", en: "How do I find you at the terminal?", ru: "Как найти вас на автовокзале?" },
        a: {
          tr: "WhatsApp'tan konum paylaşmanız yeterli; sürücümüz terminal girişinde sizi karşılar.",
          en: "Just share your location on WhatsApp; our driver meets you at the terminal entrance.",
          ru: "Просто отправьте геолокацию в WhatsApp; водитель встретит вас у входа на автовокзал.",
        },
      },
    ],
  },
  {
    slug: "gocmenkoy-taksi",
    keyword: { tr: "Göçmenköy Taksi", en: "Gocmenkoy Taxi", ru: "Такси Гёчменкёй" },
    h1: { tr: "Göçmenköy Taksi — 7/24 Güvenilir", en: "Gocmenkoy Taxi — Reliable 24/7", ru: "Такси Гёчменкёй — Надёжно 24/7" },
    metaTitle: {
      tr: "Göçmenköy Taksi | 7/24 Taksi & Transfer - Sabit Fiyat",
      en: "Gocmenkoy Taxi | 24/7 Taxi & Transfer - Fixed Price",
      ru: "Такси Гёчменкёй | Такси и трансфер 24/7",
    },
    metaDescription: {
      tr: "Göçmenköy (Lefkoşa) bölgesinde 7/24 taksi. Şehir içi, Ercan Havalimanı, hastane ve üniversite transferi. Hızlı, güvenli ve sabit fiyatlı.",
      en: "24/7 taxi in Gocmenkoy (Nicosia). City, Ercan Airport, hospital and university transfers. Fast, safe and fixed price.",
      ru: "Такси 24/7 в Гёчменкёе (Никосия). Город, аэропорт Эрджан, больницы и вузы. Быстро, безопасно, фикс. цена.",
    },
    intro: {
      tr: "Göçmenköy ve çevresine 7/24 güvenilir taksi hizmeti. Lefkoşa merkez, Ercan Havalimanı, hastane ve üniversite transferlerinizi deneyimli sürücülerle, sabit ve şeffaf fiyatla gerçekleştiriyoruz. Mahalleyi iyi bilen sürücülerimizle kapınıza dakikalar içinde geliyoruz.",
      en: "Reliable 24/7 taxi service to Gocmenkoy and surroundings. We handle your transfers to Nicosia centre, Ercan Airport, hospitals and universities with experienced drivers at fixed, transparent prices, reaching your door within minutes.",
      ru: "Надёжное такси 24/7 в Гёчменкёй и окрестности. Трансфер в центр Никосии, аэропорт Эрджан, больницы и вузы с опытными водителями по фикс. цене; приезжаем к двери за минуты.",
    },
    highlights: [
      { tr: "Hızlı ve güvenli", en: "Fast and safe", ru: "Быстро и безопасно" },
      { tr: "Havalimanı & hastane transferi", en: "Airport & hospital transfer", ru: "Трансфер в аэропорт и больницы" },
      { tr: "Sabit fiyat", en: "Fixed price", ru: "Фикс. цена" },
      { tr: "7/24 hizmet", en: "24/7 service", ru: "Сервис 24/7" },
    ],
    routes: ["Göçmenköy → Lefkoşa Merkez", "Göçmenköy → Ercan Havalimanı", "Göçmenköy → Hastane"],
    nearby: ["lefkosa-taksi", "surlarici-taksi", "ortakoy-taksi", "hastane-taksi"],
    faq: [],
  },
  {
    slug: "surlarici-taksi",
    keyword: { tr: "Surlariçi Taksi", en: "Walled City Taxi", ru: "Такси Старый город" },
    h1: { tr: "Surlariçi Taksi — Tarihi Lefkoşa 7/24", en: "Walled City Taxi — Old Nicosia 24/7", ru: "Такси Старый город — Историческая Никосия 24/7" },
    metaTitle: {
      tr: "Surlariçi Taksi | Tarihi Lefkoşa & Turist Taksi 7/24",
      en: "Walled City Taxi | Old Nicosia & Tourist Taxi 24/7",
      ru: "Такси Старый город | Историческая Никосия 24/7",
    },
    metaDescription: {
      tr: "Lefkoşa Surlariçi'ne 7/24 taksi. Girne Kapısı, Büyük Han, Selimiye Camii, Arasta ve Ledra. Otel, havalimanı ve gezi transferi. Sabit turist fiyatı.",
      en: "24/7 taxi to Nicosia's Walled City. Kyrenia Gate, Buyuk Han, Selimiye Mosque, Arasta and Ledra. Hotel, airport and sightseeing transfers. Fixed tourist price.",
      ru: "Такси 24/7 в Старый город Никосии. Киренийские ворота, Бюйюк Хан, мечеть Селимие, Араста и Ледра. Отель, аэропорт и экскурсии. Фикс. цена.",
    },
    intro: {
      tr: "Lefkoşa'nın tarihi Surlariçi bölgesine 7/24 taksi hizmeti. Girne Kapısı, Büyük Han, Selimiye Camii, Arasta çarşısı ve Ledra hattını kapsayan dar sokaklara hakim sürücülerimizle otel, havalimanı ve gezi transferleri sunuyoruz. Turistler için çok dilli sürücü ve sabit fiyat.",
      en: "24/7 taxi service to the historic Walled City of Nicosia. With drivers who know the narrow streets around Kyrenia Gate, Buyuk Han, Selimiye Mosque, the Arasta bazaar and the Ledra line, we offer hotel, airport and sightseeing transfers. Multilingual drivers and fixed prices for tourists.",
      ru: "Такси 24/7 в исторический Старый город Никосии. Водители знают узкие улочки у Киренийских ворот, Бюйюк Хана, мечети Селимие, базара Араста и линии Ледра; трансфер в отель, аэропорт и на экскурсии. Водители на разных языках и фикс. цены для туристов.",
    },
    highlights: [
      { tr: "Tarihi merkeze tam erişim", en: "Full access to the historic centre", ru: "Полный доступ в исторический центр" },
      { tr: "Çok dilli turist sürücüleri", en: "Multilingual tourist drivers", ru: "Водители для туристов на разных языках" },
      { tr: "Otel ve havalimanı transferi", en: "Hotel & airport transfer", ru: "Трансфер в отель и аэропорт" },
      { tr: "Gezi & şehir turu", en: "Sightseeing & city tour", ru: "Экскурсии и тур по городу" },
    ],
    routes: ["Surlariçi → Ercan Havalimanı", "Surlariçi → Girne", "Surlariçi → Büyük Han / Selimiye", "Surlariçi → Larnaka Havalimanı"],
    nearby: ["lefkosa-taksi", "terminal-taksi", "ortakoy-taksi", "kibris-taksi"],
    faq: [
      {
        q: { tr: "Surlariçi dar sokaklarına taksi girebilir mi?", en: "Can a taxi enter the Walled City's narrow streets?", ru: "Может ли такси заехать в узкие улочки Старого города?" },
        a: {
          tr: "Araç girişine uygun en yakın noktada sizi alır veya bırakırız; gerekirse yürüme mesafesindeki kapılarda buluşuruz.",
          en: "We pick you up or drop you at the nearest vehicle-accessible point, meeting at the gates within walking distance if needed.",
          ru: "Забираем или высаживаем в ближайшей доступной точке; при необходимости встречаемся у ворот в пешей доступности.",
        },
      },
    ],
  },
  {
    slug: "alaykoy-taksi",
    keyword: { tr: "Alayköy Taksi", en: "Alaykoy Taxi", ru: "Такси Алайкёй" },
    h1: { tr: "Alayköy Taksi — 7/24 Hızlı Hizmet", en: "Alaykoy Taxi — Fast 24/7 Service", ru: "Такси Алайкёй — Быстро 24/7" },
    metaTitle: {
      tr: "Alayköy Taksi | 7/24 Taksi & Transfer - Sabit Fiyat",
      en: "Alaykoy Taxi | 24/7 Taxi & Transfer - Fixed Price",
      ru: "Такси Алайкёй | Такси и трансфер 24/7",
    },
    metaDescription: {
      tr: "Alayköy (Lefkoşa) bölgesinde 7/24 taksi. Şehir içi, Ercan Havalimanı, üniversite ve sanayi transferi. Hızlı geliş, sabit fiyat.",
      en: "24/7 taxi in Alaykoy (Nicosia). City, Ercan Airport, university and industrial transfers. Fast pickup, fixed price.",
      ru: "Такси 24/7 в Алайкёе (Никосия). Город, аэропорт Эрджан, вузы и промзона. Быстрая подача, фикс. цена.",
    },
    intro: {
      tr: "Lefkoşa'nın batısındaki Alayköy bölgesine 7/24 taksi hizmeti. Çevre köyler, sanayi alanı ve havalimanı yolu üzerindeki konumuyla Alayköy–merkez, Alayköy–Ercan Havalimanı ve üniversite transferlerinizi hızlı ve sabit fiyatla sağlıyoruz.",
      en: "24/7 taxi service to the Alaykoy area west of Nicosia. Given its location near surrounding villages, the industrial zone and the airport road, we provide Alaykoy–centre, Alaykoy–Ercan Airport and university transfers quickly and at fixed prices.",
      ru: "Такси 24/7 в район Алайкёй к западу от Никосии. Благодаря расположению у соседних сёл, промзоны и дороги в аэропорт, трансфер Алайкёй–центр, Алайкёй–аэропорт Эрджан и в вузы быстро и по фикс. цене.",
    },
    highlights: [
      { tr: "Havalimanı yoluna yakın hızlı geliş", en: "Fast pickup near the airport road", ru: "Быстрая подача у дороги в аэропорт" },
      { tr: "Sabit fiyatlı transfer", en: "Fixed-price transfer", ru: "Трансфер по фикс. цене" },
      { tr: "Üniversite ve sanayi ulaşımı", en: "University & industrial access", ru: "Поездки в вузы и промзону" },
      { tr: "7/24 ulaşılabilir", en: "Reachable 24/7", ru: "Доступны 24/7" },
    ],
    routes: ["Alayköy → Lefkoşa Merkez", "Alayköy → Ercan Havalimanı", "Alayköy → CIU (Haspolat)", "Alayköy → Gönyeli"],
    nearby: ["lefkosa-taksi", "gonyeli-taksi", "ciu-taksi", "ercan-taksi"],
    faq: [],
  },
  {
    slug: "girne-taksi",
    keyword: { tr: "Girne Taksi", en: "Kyrenia Taxi", ru: "Такси Кирения" },
    h1: { tr: "Girne Taksi — 7/24 Şehir & Transfer", en: "Kyrenia Taxi — 24/7 City & Transfer", ru: "Такси Кирения — Город и трансфер 24/7" },
    metaTitle: {
      tr: "Girne Taksi | 7/24 Girne Taksi & Ercan Transfer - Sabit Fiyat",
      en: "Kyrenia Taxi | 24/7 Taxi & Ercan Transfer - Fixed Price",
      ru: "Такси Кирения | Такси и трансфер Эрджан 24/7",
    },
    metaDescription: {
      tr: "Girne'de 7/24 taksi ve transfer. Girne Limanı, Girne Kalesi, oteller, üniversiteler ve Ercan Havalimanı transferi. Sabit fiyat, çok dilli sürücü.",
      en: "24/7 taxi and transfer in Kyrenia. Kyrenia Harbour, Castle, hotels, universities and Ercan Airport transfers. Fixed price, multilingual drivers.",
      ru: "Такси и трансфер 24/7 в Кирении. Гавань, замок, отели, вузы и аэропорт Эрджан. Фикс. цена, водители на разных языках.",
    },
    intro: {
      tr: "Kıbrıs'ın turistik incisi Girne'de 7/24 taksi ve transfer hizmeti. Girne Limanı, Girne Kalesi, oteller, kumarhaneler ve üniversiteler (GAÜ, Girne Üniversitesi) çevresinde şehir içi ulaşım; Ercan ve Larnaka havalimanı transferleri sabit fiyatla. Çok dilli sürücülerle konforlu yolculuk.",
      en: "24/7 taxi and transfer service in Kyrenia, the tourist pearl of Cyprus. City rides around Kyrenia Harbour, Castle, hotels, casinos and universities (GAU, University of Kyrenia); Ercan and Larnaca airport transfers at fixed prices. Comfortable trips with multilingual drivers.",
      ru: "Такси и трансфер 24/7 в Кирении — туристической жемчужине Кипра. Поездки по городу у гавани, замка, отелей, казино и вузов (GAU, Университет Кирении); трансфер из Эрджана и Ларнаки по фикс. цене. Комфорт с водителями на разных языках.",
    },
    highlights: [
      { tr: "Girne Limanı & otel transferleri", en: "Kyrenia Harbour & hotel transfers", ru: "Трансфер в гавань и отели" },
      { tr: "Ercan & Larnaka sabit transfer", en: "Fixed Ercan & Larnaca transfer", ru: "Фикс. трансфер Эрджан и Ларнака" },
      { tr: "Üniversite (GAÜ) ulaşımı", en: "University (GAU) access", ru: "Поездки в университет (GAU)" },
      { tr: "Çok dilli sürücü", en: "Multilingual driver", ru: "Водители на разных языках" },
    ],
    routes: ["Girne → Ercan Havalimanı", "Girne → Lefkoşa", "Girne → Gazimağusa", "Girne → Larnaka Havalimanı", "Girne → Bellapais / Beşparmak"],
    nearby: ["kibris-taksi", "ercan-havalimani-taksi", "lefkosa-taksi", "gazimagusa-taksi"],
    faq: [
      {
        q: { tr: "Girne'den Ercan Havalimanı transferi ne kadar sürer?", en: "How long is the Kyrenia to Ercan Airport transfer?", ru: "Сколько ехать из Кирении в аэропорт Эрджан?" },
        a: {
          tr: "Girne–Ercan transferi ortalama 35-45 dakika sürer; uçuş saatinize göre kalkışı planlar, sabit ücret uygularız.",
          en: "The Kyrenia–Ercan transfer takes about 35-45 minutes; we plan departure around your flight and apply a fixed fare.",
          ru: "Трансфер Кирения–Эрджан занимает около 35-45 минут; планируем выезд под ваш рейс по фикс. цене.",
        },
      },
    ],
  },
  {
    slug: "gazimagusa-taksi",
    keyword: { tr: "Gazimağusa Taksi", en: "Famagusta Taxi", ru: "Такси Фамагуста" },
    h1: { tr: "Gazimağusa Taksi — 7/24 Şehir & Transfer", en: "Famagusta Taxi — 24/7 City & Transfer", ru: "Такси Фамагуста — Город и трансфер 24/7" },
    metaTitle: {
      tr: "Gazimağusa Taksi | 7/24 Mağusa Taksi & DAÜ Transfer",
      en: "Famagusta Taxi | 24/7 Taxi & EMU Transfer - Fixed Price",
      ru: "Такси Фамагуста | Такси и трансфер EMU 24/7",
    },
    metaDescription: {
      tr: "Gazimağusa'da 7/24 taksi ve transfer. DAÜ kampüsü, Surlariçi, Salamis, Maraş ve Ercan Havalimanı transferi. Öğrenciye uygun sabit fiyat.",
      en: "24/7 taxi and transfer in Famagusta. EMU campus, Walled City, Salamis, Varosha and Ercan Airport transfers. Student-friendly fixed price.",
      ru: "Такси и трансфер 24/7 в Фамагусте. Кампус EMU, Старый город, Саламин, Вароша и аэропорт Эрджан. Фикс. цена для студентов.",
    },
    intro: {
      tr: "Gazimağusa'da 7/24 taksi ve transfer hizmeti. Doğu Akdeniz Üniversitesi (DAÜ) kampüsü ve yurtları, tarihi Surlariçi, Salamis Antik Kenti, Maraş bölgesi ve oteller arasında şehir içi ulaşım; Ercan ve Larnaka havalimanı transferleri sabit fiyatla. Öğrencilere uygun fiyatlar.",
      en: "24/7 taxi and transfer service in Famagusta. City rides between the Eastern Mediterranean University (EMU) campus and dorms, the historic Walled City, ancient Salamis, the Varosha area and hotels; Ercan and Larnaca airport transfers at fixed prices. Affordable fares for students.",
      ru: "Такси и трансфер 24/7 в Фамагусте. Поездки между кампусом Восточно-Средиземноморского университета (EMU) и общежитиями, Старым городом, древним Саламином, районом Вароша и отелями; трансфер из Эрджана и Ларнаки по фикс. цене. Доступно для студентов.",
    },
    highlights: [
      { tr: "DAÜ kampüs & yurt transferi", en: "EMU campus & dorm transfer", ru: "Трансфер в кампус EMU и общежития" },
      { tr: "Salamis & Surlariçi gezi turu", en: "Salamis & Walled City tour", ru: "Тур: Саламин и Старый город" },
      { tr: "Ercan & Larnaka sabit transfer", en: "Fixed Ercan & Larnaca transfer", ru: "Фикс. трансфер Эрджан и Ларнака" },
      { tr: "Öğrenciye uygun fiyat", en: "Student-friendly price", ru: "Цены для студентов" },
    ],
    routes: ["Gazimağusa → Ercan Havalimanı", "Gazimağusa → Lefkoşa", "Gazimağusa → Girne", "DAÜ → Ercan Havalimanı", "Gazimağusa → İskele / Long Beach"],
    nearby: ["kibris-taksi", "ercan-havalimani-taksi", "lefkosa-taksi", "iskele-taksi"],
    faq: [
      {
        q: { tr: "DAÜ öğrencilerine özel fiyat var mı?", en: "Is there a special price for EMU students?", ru: "Есть особая цена для студентов EMU?" },
        a: {
          tr: "Kampüs ve havalimanı güzergahlarında öğrenciye uygun sabit fiyatlar uyguluyoruz; düzenli yolculuklarda ek avantaj sağlıyoruz.",
          en: "We apply student-friendly fixed prices on campus and airport routes, with extra benefits for regular trips.",
          ru: "На маршрутах кампуса и аэропорта действуют доступные фикс. цены для студентов, с бонусами за регулярные поездки.",
        },
      },
    ],
  },
  {
    slug: "guzelyurt-taksi",
    keyword: { tr: "Güzelyurt Taksi", en: "Guzelyurt Taxi", ru: "Такси Гюзельюрт" },
    h1: { tr: "Güzelyurt Taksi — 7/24 Şehir & Transfer", en: "Guzelyurt Taxi — 24/7 City & Transfer", ru: "Такси Гюзельюрт — Город и трансфер 24/7" },
    metaTitle: {
      tr: "Güzelyurt Taksi | 7/24 Taksi & Ercan Transfer - Sabit Fiyat",
      en: "Guzelyurt Taxi | 24/7 Taxi & Ercan Transfer - Fixed Price",
      ru: "Такси Гюзельюрт | Такси и трансфер Эрджан 24/7",
    },
    metaDescription: {
      tr: "Güzelyurt (Omorfo) bölgesinde 7/24 taksi ve transfer. Şehir içi, Lefkoşa, Lefke ve Ercan Havalimanı transferi. Sabit fiyat, güvenilir sürücü.",
      en: "24/7 taxi and transfer in Guzelyurt (Morphou). City, Nicosia, Lefke and Ercan Airport transfers. Fixed price, reliable drivers.",
      ru: "Такси и трансфер 24/7 в Гюзельюрте (Морфу). Город, Никосия, Лефке и аэропорт Эрджан. Фикс. цена, надёжные водители.",
    },
    intro: {
      tr: "Kıbrıs'ın batısındaki narenciye diyarı Güzelyurt'ta 7/24 taksi ve transfer hizmeti. Şehir merkezi, çevre köyler, Lefke ve Lefkoşa bağlantıları ile Ercan ve Larnaka havalimanı transferlerini sabit fiyatla planlıyoruz. Uzun mesafe transferlerinde konforlu, bakımlı araçlar.",
      en: "24/7 taxi and transfer service in Guzelyurt, the citrus region of western Cyprus. We plan city centre rides, surrounding villages, Lefke and Nicosia connections, plus Ercan and Larnaca airport transfers at fixed prices. Comfortable, well-maintained vehicles for long-distance transfers.",
      ru: "Такси и трансфер 24/7 в Гюзельюрте — цитрусовом крае на западе Кипра. Планируем поездки по центру, соседним сёлам, в Лефке и Никосию, а также трансфер из Эрджана и Ларнаки по фикс. цене. Удобные ухоженные авто для дальних поездок.",
    },
    highlights: [
      { tr: "Ercan & Larnaka sabit transfer", en: "Fixed Ercan & Larnaca transfer", ru: "Фикс. трансфер Эрджан и Ларнака" },
      { tr: "Lefkoşa & Lefke bağlantısı", en: "Nicosia & Lefke connection", ru: "Связь с Никосией и Лефке" },
      { tr: "Uzun mesafe konforlu araç", en: "Comfortable long-distance car", ru: "Удобное авто для дальних поездок" },
      { tr: "7/24 güvenilir hizmet", en: "Reliable 24/7 service", ru: "Надёжный сервис 24/7" },
    ],
    routes: ["Güzelyurt → Ercan Havalimanı", "Güzelyurt → Lefkoşa", "Güzelyurt → Lefke", "Güzelyurt → Girne"],
    nearby: ["kibris-taksi", "lefke-taksi", "ercan-havalimani-taksi", "lefkosa-taksi"],
    faq: [],
  },
  {
    slug: "iskele-taksi",
    keyword: { tr: "İskele Taksi", en: "Iskele Taxi", ru: "Такси Искеле" },
    h1: { tr: "İskele Taksi — 7/24 Sahil & Transfer", en: "Iskele Taxi — 24/7 Coast & Transfer", ru: "Такси Искеле — Побережье и трансфер 24/7" },
    metaTitle: {
      tr: "İskele Taksi | 7/24 Long Beach & Ercan Transfer - Sabit Fiyat",
      en: "Iskele Taxi | 24/7 Long Beach & Ercan Transfer - Fixed Price",
      ru: "Такси Искеле | Long Beach и трансфер Эрджан 24/7",
    },
    metaDescription: {
      tr: "İskele ve Long Beach bölgesinde 7/24 taksi ve transfer. Otel, apart, Boğaz, Gazimağusa ve Ercan Havalimanı transferi. Sabit fiyat, çok dilli sürücü.",
      en: "24/7 taxi and transfer in Iskele and the Long Beach area. Hotel, apartment, Bogaz, Famagusta and Ercan Airport transfers. Fixed price, multilingual drivers.",
      ru: "Такси и трансфер 24/7 в Искеле и районе Long Beach. Отели, апарты, Богаз, Фамагуста и аэропорт Эрджан. Фикс. цена, водители на разных языках.",
    },
    intro: {
      tr: "Hızla büyüyen turizm bölgesi İskele ve Long Beach'te 7/24 taksi ve transfer hizmeti. Oteller, apart siteleri, Boğaz ve Karpaz yönündeki noktalar ile Gazimağusa, Lefkoşa ve Ercan Havalimanı transferlerini sabit fiyatla sağlıyoruz. Tatilciler için çok dilli sürücü ve bagaj desteği.",
      en: "24/7 taxi and transfer service in the fast-growing tourist region of Iskele and Long Beach. We provide hotel, apartment complex, Bogaz and Karpaz-direction transfers plus Famagusta, Nicosia and Ercan Airport rides at fixed prices. Multilingual drivers and luggage support for holidaymakers.",
      ru: "Такси и трансфер 24/7 в быстрорастущем туристическом районе Искеле и Long Beach. Трансфер в отели, апарт-комплексы, в сторону Богаза и Карпаза, а также в Фамагусту, Никосию и аэропорт Эрджан по фикс. цене. Водители на разных языках и помощь с багажом для отдыхающих.",
    },
    highlights: [
      { tr: "Long Beach otel & apart transferi", en: "Long Beach hotel & apartment transfer", ru: "Трансфер в отели и апарты Long Beach" },
      { tr: "Ercan & Larnaka sabit transfer", en: "Fixed Ercan & Larnaca transfer", ru: "Фикс. трансфер Эрджан и Ларнака" },
      { tr: "Çok dilli tatil sürücüsü", en: "Multilingual holiday driver", ru: "Водитель для туристов на разных языках" },
      { tr: "Bagaj & grup araç", en: "Luggage & group vehicle", ru: "Багаж и авто для группы" },
    ],
    routes: ["İskele → Ercan Havalimanı", "İskele → Gazimağusa", "İskele → Lefkoşa", "İskele → Boğaz", "İskele → Larnaka Havalimanı"],
    nearby: ["kibris-taksi", "gazimagusa-taksi", "ercan-havalimani-taksi", "lefkosa-taksi"],
    faq: [
      {
        q: { tr: "Long Beach apart sitelerine kapıdan transfer var mı?", en: "Do you offer door-to-door transfer to Long Beach apartments?", ru: "Есть трансфер до двери в апартаменты Long Beach?" },
        a: {
          tr: "Evet, site adını ve blok bilgisini paylaşmanız yeterli; sizi doğrudan kapınızdan alır veya bırakırız.",
          en: "Yes, just share the complex name and block; we pick you up or drop you right at your door.",
          ru: "Да, сообщите название комплекса и блок; забираем или высаживаем прямо у двери.",
        },
      },
    ],
  },
  {
    slug: "lefke-taksi",
    keyword: { tr: "Lefke Taksi", en: "Lefke Taxi", ru: "Такси Лефке" },
    h1: { tr: "Lefke Taksi — 7/24 Şehir & Transfer", en: "Lefke Taxi — 24/7 City & Transfer", ru: "Такси Лефке — Город и трансфер 24/7" },
    metaTitle: {
      tr: "Lefke Taksi | 7/24 Taksi & LAÜ Transfer - Sabit Fiyat",
      en: "Lefke Taxi | 24/7 Taxi & EUL Transfer - Fixed Price",
      ru: "Такси Лефке | Такси и трансфер EUL 24/7",
    },
    metaDescription: {
      tr: "Lefke bölgesinde 7/24 taksi ve transfer. LAÜ kampüsü, Güzelyurt, Lefkoşa ve Ercan Havalimanı transferi. Öğrenciye uygun sabit fiyat.",
      en: "24/7 taxi and transfer in Lefke. EUL campus, Guzelyurt, Nicosia and Ercan Airport transfers. Student-friendly fixed price.",
      ru: "Такси и трансфер 24/7 в Лефке. Кампус EUL, Гюзельюрт, Никосия и аэропорт Эрджан. Фикс. цена для студентов.",
    },
    intro: {
      tr: "Kıbrıs'ın batısındaki tarihi Lefke'de 7/24 taksi ve transfer hizmeti. Lefke Avrupa Üniversitesi (LAÜ) kampüsü ve yurtları, Güzelyurt, Lefkoşa bağlantıları ile Ercan ve Larnaka havalimanı transferlerini sabit fiyatla planlıyoruz. Öğrencilere uygun, uzun mesafede konforlu araçlar.",
      en: "24/7 taxi and transfer service in historic Lefke in western Cyprus. We plan European University of Lefke (EUL) campus and dorm rides, Guzelyurt and Nicosia connections, plus Ercan and Larnaca airport transfers at fixed prices. Student-friendly, comfortable cars for long distances.",
      ru: "Такси и трансфер 24/7 в историческом Лефке на западе Кипра. Планируем поездки в кампус и общежития Европейского университета Лефке (EUL), связь с Гюзельюртом и Никосией, а также трансфер из Эрджана и Ларнаки по фикс. цене. Доступно студентам, удобные авто для дальних поездок.",
    },
    highlights: [
      { tr: "LAÜ kampüs & yurt transferi", en: "EUL campus & dorm transfer", ru: "Трансфер в кампус EUL и общежития" },
      { tr: "Ercan & Larnaka sabit transfer", en: "Fixed Ercan & Larnaca transfer", ru: "Фикс. трансфер Эрджан и Ларнака" },
      { tr: "Güzelyurt & Lefkoşa bağlantısı", en: "Guzelyurt & Nicosia connection", ru: "Связь с Гюзельюртом и Никосией" },
      { tr: "Öğrenciye uygun fiyat", en: "Student-friendly price", ru: "Цены для студентов" },
    ],
    routes: ["Lefke → Ercan Havalimanı", "Lefke → Güzelyurt", "Lefke → Lefkoşa", "LAÜ → Ercan Havalimanı"],
    nearby: ["kibris-taksi", "guzelyurt-taksi", "ercan-havalimani-taksi", "lefkosa-taksi"],
    faq: [],
  },
];

export function getArea(slug: string): AreaData | undefined {
  return areas.find((a) => a.slug === slug);
}

export const areaSlugs = areas.map((a) => a.slug);
