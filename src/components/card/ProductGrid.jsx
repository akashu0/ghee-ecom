import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import img2 from "/ghee2.jpg";
import img3 from "/ghee4.jpg";
import img4 from "/ghhe5.jpg";
import { AiFillHeart } from "react-icons/ai";

const ProductCard = ({ image, discount, title, price }) => {
  // Calculate the discount amount
  const discountAmount = (price * discount) / 100;
  const discountedPrice = price - discountAmount;

  const [isFilled, setIsFilled] = useState(false); // State to track if the heart is filled

  const handleHeartClick = () => {
    setIsFilled(!isFilled); // Toggle the filled state
  };

  return (
    <div className="relative group cursor-pointer border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 pb-4">
      {/* Discount Tag */}
      <div className="absolute top-2 left-2 z-10 bg-green-600 text-white px-2 py-1 rounded-md text-sm font-semibold">
        Save {discount}%
      </div>

      {/* Best Seller Tag */}
      <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
        {/* <span className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
          Best Seller
        </span> */}
        {/* <Heart className="text-red-500 cursor-pointer hover:fill-red-500 transition-colors" size={24} /> */}
        <div onClick={handleHeartClick} className="cursor-pointer">
          {isFilled ? (
            <AiFillHeart
              className="text-amber-800 transition-colors"
              size={24}
            />
          ) : (
            <CiHeart className="text-amber-800 transition-colors" size={24} />
          )}
        </div>
      </div>

      {/* Product Image */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Title */}
      <h3 className="mt-4 text-lg font-semibold text-center">{title}</h3>

      {/* Price Display */}
      <div className="flex justify-between items-center mt-2 px-2">
        <div className="flex flex-col-1 items-center gap-2">
          <p className="text-sm text-gray-500 line-through">
            ₹{price.toFixed(2)}
          </p>
          <p className="text-xl font-bold text-amber-600">
            ₹{discountedPrice.toFixed(2)}
          </p>
        </div>
        <button className="bg-amber-700 text-white py-2 px-4 rounded-md hover:bg-amber-600 transition-colors duration-300">
          Add to Cart
        </button>
      </div>

      {/* Add to Cart Button */}
    </div>
  );
};

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: "Cultured Ghee",
      image: img2,
      discount: 5,
      price: 299,
    },
    {
      id: 2,
      title: "Traditional Flour",
      image: img3,
      discount: 5,
      price: 199,
    },
    {
      id: 3,
      title: "Jaggery Powder",
      image: img4,
      discount: 8,
      price: 149,
    },
    {
      id: 4,
      title: "Amla Product",
      image: img2,
      discount: 3,
      price: 399,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Section Title */}
      <div className="relative flex justify-center my-8">
        <h2 className="bg-amber-700 text-white px-12 py-3 rounded-full text-2xl font-bold inline-block">
          ★ MOST LOVED ITEMS ★
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            discount={product.discount}
            price={product.price}
          />
        ))}

      
      </div>
      <div className="w-full flex justify-center items-center mt-14">
          <button className="bg-amber-700 text-white py-2 px-4 rounded-md text-lg hover:bg-amber-600 transition-colors duration-300">
            SHOP ALL
          </button>
        </div>
    </div>
  );
};

export default ProductGrid;
