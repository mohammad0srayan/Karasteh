import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { getProductDetail } from '../api/homeApi';
import { ProductDetail as ProductDetailType, ProductImage } from '../api/types';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<ProductDetailType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        if (slug) {
          const data = await getProductDetail(slug);
          setProduct(data);
        }
      } catch (error) {
        console.error("خطا در بارگذاری محصول:", error);
        setError("مشکلی در بارگذاری جزئیات محصول رخ داده است.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [slug]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? (product?.images?.length || 1) - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === (product?.images?.length || 1) - 1 ? 0 : prev + 1));
  };

  if (loading) {
    return <p className="text-blue-900 text-center py-6">در حال بارگذاری...</p>;
  }

  if (error || !product) {
    return <p className="text-red-600 text-center py-6">{error || "محصول یافت نشد."}</p>;
  }

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white border rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* بخش تصویر */}
          <div className="relative">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg">
              <img
                src={product.images?.[currentImageIndex]?.image || product.cover_image || "https://via.placeholder.com/300"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.images && product.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 sm:p-3 rounded-full hover:bg-blue-950 transition-all duration-300"
                    aria-label="تصویر قبلی"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 sm:p-3 rounded-full hover:bg-blue-950 transition-all duration-300"
                    aria-label="تصویر بعدی"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </>
              )}
            </div>
            {product.images && product.images.length > 0 && (
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {product.images.slice(0, 3).map((image: ProductImage, index: number) => (
                  <img
                    key={image.id}
                    src={image.image}
                    alt={`${product.name} - ${image.id}`}
                    className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg cursor-pointer border-2 ${
                      currentImageIndex === index ? "border-blue-900" : "border-transparent"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
                {product.images.length > 3 && (
                  <button
                    onClick={() => setIsGalleryOpen(true)}
                    className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-lg text-blue-900 font-bold hover:bg-blue-900 hover:text-white transition-all duration-300"
                  >
                    <span className="text-sm sm:text-base">بیشتر</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* بخش توضیحات */}
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              <span className="font-bold">دسته‌بندی:</span> {product.category}
            </p>
            {product.price && (
              <p className="text-blue-900 font-bold text-lg sm:text-xl lg:text-2xl mb-4">
                {`${product.price} تومان`}
              </p>
            )}
            <div className="text-gray-700 prose prose-sm sm:prose-base lg:prose-lg max-w-none">{parse(product.description)}</div>
          </div>
        </div>
      </div>

      {/* گالری تصاویر اضافی */}
      {isGalleryOpen && product.images && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-blue-900">گالری تصاویر</h2>
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="text-blue-900 hover:text-blue-950"
                aria-label="بستن گالری"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {product.images.map((image: ProductImage) => (
                <img
                  key={image.id}
                  src={image.image}
                  alt={`${product.name} - ${image.id}`}
                  className="w-full h-32 sm:h-40 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;