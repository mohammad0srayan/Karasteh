import { useState, useEffect } from "react";
import CallUsImage from "../assets/img/20212.png";
import { getContactInfoData } from "../api/homeApi";
import { ContactInfo } from "../api/types";

const CallUsLogo = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);
  
  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const data = await getContactInfoData();
        setContactInfo(data);
      } catch (error) {
        // خطا نادیده گرفته می‌شود
      }
    };
    fetchContactInfo();
  }, []);

  const validContact = contactInfo.find(info => info.phone_number && info.phone_number.trim());

  return (
    <div className="fixed bottom-4 right-4">
      <a
        href={`tel:${validContact?.phone_number || ""}`}
      >
        <img src={CallUsImage} alt="logo" className="size-32" />
      </a>
    </div>
  );
};

export default CallUsLogo;