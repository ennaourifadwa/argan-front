import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-10 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 text-gray-800">
        {/* Categories */}
        <div>
          <h3 className="text-3xl mb-3">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Cosmetic</a></li>
            <li><a href="#" className="hover:underline">Alimentary</a></li>
            <li><a href="#" className="hover:underline">Spices</a></li>
            <li><a href="#" className="hover:underline">Others</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-3xl mb-3">CONTACT US</h3>
          <p>Av. Moulay Driss, rue Meknes - Agadir</p>
          <p>+212 5 25 24 14 88</p>
          <p>+212 6 79 92 97 25</p>
          <p>Email: contact@medinadargan.com</p>
          <p><a href="https://www.medinadargan.com" className="text-blue-600 hover:underline">www.medinadargan.com</a></p>
        </div>

        {/* Visit */}
        <div>
          <h3 className="text-3xl mb-3">Visit</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
          </ul>
        </div>

        {/* Locate Us */}
        <div>
          <h3 className="text-lg font-bold mb-3">LOCATE US</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.5603265759913!2d-9.60100902375188!3d30.424372774866615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d129c8e5b1f%3A0x1c2a16ec3f4b1a9b!2sMedina%20D&#39;Argan!5e0!3m2!1sen!2sma!4v1709839248230!5m2!1sen!2sma"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
