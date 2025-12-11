import React, { useEffect, useState } from "react";
import axioesInstance from "../utils/axioesInstance";

const NewsSection = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
  const fetchNews = async () => {
    try {
      const res = await axioesInstance.get("/news");

      // Convert response to ALWAYS be an array
      let data = res.data;

      if (Array.isArray(data)) {
        setNewsItems(data);
      } else if (Array.isArray(data?.news)) {
        setNewsItems(data.news);
      } else if (Array.isArray(data?.data)) {
        setNewsItems(data.data);
      } else {
        // fallback → empty array
        setNewsItems([]);
      }

    } catch (err) {
      console.error("Error fetching news:", err);
      setNewsItems([]);
    }
  };

  fetchNews();
}, []);


  return (
    <section className="w-full bg-white border-y-2 border-y-orange-400 py-5 md:px-20  flex flex-col md:flex-row items-center overflow-hidden">
      
      <marquee className="text-green-800 font-medium text-base">
        {newsItems.length > 0 ? (
          newsItems.map((item, idx) => (
            <span key={item._id || idx} className="mx-6 text-2xl font-bold text-green-800">
              • {item.text}
            </span>
          ))
        ) : (
          <span className="mx-6 text-2xl text-gray-500">No news available</span>
        )}
      </marquee>
    </section>
  );
};

export default NewsSection;
