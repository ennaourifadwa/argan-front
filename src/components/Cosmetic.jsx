import React from 'react';

const Cosmetic = () => {
    return (
        <>
            <div className="text-center py-16"  data-aos="fade-down">
                <h2 className="text-4xl font-semibold text-brown-500 mb-10 font-roboto">Cosmetic products</h2>
                <div className="flex justify-center gap-16 px-28">
                    {/* Card 1 */}
                    <div className="w-1/3 flex flex-col items-center text-center">
                        <img src="https://beta.medinadargan.com/assets/images/images/skin.png" alt="Organic Product" className=" w-28 h-36 mb-4" />
                        <h3 className="text-2xl font-semibold">Skin care</h3>
                        <p className="text-gray-600 mt-2">All Medina d'argan formulations adhere to strict purity standards and will never contain harsh or toxic ingredients</p>
                    </div>

                    {/* Card 2 */}
                    <div className="w-1/3 flex flex-col items-center text-center">
                        <img src="https://beta.medinadargan.com/assets/images/images/scrub.png" alt="Cruelty Free" className=" w-28 h-36 mb-4" />
                        <h3 className="text-2xl font-semibold">Scrubs and peeling</h3>
                        <p className="text-gray-600 mt-2">All Medina d'argan formulations adhere to strict purity standards and will never contain harsh or toxic ingredients.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="w-1/3 flex flex-col items-center text-center">
                        <img src="https://beta.medinadargan.com/assets/images/images/hair.png" alt="Ingredient Sourcing" className=" w-28 h-36 mb-4" />
                        <h3 className="text-2xl font-semibold">Hair</h3>
                        <p className="text-gray-600 mt-2">All Medina d'argan formulations adhere to strict purity standards and will never contain harsh or toxic ingredients.</p>
                    </div>
                </div>
            </div>
            <div className="text-center py-16 mt-20">
                <h2 className="text-4xl font-semibold text-brown-500 mb-10 font-roboto">More to Discover</h2>
                <div className="flex justify-center gap-16 px-28">
                    {/* Card 1 */}
                    <div className="w-1/3 flex flex-col items-center text-center">
                        <img src="https://beta.medinadargan.com/assets/images/images/Alimentary.png" alt="Organic Product" className=" w-28 h-36 mb-4" />
                        <h3 className="text-2xl font-semibold">Alimentary</h3>
                        <p className="text-gray-600 mt-2">All Medina d'argan formulations adhere to strict purity standards and will never contain harsh or toxic ingredients</p>
                    </div>

                    {/* Card 2 */}
                    <div className="w-1/3 flex flex-col items-center text-center">
                        <img src="https://beta.medinadargan.com/assets/images/images/spices.png" alt="Cruelty Free" className=" w-28 h-36 mb-4" />
                        <h3 className="text-2xl font-semibold">Spices</h3>
                        <p className="text-gray-600 mt-2">All Medina d'argan formulations adhere to strict purity standards and will never contain harsh or toxic ingredients.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="w-1/3 flex flex-col items-center text-center">
                        <img src="https://beta.medinadargan.com/assets/images/images/Others.png" alt="Ingredient Sourcing" className=" w-28 h-36 mb-4" />
                        <h3 className="text-2xl font-semibold">Others</h3>
                        <p className="text-gray-600 mt-2">All Medina d'argan formulations adhere to strict purity standards and will never contain harsh or toxic ingredients.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cosmetic;
