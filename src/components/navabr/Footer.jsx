import React from "react";
import * as Fiico from "react-icons/fi";
import logo from '/gheelogo.jpg';

export default function Footer() {
  return (
    <div className="bg-primary text-black py-10 px-20 border border-t-amber-800 pb-20">
      <footer className="container mx-auto flex flex-wrap justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0 mb-4">
          <img src={logo} alt="Company Logo" className="h-28" />
            {/* Social Media Icons Section */}
        <div className="flex flex-col items-center mt-10">
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/people/Codecademy-JU-Chapter/100073383202752/?sk=grid"
              className="text-2xl border border-lightp rounded-full p-2 opacity-75 hover:opacity-90"
            >
              <Fiico.FiFacebook />
            </a>
            <a
              href="https://www.instagram.com/codecademyjuchapter/"
              className="text-2xl border border-lightp rounded-full p-2 opacity-75 hover:opacity-90"
            >
              <Fiico.FiInstagram />
            </a>
            <a
              href="https://twitter.com/codecademyjuch"
              className="text-2xl border border-lightp rounded-full p-2 opacity-75 hover:opacity-90"
            >
              <Fiico.FiTwitter />
            </a>
            <a
              href="https://github.com/Codecademy-JU-Chapter"
              className="text-2xl border border-lightp rounded-full p-2 opacity-75 hover:opacity-90"
            >
              <Fiico.FiGithub />
            </a>
          </div>
        </div>
        </div>



        
        <div className="flex flex-col">
  <p className="text-amber-800 font-mono">
    Subscribe for special offers, <br /> newsletters, and become a part of our <br /> movement
  </p>

  <div className="relative pt-4">
    <input
      type="text"
      className="border-2 border-amber-800 w-4/5 focus:outline-none px-8 py-2 text-amber-800 placeholder-amber-800"
      placeholder="Your e-mail"
      name=""
      id=""
    />
    {/* Arrow icon */}
    <span className="absolute inset-y-0 right-20 top-4 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-amber-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </span>
  </div>
</div>

     
        <div className="flex flex-col space-y-2 mb-4">
          <h3 className="font-bold text-xl font-montserrat  text-amber-800">LINK</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-amber-600 font-semibold font-mono text-amber-800">Home</a></li>
            <li><a href="#" className="hover:text-amber-600 font-semibold font-mono text-amber-800">Products</a></li>
            <li><a href="#" className="hover:text-amber-600 font-semibold font-mono text-amber-800">Sitemap</a></li>
            <li><a href="#" className="hover:text-amber-600 font-semibold font-mono text-amber-800">Terms Of Service</a></li>
            <li><a href="#" className="hover:text-amber-600 font-semibold font-mono text-amber-800">Refund & Cancellation Policy</a></li>
            <li><a href="#" className="hover:text-amber-600 font-semibold font-mono text-amber-800">Privacy Policy</a></li>
            
          </ul>
        </div>
        <div className="flex flex-col space-y-2 mb-4">
          <h3 className="font-bold text-xl font-montserrat  text-amber-800">GENERAL</h3>
          <ul className="space-y-1 text-sm">
   
            <li><a href="#" className="hover:text-amber-600 font-semibold font-mono text-amber-800">Shipping & Delivery Policy</a></li>
            <li><a href="#" className="hover:text-amber-600 font-semibold font-mono text-amber-800">Mobile App</a></li>
            <li><a href="#" className="hover:text-amber-600 font-semibold font-mono text-amber-800">Contact Us</a></li>
            <li><a href="#" className="hover:text-amber-600 font-semibold font-mono text-amber-800" >Whatsapp Us</a></li>
            <li><a href="#" className="hover:text-amber-600 font-semibold font-mono text-amber-800">Our Team</a></li>
            <li><a href="#" className="hover:text-amber-600 font-semibold font-mono text-amber-800">Corporate Information & Investor Relations</a></li>
            <li><a href="#" className="hover:text-amber-600 font-semibold font-mono text-amber-800">We are hiring! ⭐️</a></li>
          </ul>
        </div>

        {/* Contact Details Section */}
        <div className="flex flex-col mb-4">
          <h3 className="font-bold text-xl font-montserrat  text-amber-800">Contact Us</h3>
          <p className="text-sm font-mono">Email: info@example.com</p>
          <p className="text-sm font-mono">Phone: (123) 456-7890</p>
        </div>

      
      </footer>

    </div>
  );
}
