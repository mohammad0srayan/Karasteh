import api from './axiosConfig';
import { HomeSlider,Expert, AboutUs, ContactInfo, GallerySection, HomeBlogPost, BlogPostDetail, Catalog, Category, Product, ProductDetail, HomeProduct  } from './types';

export const getHomeSliderData = async (): Promise<HomeSlider[]> => {
  try {
    const response = await api.get<HomeSlider[]>('/home/sliders/');
    console.log('Home Slider Response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching home slider data:', error.response?.data || error.message);
    throw new Error('مشکلی در دریافت اطلاعات اسلایدرهای صفحه اصلی رخ داده است');
  }
};

export const getExpertsData = async (): Promise<Expert[]> => {
  try {
    const response = await api.get<Expert[]>('/home/experts/');
    console.log('Experts Response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching experts data:', error.response?.data || error.message);
    throw new Error('مشکلی در دریافت اطلاعات کارشناسان رخ داده است');
  }
};


export const getAboutUsData = async (): Promise<AboutUs[]> => {
  try {
    const response = await api.get<AboutUs[]>('/home/about-us/');
    console.log('About Us Response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching about us data:', error.response?.data || error.message);
    throw new Error('مشکلی در دریافت اطلاعات درباره ما رخ داده است');
  }
};

export const getContactInfoData = async (): Promise<ContactInfo[]> => {
  try {
    const response = await api.get<ContactInfo[]>('/home/contact-info/');
    console.log('Contact Info Response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching contact info data:', error.response?.data || error.message);
    throw new Error('مشکلی در دریافت اطلاعات تماس رخ داده است');
  }
};

export const getGalleryData = async (): Promise<GallerySection[]> => {
  try {
    const response = await api.get<GallerySection[]>('/home/gallery/');
    console.log('Gallery Response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching gallery data:', error.response?.data || error.message);
    throw new Error('مشکلی در دریافت اطلاعات گالری رخ داده است');
  }
};


export const getHomeBlogPosts = async (): Promise<HomeBlogPost[]> => {
  try {
    const response = await api.get<HomeBlogPost[]>('blog/posts/home-posts/'); // اضافه کردن /api/
    console.log('Home Blog Posts Response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching home blog posts:', error.response?.data || error.message);
    throw new Error('مشکلی در دریافت مقالات صفحه اصلی رخ داده است');
  }
};


export const getBlogPosts = async ({ page = 1, sort = 'desc', category = '' }): Promise<{
  data: HomeBlogPost[];
  next_page: number | null;
  total_pages: number;
}> => {
  try {
    const response = await api.get('/blog/posts/', {
      params: { page, sort, category },
    });
    console.log('Blog Posts Response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching blog posts:', error.response?.data || error.message);
    throw new Error('مشکلی در دریافت مقالات رخ داده است');
  }
};

export const getBlogPostDetail = async (slug: string): Promise<BlogPostDetail> => {
  try {
    const response = await api.get(`/blog/posts/${slug}/`);
    console.log('Blog Post Detail Response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching blog post detail:', error.response?.data || error.message);
    throw new Error('مشکلی در دریافت جزئیات مقاله رخ داده است');
  }
};


export const getCatalog = async (): Promise<Catalog> => {
  try {
    const response = await api.get<Catalog>('home/catalog/download/');
    console.log('Catalog Response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching catalog:', error.response?.data || error.message);
    throw new Error('مشکلی در دریافت کاتالوگ رخ داده است');
  }
};




export const getCategoryTree = async (): Promise<Category[]> => {
  try {
    const response = await api.get<Category[]>('/products/categories/');
    console.log('Category Tree Response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching category tree:', error.response?.data || error.message);
    throw new Error('مشکلی در دریافت درخت دسته‌بندی‌ها رخ داده است');
  }
};

export const getProducts = async ({
  page = 1,
  category_id = '',
  min_price = '',
  max_price = '',
  is_available = '',
  is_featured = '',
  search = '',
  sort = '',
}): Promise<{
  results: Product[];
  next: string | null;
  previous: string | null;
  count: number;
}> => {
  try {
    const response = await api.get('/products/', {
      params: { page, category_id, min_price, max_price, is_available, is_featured, search, sort },
    });
    console.log('Products Response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching products:', error.response?.data || error.message);
    throw new Error('مشکلی در دریافت محصولات رخ داده است');
  }
};

export const getProductDetail = async (slug: string): Promise<ProductDetail> => {
  try {
    const response = await api.get(`/products/products/${slug}/`);
    console.log('Product Detail Response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching product detail:', error.response?.data || error.message);
    throw new Error('مشکلی در دریافت جزئیات محصول رخ داده است');
  }
};

export const getHomeProducts = async (): Promise<HomeProduct[]> => {
  try {
    const response = await api.get<HomeProduct[]>('/products/home/');
    console.log('Home Products Response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching home products:', error.response?.data || error.message);
    throw new Error('مشکلی در دریافت محصولات صفحه اصلی رخ داده است');
  }
};


export const searchProducts = async (query: string, page: number = 1): Promise<{
  results: Product[];
  next: string | null;
  previous: string | null;
  count: number;
  message?: string;
}> => {
  try {
    const response = await api.get('/products/search/', {
      params: { q: query, page },
    });
    console.log('Search Products Response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching search products:', error.response?.data || error.message);
    throw new Error('مشکلی در جستجوی محصولات رخ داده است');
  }
};