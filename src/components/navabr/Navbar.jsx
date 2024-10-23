import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';
import logo from '/gheelogo.jpg';

const offers = [
  "50% off on your first purchase!",
  "Free shipping on orders over $50!",
  "Buy one, get one free on select items!",
  "Sign up now and get a 10% discount!",
];

export default function NavBar() {
    const [currentOffer, setCurrentOffer] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
      const interval = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentOffer((prev) => (prev + 1) % offers.length);
          setIsTransitioning(false);
        }, 600); // Duration of the transition
      }, 4000); // Interval for changing offers
  
      return () => clearInterval(interval);
    }, []);
  
  // Handle scroll event to toggle navbar position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
  {/* Offers Banner */}
       <div className="bg-amber-800 text-white py-3 flex items-center relative overflow-hidden w-full">
        {/* Offer Text */}
        <div className="flex justify-center w-full">
         

          {/* Next Offer Text */}
          <span
            className={`font-semibold text-sm transition-transform duration-500 underline transform  top-0 left-0 w-full flex justify-center ${
              isTransitioning ? 'translate-x-[100%]' : 'translate-x-0'
            }`}
          >
            {offers[(currentOffer + 1) % offers.length]}
          </span>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`bg-white fixed ${isScrolled ? 'top-0' : 'top-11'} left-0 right-0 z-20 shadow border border-b-amber-500 transition-all duration-300`}>
        <div className="container mx-auto flex justify-between items-center p-4 md:py-5 md:px-16 border-b">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            <img src={logo} alt="Logo" className="w-20" />
          </Link>

          {/* Centered Links */}
          <div className="hidden md:flex justify-center flex-grow">
            <div className="space-x-8 text-lg">
              <Link to="/" className="font-montserrat text-amber-700 opacity-70 hover:text-amber-800 text-[15px] font-black">Home</Link>
              <Link to="/products" className="font-montserrat text-amber-700 opacity-70 hover:text-amber-800 text-[15px] font-black">Products</Link>
              <Link to="/about" className="font-montserrat text-amber-700 opacity-70 hover:text-amber-800 text-[15px] font-black">About</Link>
            </div>
          </div>

          {/* Right-side Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="focus:outline-none">
              <IoSearchOutline className="text-2xl md:text-2xl hover:text-amber-700" />
            </button>

            <button className="focus:outline-none">
              <FiUser className="text-2xl md:text-2xl hover:text-amber-700" />
            </button>

            <button className="relative focus:outline-none">
              <IoCartOutline className="text-2xl md:text-2xl hover:text-amber-700" />
            </button>
          </div>
        </div>

        {/* Mobile View Links */}
        <div className="flex justify-center md:hidden bg-white py-2 border-t">
          <div className="space-x-4">
            <Link to="/" className="font-montserrat text-yellow-600 text-[14px] font-semibold">Home</Link>
            <Link to="/products" className="font-montserrat text-yellow-600 text-[14px] font-semibold">Products</Link>
            <Link to="/about" className="font-montserrat text-yellow-600 text-[14px] font-semibold">About</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
