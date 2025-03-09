import React from 'react';

const Sections = () => {
  return (
    <div className="text-center py-16"  data-aos="fade-down">
      <h2 className="text-4xl font-semibold text-brown-500 mb-10 font-roboto">Why Shop with Medina Dargan?</h2>
      <div className="flex justify-center gap-16 px-10">
        {/* Card 1 */}
        <div className="w-1/3 flex flex-col items-center text-center">
          <img src="https://beta.medinadargan.com/assets/images/images/feature-1.jpg" alt="Organic Product" className=" w-28 h-36 mb-4" />
          <h3 className="text-2xl font-semibold">Guaranteed PURE</h3>
          <p className="text-gray-600 mt-2">All Medina d'argan formulations adhere to strict purity standards and will never contain harsh or toxic ingredients.</p>
        </div>
        
        {/* Card 2 */}
        <div className="w-1/3 flex flex-col items-center text-center">
          <img src="https://beta.medinadargan.com/assets/images/images/feature-2.jpg" alt="Cruelty Free" className=" w-28 h-36 mb-4" />
          <h3 className="text-2xl font-semibold">Completely Cruelty-Free</h3>
          <p className="text-gray-600 mt-2">All Medina d'argan formulations adhere to strict purity standards and will never contain harsh or toxic ingredients.</p>
        </div>
        
        {/* Card 3 */}
        <div className="w-1/3 flex flex-col items-center text-center">
          <img src="https://beta.medinadargan.com/assets/images/images/feature-3.jpg" alt="Ingredient Sourcing" className=" w-28 h-36 mb-4"  />
          <h3 className="text-2xl font-semibold">Ingredient Sourcing</h3>
          <p className="text-gray-600 mt-2">All Medina d'argan formulations adhere to strict purity standards and will never contain harsh or toxic ingredients.</p>
        </div>
      </div>
    </div>
  );
};

export default Sections;
