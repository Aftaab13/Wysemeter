import React, { useRef } from "react";
import { motion, useInView, useAnimate, stagger } from "framer-motion";
import clsx from "clsx";
import Medtoc from "./Medtoc";

const Midway = () => {
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const ref8 = useRef();
  const ref9 = useRef();
  const ref10 = useRef();
  const ref11 = useRef();
  const ref12 = useRef();
  const ref13 = useRef();
  const ref14 = useRef();
  const ref15 = useRef();
  const ref16 = useRef();
  const ref17 = useRef();
  const inview = useInView(ref, { once: true });
  const inview2 = useInView(ref2, { once: true });
  const inview3 = useInView(ref3, { once: true });
  const inview4 = useInView(ref4, { once: true });
  const inview5 = useInView(ref5, { once: true });
  const inview6 = useInView(ref6, { once: true });
  const inview7 = useInView(ref7, { once: true });
  const inview8 = useInView(ref8, { once: true });
  const inview9 = useInView(ref9, { once: true });
  const inview10 = useInView(ref10, { once: true });
  const inview11 = useInView(ref11, { once: true });
  const inview12 = useInView(ref12, { once: true });
  const inview13 = useInView(ref13, { once: true });
  const inview14 = useInView(ref14, { once: true });
  const inview15 = useInView(ref15, { once: true });
  const inview16 = useInView(ref16, { once: true });
  const inview17 = useInView(ref17, { once: true });
  return (
    <div>
      <div className="bg-white  overflow-hidden w-full rounded-t-[25px] z-20 relative">
        <div className="px-2 pb-[40px]">
          <div className=" md:flex md:gap-[6rem] xl:gap-[15rem] md:py-[40px] md:p-4">
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inview ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={clsx(
                "flex items-center md:items-start gap-2 pt-[70px] md:p-0 "
              )}
            >
              <div className="text-black rounded-[50%] border-[1px] border-black w-[1em] h-[1em] flex justify-center items-center text-[13px] p-2">
                2
              </div>
              <div className="text-white bg-[#1c3568] w-max p-[4px] font-Font1 font-medium rounded-[5px] text-[12px] px-2">
                Consumption Stats
              </div>
            </motion.div>

            <motion.div
              ref={ref2}
              initial={{ opacity: 0 }}
              animate={inview2 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className=" text-[18px] md:text-[1.8em] font-Font2 leading-6 text-black font-semibold w-[22rem] pt-[30px] pb-[30px] md:p-0 md:leading-8 md:w-[49rem] xm:w-[31rem] lg:w-[50rem] xl:w-[55rem]"
            >
              Wyse works with building owners, developers, and property managers
              to create a greener, more energy efficient future for their
              buildings and residents.
            </motion.div>
          </div>

          <div className="flex flex-col gap-1 ">
            <div className=" md:flex md:gap-3">
              <motion.div
                ref={ref3}
                initial={{ opacity: 0 }}
                animate={inview3 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" border-[2px] rounded-[10px] grid gap-[30px] p-3 md:w-[14rem]  xm:w-[16rem] lg:w-[22rem] xl:w-[25rem]"
              >
                <div className=" font-Font2 text-black font-semibold text-[30px] md:text-[40px] xl:text-[60px] flex justify-left items-start gap-2">
                  5x
                  <div className="bg-green-400 p-[5px] rounded-full  rotate-180">
                    <img
                      className="w-[12px] h-[12px]   "
                      src="/public/images/green.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" font-Font1 text-[#0e1014] w-[22rem] text-[1em] md:text-[13px] md:w-[13rem] lg:w-[20rem] ">
                  Wyse Meter named a Top Growing Company by the Globe and Mail
                  for the 5th time
                </div>
              </motion.div>

              <motion.div
                ref={ref4}
                initial={{ opacity: 0 }}
                animate={inview4 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" border-[2px] rounded-[10px] grid gap-[30px] p-3  md:w-[15rem] lg:w-[19rem] xl:w-[25rem]"
              >
                <div className=" font-Font2 text-black font-semibold text-[30px] md:text-[40px] xl:text-[60px]   flex justify-left items-start gap-2">
                  270,000
                  <div className="bg-green-400 p-[5px] rounded-full  rotate-180">
                    <img
                      className="w-[12px] h-[12px] "
                      src="/public/images/green.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" font-Font1 text-[#0e1014] w-[22rem] text-[1em] md:text-[13px] md:w-[16rem] lg:w-[18rem] ">
                  Suites serviced and counting
                </div>
              </motion.div>

              <motion.div
                ref={ref5}
                initial={{ opacity: 0 }}
                animate={inview5 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" border-[2px] rounded-[10px] grid gap-[30px] p-3  md:w-[14rem] xm:w-[16rem] lg:w-[20rem] xl:w-[25rem]"
              >
                <div className=" font-Font2 text-black font-semibold text-[30px] md:text-[40px] xl:text-[60px]  flex justify-left items-start gap-2">
                  30%
                  <div className="bg-[#2d69e0] p-[5px] rounded-full  rotate-">
                    <img
                      className="w-[12px] h-[12px]   "
                      src="/public/images/green.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" font-Font1 text-[#0e1014] w-[20rem] text-[1em]  md:w-[13rem] md:text-[13px] lg:w-[20rem]">
                  Reduction in electricity usage when suites are submetered
                </div>
              </motion.div>
            </div>

            <div className="md:flex md:gap-3">
              <motion.div
                ref={ref6}
                initial={{ opacity: 0 }}
                animate={inview6 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" border-[2px] rounded-[10px] grid gap-[30px] p-3  md:w-[14rem]  xm:w-[16rem] lg:w-[22rem] xl:w-[25rem]"
              >
                <div className=" font-Font2 text-black font-semibold text-[30px] md:text-[40px] xl:text-[60px]  flex justify-left items-start gap-2">
                  80%
                  <div className="bg-green-400 p-[5px] rounded-full  rotate-180">
                    <img
                      className="w-[12px] h-[12px] "
                      src="/public/images/green.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" font-Font1 text-[#0e1014] w-[22rem] text-[1em]  md:w-[12rem] md:text-[13px]">
                  Of EV charging takes place at home
                </div>
              </motion.div>

              <motion.div
                ref={ref7}
                initial={{ opacity: 0 }}
                animate={inview7 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" border-[2px] rounded-[10px] grid gap-[30px] p-3  md:w-[15rem] lg:w-[19rem] xl:w-[25rem]"
              >
                <div className=" font-Font2 text-black font-semibold text-[30px] md:text-[40px] xl:text-[60px]  flex justify-left items-start gap-2">
                  7.5 billion
                  <div className="bg-[#2d69e0] p-[5px] rounded-full  rotate-">
                    <img
                      className="w-[12px] h-[12px]   "
                      src="/public/images/green.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" font-Font1 text-[#0e1014] w-[20rem] text-[1em]  md:w-[13rem] md:text-[13px] lg:w-[20rem] xl:w-[22rem]">
                  Grams of CO2 emissions Wyse has pledged to reduce by 2025
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="bg-[#f5f7fa]  rounded-t-[30px]">
          <div className=" md:flex  md:justify-between md:pt-9">
            <motion.div
              ref={ref8}
              initial={{ opacity: 0 }}
              animate={inview8 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center md:items-start gap-2 pt-[40px] p-5"
            >
              <div className="text-black rounded-[50%] border-[1px] border-black w-[1em] h-[1em] flex justify-center items-center text-[13px] p-3">
                3
              </div>
              <div className="text-white bg-[#1c3568] w-max p-[4px] font-Font1 font-medium rounded-[5px] text-[12px] px-2">
                Markets
              </div>
            </motion.div>
            <motion.div
              ref={ref9}
              initial={{ opacity: 0, y: 20 }}
              animate={inview9 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="px-4 md:p"
            >
              <p className="text-[2em] md:text-[4em]  md:text-center md:leading-[60px] font-Font2 font-semibold">
                {" "}
                <span>W</span>e Support
              </p>
              <p className="text-[2em] md:text-[4em] md:text-center md:leading-[60px]  font-Font2 font-semibold">
                All Building Types
              </p>
            </motion.div>
            <div className="hidden md:flex  h-max pr-4 ">
              <div className="border-[2px] p-1 text-[12px] text-black w-max rounded-[7px] px-2 border-black">
                We Support
              </div>
            </div>
          </div>

          <div className="flex flex-col pt-8 md:p-1 md:pt-8">
            {" "}
            <div className="md:flex">
              <div className="px-4 pb-2 md:px-1">
                {" "}
                <div className="bg-white rounded-[5px] h-auto md:w-[15rem] xm:w-[16rem] lg:w-[21rem] xl:w-[26rem]">
                  <motion.div
                    ref={ref10}
                    initial={{ opacity: 0 }}
                    animate={inview10 ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="pl-3 pt-3"
                  >
                    <p className=" text-[1em] font-medium font-Font1">
                      Residential Rental
                    </p>
                    <p className=" text-[14px]  font-Font1">
                      Turning apartment living into a sustainable solution for
                      builders, owners, and residents alike
                    </p>
                    <img
                      className="w-[13rem] xm:w-[15rem] mx-auto"
                      src="/images/RR.png"
                      alt=""
                    />
                  </motion.div>
                </div>
              </div>
              <div className="px-4 pb-2 md:px-1">
                {" "}
                <div className="bg-white rounded-[5px] h-auto md:w-[16rem]  lg:w-[21rem] xl:w-[26rem]">
                  <motion.div
                    ref={ref11}
                    initial={{ opacity: 0 }}
                    animate={inview11 ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="pl-3 pt-3"
                  >
                    <p className=" text-[1em] font-medium font-Font1">
                      Condominium
                    </p>
                    <p className=" text-[14px]  font-Font1 w-[16rem] md:w-[14rem] lg:w-[20rem] xl:w-[25rem]">
                      Greener condo living solutions, from construction to long
                      term sustainable lifestyles
                    </p>
                    <img
                      className="w-[13rem] xm:w-[15rem] mx-auto"
                      src="/images/COM.png"
                      alt=""
                    />
                  </motion.div>
                </div>
              </div>
              <div className="px-4 pb-2 md:px-1">
                {" "}
                <div className="bg-white rounded-[5px]  h-auto md:w-[15rem] xm:w-[16rem]  lg:w-[21rem] xl:w-[25rem]">
                  <motion.div
                    ref={ref12}
                    initial={{ opacity: 0 }}
                    animate={inview12 ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="pl-3 pt-3"
                  >
                    <p className=" text-[1em] font-medium font-Font1">
                      Mixed-Use
                    </p>
                    <p className=" text-[14px]  font-Font1 xl:w-[24rem]">
                      Wyse’s wide range of utilities management services match
                      the versatility of your building
                    </p>
                    <img
                      className="w-[13rem] xm:w-[15rem] mx-auto"
                      src="/images/Mix.png"
                      alt=""
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className=" md:flex">
              <div className="px-4 pb-2 md:px-1">
                {" "}
                <div className="bg-white rounded-[5px]  h-auto xm:h-[16rem] lg:h-[15rem] md:w-[15rem] xm:w-[16rem]  lg:w-[21rem] xl:w-[26rem]">
                  <motion.div
                    ref={ref13}
                    initial={{ opacity: 0 }}
                    animate={inview13 ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="pl-3 pt-3"
                  >
                    <p className=" text-[1em] font-medium font-Font1">
                      Affordable Housing
                    </p>
                    <p className=" text-[14px]  font-Font1">
                      Sustainable utilities solutions and savings for those who
                      need it most
                    </p>
                    <img
                      className="w-[13rem] xm:w-[15rem] mx-auto"
                      src="/images/AU.png"
                      alt=""
                    />
                  </motion.div>
                </div>
              </div>
              <div className="px-4 pb-2 md:px-1">
                {" "}
                <div className="bg-white rounded-[5px] h-auto md:w-[16rem]  lg:w-[21rem] xl:w-[26rem]">
                  <motion.div
                    ref={ref13}
                    initial={{ opacity: 0 }}
                    animate={inview13 ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="pl-3 pt-3"
                  >
                    <p className=" text-[1em] font-medium font-Font1">
                      Commercial
                    </p>
                    <p className=" text-[14px]  font-Font1 w-[20rem] md:w-[15rem]  lg:w-[18rem]">
                      Better utilities management means a better future for the
                      planet and your bottom line
                    </p>
                    <img
                      className="w-[13rem] xm:w-[15rem] mx-auto"
                      src="/images/Comm.png"
                      alt=""
                    />
                  </motion.div>
                </div>
              </div>
              <div className="px-4 pb-2 md:px-1">
                {" "}
                <div className="bg-white rounded-[5px] h-auto md:w-[15rem] xm:w-[16rem]  lg:w-[21rem] xl:w-[25rem]">
                  <motion.div
                    ref={ref14}
                    initial={{ opacity: 0 }}
                    animate={inview14 ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="pl-3 pt-3"
                  >
                    <p className=" text-[1em] font-medium font-Font1">
                      Student Housing
                    </p>
                    <p className=" text-[14px]  font-Font1">
                      Simplified, sustainable utilities management solutions for
                      individual leases
                    </p>
                    <img
                      className="w-[13rem] xm:w-[15rem] mx-auto"
                      src="/images/SHO.png"
                      alt=""
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className=" p-4 pt-[40px]">
            <div className=" border-[0.5px] border-gray"></div>
          </div>

          <div className="p-5 md:pt-0 md:flex md:justify-between md:pb-[40px] xl:pb-[100px]">
            <motion.div
              ref={ref15}
              initial={{ opacity: 0 }}
              animate={inview15 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-2 items-center md:flex md:items-start"
            >
              <div className="text-black rounded-[50%] border-[1px] border-black w-[1em] h-[1em] flex justify-center items-center text-[13px] p-3">
                4
              </div>
              <div className="text-white bg-[#1c3568] w-max p-[4px] font-Font1 font-medium rounded-[5px] text-[12px] px-2">
                Sustainability
              </div>
            </motion.div>
            <div className="  md:border-l-[2px] md:pl-6 md:border-r-[2px] md:border-b-[2px]   md:pr-6">
              <motion.div
                ref={ref16}
                initial={{ opacity: 0 }}
                animate={inview16 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" text-[1.75em] md:text-[3.5em] font-Font2 w-[20rem] md:w-[23rem] lg:w-[35rem] md:leading-[50px]  md:pt-0  leading-9 font-semibold  pt-5"
              >
                We Champion Green Energy & Sustainable Technology{" "}
              </motion.div>
              <motion.div
                ref={ref17}
                initial={{ opacity: 0 }}
                animate={inview17 ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[340px] lg:w-[575px] text-[14px] pt-4 font-Font1 pb-[60px]"
              >
                Wyse exemplifies the spirit of our industry by embracing and
                advocating a triple-bottom line approach to sustainability, with
                equal parts commitment to environmental, social, and financial
                responsibilities. We are one of the only providers offering a
                holistic utility management solution.
              </motion.div>
            </div>
          </div>

          <Medtoc />
        </div>
      </div>
    </div>
  );
};

export default Midway;
