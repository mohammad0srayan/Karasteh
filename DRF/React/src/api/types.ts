export interface HomeSlider {
  id: number;
  image: string | null;
  order: number;
}

export interface AboutUs {
  id: number;
  title: string | null;
  description: string | null;
  image: string | null;
  video: string | null;
  order: number;
}

export interface ContactInfo {
  id: number;
  title: string | null;
  description: string | null;
  phone_number: string | null;
  address: string | null;
}

export interface GalleryImage {
  id: number;
  image: string;
  order: number;
}

export interface GallerySection {
  id: number;
  title: string | null;
  description: string | null;
  footer_text: string | null;
  images: GalleryImage[];
}

export interface Expert {
  id: number;
  name: string;
  unit: string;
  profile: string | null;
  phone: string;
  phone_number: string;
  telegram_id: string;
}

export interface HomeBlogPost {
  id: number;
  title: string;
  description: string;
  thumbnail: string | null;
  slug: string;
  created_at: string;
  category: { id: number; title: string; slug: string } | null;
}

export interface BlogPostDetail {
  id: number;
  title: string;
  slug: string;
  reading_time: string | null;
  thumbnail: string | null;
  introduction: string | null;
  content: string;
  jalali_created: string;
  jalali_updated: string;
  is_active: boolean;
  category: { id: number; title: string; slug: string } | null;
}

export interface Catalog {
  id: number;
  pdf_file: string | null;
}

export interface ProductImage {
  id: number;
  image: string;
  order: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  is_active: boolean;
  icon: string | null; 
  children?: Category[]; // برای پشتیبانی از زیرمنوها
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number | null;
  cover_image: string | null;
  category: string;
}

export interface ProductDetail {
  id: number;
  name: string;
  slug: string;
  price: number | null;
  cover_image: string | null;
  description: string;
  category: string;
  images: ProductImage[];
}

export interface HomeProduct {
  name: string;
  slug: string;
  cover_image: string | null;
}