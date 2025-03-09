import React from 'react';
// import { ArrowRightAltOutlined } from '@mui/icons-material';

const ProductCards = () => {
  return (
    <div className="flex justify-center gap-10 p-10"  data-aos="fade-down">
      {/* Card 1 */}
      <div 
        className="relative w-1/3 h-96 bg-cover bg-center shadow-xl rounded-lg flex flex-col justify-between p-8 text-white"
        style={{ backgroundImage: "url('https://cdn11.bigcommerce.com/s-3f5ae/images/stencil/1280x1280/products/65/2908/DSC04083__66574.1738769679.jpg?c=2')", backgroundPosition: "top center" }}
      >
        <div className="">
        <h2 className="text-4xl text-black font-bold">Cosmetic <br /> Products</h2>
        <p className="text-lg text-black mt-5">Starting at $4.99</p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="flex justify-center gap-2 items-center border-black w-72 shadow-xl text-lg bg-gray-50 backdrop-blur-md isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:bg-black hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden border-2 group text-black"
            style={{ letterSpacing: "2px", height: "45px" }}    è
          >
            LEARN MORE
            {/* <ArrowRightAltOutlined className="text-3xl" /> */}
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div 
        className="relative w-1/3 h-96 bg-cover bg-center shadow-xl rounded-lg flex flex-col justify-between p-8 text-white"
        style={{ backgroundImage: "url('https://cdn11.bigcommerce.com/s-3f5ae/images/stencil/1280x1280/products/65/2908/DSC04083__66574.1738769679.jpg?c=2')", backgroundPosition: "top center" }}
      >
        <div className="">
        <h2 className="text-4xl text-black font-bold">Alimentary <br /> Products</h2>
        <p className="text-lg text-black mt-5">Get the glow</p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="flex justify-center gap-2 items-center border-black w-72 shadow-xl text-lg bg-gray-50 backdrop-blur-md isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:bg-black hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden border-2 group text-black"
            style={{ letterSpacing: "2px", height: "45px" }}
          >
            LEARN MORE
            {/* <ArrowRightAltOutlined className="text-3xl" /> */}
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div 
        className="relative w-1/3 h-96 bg-cover bg-center shadow-xl rounded-lg flex flex-col justify-between p-8 text-white"
        style={{ backgroundImage: "url('https://cdn11.bigcommerce.com/s-3f5ae/images/stencil/1280x1280/products/65/2908/DSC04083__66574.1738769679.jpg?c=2')", backgroundPosition: "top center" }}
      >
        <div className="">
        <h2 className="text-4xl text-black font-bold">All</h2>
        <p className="text-lg text-black mt-5">Starting at $4.99</p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="flex justify-center gap-2 items-center border-black w-72 shadow-xl text-lg bg-gray-50 backdrop-blur-md isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:bg-black hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden border-2 group text-black"
            style={{ letterSpacing: "2px", height: "45px" }}
          >
            LEARN MORE
            {/* <ArrowRightAltOutlined className="text-3xl" /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;