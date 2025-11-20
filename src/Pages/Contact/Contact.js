import './Contact.css'
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import BodyContact from "../../Components/BodyContact/BodyContact";
import Footer from "../../Components/Footer/Footer";
import ContactUs from "../../Components/ContactUs/ContactUs";

export default function Contact () {
    return (
        <div>
            <Breadcrumb link='تماس با ما' />
            <BodyContact />

            <ContactUs />
            <Footer />
        </div>
    )
}