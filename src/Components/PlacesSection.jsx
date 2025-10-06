import React from "react";

const PlacesSection = () => (
  <section id="places" className="py-10 bg-white pt-17 md:pt-30 ">
    <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-[2.5rem] font-bold text-green-700 mb-10 relative">गावातील प्रसिद्ध स्थळे
        <span className="block w-24 h-1 bg-orange-400 rounded absolute left-1/2 -translate-x-1/2 -bottom-3"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* vitthal  Mandir */}
        <div className="bg-white rounded-xl shadow-lg p-4 fade-in flex flex-col justify-between items-center h-full hover:shadow-2xl hover:-translate-y-1 transition">
          <img src="./images/pandurang.png" alt="विठ्ठल मंदिर" className="w-full h-48 object-cover rounded-xl mb-4" />
          <h5 className="text-lg font-bold mb-2 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2L12 22"/><path d="M6 12L12 2L18 12"/></svg> विठ्ठल मंदिर</h5>
          <p className="text-justify">विठ्ठल रुक्मिणी मंदिर पुरातन प्रति पंढरपूर अशी ओळख आहे दरवर्षी मोठा सप्ताह होतो व या सप्ताहात गावातील केवळ एकाच परिवारातर्फे सात दिवसाचा खर्च केला जातो.
          मंदिर शेळगी गावाच्या मध्यभागी, मुख्य रस्त्याजवळ स्थित असल्यामुळे भाविकांसाठी ते सहज उपलब्ध आहे.</p>
        </div>

         {/* पाझर तलाव */}
        <div className="bg-white rounded-xl shadow-lg p-4 fade-in flex flex-col justify-between items-center h-full hover:shadow-2xl hover:-translate-y-1 transition">
          <img src="images/talav.jpg" alt="पाझर तलाव" className="w-full h-48 object-cover rounded-xl mb-4" />
          <h5 className="text-lg font-bold mb-2 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 12h16"/><path d="M12 4v16"/></svg>पाझर तलाव</h5>
          <p className="text-justify">गावामध्ये पाझर तलाव आहे.पावसाळ्यात तलावाचे सौंदर्य अधिक खुलते. </p>
        </div>
       


        <div className="bg-white rounded-xl shadow-lg p-4 fade-in flex flex-col justify-between items-center h-full hover:shadow-2xl hover:-translate-y-1 transition">
          <img src="images/bajranbali.jpg" alt="हनुमान मंदिर" className="w-full h-48 object-cover rounded-xl mb-4" />
          <h5 className="text-lg font-bold mb-2 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 12h16"/><path d="M12 4v16"/></svg>हनुमान मंदिर</h5>
          <p className="text-justify">शेळगी गावाचे श्रद्धास्थान व धर्म परंपरेनुसार गावाचे रक्षक म्हणून प्रसिद्ध असलेले बजरंग बली हनुमान मंदिर हे गावाच्या अगदी वेशीवर आहे गावात प्रवेश करत असताना या मंदिराचे दर्शन करूनच पुढे जावे लागते. या मंदिराची विशेषता आहे.</p>
        </div>



      
           <div className="bg-white rounded-xl shadow-lg p-4 fade-in flex flex-col justify-between items-center h-full hover:shadow-2xl hover:-translate-y-1 transition">
          <img src="images/birdev.jpg" alt="बिरदेव मंदिर" className="w-full h-48 object-cover rounded-xl mb-4" />
          <h5 className="text-lg font-bold mb-2 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10"/></svg> बिरदेव मंदिर</h5>
          <p className="text-justify">बिरदेव मंदिर हे गावामध्ये प्रवेश करत असताना मुख्य रस्त्याला लागून आहे या ठिकाणी धनगर समाजाचे श्रद्धास्थान आहे दरवर्षी या ठिकाणी यात्रा भरते व तसेच याच परिसरामध्ये गावाची वैकुंठ भूमी स्थित आहे. या ठिकाणी वृक्ष लागवड व सुशोभीकरण करण्यात आलेली आहे. पाणीपुरवठ्याची टाकी याच ठिकाणी बांधलेली आहे.</p>
        </div> 

        {/*
       <div className="bg-white rounded-xl shadow-lg p-4 fade-in flex flex-col justify-between items-center h-full hover:shadow-2xl hover:-translate-y-1 transition">
          <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&q=80" alt="कृषी क्षेत्र" className="w-full h-48 object-cover rounded-xl mb-4" />
          <h5 className="text-lg font-bold mb-2 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="8" width="16" height="8" rx="2"/></svg> कृषी क्षेत्र</h5>
          <p className="text-justify">गोमेवाडी विशेषतः कांदा व ऊस उत्पादनासाठी प्रसिद्ध आहे. कांद्याची लागवड मुख्यतः स्थानिक बाजारासाठी आणि हंगामी निर्यातीसाठी केली जाते. तसेच, ऊस हा परिसरातील प्रमुख उत्पन्नाचे पीक असून, तालुक्यामधील सहकारी साखर कारखान्यात ऊसाची आवक गोमेवाडी मार्गे केली जाते.</p>
        </div>
       
        <div className="bg-white rounded-xl shadow-lg p-4 fade-in flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition">
          <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&q=80" alt="जलसंधारण प्रकल्प" className="w-full h-48 object-cover rounded-xl mb-4" />
          <h5 className="text-lg font-bold mb-2 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2L12 22"/><path d="M6 12L12 2L18 12"/></svg> जलसंधारण प्रकल्प</h5>
          <p className="text-justify">पाणलोट क्षेत्राचा विकास आणि जलसंधारणामुळे परिसरात नैसर्गिक सौंदर्य खुलून दिसते. गावात बारव, पाणीसाठवण टाकी, सार्वजनिक विहिरी व शेततळी यासारख्या सुविधा उपलब्ध आहेत. तसेच, शासनाची अ‍ॅक्वा आरओ शुद्ध पाणी प्रकल्प योजना गावातील पाण्याची गुणवत्ता सुधारण्यासाठी कार्यरत आहे.</p>
        </div>

        */}



      </div>
    </div>
  </section>
);

export default PlacesSection;
