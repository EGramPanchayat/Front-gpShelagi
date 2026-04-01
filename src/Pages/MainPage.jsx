import React, { useEffect, useState } from "react";
import ExecutiveBoard from "../Components/ExecutiveBoard";
import Navbar from "../Components/Navbar";
import NewsSection from "../Components/NewsSection";
import axioesInstance from "../utils/axioesInstance";
import DevelopmentSlideshow from "../Components/DevelopmentSection";

import PlacesSection from "../Components/PlacesSection";
import ContactSection from "../Components/ContactSection";
import FooterSection from "../Components/FooterSection";
import CertificatesSection from "../Components/CertificatesSection";
import ServicesSection from "../Components/ServicesSection";
import TaxSection from "../Components/TaxSection";
import DakhalaMagani from "../Components/DakhalaMagani";

import SamajSudharak from "../Components/SamajSudharak";
import GovernmentOfficials from "../Components/GovernmentOfficials";
import SloganTicker from "../Components/SloganTicker";
import AamchyaSeva from "../Components/ourServices";
import EmergencyContact from "../Components/EmergencyContact";


// Executive members data for cards
const executiveMembers = [
  { name: "श्री. विकास कचरू शेटे", phone: "+91 9876543210", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "श्री. रमेश कुंडलिक पुंडे", phone: "+91 9123456789", img: "https://randomuser.me/api/portraits/men/46.jpg" },
  { name: "श्री. खंडू भोमा मेंगाळ", phone: "+91 9988776655", img: "https://randomuser.me/api/portraits/men/47.jpg" },
  { name: "श्रीमती. बेबीताई दत्तात्रय शेटे", phone: "+91 9876123456", img: "https://randomuser.me/api/portraits/women/48.jpg" },
  { name: "श्रीमती. शैला मंगेश शेटे", phone: "+91 9123459876", img: "https://randomuser.me/api/portraits/women/49.jpg" },
  { name: "श्रीमती. उज्वला साहेबराव घुले", phone: "+91 9988123456", img: "https://randomuser.me/api/portraits/women/50.jpg" },
  { name: "श्रीमती. नानीबाई साहेबराव मेंगाळ", phone: "+91 9876543219", img: "https://randomuser.me/api/portraits/women/51.jpg" },
];
// src/Users/MainPage/MainPage.jsx
// import React from "react"; // removed duplicate import

const stats = [
  { icon: "🌾", number: "850", label: "हेक्टर क्षेत्रफळ" },
  { icon: "🏘", number: "3", label: "वार्ड संख्या" },
  { icon: "👥", number: "2,255", label: "एकूण लोकसंख्या" },
  { icon: "🏠", number: "458", label: "कुटुंब संख्या" },
];




// Development slideshow moved to `src/Components/DevelopmentSection.jsx`




const sectionIds = [
  "home",
  "about",
  "development",
  "services",
  "certificates",
  "tax",
  "members",
  "officials",
  "places",
  "contact",
];

const MainPage = () => {
  const [activeSection, setActiveSection] = useState("home");
  // Mobile nav state
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showQRModal, setShowQRModal] = useState("");
  const [panipattiQR, setPanipattiQR] = useState(null);
  const [gharPattiQR, setGharPattiQR] = useState(null);

  // Custom hook to fetch development works from backend
  useEffect(() => {
    axioesInstance.get("/qr").then((response) => {
      const data = response.data;
      setPanipattiQR(data.panipattiQR?.url);
      setGharPattiQR(data.gharPattiQR?.url);

    })
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionMid = rect.top + rect.height / 2;
          if (sectionMid > 80 && sectionMid < window.innerHeight) {
            setActiveSection(sectionIds[i]);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 font-sans ">
        {/* Navbar */}
        <Navbar activeSection={activeSection} mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen} />

      {/* ✅ Hero Section – height equals actual image height */}

      <section id="home" className="relative w-full flex justify-center items-center">
        <div className="relative w-full ">
          <img
            src="/images/village.png"
            alt="गाव दृश्य"
            className="w-full object-cover h-64 sm:h-80 md:h-full"
          />
  <div className="absolute inset-0 flex flex-col items-center justify-top text-center px-4 py-8 md:py-20">
      <h1 className="text-3xl md:text-[2.5rem] font-extrabold drop-shadow md:mb-5 text-green-700">
            ग्रामपंचायत शेळगी मध्ये स्वागत आहे
          </h1>
          <p className="text-xl md:text-3xl mb-6 font-bold text-green-700">ता.निलंगा  जि.लातूर </p>
        </div>
      </div>
    </section>

    
      <SloganTicker />

    <div className="bottom-village-content flex flex-col items-center w-full px-1 md:px-0 lg:px-15">
      {/* Stats Cards */}
  <div className="flex flex-wrap justify-center px-2 gap-4 sm:gap-8 mt-8 mb-8 w-full">
        {stats.map((stat, idx) => (
          <div
              key={idx}
              className={
                `bg-white rounded-xl shadow-lg px-10 py-6 flex flex-col items-center 
                border-l-4 border-green-400 hover:-translate-y-1 hover:shadow-xl transition
                aspect-[5/2] min-w-[200px] w-full md:w-[300px] sm:max-w-xs
                animate-[fadeUpSmall_0.7s_ease-out]`
              }
              style={{animationDelay: `${0.1 + idx * 0.1}s`}}>
            <div>
               <div className="text-4xl mb-2 flex justify-center ">{stat.icon}</div>
              <div className="text-2xl font-bold text-green-700 mb-1 flex justify-center">{stat.number}</div>
              <div className="text-gray-600 text-base flex justify-center">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <section id="about" className="px-5 md:px-0 py-10 w-full md:max-w-[81rem] flex flex-col items-center justify-center text-center">
        <div className="max-w-8xl w-full flex flex-col items-center">
         
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-4 sm:mb-8 hover:shadow-2xl hover:-translate-y-1 transition">
                <h2 className="text-3xl md:text-[2.5rem] font-bold text-green-700 text-center mb-20 mt-5 relative">
                  गावाची माहिती
                  <span className="block w-24 h-1 bg-orange-400 rounded absolute left-1/2 -translate-x-1/2 -bottom-3"></span>
                </h2>

                <p className="text-lg text-justify leading-relaxed">
                  शेळगी हे <span className="text-orange-500 font-semibold">
                   महाराष्ट्र राज्यातील लातूर जिल्ह्यातील निलंगा तालुक्यातील </span>
                  एक प्रगतशील व धार्मिक पार्श्वभूमी असलेले गाव आहे.
                  २०११ च्या जनगणनेनुसार या गावाची लोकसंख्या सुमारे 
                  <span className="text-orange-500 font-semibold"> २२५५ </span> आहे.
                  गावामध्ये जिल्हा परिषद प्राथमिक शाळा – १, अंगणवाडी केंद्रे – ३, माध्यमिक विद्यालय – १, वाचनालय – १, व्यायामशाळा – १ अशी शैक्षणिक व शारीरिक सुविधा उपलब्ध आहेत.  
                   या गावात प्रति पंढरपूर म्हणून प्रसिद्ध असलेले 
                  <span className="text-orange-500 font-semibold"> विठ्ठल रुक्मिणी भव्य मंदिर</span> आहे.              
                </p>

                <p className="text-lg text-justify leading-relaxed mt-4">
                  धार्मिक व सांस्कृतिक दृष्ट्या 
                  <span className="text-orange-500 font-semibold"> विठ्ठल रुक्मिणी मंदिर, बिरदेव मंदिर, लक्ष्मी मंदिर, अंबाबाई मंदिर, पुंडलिक मंदिर, गोरोबा काका मंदिर, दत्त मंदिर, हनुमान मंदिर </span> 
                  हे गावाचे प्रमुख श्रद्धास्थान आहेत.  
                  तसेच "एक गाव, एक गणपती" या संकल्पनेतून गणेश उत्सव साजरा केला जातो.
                   ही एक विशेष बाब आहे याच गावामध्ये विठ्ठल रुक्मिणी मंदिर आहे व तिथेच <span className="text-orange-500 font-semibold"> भक्त पुंडलिक मंदिर</span> सुद्धा आहे. ही वेगळी ओळख आहे सहसा पुंडलिकाचे मंदिर बऱ्याच गावांमध्ये नसते पण शेळगी या गावाला धार्मिक पार्श्वभूमी असल्यामुळे अशा भक्ताचे मंदिर या ठिकाणी स्थित आहे.

                </p>

                <p className="text-lg text-justify leading-relaxed mt-4">
                  गावातील बहुतांश लोकांचा मुख्य व्यवसाय 
                  <span className="text-orange-500 font-semibold"> शेती</span> असून अधिकतर 
                  <span className="text-orange-500 font-semibold"> सोयाबीन, उडीद, मूग, गहू, हरभरा, ज्वारी, कांदा, ऊस </span> 
                  ही प्रमुख पिके आहेत. गावात काही फळबागांचीही लागवड केली जाते.
                </p>
              </div>

        </div>
      </section>


      </div>


<SamajSudharak />
<NewsSection />

    <section id="development" className="pt-0 md:py-10 w-full flex flex-col items-center bg-gray-50 ">
  <div className="max-w-6xl w-full mx-auto px-2 sm:px-0">
        <h2 className="text-3xl md:text-[2.5rem] font-bold text-green-700 text-center my-15 relative">विकास कामे
          <span className="block w-24 h-1 bg-orange-400 rounded absolute left-1/2 -translate-x-1/2 -bottom-3"></span>
        </h2>
        <DevelopmentSlideshow />
      </div>
    </section>




    

    {/* Services Section */}


    {/* Services Section */}

<ServicesSection  />

  <CertificatesSection />

      <AamchyaSeva/>
  <EmergencyContact/>
  <DakhalaMagani />






  
  
  {/* Tax Section – Left Heading & Right Two Cards Horizontally */}

    <TaxSection setShowQRModal={setShowQRModal} panipattiQR={panipattiQR} gharPattiQR={gharPattiQR} />
    
      {/* Government Officials Section */}
      <GovernmentOfficials />
      {/* कार्यकारी मंडळ Section  k*/}
      <ExecutiveBoard />

            {/* Places Section */}
      <PlacesSection />

  

      {/* Footer Section */}

<FooterSection />


  
    
  </div>
  );
}

export default MainPage;

