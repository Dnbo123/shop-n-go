import React from 'react';

/**
 * The Footer component displays a footer section at the bottom of the page.
 * It contains three columns of information: a brief description of the app,
 * contact information, and links to social media profiles.
 */
const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-8">
    {/* The container element contains three columns of information. */}
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* The first column contains a brief description of the app. */}
      <div>
        <h3 className="text-xl font-bold mb-4">Shop App</h3>
        <p className="text-gray-300">Your one-stop shop for quality products.</p>
      </div>
      {/* The second column contains contact information. */}
      <div>
        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
        <p className="text-gray-300">Email: donboscoorinda@gmail.com</p>
        <p className="text-gray-300">Phone: (+254) 112729921</p>
      </div>
      {/* The third column contains links to social media profiles. */}
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

export default Footer;
