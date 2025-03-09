import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaArrowDown, FaBagShopping, FaUser } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('up');
    const navigate = useNavigate();
    const location = useLocation();

    const isLandingPage = location.pathname === '/';
    const [dropdownOpen, setDropdownOpen] = useState(false);



    useEffect(() => {

        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // Change background after scrolling down 50px
            if (window.scrollY > lastScrollY) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);
    }, [isLoggedIn]);

    // Determine link and icon color based on landing page status and scroll position
    const linkColor = isLandingPage && !scrolled ? 'text-white' : 'text-black';

    return (
        <>
            {/* Navbar container with discount bar and main navbar */}
            <div className={`fixed w-full z-50 transition-transform duration-300 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}>
                {/* Discount Bar */}
                <div className={`w-full backdrop-blur-lg text-black text-center py-1 ${scrolled ? 'backdrop-blur-lg' : 'bg-[#f0ede5]'}`}>
                    50% discounts on all tops this weekend
                </div>

                {/* Main Navbar */}
                <nav className={`transition-colors duration-300 ${scrolled ? 'bg-white/70 shadow-lg' : 'bg-transparent'}`}>
                    {/* Search Bar Overlay */}
                    {showSearch && (
                        <div
                            className={`fixed w-full top-0 z-40 transition-colors duration-300 ${scrolled ? 'bg-white/70 shadow-lg' : 'bg-transparent'
                                }`}
                        >
                            <div className="relative w-3/4 md:w-1/2 lg:w-1/3 mx-auto">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                                />
                                <button
                                    onClick={() => setShowSearch(false)}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Navbar Content */}
                    <div className="flex items-center bg-white/45 justify-between p-4 border-b border-black">
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <img src="/assets/logo.png" alt="argan logo" className='w-28 ml-28' />
                        </Link>

                        {/* Icons and Links Section */}
                        <div className="flex items-center space-x-8">
                            {/* Menu Links */}
                            <div className={`flex space-x-8 text-sm font-medium ${linkColor}`}>
                                <Link to="/" className="hover:text-gray-500 text-xl">HOME</Link>
                                <Link to="/shop" className="hover:text-gray-500 text-xl">SHOP</Link>

                                {/* Dropdown for Our Products */}
                                <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="hover:text-gray-500 text-xl focus:outline-none flex flex-row gap-1 items-center"
        >
          Our Products <FaArrowDown />
        </button>
        <AnimatePresence>
          {dropdownOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg"
            >
              <Link to="/category1" className="block text-black bg-gray-100 px-4 py-4 hover:bg-brown-500/25 hover:rounded-md">Category 1</Link>
              <Link to="/category2" className="block text-black bg-gray-100 px-4 py-4 hover:bg-brown-500/25 hover:rounded-md">Category 2</Link>
              <Link to="/category3" className="block text-black bg-gray-100 px-4 py-4 hover:bg-brown-500/25 hover:rounded-md">Category 3</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
                                <Link to="/checkout" className="hover:text-gray-500 text-xl">Checkout</Link>
                                <Link to="/about" className="hover:text-gray-500 text-xl">About Us</Link>
                                <Link to="/contact" className="hover:text-gray-500 text-xl">Contact Us</Link>
                                <button onClick={() => setShowSearch(!showSearch)} className="hover:text-gray-500 text-xl">
                                    SEARCH
                                </button>
                            </div>

                            {/* Icons */}
                            <div className="flex items-center space-x-6 text-lg">
                                <FaRegHeart className={`${linkColor} hover:text-gray-500`} />
                                <Link to="/login" className="hover:text-gray-500 text-brown-500 text-xl">
                                    LOGIN
                                </Link>
                                <div className="relative">
                                    <FaBagShopping className={`${linkColor} hover:text-gray-500`} />
                                    <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs px-1">
                                        0
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}