import type { Product } from '../types';

const APPAREL_SIZES = ['S', 'M', 'L', 'XL', '2XL'];
const ACCESSORY_SIZES = ['ONE SIZE'];
const CLERGY_SIZES = ['46', '48', '50', '52', '54', '56'];

export const MOCK_PRODUCTS: Product[] = [
  // Original Products
  {
    id: '1',
    name: 'STREET LEGEND HOODIE',
    price: 36.00,
    originalPrice: 45.00,
    image: 'https://picsum.photos/id/447/800/800',
    images: ['https://picsum.photos/id/447/800/800', 'https://picsum.photos/id/449/800/800'],
    description: 'The Street Legend Hoodie is crafted from heavyweight premium cotton fleece, featuring a relaxed boxy fit and dropped shoulders for the ultimate streetwear silhouette. Finished with high-density puff print branding on the chest.',
    sizes: APPAREL_SIZES,
    tag: 'ON SALE',
    category: 'Apparel'
  },
  {
    id: '2',
    name: 'STREET LEGEND SHIRT',
    price: 20.00,
    originalPrice: 25.00,
    image: 'https://picsum.photos/id/998/800/800',
    images: ['https://picsum.photos/id/998/800/800', 'https://picsum.photos/id/999/800/800'],
    description: 'Our signature Street Legend Shirt features a vintage wash treatment for a lived-in feel from day one. Made from 100% combed cotton with durable double-needle stitching.',
    sizes: APPAREL_SIZES,
    tag: 'ON SALE',
    category: 'Apparel'
  },
  {
    id: '3',
    name: "BLVDNVINE BLACK HAT",
    price: 20.00,
    originalPrice: 25.00,
    image: 'https://picsum.photos/id/119/800/800',
    description: 'Classic 6-panel structured cap with embroidered BLVDNVINE logo. Features an adjustable strap back for a custom fit.',
    sizes: ACCESSORY_SIZES,
    tag: 'ON SALE',
    category: 'Accessories'
  },
  {
    id: '4',
    name: 'BLVDNVINE BLACK BEANIE',
    price: 20.00,
    originalPrice: 25.00,
    image: 'https://picsum.photos/id/338/800/800',
    description: 'Keep warm in style with our ribbed knit beanie. Features a cuffed hem and woven logo patch.',
    sizes: ACCESSORY_SIZES,
    tag: 'ON SALE',
    category: 'Accessories'
  },
  {
    id: '5',
    name: 'I LOVE B&V BLACK STICKER',
    price: 5.60,
    originalPrice: 7.00,
    image: 'https://picsum.photos/id/133/800/800',
    description: 'High-quality vinyl die-cut sticker. Weatherproof and durable, perfect for laptops, water bottles, and street signs.',
    sizes: ACCESSORY_SIZES,
    tag: 'ON SALE',
    category: 'Accessories'
  },
  {
    id: '6',
    name: 'I LOVE B&V BLACK TRUCKER HAT',
    price: 20.00,
    originalPrice: 25.00,
    image: 'https://picsum.photos/id/103/800/800',
    description: 'Retro-inspired trucker hat with mesh back panels for breathability. Puff print graphic on foam front panel.',
    sizes: ACCESSORY_SIZES,
    tag: 'ON SALE',
    category: 'Accessories'
  },
  {
    id: '7',
    name: 'BLVDNVINE WHITE TRUCKER HAT',
    price: 20.00,
    originalPrice: 25.00,
    image: 'https://picsum.photos/id/158/800/800', 
    description: 'Clean white colorway of our classic trucker silhouette. Snapback closure.',
    sizes: ACCESSORY_SIZES,
    tag: 'ON SALE',
    category: 'Accessories'
  },
  {
    id: '8',
    name: 'BLVDNVINE WHITE SHIRT',
    price: 20.00,
    originalPrice: 25.00,
    image: 'https://picsum.photos/id/177/800/800',
    description: 'Essential white tee with minimal branding. A wardrobe staple.',
    sizes: APPAREL_SIZES,
    tag: 'SOLD OUT',
    category: 'Apparel'
  },
  // Clergy Collection Products
  {
    id: '9',
    name: 'ROYAL CLERGY ROBE',
    price: 150.00,
    originalPrice: 180.00,
    image: 'https://picsum.photos/id/1011/800/800',
    description: 'Exquisite royal clergy robe featuring premium fabric with velvet panels and gold piping. Designed for dignity and comfort during service.',
    sizes: CLERGY_SIZES,
    tag: 'NEW ARRIVAL',
    category: 'Clergy'
  },
  {
    id: '10',
    name: 'CEREMONIAL STOLE - RED',
    price: 45.00,
    image: 'https://picsum.photos/id/1012/800/800',
    description: 'Liturgical stole featuring embroidered crosses and fringed ends. High-quality satin finish.',
    sizes: ACCESSORY_SIZES,
    category: 'Clergy'
  },
  {
    id: '11',
    name: 'CLERGY COLLAR SHIRT - BLACK',
    price: 55.00,
    image: 'https://picsum.photos/id/1013/800/800',
    description: 'Traditional tab collar clergy shirt. Made from a breathable cotton-blend fabric for all-day wear.',
    sizes: ['15', '15.5', '16', '16.5', '17', '17.5', '18'],
    category: 'Clergy'
  },
  {
    id: '12',
    name: 'EMBROIDERED VESTMENT SET',
    price: 200.00,
    originalPrice: 250.00,
    image: 'https://picsum.photos/id/1014/800/800',
    description: 'Complete vestment set including chasuble and stole. Intricate gold thread embroidery.',
    sizes: ACCESSORY_SIZES,
    tag: 'ON SALE',
    category: 'Clergy'
  },
  {
    id: '13',
    name: 'PREACHING JACKET - WHITE',
    price: 120.00,
    image: 'https://picsum.photos/id/1015/800/800',
    description: 'Tailored preaching jacket with mandarin collar and hidden buttons. Sharp, modern, and professional.',
    sizes: CLERGY_SIZES,
    category: 'Clergy'
  },
  {
    id: '14',
    name: 'CEREMONIAL STOLE - GOLD',
    price: 45.00,
    image: 'https://picsum.photos/id/1016/800/800',
    description: 'Gold liturgical stole for special feast days. Rich texture and beautiful drape.',
    sizes: ACCESSORY_SIZES,
    category: 'Clergy'
  },
  {
    id: '15',
    name: 'CLERGY COLLAR SHIRT - GREY',
    price: 55.00,
    image: 'https://picsum.photos/id/1018/800/800',
    description: 'Grey variant of our best-selling clergy shirt. Includes one reusable tab insert.',
    sizes: ['15', '15.5', '16', '16.5', '17', '17.5', '18'],
    category: 'Clergy'
  },
  {
    id: '16',
    name: 'DELUXE CASSOCK',
    price: 180.00,
    image: 'https://picsum.photos/id/1019/800/800',
    description: 'Full-cut cassock with 33 buttons and cuffed sleeves. Traditional styling with modern durability.',
    sizes: CLERGY_SIZES,
    tag: 'LIMITED',
    category: 'Clergy'
  },
];