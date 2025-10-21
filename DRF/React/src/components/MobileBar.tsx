import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCategoryTree, getCatalog, getContactInfoData } from "../api/homeApi";
import { Category, Catalog, ContactInfo } from "../api/types";
import { BASE_URL } from "../api/axiosConfig";

const MobileBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [catalog, setCatalog] = useState<Catalog | null>(null);
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
    setIsCategoriesOpen(false);
  };

  const handleCatalogClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!catalog?.pdf_file) {
      e.preventDefault();
      setErrorMessage("کاتالوگ در دسترس نیست");
      setTimeout(() => setErrorMessage(null), 3000);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      closeMenu();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategoryTree();
        setCategories(data);
      } catch (error) {
        console.error("خطا در دریافت دسته‌بندی‌ها:", error);
      }
    };

    const fetchCatalog = async () => {
      try {
        const data = await getCatalog();
        setCatalog(data);
      } catch (error) {
        console.error("خطا در دریافت کاتالوگ:", error);
      }
    };

    const fetchContactInfo = async () => {
      try {
        const data = await getContactInfoData();
        setContactInfo(data);
      } catch (error) {
        console.error("خطا در دریافت اطلاعات تماس:", error);
      }
    };

    fetchCategories();
    fetchCatalog();
    fetchContactInfo();
  }, []);

  const phoneNumber = contactInfo.find((info) => info.phone_number)?.phone_number || "#";

  return (
    <>
      <div className="mx-auto fixed lg:hidden flex justify-around items-center bottom-0 right-0 left-0 z-30 px-5 py-6 bg-white shadow-2xl">
        <div className="flex items-center flex-col space-y-1">
          <Link to="/" className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#193cb8" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span className="text-blue-900 font-bold">خانه</span>
          </Link>
        </div>
        <div className="flex items-center flex-col space-y-1">
          <button onClick={toggleMenu} className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#004E89" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <span className="text-blue-900 font-bold">منو</span>
          </button>
        </div>
        <div className="flex items-center flex-col space-y-1">
          <Link to="/login" className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#004E89" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
            <span className="text-blue-900 font-bold">ورود / ثبت نام</span>
          </Link>
        </div>
        <div className="flex items-center flex-col space-y-1">
          <a href={`tel:${phoneNumber}`} className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#004E89" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.573-.713.417-1.173l-1.106-4.423c-.125-.501-.575-.852-1.091-.852H2.25A2.25 2.25 0 000 6.75z" />
            </svg>
            <span className="text-blue-900 font-bold">تماس</span>
          </a>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 py-3 px-2 h-full overflow-y-auto bg-white shadow-2xl transition-transform duration-500 ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <form
          onSubmit={handleSearch}
          className={`border rounded w-full flex ${
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
            className="outline-0 border-0 w-full p-1.5"
          />
          <button
            type="submit"
            className="outline-0 border-0 cursor-pointer w-fit p-1.5 text-gray-500"
          >
            <i className="fa fa-search"></i>
          </button>
        </form>
        <ul className="bg-white text-blue-700 py-4 border-b border-t border-gray-600 my-3">
          <li className="flex py-3 px-5 text-blue-900 font-bold transition-all duration-300">
            <Link to="/blog" onClick={closeMenu}>
              <i className="fa fa-book mx-2"></i>
              بلاگ
            </Link>
          </li>
          <li className="flex py-3 px-5 text-blue-900 font-bold transition-all duration-300">
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="flex items-center w-full"
            >
              <i className="fa fa-list mx-2"></i>
              محصولات
              <i
                className={`fa fa-chevron-${isCategoriesOpen ? "up" : "down"} mx-2`}
              ></i>
            </button>
          </li>
          {isCategoriesOpen && (
            <ul className="pr-8">
              {categories.map((category) => (
                <li
                  key={category.id}
                  className="py-2 px-5 text-blue-900 font-bold transition-all duration-300"
                >
                  <Link
                    to={`/products?category_id=${category.id}`}
                    onClick={closeMenu}
                    className="block"
                  >
                    {category.name}
                  </Link>
                  {category.children && category.children.length > 0 && (
                    <ul className="pr-8 mt-2">
                      {category.children.map((child) => (
                        <li
                          key={child.id}
                          className="py-2 px-5 text-blue-800 text-sm transition-all duration-300"
                        >
                          <Link
                            to={`/products?category_id=${child.id}`}
                            onClick={closeMenu}
                            className="block"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
          <li className="flex py-3 px-5 text-blue-900 font-bold transition-all duration-300">
            <Link to="/gallery" onClick={closeMenu}>
              <i className="fa fa-image mx-2"></i>
              گالری
            </Link>
          </li>
          <li className="flex py-3 px-5 text-blue-900 font-bold transition-all duration-300">
            <Link to="/contact" onClick={closeMenu}>
              <i className="fa fa-phone mx-2"></i>
              تماس با ما
            </Link>
          </li>
        </ul>
        <div className="flex flex-col py-4">
          <a
            href={catalog?.pdf_file ? (catalog.pdf_file.startsWith("http") ? catalog.pdf_file : `${BASE_URL}${catalog.pdf_file}`) : "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCatalogClick}
            className="font-bold px-5 py-2 bg-blue-900 hover:bg-blue-950 text-white rounded-lg text-center"
          >
            دانلود کاتالوگ
            <i className="fa fa-download mx-2"></i>
          </a>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}
      {errorMessage && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in-out">
          {errorMessage}
        </div>
      )}
    </>
  );
};

export default MobileBar;