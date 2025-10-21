import { useState, useEffect } from "react";
import logo from '../assets/img/logo.png'
import { getContactInfoData, getCategoryTree } from '../api/homeApi';
import { ContactInfo, Category } from '../api/types';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHoverMenu, setIsHoverMenu] = useState(false);
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const data = await getContactInfoData();
        setContactInfo(data);
      } catch (error) {
        console.error("Failed to load contact info:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const data = await getCategoryTree();
        setCategories(data);
      } catch (error) {
        console.error("Failed to load categories:", error);
      }
    };

    fetchContactInfo();
    fetchCategories();
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsHoverMenu(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsHoverMenu(false);
    }, 200);
    setHoverTimeout(timeout);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <div className="w-full mb-3">
      <div className="w-full flex items-center justify-between">
        <div className="w-1/2 flex gap-8">
          <a href="/">
            <img src={logo} alt="Logo" className="w-32 h-auto" />
          </a>
          <form
            onSubmit={handleSearch}
            className={`border rounded w-2/3 hidden lg:flex ${
              isFocused ? "border-gray-800 shadow-2xl" : "border-gray-400"
            }`}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={
                isFocused ? "دنبال چه چیزی می‌گردید؟" : "جستجو در محصولات"
              }
              className="outline-0 border-0 px-3 py-2 w-full"
            />
            <button
              type="submit"
              className="outline-0 border-0 cursor-pointer w-fit px-3 py-2 text-gray-500"
            >
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div className="w-1/2 flex justify-end gap-2 lg:gap-8">
          {(() => {
            const validContact = contactInfo.find(info => info.phone_number && info.phone_number.trim());
            return validContact ? (
              <a
                href={`tel:${validContact.phone_number}`}
                className="rounded-lg border px-3 py-2 hidden lg:flex justify-center items-center"
              >
                {validContact.phone_number} <i className="fa fa-phone mx-2"></i>
              </a>
            ) : (
              <a
                href="#"
                className="rounded-lg border px-3 py-2 hidden lg:flex justify-center items-center"
              >
                + <i className="fa fa-phone mx-2"></i>
              </a>
            );
          })()}
          <a
            href="#"
            className="rounded-lg border px-3 py-2 bg-blue-900 hover:bg-blue-950 text-white hidden lg:flex justify-center items-center"
          >
            ورود/ثبت نام
            <i className="fa fa-sign-in mx-2"></i>
          </a>
        </div>
      </div>
      <div className="my-5 gap-8 relative hidden lg:flex items-center">
        <a
          href="/"
          className="text-blue-900 font-bold flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
        >
          <i className="fa fa-home mx-2"></i>
          صفحه اصلی
        </a>
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="/products"
            className="text-blue-900 font-bold flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
          >
            <i className="fa fa-bars mx-2"></i>
            محصولات
          </a>
          {isHoverMenu && (
            <div className="absolute right-0 top-full mt-2 z-20 bg-white shadow-2xl rounded-xl w-48">
              <ul className="py-2">
                {categories.map((category) => (
                  <li
                    key={category.id}
                    className="py-2 px-4 hover:bg-gray-100 hover:text-blue-950 transition-all duration-300"
                  >
                    <a
                      href={`/products?category_id=${category.id}`}
                      className="block text-blue-900 font-medium"
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <a
          href="/blog"
          className="text-blue-900 font-bold flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
        >
          <i className="fa fa-book mx-2"></i>
          بلاگ
        </a>
        <a
          href="/gallery"
          className="text-blue-900 font-bold flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
        >
          <i className="fa fa-image mx-2"></i>
          گالری
        </a>
        <a
          href="/contact"
          className="text-blue-900 font-bold flex items-center px-3 py-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
        >
          <i className="fa fa-industry mx-2"></i>
          تماس با ما
        </a>
      </div>
    </div>
  );
};

export default Navbar;