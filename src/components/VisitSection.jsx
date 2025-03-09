import React from 'react';

const MoreToDiscover = () => {
  return (
    <div className="text-center py-16"  data-aos="fade-down">
      <h2 className="text-4xl font-semibold text-brown-500 mb-16">More to Discover</h2>
      <div className="flex justify-center gap-10 px-56">
        {/* Card 1 */}
        <div className="w-1/3 flex flex-col items-center text-center">
          <img src="https://beta.medinadargan.com/assets/images/images/bmm1.png" alt="Find a Store" className="w-full object-cover rounded-lg shadow-lg mb-4" />
          <h3 className="text-2xl font-semibold">Find a Store</h3>
          <a href="#" className="text-lg text-black font-medium mt-2 hover:underline">Our Store →</a>
        </div>
        
        {/* Card 2 */}
        <div className="w-1/3 flex flex-col items-center text-center">
          <img src="https://beta.medinadargan.com/assets/images/images/bmm2.png" alt="From Our Blog" className="w-full object-cover rounded-lg shadow-lg mb-4" />
          <h3 className="text-2xl font-semibold">From Our Blog</h3>
          <a href="#" className="text-lg text-black font-medium mt-2 hover:underline">Our Store →</a>
        </div>
        
        {/* Card 3 */}
        <div className="w-1/3 flex flex-col items-center text-center">
          <img src="https://beta.medinadargan.com/assets/images/images/bmm3.png" alt="Our Story" className="w-full object-cover rounded-lg shadow-lg mb-4" />
          <h3 className="text-2xl font-semibold">Our Story</h3>
          <a href="#" className="text-lg text-black font-medium mt-2 hover:underline">Our Store →</a>
        </div>
      </div>
    </div>
  );
};

export default MoreToDiscover;
