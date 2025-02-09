import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav>
                <div className="wrapper">
                    <div className="logo">
                        <img src="/assets/logo.png" alt="Medina D'argan" width={150} />
                    </div>
                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />
                    <ul className="nav-links">
                        <label htmlFor="close-btn" className="btn close-btn">
                            <i className="fas fa-times"></i>
                        </label>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li style={{ alignContent: 'center' }}>
                            <a
                                href="#"
                                className="desktop-item flex flex-row items-center gap-2 text-lg font-semibold text-gray-700 hover:text-black transition-all"
                            >
                                Our Products
                                <span className="transform transition-transform duration-300 group-hover:rotate-180">
                                    ▼
                                </span>
                            </a>
                            <input type="checkbox" id="showDrop" className="hidden" />
                            <label
                                htmlFor="showDrop"
                                className="mobile-item flex items-center justify-between cursor-pointer px-4 py-2 hover:text-black"
                            >
                                Dropdown Menu
                            </label>
                            <ul className="drop-menu bg-white shadow-lg rounded-lg p-4">
                                <li >
                                    <a href="#">Drop menu 1</a>
                                </li>
                                <li >
                                    <a href="#">Drop menu 2</a>
                                </li>
                                <li >
                                    <a href="#">Drop menu 3</a>
                                </li>
                                <li >
                                    <a href="#">Drop menu 4</a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#">Checkout</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                    <Link
                        to='/login'
                        className="px-10 py-2 rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm hover:rounded-lg bg-gradient-to-r from-brown-500 to-black text-white text-lg font-semibold shadow-lg hover:opacity-90 hover:shadow-xl transition-all"
                    >
                        Login
                    </Link>
                    <label htmlFor="menu-btn" className="btn menu-btn">
                        <i className="fas fa-bars"></i>
                    </label>
                </div>
            </nav>
        </div>
    )
}

export default Navbar