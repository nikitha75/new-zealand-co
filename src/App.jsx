import React from "react";
import "./App.css";
import {
  IoIosInformationCircleOutline,
  IoMdArrowDropdown,
} from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { MdOutlineReplay } from "react-icons/md";
import Navbar from "./components/Navbar";
import productImg from "./assets/images/product-img.svg";
import certifications1 from "./assets/images/certifications-img-1.svg";
import certifications2 from "./assets/images/certifications-img-2.svg";
import certifications3 from "./assets/images/certifications-img-3.svg";
import certifications4 from "./assets/images/certifications-img-4.svg";
import certifications5 from "./assets/images/certifications-img-5.svg";
import certifications6 from "./assets/images/certifications-img-6.svg";
import labelPaints1 from "./assets/images/label-paints-img-1.svg";
import labelPaints2 from "./assets/images/label-paints-img-2.svg";
import labelPaints3 from "./assets/images/label-paints-img-3.svg";
import labelPaints4 from "./assets/images/label-paints-img-4.svg";
import labelPaints5 from "./assets/images/label-paints-img-5.svg";
import labelPaints6 from "./assets/images/label-paints-img-6.svg";
import product1 from "./assets/images/product-img-1.svg";
import product2 from "./assets/images/product-img-2.svg";
import product3 from "./assets/images/product-img-3.svg";
import product4 from "./assets/images/product-img-4.svg";
import product5 from "./assets/images/product-img-5.svg";
import product6 from "./assets/images/product-img-6.svg";
import product7 from "./assets/images/product-img-7.svg";
import previousSlideBtn from "./assets/images/previous-slide-btn.svg";
import nextSlideBtn from "./assets/images/next-slide-btn.svg";
import beautyBundle1 from "./assets/images/beauty-bundle-img-1.svg";
import beautyBundle2 from "./assets/images/beauty-bundle-img-2.svg";
import beautyBundle3 from "./assets/images/beauty-bundle-img-3.svg";
import colourclubLogo from "./assets/images/colourclubLogo.svg";
import afterpay from "./assets/images/afterpay.svg";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="hero-section flex flex-col xl:flex xl:flex-row xl:gap-x-8">
        <div>
          <div className="flex">
            <button className="self-center">
              <img src={previousSlideBtn} alt="previous button" />
            </button>
            <div className="">
              <img src={productImg} alt="product" />
            </div>
            <button className="self-center">
              <img src={nextSlideBtn} alt="next button" />
            </button>
          </div>
          <div className="hidden xl:flex xl:gap-2 xl:flex-wrap xl:w-[590px]">
            <div>
              <img src={product1} alt="product" />
            </div>
            <div>
              <img src={product2} alt="product" />
            </div>
            <div>
              <img src={product3} alt="product" />
            </div>
            <div>
              <img src={product4} alt="product" />
            </div>
            <div>
              <img src={product5} alt="product" />
            </div>
            <div>
              <img src={product6} alt="product" />
            </div>
            <div>
              <img src={product7} alt="product" />
            </div>
          </div>
        </div>
        <div className="xl:w-[50%]">
          <h1 className="product-title">
            Manuka Honey UMF<sup className="product-title-sup">TM</sup>{" "}
            <span>24+</span> MGO <span>1122+</span>
          </h1>
          <button type="button" className="hero-btn">
            <span className="info">
              <IoIosInformationCircleOutline />
            </span>
            <span>What is UMF and MGO?</span>
          </button>
          <div className="mt-10 flex flex-col gap-y-4 xl:flex xl:flex-row xl:gap-y-0 xl:justify-between">
            <div className="text-center xl:text-left">The Optimiser</div>
            <div className="flex flex-col xl:flex xl:flex-row gap-x-4 items-center">
              <div className="flex gap-1">
                <FaHeart color="#f0b933" />
                <FaHeart color="#f0b933" />
                <FaHeart color="#f0b933" />
                <FaHeart color="#f0b933" />
                <FaHeart color="#f0b933" />
              </div>
              <div className="reviews">825 REVIEWS</div>
            </div>
          </div>
          <div className="mt-8">
            For those times in life when quality comes first. This pure UMF™ 24+
            Manuka Honey is powerfully active, sourced from wild and rugged
            locations around Aotearoa New Zealand and great for almost all uses.
            It has a full, delicious flavour and your body will love you for it.
          </div>
          <div className="mt-6 flex justify-between">
            <div>
              <img src={certifications1} alt="certification" />
            </div>
            <div>
              <img src={certifications2} alt="certification" />
            </div>
            <div>
              <img src={certifications3} alt="certification" />
            </div>
            <div>
              <img src={certifications4} alt="certification" />
            </div>
            <div>
              <img src={certifications5} alt="certification" />
            </div>
            <div>
              <img src={certifications6} alt="certification" />
            </div>
          </div>
          <div className="mt-8">
            <div>Size (Select One)</div>
            <div className="mt-2">Variant: 125g | 4.4oz</div>
            <div className="mt-6 flex gap-4 xl:flex-wrap">
              <div>
                <img src={labelPaints1} alt="label paints" />
              </div>
              <div>
                <img src={labelPaints2} alt="label paints" />
              </div>
              <div>
                <img src={labelPaints3} alt="label paints" />
              </div>
              <div>
                <img src={labelPaints4} alt="label paints" />
              </div>
              <div>
                <img src={labelPaints5} alt="label paints" />
              </div>
              <div>
                <img src={labelPaints6} alt="label paints" />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div>PAYMENT OPTIONS (SELECT ONE)</div>
            <div className="mt-4 bg-[#F2F2F2] w-[280px] xl:w-full px-6 py-8 rounded-xl">
              <div className="bg-[#F2F2F2] flex flex-col xl:flex xl:flex-row xl:justify-between">
                <button className="bg-[#F1B434] w-[250px] h-[50px]  xl:w-[287px] xl:h-[64px] text-white text-center rounded-full p-4 flex justify-around items-center">
                  <div className="w-[100px] bg-[#F1B434]">
                    One-time purchase
                  </div>
                  <div className="w-[70px] bg-[#F1B434]">$55.88 USD</div>
                </button>
                <button className="w-[250px] h-[50px] mt-4 xl:w-[287px] xl:h-[64px] xl:mt-0 border border-[#F1B434] text-center rounded-full p-4 flex justify-between items-center">
                  <div className="w-[130px] bg-[#F2F2F2]">
                    Subscribe & save 20%
                  </div>
                  <div className="w-[70px] bg-[#F2F2F2]">$44.70 USD</div>
                </button>
              </div>
              <div className="bg-[#F2F2F2] flex gap-2 items-center mt-2">
                <div className="">
                  <MdOutlineReplay />
                </div>
                <div className="bg-[#F2F2F2] text-sm">
                  What is a Subscription?
                </div>
              </div>
            </div>
            <div className="mt-12">
              <div>SELECT QUANTITY</div>
              <div className="mt-2 flex flex-col xl:flex xl:flex-row xl:justify-between">
                <button className="bg-[#F1B434] w-[195px] h-[47px] text-white text-center rounded-full p-4 flex justify-around items-center">
                  <div className="bg-[#F1B434]">-</div>
                  <div className="bg-[#F1B434]">1</div>
                  <div className="bg-[#F1B434]">+</div>
                </button>
                <button className="w-[250px] h-[47px] mt-4 xl:w-[400px] xl:h-[47px] xl:mt-0 bg-[#313131] text-[#FFFFFF] text-center rounded-full p-4 flex justify-center items-center">
                  <div className="bg-[#313131]">ADD TO CART</div>
                </button>
              </div>
            </div>
            <div className="mt-8 p-6 bg-[#F2F2F2] w-[280px] xl:w-full rounded-xl">
              <h2 className="bg-[#F2F2F2] text-center text-lg font-semibold">
                Beauty Bundle
              </h2>
              <div className="mt-4 flex flex-col xl:flex xl:flex-row xl:gap-x-4 bg-[#F2F2F2]">
                <div className="flex flex-col xl:flex xl:flex-row items-center gap-2 bg-[#F2F2F2] ">
                  <div className="bg-[#F2F2F2]">
                    <div className="bg-[#F2F2F2]">
                      <img
                        src={beautyBundle1}
                        alt="beauty bundle"
                        className="bg-[#F2F2F2]"
                      />
                    </div>
                    <div className="py-2 bg-[#F2F2F2] text-sm text-center text-[#313131] font-semibold">
                      UMF 20+
                    </div>
                    <button className="bg-[#F2F2F2] border border-[#CECECE] text-[#313131] px-2 py-1 rounded-full text-sm flex gap-x-1 justify-between items-center">
                      <p className="bg-[#F2F2F2]">250g</p>
                      <p className="">
                        <IoMdArrowDropdown />
                      </p>
                    </button>
                  </div>
                  <div className="bg-[#F2F2F2] justify-self-center">+</div>
                  <div className="bg-[#F2F2F2]">
                    <div className="bg-[#F2F2F2]">
                      <img
                        src={beautyBundle2}
                        alt="beauty bundle"
                        className="bg-[#F2F2F2]"
                      />
                    </div>
                    <div className="py-2 bg-[#F2F2F2] text-sm text-center text-[#313131] font-semibold">
                      UMF 20+
                    </div>
                    <button className="bg-[#F2F2F2] border border-[#CECECE] text-[#313131] px-2 py-1 rounded-full text-sm flex gap-x-1 justify-between items-center">
                      <p className="bg-[#F2F2F2]">250g</p>
                      <p className="">
                        <IoMdArrowDropdown />
                      </p>
                    </button>
                  </div>
                  <div className="bg-[#F2F2F2] justify-self-center">+</div>
                  <div className="bg-[#F2F2F2]">
                    <div className="bg-[#F2F2F2]">
                      <img
                        src={beautyBundle3}
                        alt="beauty bundle"
                        className="bg-[#F2F2F2]"
                      />
                    </div>
                    <div className="py-2 bg-[#F2F2F2] text-sm text-center text-[#313131] font-semibold">
                      UMF 20+
                    </div>
                    <button className="bg-[#F2F2F2] border border-[#CECECE] text-[#313131] px-2 py-1 rounded-full text-sm flex gap-x-1 justify-between items-center">
                      <p className="bg-[#F2F2F2]">250g</p>
                      <p className="">
                        <IoMdArrowDropdown />
                      </p>
                    </button>
                  </div>
                </div>
                <div className="mt-6 xl:mt-0 bg-[#F2F2F2] flex flex-col gap-y-2 justify-center">
                  <div className="bg-[#F2F2F2] text-sm text-center">
                    <span className="line-through text-[#313131] text-xs">
                      $478.75 USD
                    </span>{" "}
                    $430.88 USD{" "}
                    <span className="text-green-700 text-xs">Save 10%</span>
                  </div>
                  <button className="w-[240px] h-[46px] bg-[#313131] text-[#FFFFFF] text-center rounded-full p-4 flex justify-center items-center">
                    <div className="bg-[#313131]">ADD BUNDLE TO CART</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-x-2 items-center text-[#313131]">
              <div>
                <img src={colourclubLogo} alt="colourclub logo" />
              </div>
              <div className="text-sm">
                <div>
                  Colourclub members earn up to{" "}
                  <span className="bg-white rounded-xl p-2 text-[#F39C12]">
                    56
                  </span>{" "}
                  reward points when buy this item.{" "}
                  <span>Sign up or log in</span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-between text-sm text-[#313131]">
              <div>
                <div>DELIVERY</div>
                <div className="mt-2 text-xs">
                  FREE DELIVERY ON ORDERS OVER $30
                </div>
              </div>
              <div>
                <div className="text-xs">ESTIMATED DELIVERY DATE:</div>
                <div className="mt-2 text-xs">Jun 9 - Jun 13 to</div>
              </div>
            </div>
          </div>
          <hr className="my-6 bg-black" />
          <div className="text-sm text-[#313131]">
            <div>AFTER PAY</div>
            <div className="mt-2 flex gap-x-1 items-center">
              or 4 interest-free payments of $13.97 with
              <span>
                <img src={afterpay} alt="afterpay" />
              </span>
            </div>
          </div>
          <div className="my-6 w-full h-[2px] bg-black"></div>
          <div className="mt-4">
            <div>UMF™ SCALE</div>
            <div className="mt-2 flex flex-col xl:flex xl:flex-row xl:gap-x-2 text-sm text-[#313131]">
              <div className="py-2 border-b border-[#E87722] inline-block">
                UMF™ 10+
              </div>
              <div className="py-2 border-b border-[#E10600] inline-block">
                UMF™ 15+
              </div>
              <div className="py-2 border-b border-[#CE0F69] inline-block">
                UMF™ 20+
              </div>
              <div className="py-2 border-b-4 border-[#830065] inline-block">
                UMF™ 24+
              </div>
              <div className="py-2 border-b border-[#0085CA] inline-block">
                UMF™ 26+
              </div>
              <div className="py-2 border-b border-[#3BAD4E] inline-block">
                UMF™ 28+
              </div>
              <div className="py-2 border-b border-[#203E96] inline-block">
                UMF™ 30+
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div>TASTE PROFILE</div>
            <div className="relative mt-4 mb-2">
              <div className="absolute w-full h-[2px] bg-gradient-to-r from-[#E87722] from-10% via-[#3BAD4E] via-30% to-[#203E96] to-90%"></div>
              <div className="absolute top-[-4px] left-[50%] w-3 h-3 bg-black rounded-full"></div>
            </div>
            <div className="py-2 text-xs flex justify-between">
              <div>Clean & Intense</div>
              <div>Bold & Intense</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
