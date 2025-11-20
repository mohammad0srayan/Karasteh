import './Category.css'
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Footer from "../../Components/Footer/Footer";
import CategoryBox from "../../Components/CategoryBox/CategoryBox";

export default function Category () {
    return (
        <div>
            <Breadcrumb link='پروژه ها' />
            <CategoryBox />

            <ContactUs />
            <Footer />
        </div>
    )
}