import './About.css'
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Footer from "../../Components/Footer/Footer";
import AboutBox from "../../Components/AboutBox/AboutBox";
import ContactUs from "../../Components/ContactUs/ContactUs";

export default function About () {
    return (
        <div>
            <Breadcrumb link='درباره ما' />
            <AboutBox />

            <ContactUs />
            <Footer />
        </div>
    )
}