import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Shop App</h3>
          <p className="text-gray-300">Your one-stop shop for quality products.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-300">Email: contact@shopapp.com</p>
          <p className="text-gray-300">Phone: (555) 123-4567</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;