import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCardProps } from 'interfaces';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-duration-300">
      <div className="aspect-w-1 aspect-h-1 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-contain p-4"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate mb-2" title={product.name}>
          {product.name}
        </h3>
        <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
        </div>
        <Link
          to={`/products/${product.id}`}
          className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;