import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SliderTop from "./components/SliderTop";
import HomeBlogSection from "./components/HomeBlogSection";
import MobileBar from "./components/MobileBar";
import CallUsLogo from "./components/Callus";
import AllBlogPosts from "./components/AllBlogPosts";
import BlogPostDetail from "./components/BlogPostDetail";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import AboutContact from "./components/AboutContact";
import HomeProducts from "./components/HomeProducts";
import ProductsList from "./components/ProductsList";
import ProductDetail from "./components/ProductDetail";
import HomeCategories from "./components/HomeCategories";
import GalleryPage from "./components/GalleryPage";
import SearchResults from "./components/SearchResults";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto px-4 py-1 overflow-x-hidden select-none relative">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SliderTop />
                <HomeCategories />
                <HomeProducts />
                <HomeBlogSection />
              </>
            }
          />
          <Route path="/blog" element={<AllBlogPosts />} />
          <Route path="/blog/:slug" element={<BlogPostDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        <AboutContact />
        <MobileBar />
        <CallUsLogo />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;