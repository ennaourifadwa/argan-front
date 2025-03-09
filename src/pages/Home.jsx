import React, { useEffect } from "react";
import ProductSwiper from "../components/ProductSwiper";
import Cards from "../components/Cards";
import Sections from "../components/Sections";
import ArganSection from "../components/Deals";
import ArganSwiper from "../components/Swipper";
import CategoryCards from "../components/Swipper";
import Cosmetic from "../components/Cosmetic";
import MoreToDiscover from "../components/VisitSection";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);


  return (
    <>
      <div className="w-full h-screen relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/assets/image.png')" }} data-aos="fade-down">
        <div className="absolute top-1/2 left-10 sm:left-16 md:left-20 lg:left-24 transform -translate-y-1/2 text-white text-left max-w-lg">
          <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-10 leading-tight">
            Welcome to Our <br /> Argan heaven
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">
            Made using clean, non-toxic <br /> ingredients, our products are <br /> designed for everyone
          </p>
          <p className="text-xl font-bold text-green-600 mb-4 sm:mb-6">Starting at 4.99 Euro</p>
          <button className="px-8 sm:px-10 py-2 rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm hover:rounded-lg bg-gradient-to-r from-brown-500 to-black text-white text-lg sm:text-xl font-semibold shadow-lg hover:opacity-90 hover:shadow-xl transition-all">
            Learn More
          </button>
        </div>
      </div>
      <ProductSwiper />
      <Cards />
      <Sections />
      <ArganSection />
      <CategoryCards />
      <Cosmetic />
      <MoreToDiscover />
    </>
  );
}

export default Home;
