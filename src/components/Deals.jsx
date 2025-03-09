import React from 'react';

const ArganSection = () => {
    return (
        <div className="flex items-center justify-between px-10 py-16"  data-aos="fade-down">
            {/* Images Section */}
            <div className="flex gap-6 w-1/2 items-center">
                <img
                    src="https://beta.medinadargan.com/assets/images/images/Argan-Tree.jpg"
                    alt="Argan Tree"
                    className="w-1/3 max-h-min"
                />
                <img
                    src="https://beta.medinadargan.com/assets/images/images/goat.jpg"
                    alt="Goat on Argan Tree"
                    className="w-2/3 h-auto "
                />
            </div>

            {/* Text Content */}
            <div className="w-1/2 pl-10">
                <span className="text-sm font-semibold uppercase tracking-wider text-gray-700">Special Offer</span>
                <span className="bg-brown-600 text-white text-xs font-bold px-2 py-1 rounded ml-2">-20%</span>
                <h2 className="text-4xl font-bold text-green-800 mt-4">
                    Argan: Sourced from Morocco’s heart.
                </h2>
                <p className="text-lg text-gray-600 mt-2">
                    Argan: Sourced directly from the heart of Morocco, where nature nurtures each kernel to perfection.
                </p>
                <h3 className="text-3xl text-green-800 font-light mt-4">Argan trees</h3>
                <button
                    type="submit"
                    className="flex justify-center mt-5 gap-2 items-center border-green-700 w-72 shadow-xl text-lg bg-gray-50 backdrop-blur-md isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:bg-green-700 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden hover:border-black border-2 group text-black"
                    style={{ letterSpacing: "2px", height: "45px" }} è
                >
                    LEARN MORE
                    {/* <ArrowRightAltOutlined className="text-3xl" /> */}
                </button>
            </div>
        </div>
    );
};

export default ArganSection;
