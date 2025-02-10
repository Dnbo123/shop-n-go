/**
 * The Footer component displays a footer section at the bottom of the page.
 * It contains three columns of information: a brief description of the app,
 * contact information, and links to social media profiles.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      {/* Container element to center the content horizontally and add padding. */}
      <div className="container mx-auto px-6 py-8">
        {/* Grid container to layout the three columns of content. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First column: about us. */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Your one-stop shop for quality products.
            </p>
          </div>
          {/* Second column: contact information. */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Email: contact@shopNgo.com</p>
            <p className="text-gray-400">Phone: (+254) 123-4567</p>
          </div>
          {/* Third column: social media links. */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Links to social media profiles. */}
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

