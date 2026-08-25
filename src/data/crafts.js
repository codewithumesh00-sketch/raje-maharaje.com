export const craftsData = [
  {
    id: 'tanchoi',
    name: 'Tanchoi Brocade',
    region: 'Varanasi, Uttar Pradesh',
    badge: 'Royal Weave',
    image: '/images/craft_fan_squares_4k.png',
    description: 'A celebrated Chinese-origin silk weaving technique perfected over 400 years by master weavers of Banaras. Woven with subtle micro-relief floral motifs and metallic zari with a satin-smooth tactile finish.',
    stats: { time: '8-12 days per meter', warp: 'Pure Mulberry Silk', zari: 'Tested Real Gold/Silver' }
  },
  {
    id: 'chikankari',
    name: 'Chikankari Embroidery',
    region: 'Lucknow, Uttar Pradesh',
    badge: 'Awadhi Heritage',
    image: '/images/hero_chikankari_4k.png',
    description: 'Originating from the Mughal courts of Awadh, delicate shadow work and needlework hand-embroidered by generational women artisans onto sheer muslin and fine silk.',
    stats: { time: '14-20 days per piece', stitches: 'Bakhiya & Murri knots', artisanGuild: 'Lucknow Mahila Cluster' }
  },
  {
    id: 'ajrakh',
    name: 'Ajrakh Block Print',
    region: 'Dhamadka, Kutch, Gujarat',
    badge: 'Natural Dyes',
    image: '/images/craft_rolled_rosettes_4k.png',
    description: 'A 16-stage ancient resist-printing process using carved teakwood blocks, indigo, madder root, and pomegranate rind on fine modal silk, echoing celestial geometry.',
    stats: { stages: '16 river-wash cycles', dyes: '100% Herbal & Earth Dyes', heritage: 'Indus Valley Lineage' }
  },
  {
    id: 'ikat',
    name: 'Pochampally Ikat',
    region: 'Telangana & Odisha',
    badge: 'Geometric Precision',
    image: '/images/craft_ikat_layers_4k.png',
    description: 'Resist-dyeing yarn in complex mathematical calculations before mounting onto handlooms. When woven, the blurred feathered diamond motifs create a dynamic illusion of light.',
    stats: { precision: 'Micron-aligned yarn dye', loom: 'Traditional Pit Looms', certification: 'GI Tagged' }
  },
  {
    id: 'rawsilk',
    name: 'Tussar & Raw Silk',
    region: 'Bhagalpur, Bihar',
    badge: 'Textured Luster',
    image: '/images/craft_raw_silks_4k.png',
    description: 'Wild forest-harvested silk renowned for its organic golden sheen, tactile slub texture, and exceptional structure that holds pocket folds crisply all evening.',
    stats: { texture: 'Natural Slub Texture', breathability: 'Year-Round Temperate', handfeel: 'Crisp Architectural Fold' }
  }
];

export const foldStyles = [
  {
    id: 'presidential',
    name: 'The Presidential Square',
    difficulty: 'Effortless',
    bestFor: 'Black Tie, Business Formals, Tuxedos',
    steps: [
      'Lay the silk square flat face down on a clean surface.',
      'Fold vertically in half from right to left.',
      'Fold in half horizontally from bottom to top.',
      'Fold the bottom up to match the depth of your jacket breast pocket, leaving a crisp 1/4 inch gold edge visible.'
    ]
  },
  {
    id: 'crown',
    name: 'The Royal Crown Fold',
    difficulty: 'Intermediate',
    bestFor: 'Weddings, Sangeet & Royal Receptions',
    steps: [
      'Lay the square flat in a diamond orientation.',
      'Fold the bottom corner up to create an offset triangle with two distinct peaks.',
      'Fold the left corner up and across to create a third peak.',
      'Fold the right corner up to create the fourth crown pinnacle. Tuck side edges and slide into your bandhgala pocket.'
    ]
  },
  {
    id: 'puff',
    name: 'The Casual Sovereign Puff',
    difficulty: 'Easy',
    bestFor: 'Cocktail Evenings, Linen Blazers, Smart Casual',
    steps: [
      'Pinch the center of the square and lift it off the table.',
      'Form a ring with your thumb and index finger, sliding the fabric downwards.',
      'Fold the bottom ends up halfway behind the puff.',
      'Insert into breast pocket with the rich puffed silk billowing outward naturally.'
    ]
  },
  {
    id: 'winged',
    name: 'The Winged Puff',
    difficulty: 'Advanced',
    bestFor: 'Sherwanis, Jodhpuri Suits, Gala Dinners',
    steps: [
      'Pinch center to form a classic puff.',
      'Fold the corners up around the puff to frame the central volume like wings.',
      'Invert and insert with both the central puff and pointed edges visible in harmony.'
    ]
  }
];

export const currencies = {
  INR: { symbol: '₹', rate: 1, label: 'INR (₹)' },
  USD: { symbol: '$', rate: 0.012, label: 'USD ($)' },
  GBP: { symbol: '£', rate: 0.0094, label: 'GBP (£)' },
  EUR: { symbol: '€', rate: 0.011, label: 'EUR (€)' },
  AED: { symbol: 'AED ', rate: 0.044, label: 'AED (د.إ)' }
};

export const reviewsData = [
  {
    id: 1,
    author: 'Vikramaditya Singhania',
    role: 'Groom & Art Collector',
    city: 'New Delhi',
    rating: 5,
    date: 'February 2026',
    relativeTime: '2 weeks ago',
    avatarLetter: 'V',
    avatarBg: 'bg-[#1a73e8]',
    localGuide: true,
    guideLevel: 6,
    reviewsCount: 38,
    photosCount: 24,
    helpfulCount: 14,
    verified: true,
    tags: ['Maharaje Bespoke Chest', 'Tanchoi Brocade', 'Wedding Gifting'],
    text: 'We ordered 35 custom Maharaje Bespoke chests for my groomsmen in Jaipur. The Tanchoi brocade and the personalized gold calligraphy notes left everyone speechless. The packaging alone is worthy of being kept as a royal heirloom.',
    ownerReply: {
      author: 'Raje Maharaje (Owner)',
      date: '2 weeks ago',
      text: 'Thank you Vikramaditya Ji! It was a true honour crafting these bespoke heirlooms for your royal celebration in Jaipur. Wishing you and the groomsmen a lifetime of joy and elegance.'
    }
  },
  {
    id: 2,
    author: 'Samarth Kapoor',
    role: 'Managing Partner, Alpha Capital',
    city: 'Mumbai & London',
    rating: 5,
    date: 'January 2026',
    relativeTime: 'a month ago',
    avatarLetter: 'S',
    avatarBg: 'bg-[#e37400]',
    localGuide: true,
    guideLevel: 7,
    reviewsCount: 62,
    photosCount: 45,
    helpfulCount: 9,
    verified: true,
    tags: ['Executive Corporate Gifting', 'Banarasi Splendor', 'Bespoke Silk'],
    text: 'Finding gifting for discerning male executives that is truly unique and cultural without feeling cliché is nearly impossible. Raje Maharaje strikes that rare balance of Savile Row restraint and Banarasi splendor.',
    ownerReply: {
      author: 'Raje Maharaje (Owner)',
      date: 'a month ago',
      text: 'Deeply appreciate your high praise, Samarth. Delivering Savile Row precision with Banarasi authenticity is our lifelong craft.'
    }
  },
  {
    id: 3,
    author: 'Devika & Aryan Mehta',
    role: 'Destination Wedding Hosts',
    city: 'Udaipur',
    rating: 5,
    date: 'December 2025',
    relativeTime: '2 months ago',
    avatarLetter: 'D',
    avatarBg: 'bg-[#9334e6]',
    localGuide: false,
    guideLevel: 4,
    reviewsCount: 19,
    photosCount: 12,
    helpfulCount: 21,
    verified: true,
    tags: ['Chikankari Pocket Squares', 'Udaipur Palace Wedding', 'Wax Seal Unboxing'],
    text: 'Prita and the Studio Sankara team went above and beyond. The Chikankari pocket squares matched our wedding color palette flawlessly. The wax seal unboxing experience felt like receiving an invitation from royalty.',
    ownerReply: {
      author: 'Raje Maharaje (Owner)',
      date: '2 months ago',
      text: 'Thank you Devika & Aryan! Making your Udaipur palace festivities unforgettable was our absolute pleasure.'
    }
  },
  {
    id: 4,
    author: 'Rohan Deshmukh',
    role: 'Architect & Creative Director',
    city: 'Bengaluru',
    rating: 5,
    date: 'January 2026',
    relativeTime: 'a month ago',
    avatarLetter: 'R',
    avatarBg: 'bg-[#188038]',
    localGuide: true,
    guideLevel: 5,
    reviewsCount: 27,
    photosCount: 16,
    helpfulCount: 11,
    verified: true,
    tags: ['Hand-rolled Edges', 'Silk Pocket Square', 'Architectural Fold'],
    text: 'The hand-rolled edges and fabric weight are benchmark quality. Unlike flimsy polyester squares that collapse into the pocket, these silk pieces hold their architectural fold all day.',
    ownerReply: {
      author: 'Raje Maharaje (Owner)',
      date: 'a month ago',
      text: 'Coming from an architect of your caliber, this means the world to our master artisans. Thank you Rohan!'
    }
  }
];
