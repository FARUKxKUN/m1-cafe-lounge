// Bilingual content (EN / AR). Components read strings from here via the language context.
// Non-text data (urls, phone, colors, rating) stays in brand.ts.

export type Lang = 'en' | 'ar'

export interface MenuItem {
  name: string
  desc: string
  price: string
}
export interface MenuGroup {
  category: string
  items: MenuItem[]
}
export interface ReviewItem {
  name: string
  meta: string
  date: string
  rating: number
  text: string
}

export interface Content {
  toggle: string
  nav: { menu: string; gallery: string; about: string; visit: string; order: string; call: string; subtitle: string }
  hero: { place: string; line1: string; line2: string; tagline: string; order: string; menu: string; scroll: string }
  about: { label: string; h1: string; h2: string; p1: string; p2: string }
  menu: { label: string; h1: string; h2: string; noteLabel: string; note: string; currency: string; groups: MenuGroup[] }
  gallery: { label: string; h1: string; h2: string; scroll: string; shots: string[] }
  reviews: { google: string; summary: string; items: ReviewItem[] }
  order: { label: string; h1: string; h2: string; p: string; talabat: string; instagram: string; whatsapp: string; facebook: string }
  location: { label: string; h1: string; h2: string; address: string; addressText: string; directions: string; hoursLabel: string; hours: { days: string; time: string }[] }
  footer: { by: string; rights: string }
  mobile: { order: string; whatsapp: string }
}

const en: Content = {
  toggle: 'ع',
  nav: { menu: 'Menu', gallery: 'Gallery', about: 'About', visit: 'Visit', order: 'Order', call: 'Call', subtitle: 'Al Bateen, Abu Dhabi' },
  hero: {
    place: 'Al Bateen / Abu Dhabi',
    line1: 'Slow mornings.',
    line2: 'Golden evenings.',
    tagline:
      'Where every moment tastes extraordinary. A lounge in the heart of Al Bateen where coffee, cuisine and atmosphere meet.',
    order: 'Order Now',
    menu: 'View Menu',
    scroll: 'Scroll',
  },
  about: {
    label: '01 - The Place',
    h1: 'More than coffee.',
    h2: 'A way to pause.',
    p1: 'Tucked into Al Bateen, M1 Cafe Lounge is where the city slows down. Velvet seating, brass light and marble - a room built for long conversations and good food.',
    p2: 'From the first espresso of the morning to a late-night plate, every detail is considered. This is hospitality with intent.',
  },
  menu: {
    label: '02 - Menu',
    h1: 'Plates worth',
    h2: 'slowing down for.',
    noteLabel: 'In the room',
    note: 'A taste of the kitchen - Italian plates, sushi and specialty coffee. The full menu lives in-house and on delivery.',
    currency: 'AED',
    groups: [
      {
        category: 'Coffee & Tea',
        items: [
          { name: 'Spanish Latte', desc: 'Espresso, steamed milk, sweet condensed finish', price: '24' },
          { name: 'Dark Coffee', desc: 'Single-origin, slow extraction', price: '22' },
          { name: 'Loose-Leaf Tea', desc: 'Selection brewed to order', price: '20' },
        ],
      },
      {
        category: 'To Start',
        items: [
          { name: 'Grilled Halloumi', desc: 'Tomato, cucumber, pesto', price: '42' },
          { name: 'Tabbouleh', desc: 'Parsley, tomato, bulgur, Arabic dressing', price: '36' },
        ],
      },
      {
        category: 'From the Kitchen',
        items: [
          { name: 'Wood-Fired Pizza', desc: 'House dough, premium toppings, fresh arugula', price: '65' },
          { name: 'Prawn Pasta', desc: 'Sauteed prawns, garlic, chili, herbs', price: '78' },
          { name: 'Grilled Lamb Chops', desc: 'Herb-marinated, seasonal vegetables, 4 pieces', price: '95' },
          { name: 'Grilled Chicken Sandwich', desc: 'Bell peppers, avocado, sweet corn, melted cheese', price: '52' },
        ],
      },
      {
        category: 'Sushi & Rolls',
        items: [
          { name: 'Tempura Roll', desc: 'Crisp tempura, signature sauce', price: '58' },
          { name: 'Chef Sushi Selection', desc: 'Daily assortment, chef-selected', price: '72' },
        ],
      },
      {
        category: 'Sweet',
        items: [{ name: 'Baked Cheesecake', desc: 'NY-style, berry compote', price: '38' }],
      },
    ],
  },
  gallery: {
    label: '03 - Gallery',
    h1: 'Step',
    h2: 'inside.',
    scroll: 'Scroll to explore →',
    shots: ['The Kitchen', 'The Room', 'The Bar', 'After Dark', 'Sweet', 'The Terrace'],
  },
  reviews: {
    google: 'Google Reviews',
    summary: 'Based on 670+ reviews · Read them on Google →',
    items: [
      {
        name: 'Adina Aliu',
        meta: 'Local Guide · 34 reviews',
        date: 'a month ago',
        rating: 5,
        text: 'Local lounge filled with variety; indoor and outdoor seating, food and desserts, Turkish flavours and great service. Grace is attentive and accommodating.',
      },
      {
        name: 'Amber Imtiaz',
        meta: '7 reviews · 8 photos',
        date: 'a month ago',
        rating: 5,
        text: 'Food was delicious and served fresh and hot! The atmosphere is cozy and very relaxing. Sherry welcomed us with kindness and was very helpful and professional. Amazing experience.',
      },
      {
        name: 'Nidha Fathima',
        meta: 'Local Guide · 13 reviews',
        date: '3 months ago',
        rating: 5,
        text: 'A great experience at M1 Cafe Lounge! The atmosphere is cozy and welcoming, perfect for relaxing with friends or getting some work done. The food was fresh and flavorful, and the staff made sure we were comfortable the whole time.',
      },
      {
        name: 'Walk Inhouse Trainer',
        meta: '4 reviews · 1 photo',
        date: 'a week ago',
        rating: 5,
        text: 'I stumbled upon this cozy spot for some remote work and it completely exceeded my expectations - a peaceful place to focus or unwind. What made it unforgettable was Latifa; her service is nothing short of extraordinary. A hidden gem for great coffee, food and top-tier hospitality.',
      },
    ],
  },
  order: {
    label: '04 - Order',
    h1: 'Bring M1',
    h2: 'to your table.',
    p: 'Order in for delivery, or message us directly to reserve a table.',
    talabat: 'Order on Talabat',
    instagram: 'Instagram',
    whatsapp: 'WhatsApp',
    facebook: 'Facebook',
  },
  location: {
    label: '05 - Visit',
    h1: 'Find us in',
    h2: 'Al Bateen.',
    address: 'Address',
    addressText: 'Al Khaleej Al Arabi St 422, Al Bateen, Abu Dhabi',
    directions: 'Get directions →',
    hoursLabel: 'Hours',
    hours: [
      { days: 'Sunday - Thursday', time: '8:00 AM - 11:00 PM' },
      { days: 'Friday - Saturday', time: '8:00 AM - 1:00 AM' },
    ],
  },
  footer: { by: 'Site by Faruk · faruk_automates', rights: 'All rights reserved.' },
  mobile: { order: 'Order', whatsapp: 'WhatsApp' },
}

const ar: Content = {
  toggle: 'EN',
  nav: { menu: 'القائمة', gallery: 'المعرض', about: 'عن المكان', visit: 'زورنا', order: 'اطلب', call: 'اتصل', subtitle: 'البطين، أبوظبي' },
  hero: {
    place: 'البطين / أبوظبي',
    line1: 'صباحات هادئة.',
    line2: 'أمسيات ذهبية.',
    tagline: 'حيث تصبح كل لحظة استثنائية. لاونج في قلب البطين يجمع القهوة والمأكولات والأجواء.',
    order: 'اطلب الآن',
    menu: 'تصفّح القائمة',
    scroll: 'مرّر',
  },
  about: {
    label: '01 - المكان',
    h1: 'أكثر من مجرّد قهوة.',
    h2: 'إنها طريقة لتستريح.',
    p1: 'في قلب البطين، إم 1 كافيه لاونج هو المكان الذي تتمهّل فيه المدينة. مقاعد مخمليّة، إضاءة نحاسيّة ورخام - غرفة صُمّمت للأحاديث الطويلة والطعام الجيّد.',
    p2: 'من أوّل قهوة في الصباح إلى طبق في وقت متأخّر من الليل، كلّ تفصيل مدروس. هذه ضيافة بنيّة صادقة.',
  },
  menu: {
    label: '02 - القائمة',
    h1: 'أطباق تستحقّ',
    h2: 'أن تتمهّل لأجلها.',
    noteLabel: 'في المكان',
    note: 'لمحة من المطبخ - أطباق إيطالية وسوشي وقهوة مختصّة. القائمة الكاملة متوفّرة في المكان وللتوصيل.',
    currency: 'د.إ',
    groups: [
      {
        category: 'قهوة وشاي',
        items: [
          { name: 'لاتيه إسباني', desc: 'إسبريسو، حليب مبخّر، لمسة حليب مكثّف محلّى', price: '24' },
          { name: 'قهوة داكنة', desc: 'حبوب أحادية المصدر، استخلاص بطيء', price: '22' },
          { name: 'شاي ورقي', desc: 'تشكيلة تُحضّر عند الطلب', price: '20' },
        ],
      },
      {
        category: 'للبداية',
        items: [
          { name: 'حلوم مشوي', desc: 'طماطم، خيار، بيستو', price: '42' },
          { name: 'تبّولة', desc: 'بقدونس، طماطم، برغل، تتبيلة عربية', price: '36' },
        ],
      },
      {
        category: 'من المطبخ',
        items: [
          { name: 'بيتزا بالفرن الحجري', desc: 'عجينة منزليّة، إضافات مميّزة، جرجير طازج', price: '65' },
          { name: 'باستا بالروبيان', desc: 'روبيان سوتيه، ثوم، فلفل حار، أعشاب', price: '78' },
          { name: 'ريش غنم مشوية', desc: 'متبّلة بالأعشاب، خضار موسميّة، 4 قطع', price: '95' },
          { name: 'ساندويتش دجاج مشوي', desc: 'فلفل ملوّن، أفوكادو، ذرة حلوة، جبن ذائب', price: '52' },
        ],
      },
      {
        category: 'سوشي ورولات',
        items: [
          { name: 'رول تمبورا', desc: 'تمبورا مقرمشة، صوص مميّز', price: '58' },
          { name: 'تشكيلة الشيف', desc: 'تشكيلة يوميّة مختارة من الشيف', price: '72' },
        ],
      },
      {
        category: 'حلويات',
        items: [{ name: 'تشيز كيك مخبوز', desc: 'على الطريقة النيويوركيّة، كومبوت توت', price: '38' }],
      },
    ],
  },
  gallery: {
    label: '03 - المعرض',
    h1: 'تفضّل',
    h2: 'بالداخل.',
    scroll: '← مرّر للاستكشاف',
    shots: ['المطبخ', 'القاعة', 'البار', 'بعد الغروب', 'حلويات', 'التراس'],
  },
  reviews: {
    google: 'تقييمات جوجل',
    summary: '← بناءً على أكثر من 670 تقييم · اقرأها على جوجل',
    items: [
      {
        name: 'Adina Aliu',
        meta: 'مرشد محلي · 34 تقييم',
        date: 'قبل شهر',
        rating: 5,
        text: 'لاونج محلي مليء بالتنوّع؛ جلسات داخلية وخارجية، طعام وحلويات، نكهات تركية وخدمة رائعة. غريس مهتمّة ومتعاونة.',
      },
      {
        name: 'Amber Imtiaz',
        meta: '7 تقييمات · 8 صور',
        date: 'قبل شهر',
        rating: 5,
        text: 'الطعام كان لذيذاً وقُدّم طازجاً وساخناً! الأجواء مريحة ومسترخية جداً. استقبلتنا شيري بلطف وكانت متعاونة ومحترفة. تجربة رائعة.',
      },
      {
        name: 'Nidha Fathima',
        meta: 'مرشد محلي · 13 تقييم',
        date: 'قبل 3 أشهر',
        rating: 5,
        text: 'تجربة رائعة في إم 1 كافيه لاونج! الأجواء دافئة ومرحّبة، مثالية للاسترخاء مع الأصدقاء أو لإنجاز بعض العمل. الطعام طازج ولذيذ، والطاقم حرص على راحتنا طوال الوقت.',
      },
      {
        name: 'Walk Inhouse Trainer',
        meta: '4 تقييمات · صورة واحدة',
        date: 'قبل أسبوع',
        rating: 5,
        text: 'عثرت على هذا المكان الهادئ للعمل عن بُعد وفاق كلّ توقّعاتي - مكان هادئ للتركيز أو الاسترخاء. ما جعله لا يُنسى هو لطيفة؛ خدمتها استثنائية. جوهرة مخفيّة لقهوة وطعام رائعين وضيافة من الطراز الأول.',
      },
    ],
  },
  order: {
    label: '04 - اطلب',
    h1: 'أحضر إم 1',
    h2: 'إلى طاولتك.',
    p: 'اطلب التوصيل، أو راسلنا مباشرة لحجز طاولة.',
    talabat: 'اطلب عبر طلبات',
    instagram: 'إنستغرام',
    whatsapp: 'واتساب',
    facebook: 'فيسبوك',
  },
  location: {
    label: '05 - زورنا',
    h1: 'تجدنا في',
    h2: 'البطين.',
    address: 'العنوان',
    addressText: 'شارع الخليج العربي 422، البطين، أبوظبي',
    directions: '← احصل على الاتجاهات',
    hoursLabel: 'ساعات العمل',
    hours: [
      { days: 'الأحد - الخميس', time: '8:00 ص - 11:00 م' },
      { days: 'الجمعة - السبت', time: '8:00 ص - 1:00 ص' },
    ],
  },
  footer: { by: 'تصميم فاروق · faruk_automates', rights: 'جميع الحقوق محفوظة.' },
  mobile: { order: 'اطلب', whatsapp: 'واتساب' },
}

export const content: Record<Lang, Content> = { en, ar }
