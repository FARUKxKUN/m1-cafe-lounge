export const brand = {
  name: 'M1 Cafe Lounge',
  tagline: 'Where Every Moment Tastes Extraordinary',
  phone: '+97125833342',
  whatsapp: '+971568033733',
  address: 'Al Khaleej Al Arabi St 422, Al Bateen, Abu Dhabi',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.2!2d54.349962!3d24.4613108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e676aa4b02517%3A0xe84c9639da1005d6!2sM1%20Cafe%20Lounge!5e0!3m2!1sen!2sae!4v1',
  hours: [
    { days: 'Sunday - Thursday', time: '8:00 AM - 11:00 PM' },
    { days: 'Friday - Saturday', time: '8:00 AM - 1:00 AM' },
  ],
  rating: 4.4,
  reviewCount: 670,
  delivery: {
    talabat: 'https://www.talabat.com/uae/restaurant/672780/m1-cafe-lounge-al-khalidiyah',
    deliveroo: 'https://deliveroo.ae/menu/abu-dhabi/al-bateen/m1-cafe-lounge',
  },
  socials: {
    instagram: 'https://www.instagram.com/m1cafelounge/',
    facebook: 'https://www.facebook.com/m1cafelounge1',
    linktree: 'https://linktr.ee/M1cafe1',
  },
  // Built from M1's real published offering (Italian + Asian + specialty coffee).
  // Prices are estimates within their AED 50-100pp band - confirm/replace with exact figures.
  menu: [
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
      items: [
        { name: 'Baked Cheesecake', desc: 'NY-style, berry compote', price: '38' },
      ],
    },
  ],
  currency: 'AED',
  colors: {
    accent: '#B8924A',
    accentDark: '#8A6A30',
    navy: '#252D3D',
    bgDark: '#0C0D10',
    bgMid: '#13141A',
    bgSection: '#17181F',
    bgLight: '#F5F1EA',
    textLight: '#F0EDE8',
    textMuted: '#9A9189',
    textDark: '#1A1C22',
    blue: '#4A6FA5',
  },
}
