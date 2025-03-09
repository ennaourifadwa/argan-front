import React from 'react';

const CategoryCards = () => {
    return (
        <div className="flex justify-center gap-6 p-6"  data-aos="fade-down">
            {/* Card 1 */}
            <div className="relative w-1/3 bg-cover bg-center  flex flex-col justify-end p-6 text-white"
                style={{ backgroundImage: "url('https://beta.medinadargan.com/wp-content/uploads/2024/09/Capture-decran-2024-09-01-123436-600x640.png')", height: "700px" }}>
                    <h2 className='text-3xl text-black shadow-2xl self-center'> Tabrima's Exfoliant </h2>
                <button
                    type="submit"
                    className="flex justify-center mt-5 gap-2 items-center border-black w-full text-lg bg-gray-50 backdrop-blur-md isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:bg-black hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden hover:border-white border-2 group text-black"
                    style={{ letterSpacing: "2px", height: "45px" }} è
                >
                    LEARN MORE
                    {/* <ArrowRightAltOutlined className="text-3xl" /> */}
                </button>
            </div>

            
            {/* Card 2 */}
            <div className="relative w-1/3 bg-cover bg-center  flex flex-col justify-end p-6 text-white"
                style={{ backgroundImage: "url('https://beta.medinadargan.com/wp-content/uploads/2024/09/Capture-decran-2024-09-01-123436-600x640.png')", height: "700px" }}>
                    <h2 className='text-3xl text-black shadow-2xl self-center'> Tabrima's Exfoliant </h2>
                <button
                    type="submit"
                    className="flex justify-center mt-5 gap-2 items-center border-black w-full text-lg bg-gray-50 backdrop-blur-md isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:bg-black hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden hover:border-white border-2 group text-black"
                    style={{ letterSpacing: "2px", height: "45px" }} è
                >
                    LEARN MORE
                    {/* <ArrowRightAltOutlined className="text-3xl" /> */}
                </button>
            </div>

            
            {/* Card 3 */}
            <div className="relative w-1/3 bg-cover bg-center  flex flex-col justify-end p-6 text-white"
                style={{ backgroundImage: "url('https://beta.medinadargan.com/wp-content/uploads/2024/09/Capture-decran-2024-09-01-123436-600x640.png')", height: "700px" }}>
                    <h2 className='text-3xl text-black shadow-2xl self-center'> Tabrima's Exfoliant </h2>
                <button
                    type="submit"
                    className="flex justify-center mt-5 gap-2 items-center border-black w-full text-lg bg-gray-50 backdrop-blur-md isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:bg-black hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden hover:border-white border-2 group text-black"
                    style={{ letterSpacing: "2px", height: "45px" }} è
                >
                    LEARN MORE
                    {/* <ArrowRightAltOutlined className="text-3xl" /> */}
                </button>
            </div>

            
        </div>
    );
};

export default CategoryCards;
