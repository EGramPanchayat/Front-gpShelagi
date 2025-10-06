import React, { useEffect, useState } from "react";
import ExecutiveBoard from "../Components/ExecutiveBoard";
import Navbar from "../Components/Navbar";
import NewsSection from "../Components/NewsSection";
import axioesInstance from "../utils/axioesInstance";

import PlacesSection from "../Components/PlacesSection";
import ContactSection from "../Components/ContactSection";
import FooterSection from "../Components/FooterSection";
import CertificatesSection from "../Components/CertificatesSection";
import ServicesSection from "../Components/ServicesSection";

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




function useDevelopmentWorks() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axioesInstance.get("/devworks")
      .then((res) => {
   
        setLoading(false);
        return res.data;
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return { items, loading, error };
}


function DevelopmentSlideshow() {
  const { items: developmentItems, loading, error } = useDevelopmentWorks();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!loading && developmentItems.length > 0) {
      const timer = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % developmentItems.length);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [current, loading, developmentItems.length]);

  const goPrev = () =>
    setCurrent((prev) => (prev - 1 + developmentItems.length) % developmentItems.length);
  const goNext = () =>
    setCurrent((prev) => (prev + 1) % developmentItems.length);

  if (loading) return <div className="w-full text-center py-10">विकास कामे लोड होत आहेत...</div>;
  if (error) return <div className="w-full text-center py-10 ">विकास कामे उपलब्ध नाहीत.</div>;
  if (!developmentItems.length) return <div className="w-full text-center py-10">विकास कामे उपलब्ध नाहीत.</div>;

  const item = developmentItems[current];

  return (
    <div className="flex justify-center items-center w-full flex-grow">
     
      <div className="w-full sm:w-[500px] md:w-[750px] lg:w-[900px] h-[380px] sm:h-[420px] flex flex-col shadow-lg rounded-xl overflow-hidden">

        {/* Image Section */}
        <div className="h-[180px] sm:h-[220px] w-full flex justify-center items-center overflow-hidden bg-gray-100">
          <img
            src={item.image.url}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="w-full flex flex-col justify-between items-center bg-white px-3 py-3 h-[170px] sm:h-[180px]">
          <div className="flex flex-col items-center text-center w-full px-2">
            <h5 className="text-base sm:text-lg font-bold mb-1 mt-1 break-words line-clamp-2">
              {item.title}
            </h5>
            <p className="text-xs sm:text-sm text-gray-700 break-words line-clamp-3">
              {item.description}
            </p>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-2">
            {developmentItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  idx === current ? "bg-green-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}




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

<ServicesSection  />

<CertificatesSection />






  {/* Tax Section – Left Heading & Right Two Cards Horizontally */}

<section className="w-full flex justify-center items-center bg-white pt-25 md:p-20 ">

  <section
    id="tax"
    className=" py-8 px-5 mx-0 w-full bg-gradient-to-br from-green-100 to-blue-50 flex flex-col md:flex-row justify-center items-center md:mx-40 rounded-3xl"
  >
    <div className="max-w-6xl w-full flex flex-col  md:flex-row justify-between items-center gap-6  md:gap-10 py-5 sm:px-4">
      {/* Left: Heading only */}
      <div className="w-full md:w-2/6 flex items-center justify-center sm:py-0 mb-6 md:mb-0  md:h-full">
        <h2 className="text-3xl md:text-[2.5rem] font-bold text-green-700 relative text-center w-full">
          कर भरणा
          <span className="block w-24 h-1 bg-orange-400 rounded absolute left-1/2 -translate-x-1/2 -bottom-3"></span>
        </h2>
      </div>

      {/* Right: Cards arranged vertically on mobile, horizontally on desktop */}
      <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* पाणीपट्टी */}
        <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-5 sm:p-8 min-h-[320px] w-full
                        hover:shadow-2xl hover:-translate-y-1 transition">
          <img
            src="/images/water-supply.png"
            alt="पाणीपट्टी"
            className="w-full h-40 sm:h-48 object-cover rounded mb-2"
          />
          <h5 className="text-lg sm:text-xl font-bold mt-2 mb-2 flex items-center gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 2C12 2 7 8 7 12a5 5 0 0010 0c0-4-5-10-5-10z" />
              </svg>
            </span>
            पाणीपट्टी
          </h5>
          <p className="mb-3 text-base text-center">घरगुती व शेती पाणीपट्टी ऑनलाइन भरा.</p>
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-lg w-full max-w-xs mt-auto hover:bg-green-700 transition text-base font-semibold"
            onClick={() => setShowQRModal('panipatti')}
          >
            भरा
          </button>
        </div>

        {/* मालमत्ता कर */}
        <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-5 sm:p-8 min-h-[320px] w-full
                        hover:shadow-2xl hover:-translate-y-1 transition">
          <img
            src="/images/home.jpeg"
            alt="मालमत्ता कर"
            className="w-full h-40 sm:h-48 object-cover rounded mb-2"
          />
          <h5 className="text-lg sm:text-xl font-bold mt-2 mb-2 flex items-center gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 12l9-9 9 9" />
                <rect x="6" y="12" width="12" height="8" rx="2" />
              </svg>
            </span>
            मालमत्ता कर
          </h5>
          <p className="mb-3 text-base text-center">घर व शेतजमिनीसाठी मालमत्ता कर भरा.</p>
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-lg w-full max-w-xs mt-auto hover:bg-green-700 transition text-base font-semibold"
            onClick={() => setShowQRModal('gharpatti')}
          >
            भरा
          </button>
        </div>
      </div>

    </div>
    {/* QR Code Modal */}
    {showQRModal && (
      <div className="fixed inset-0 bg-white/5 backdrop-blur-sm flex items-center justify-center z-[200]">
        <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center relative min-w-[20rem] max-w-xs">
          <button className="absolute top-2 right-2 text-xl text-gray-600 hover:text-red-500" onClick={()=>setShowQRModal("")}>×</button>
          <h4  className="text-md font-bold mb-2">{showQRModal === 'panipatti' ? 'Panipatti QR Code' : 'Gharpatti QR Code'}</h4>
          <img
            src={showQRModal === 'panipatti'
              ? (panipattiQR ? panipattiQR : "/images/noQR.jpg")
              : (gharPattiQR ? gharPattiQR : "/images/noQR.jpg")}
            alt="QR Code"
            className="max-w-[90%] object-contain"
          />
        </div>
      </div>
    )}
  </section>
</section>






      {/* कार्यकारी मंडळ Section  k*/}
      <ExecutiveBoard />

            {/* Places Section */}
      <PlacesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}

<FooterSection />


  
    
  </div>
  );
}

export default MainPage;

