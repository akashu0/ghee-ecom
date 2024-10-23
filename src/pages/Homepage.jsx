import React from "react";
import img2 from "/ghee2.jpg";
import img3 from "/ghee4.jpg";
import {  Link } from "react-router-dom"
import CarouselBanner from "../components/carousel/CarouselBanner";
import ProductGrid from "../components/card/ProductGrid";

function Homepage() {
  return (
    <>


      <div>
        <div className="ml-2 mt-36 min-h-screen">
          <div className="h-[550px]">
            <CarouselBanner />
          </div>
          <div>
            <div className="min-h-[300px] bg-tertiary overflow-x-hidden mt-10">
              <div className="flex items-center">
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in"
                  className="flex-1 pl-6"
                >
                  <img
                    src={img2}
                    alt="asd"
                    id="mobresimgb"
                    className="w-full h-[400px] object-cover rounded-md"
                  />
                </div>
                <div
                  className="flex-1 p-6"
                  data-aos-duration="2200"
                  data-aos-easing="ease-out"
                  data-aos="fade-left"
                >
                  <h1 className="text-4xl font-bold">Ghees!</h1>
                  <span className="mt-5 block">
                    Welcome to our blog! We're so excited to have you here. Our
                    goal is to provide valuable information and insights on a
                    variety of topics that interest you. From lifestyle and
                    wellness to business and technology.
                  </span>
                  <div className="mt-4">
                    <Link
                      to="/products"
                      className="inline-block bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-orange-500 transition"
                    >
                      Explore the ghee's
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="min-h-[300px] mt-20 mb-20">
              {/* <div className="flex items-center">
                <div
                  className="flex-1 p-4"
                  data-aos-duration="2200"
                  data-aos-easing="ease-out"
                  data-aos="fade-right"
                >
                  <h1 className="text-4xl font-bold">What makes it special!</h1>
                  <span className="mt-5 block">
                    Welcome to our blog! We're so excited to have you here. Our
                    goal is to provide valuable information and insights on a
                    variety of topics that interest you. From lifestyle and
                    wellness to business and technology, we strive to bring you
                    the latest news and trends.
                  </span>
                  <div className="mt-4">
                    <Link
                      to="/products"
                      className="inline-block bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-orange-500 transition"
                    >
                      Explore the ghee's
                    </Link>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in"
                  className="flex-1 flex justify-end"
                >
                  <img src={img3} alt="asd" className="w-[200px] h-[200px]" />
                </div>
              </div> */}
              <ProductGrid/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
