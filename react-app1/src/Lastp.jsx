import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Logos from "./Logos";

const Lastp = () => {
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const inview = useInView(ref, { once: true });
  const inview2 = useInView(ref2, { once: true });
  const inview3 = useInView(ref3, { once: true });
  const inview4 = useInView(ref4, { once: true });
  return (
    <div className="bg-[#f5f7fa]   w-full z-20 relative">
      <div className=" bg-white  overflow-hidden  rounded-t-[25px]    ">
        <div className="p-3 pt-[60px] xm:pt-0">
          <div className=" border-b-[1px]"></div>
        </div>

        <div className=" ">
          <div className=" flex flex-col gap-5 p-3 md:grid md:grid-cols-2 md:gap-[2rem] md:p-0">
            <div>
              <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inview ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex gap-1 items-center  md:flex md:items-start md:pl-3"
              >
                <div className="text-black rounded-[50%] border-[1px] border-black w-[1em] h-[1em] flex justify-center items-center text-[13px] p-3">
                  5
                </div>
                <div className="text-white bg-[#1c3568] w-max p-[4px] font-Font1 font-medium rounded-[5px] text-[12px] px-2">
                  Wyse Helping Homes
                </div>
              </motion.div>
            </div>
            <div className="flex flex-col gap-5 md:grid md:gap-[40px] md:border-l-[2px] md:pl-6  md:border-r-[2px] md:pr-6 ">
              <motion.div
                ref={ref2}
                initial={{ opacity: 0 }}
                animate={inview2 ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" text-[1.75em] md:text-[3.5em] md:leading-[50px] font-Font2 font-semibold leading-8"
              >
                You Meter. <br />
                We Give.
              </motion.div>
              <motion.div
                ref={ref3}
                initial={{ opacity: 0 }}
                animate={inview3 ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className=" text-[13px] font-Font1  md:w-[20rem] lg:w-auto xl:w-[34rem]">
                  When you meter with Wyse, you’re getting more than great
                  service – you’re giving the most vulnerable members of the
                  community a chance. The Wyse Helping Homes Program supports
                  organizations that provide services, meals, and housing to
                  individuals and families in need. This employee-driven
                  initiative is part of our commitment to the communities we
                  live, work, and operate in – and to the kind of society we
                  hope to help build.
                </div>
              </motion.div>
              <motion.div
                ref={ref4}
                initial={{ opacity: 0 }}
                animate={inview4 ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-2 pb-10"
              >
                <img
                  className="bg-[#2d69e0] p-3 rounded-full"
                  src="/public/images/ArrowW.svg"
                  alt=""
                />
                <div className="font-Font1 text-[#2d69e0] text-[12px] ">
                  LEARN MORE
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="bg-[#f5f7fa] rounded-t-[25px] ">
          <div className=" p-5 ">
            <div className="md:flex justify-between">
              <div className="flex gap-1 items-center  md:flex md:items-start md:pl-3 pt-[50px] ">
                <div className="text-black rounded-[50%] border-[1px] border-black w-[1em] h-[1em] flex justify-center items-center text-[13px] p-3">
                  6
                </div>
                <div className="text-white bg-[#1c3568] w-max p-[4px] font-Font1 font-medium rounded-[5px] text-[12px] px-2">
                  Case Studies
                </div>
              </div>
              <div className=" text-[2em] md:text-[3.5em] md:text-center w-[20rem] md:leading-[50px] font-Font2 font-semibold leading-8 pt-3">
                Sustainability Success Stories
              </div>
              <div className="hidden md:flex  h-max pr-4 ">
                <div className="border-[2px] p-1 text-[12px] text-black w-max rounded-[7px] px-2 border-black">
                  Success Stories
                </div>
              </div>
            </div>
          </div>
          <div className=" p-3  md:hidden">
            <div className=" bg-white p-4 rounded-t-[10px] ">
              <div className=" flex ">
                <div className=" text-[1em] font-Font2 font-semibold">
                  Optimal Suite Metering in New Construction
                </div>
                <div className="text-white bg-[#1c3568] h-max  p-[4px] font-Font1 font-medium rounded-[5px] text-[12px] px-2">
                  Toronto
                </div>
              </div>
              <div className=" font-Font1 text-[#676d7a] text-[.88em]">
                Perfecting meter placement
              </div>
            </div>
            <div className=" h-[16rem] w-[22rem] rounded-b-[10px] bg-cover bg-no-repeat bg-[url('/images/MB.jpg')] flex justify-end items-end p-4">
              <img
                className="bg-white p-3 rounded-full absolute "
                src="/public/images/ArrowB.svg"
                alt=""
              />
            </div>

            <div className="pt-2 ">
              <div className=" bg-white p-4 rounded-t-[10px]  ">
                <div className=" flex ">
                  <div className=" text-[1em] font-Font2 font-semibold">
                    Auxiliary Submetering for HVAC Equipment
                  </div>
                  <div className="text-white bg-[#1c3568] h-max  p-[4px] font-Font1 font-medium rounded-[5px] text-[12px] px-2">
                    Toronto
                  </div>
                </div>
                <div className=" font-Font1 text-[#676d7a] text-[.88em]">
                  Enhancing multibuilding HVAC efficiency
                </div>
              </div>
              <div className=" h-[16rem] w-[22rem] rounded-b-[10px] bg-cover bg-no-repeat bg-[url('/images/MBB.jpg')] flex justify-end items-end p-4 ">
                <img
                  className="bg-white p-3 rounded-full absolute "
                  src="/public/images/ArrowB.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="pt-2">
              <div className=" bg-white p-4 rounded-t-[10px]  ">
                <div className=" flex">
                  <div className=" text-[1em] font-Font2 font-semibold ">
                    EV Charging Education for Building Owners and Residents
                  </div>
                  <div className="text-white bg-[#1c3568] h-max  p-[4px] font-Font1 font-medium rounded-[5px] text-[12px] px-2">
                    Canada
                  </div>
                </div>
                <div className=" font-Font1 text-[#676d7a] text-[.88em]">
                  Driving EV adoption
                </div>
              </div>
              <div className=" h-[16rem] w-[22rem] rounded-b-[10px] bg-cover bg-no-repeat bg-[url('/images/Wyse.jpg')] flex justify-end items-end p-4">
                <img
                  className="bg-white p-3 rounded-full absolute "
                  src="/public/images/ArrowB.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-2 p-3 cursor-pointer">
            <div>
              <div className=" bg-white p-4 pb-9 rounded-t-[10px]  ">
                <div className=" flex justify-between ">
                  <div className=" text-[1em] font-Font2 font-semibold w-[10rem] lg:w-[14rem]">
                    Optimal Suite Metering in New Construction
                  </div>
                  <div className="text-white bg-[#1c3568] h-max  p-[4px] font-Font1 font-medium rounded-[5px] text-[12px] px-2">
                    Toronto
                  </div>
                </div>
                <div className=" font-Font1 text-[#676d7a] text-[.88em] w-[13rem]">
                  Perfecting meter placement
                </div>
              </div>
              <div className=" overflow-hidden  rounded-b-[10px]">
                <div className=" h-[12rem] w-[15rem]  lg:w-[20rem] lg:h-[15rem] xl:w-[25.5rem] xl:h-[19rem]  bg-cover bg-no-repeat bg-[url('/images/MB.jpg')] flex justify-end items-end p-4 relative hover:scale-110 transform transition-transform duration-300 ">
                  <img
                    className="bg-white p-3 rounded-full absolute "
                    src="/public/images/ArrowB.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div className=" bg-white p-4 lg:pb-9 rounded-t-[10px]  ">
                <div className=" flex justify-between ">
                  <div className=" text-[1em] font-Font2 font-semibold w-[10rem] lg:w-[15rem]">
                    Auxiliary Submetering for HVAC Equipment
                  </div>
                  <div className="text-white bg-[#1c3568] h-max  p-[4px] font-Font1 font-medium rounded-[5px] text-[12px] px-2">
                    Toronto
                  </div>
                </div>
                <div className=" font-Font1 text-[#676d7a] text-[.88em] w-[13rem] lg:w-[18rem]">
                  Enhancing multibuilding HVAC efficiency
                </div>
              </div>
              <div className=" overflow-hidden  rounded-b-[10px]">
                <div className=" h-[12rem] w-[15rem] lg:w-[20rem] lg:h-[15rem] xl:w-[25.5rem] xl:h-[19rem] rounded-b-[10px] bg-cover bg-no-repeat bg-[url('/images/MBB.jpg')] flex justify-end items-end p-4 relative hover:scale-110 transform transition-transform duration-300 ">
                  <img
                    className="bg-white p-3 rounded-full absolute "
                    src="/public/images/ArrowB.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div className=" bg-white p-4 lg:pb-9 rounded-t-[10px]  ">
                <div className=" flex justify-between">
                  <div className=" text-[1em] font-Font2 font-semibold w-[10rem] lg:w-[18rem] xl:w-[15rem]">
                    EV Charging Education for Building Owners and Residents
                  </div>
                  <div className="text-white bg-[#1c3568] h-max  p-[4px] font-Font1 font-medium rounded-[5px] text-[12px] px-2">
                    Canada
                  </div>
                </div>
                <div className=" font-Font1 text-[#676d7a] text-[.88em] w-[13rem]">
                  Driving EV adoption
                </div>
              </div>
              <div className=" overflow-hidden  rounded-b-[10px]">
                <div className=" h-[12rem] w-[15rem] lg:w-[20rem] lg:h-[15rem] xl:w-[25.5rem] xl:h-[19rem] rounded-b-[10px] bg-cover bg-no-repeat bg-[url('/images/Wyse.jpg')] flex justify-end items-end p-4  relative hover:scale-110 transform transition-transform duration-300">
                  <img
                    className="bg-white p-3 rounded-full absolute "
                    src="/public/images/ArrowB.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" pt-[40px]  xl:w-[60rem] mx-auto">
            <div className=" text-[1.3em] md:text-[2.8em] text-center  p-2 font-semibold font-Font2">
              Top Building Owners, Developers & Property Managers Trust Wyse
            </div>
          </div>
        </div>
      </div>
      <Logos />
    </div>
  );
};

export default Lastp;
