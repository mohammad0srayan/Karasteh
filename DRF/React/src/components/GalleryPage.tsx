import { useEffect, useState } from 'react';
import { getGalleryData } from '../api/homeApi';
import { GallerySection } from '../api/types';

const GalleryPage: React.FC = () => {
  const [galleryData, setGalleryData] = useState<GallerySection[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await getGalleryData();
        setGalleryData(data);
      } catch (error) {
        console.error('خطا در دریافت داده‌های گالری:', error);
      }
    };
    fetchGallery();
  }, []);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="py-10 min-h-screen">
      <h1 className="text-6xl font-black text-center mb-12 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-transparent bg-clip-text drop-shadow-2xl tracking-wide">
        گالری تصاویر
      </h1>
      {galleryData.length > 0 ? (
        galleryData.map((section) => (
          <div key={section.id} className="mb-12">
            {section.title && (
              <h2 className="text-3xl text-blue-900 font-bold mb-4 text-center">
                {section.title}
              </h2>
            )}
            {section.description && (
              <div
                className="text-blue-800 text-center mb-6 max-w-2xl mx-auto prose prose-blue"
                dangerouslySetInnerHTML={{ __html: section.description }}
              />
            )}
            <div className="flex flex-wrap justify-center gap-6 px-4 max-w-6xl mx-auto">
              {section.images
                .sort((a, b) => a.order - b.order)
                .map((image) => (
                  <div
                    key={image.id}
                    className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 w-full max-w-xs"
                    onClick={() => openLightbox(image.image)}
                  >
                    <img
                      src={image.image}
                      alt={`گالری ${image.id}`}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                ))}
            </div>
            {section.footer_text && (
              <div
                className="text-blue-800 text-center mt-6 max-w-2xl mx-auto prose prose-blue"
                dangerouslySetInnerHTML={{ __html: section.footer_text }}
              />
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-blue-900 text-lg">
          گالری در دسترس نیست
        </p>
      )}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl w-full p-4">
            <img
              src={selectedImage}
              alt="تصویر بزرگ‌شده"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 bg-blue-900 text-white rounded-full p-2 hover:bg-blue-950 transition-colors"
              onClick={closeLightbox}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;