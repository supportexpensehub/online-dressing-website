export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  category: 'Sarees' | 'Dresses' | 'Kurtas' | 'Accessories';
  imageUrl: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  sizes: string[];
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'saree-1',
    name: 'Woven Kanjeevaram Silk Saree',
    brand: 'Mitera',
    description: 'Beautiful traditional Kanjeevaram silk saree with rich zari border and pallu.',
    price: 3599,
    originalPrice: 8999,
    discount: 60,
    category: 'Sarees',
    imageUrl: './images/saree.png',
    rating: 4.5,
    reviews: 124,
    inStock: true,
    sizes: ['Onesize']
  },
  {
    id: 'saree-2',
    name: 'Floral Print Georgette Saree',
    brand: 'Sangria',
    description: 'Lightweight georgette saree featuring a vibrant floral print, perfect for summer festivities.',
    price: 1299,
    originalPrice: 3299,
    discount: 60,
    category: 'Sarees',
    imageUrl: './images/saree.png',
    rating: 4.2,
    reviews: 89,
    inStock: true,
    sizes: ['Onesize']
  },
  {
    id: 'dress-1',
    name: 'Solid A-Line Midi Dress',
    brand: 'Berrylush',
    description: 'Elegant solid A-line midi dress with a square neck and short puff sleeves.',
    price: 899,
    originalPrice: 1999,
    discount: 55,
    category: 'Dresses',
    imageUrl: './images/dress.png',
    rating: 4.6,
    reviews: 342,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'dress-2',
    name: 'Floral Maxi Wrap Dress',
    brand: 'Athena',
    description: 'Beautiful floral wrap dress flowing down to the ankles, featuring a flattering V-neck.',
    price: 1450,
    originalPrice: 2899,
    discount: 50,
    category: 'Dresses',
    imageUrl: './images/dress.png',
    rating: 4.8,
    reviews: 512,
    inStock: true,
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'kurta-1',
    name: 'Embroidered Straight Kurta',
    brand: 'Anouk',
    description: 'Classic straight cotton kurta with delicate floral embroidery on the yoke.',
    price: 799,
    originalPrice: 1599,
    discount: 50,
    category: 'Kurtas',
    imageUrl: './images/kurta.png',
    rating: 4.3,
    reviews: 215,
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'acc-1',
    name: 'Gold-Plated Kundan Jhumkas',
    brand: 'Peora',
    description: 'Stunning traditional kundan jhumka earrings, perfect for ethnic outfits.',
    price: 499,
    originalPrice: 1299,
    discount: 61,
    category: 'Accessories',
    imageUrl: '/images/saree.png',
    rating: 4.7,
    reviews: 87,
    inStock: true,
    sizes: ['Onesize']
  }
];
