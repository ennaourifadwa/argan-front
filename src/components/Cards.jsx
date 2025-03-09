import React from 'react';

const StorySection = () => {
    return (
        <div className="flex justify-center gap-10 p-10 "  data-aos="fade-down">
            {/* Card 1 */}
            <div
                className="relative w-2/3 h-96 bg-cover bg-center shadow-xl flex flex-col justify-end p-8 text-white"
                style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b8/8d/47/l-ambiance.jpg?w=900&h=500&s=1')", backgroundPosition: "center" }}
            >
                <h3 className="text-lg font-semibold shadow-2xl">NEW COLLECTION</h3>
                <div className="bg-yellow-500 bg-opacity-80 px-6 py-3 inline-block rounded-md mt-2">
                    <h2 className="text-3xl font-bold">The Story <br /> Behind</h2>
                </div>
                <button
                    type="submit"
                    className="flex justify-center mt-5 gap-2 items-center border-black w-72 shadow-xl text-lg bg-gray-50 backdrop-blur-md isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:bg-black hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden border-2 group text-black"
                    style={{ letterSpacing: "2px", height: "45px" }} è
                >
                    LEARN MORE
                    {/* <ArrowRightAltOutlined className="text-3xl" /> */}
                </button>
            </div>

            {/* Card 2 */}
            <div
                className="relative w-1/3 h-96 bg-cover bg-center  flex flex-col justify-end p-8 text-white"
                style={{ backgroundImage: "url('https://media.istockphoto.com/id/639817954/photo/moroccan-woman-producing-argan-oil-by-traditional-methods.jpg?s=612x612&w=0&k=20&c=PoD08DSjggDykKBfAEzFzYEocbMpREBmWtetWnYgQaQ=')", backgroundPosition: "center" }}
            >
                <h2 className="text-3xl font-bold">100% Natural and Fresh</h2>
                <p className="text-lg mt-2">
                    Crafted by nature, our products embody purity and authenticity,
                    untouched by artificial influence.
                </p>
                <button
                    type="submit"
                    className="flex justify-center mt-5 gap-2 items-center border-black w-72 shadow-xl text-lg bg-gray-50 backdrop-blur-md isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:bg-black hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden border-2 group text-black"
                    style={{ letterSpacing: "2px", height: "45px" }} è
                >
                    LEARN MORE
                    {/* <ArrowRightAltOutlined className="text-3xl" /> */}
                </button>
            </div>
        </div>
    );
};

export default StorySection;
