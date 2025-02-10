import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCardProps } from 'interfaces';
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">
            {[...Array(Math.floor(product.rating))].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <span className="text-gray-500 text-sm ml-2">({product.reviews} reviews)</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {product.description.substring(0, 100)}...
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className={`text-sm ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
          </span>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => {}}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;