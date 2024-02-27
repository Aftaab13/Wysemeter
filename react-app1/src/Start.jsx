import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import clsx from "clsx";

const Start = () => {
  const [videoSrc, setVideoSrc] = useState("/public/Videos/introV.webm");
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const inview = useInView(ref, {});
  const inview2 = useInView(ref2, {});
  const inview3 = useInView(ref3, {});
  const inview4 = useInView(ref4, {});
  const inview5 = useInView(ref5, {});
  const inview6 = useInView(ref6, {});
  const [firstinview, setFirstInView] = useState(false);

  useEffect(() => {
    if (inview) {
      setFirstInView(true);
    }
    if (inview5) {
      setFirstInView(false);
    }
    if (inview) {
      setVideoSrc("/public/Videos/MIDD.mp4");
    }
  }, [inview, inview5]);

  const videoRef = useRef(null);

  useEffect(() => {
    const handleTimeUpdate = () => {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (inview) {
        if (currentTime >= 1) {
          videoRef.current.currentTime = 0;
        }
      }
      if (inview2) {
        if (currentTime >= 4) {
          videoRef.current.currentTime = 3.3;
        }
      }
      if (inview3) {
        if (currentTime >= 8.3) {
          videoRef.current.currentTime = 6.5;
        }
      }
      if (inview4) {
        if (currentTime >= 11) {
          videoRef.current.currentTime = 11.5;
        }
      }
    };

    videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [inview, inview2, inview3, inview4]);

  return (
    <div className="relative">
      <div className="overflow-hidden  fixed top-0 h-[100vh] w-full">
        <div className="">
          {" "}
          <video
            className={clsx(
              "w-full h-[100vh]  object-cover absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2",
              inview ? "hidden" : ""
            )}
            autoPlay
            muted
            crossfade
            src={"/public/Videos/introV.webm"}
          ></video>
          <video
            className={clsx(
              "w-full h-[100vh]  object-cover absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2",
              inview5 ? "hidden" : "block"
            )}
            autoPlay
            muted
            crossfade
            ref={videoRef}
            src={"/public/Videos/MIDD.mp4"}
          ></video>
        </div>
      </div>

      <div className=" relative z-5 pt-[50px] px-4 h-[540vh] flex flex-col gap-[90vh]">
        <div
          ref={ref5}
          className="  font-Font2 text-white text-[40px] w-[12rem] font-semibold leading-[40px] md:text-[70px] md:w-[23rem] md:leading-[60px] md:pl-[20px] lg:text-[45px] lg:w-[16rem] lg:leading-10"
        >
          Measured to Matter
        </div>

        <div>
          <div className="flex items-center gap-2  md:pl-[20px]">
            <div
              ref={ref}
              className="text-white rounded-[50%] border-[1px] w-[1em] h-[1em] flex justify-center items-center text-[13px] p-2"
            >
              1
            </div>
            <div className="text-white bg-[#1c3568] w-max p-[4px] font-Font1 font-medium rounded-[5px] text-[12px]">
              Our Solutions
            </div>
            <div className="text-white font-Font1 font-medium text-[12px]">
              For Your Buildings
            </div>
          </div>

          <div className=" font-Font2 text-white text-[40px] w-[12rem] font-semibold leading-[40px] pt-[10px] md:pt-[30px] md:text-[70px] md:w-[42rem] md:leading-[60px] md:pl-[20px] lg:text-[45px] lg:w-[32rem]">
            Utility Submetering & Billing
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2  md:pl-[20px]">
            <div
              ref={ref2}
              className="text-white rounded-[50%] border-[1px] w-[1em] h-[1em] flex justify-center items-center text-[13px] p-2"
            >
              1
            </div>
            <div className="text-white bg-[#1c3568] w-max p-[4px] font-Font1 font-medium rounded-[5px] text-[12px]">
              Our Solutions
            </div>
            <div className="text-white font-Font1 font-medium text-[12px]">
              For Your Buildings
            </div>
          </div>
          <div className=" font-Font2 text-white text-[40px] w-[15rem] font-semibold leading-[40px] pt-[10px] md:pt-[30px] md:text-[70px] md:w-[42rem] md:leading-[60px] md:pl-[20px] lg:text-[45px] lg:w-[30rem] ">
            Utility Data & Reporting
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2  md:pl-[20px]">
            <div
              ref={ref3}
              className="text-white rounded-[50%] border-[1px] w-[1em] h-[1em] flex justify-center items-center text-[13px] p-2"
            >
              1
            </div>
            <div className="text-white bg-[#1c3568] w-max p-[4px] font-Font1 font-medium rounded-[5px] text-[12px]">
              Our Solutions
            </div>
            <div className="text-white font-Font1 font-medium text-[12px]">
              For Your Buildings
            </div>
          </div>
          <div className=" font-Font2 text-white text-[40px] w-[21rem] font-semibold leading-[40px] pt-[10px]  md:pt-[30px] md:text-[70px] md:w-[42rem] md:leading-[60px] md:pl-[20px] lg:text-[45px] lg:w-[32rem]">
            Heating & Cooling Services
          </div>
        </div>

        <div>
          <div ref={ref4} className="flex items-center gap-2 md:pl-[20px]">
            <div className="text-white rounded-[50%] border-[1px] w-[1em] h-[1em] flex justify-center items-center text-[13px] p-2">
              1
            </div>
            <div className="text-white bg-[#1c3568] w-max p-[4px] font-Font1 font-medium rounded-[5px] text-[12px]">
              Our Solutions
            </div>
            <div className="text-white font-Font1 font-medium text-[12px]">
              For Your Buildings
            </div>
          </div>
          <div className=" font-Font2 text-white text-[40px] w-[21rem] font-semibold leading-[40px] pt-[10px]  md:pt-[30px] md:text-[70px] md:w-[42rem] md:leading-[60px] md:pl-[20px] lg:text-[45px] lg:w-[32rem]">
            EV Charging
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={firstinview ? { opacity: 0 } : { opacity: 1 }}
        transition={{}}
        className="  px-5 w-full z-5 fixed bottom-2"
      >
        <div className="md:flex  md:justify-between border-t-[1px] border-r-[1px] md:border-r-0 ">
          <div className="font-Font1 text-white text-[14px]  w-[340px] md:w-[515px] lg:w-[685px] pt-3 pr-[5px]">
            We’re Canada’s leading technology company dedicated to empowering
            smart, sustainable ways to live. From city builders to city
            residents, we’re changing the way Canadians think about tomorrow —
            today.
          </div>

          <div className="pt-2 md:border-l-[1px] md:pl-3">
            <div className=" bg-white rounded-[6px] p-3 md:hidden ">
              <div className=" flex gap-2  justify-center items-center">
                <img className="" src="/public/images/Dot2.svg" alt="" />
                <p className="text-[#1c3568] text-[12px] font-medium ">
                  WORK WITH US
                </p>
              </div>
            </div>
            <div
              className={clsx(
                " hidden md:flex flex-col bg-white rounded-[6px] p-3 px-8 w-max lg:px-[4rem] lg:p-3 ",
                setIsHovered ? "bg-[#1c3568] " : ""
              )}
            >
              <div className=" flex gap-2 ">
                <img src="/public/images/Dot2.svg" alt="" />
                <p
                  className={clsx(
                    "text-[#1c3568] text-[12px] font-Font1 font-medium ",
                    setIsHovered ? " " : " text-white"
                  )}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  WORK WITH US
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-3 ">
          <div className="">
            <div className="hidden md:flex bg-[#0e1014cc] p-4 lg:p-3 rounded-[10px] justify-between items-center ">
              <div className=" lg:flex lg:gap-[8rem] ">
                <div className="font-Font1 text-white text-[12px] font-bold">
                  Do you live in a Wyse building?
                </div>
                <div className="   w-[23rem] font-Font1 text-white text-[12px]   ">
                  Let us help you organize your new account, track your utility
                  usage, and save cash and carbon.
                </div>
              </div>

              <div className="flex items-center gap-2">
                <img
                  className="bg-white p-3 rounded-full"
                  src="/public/images/ArrowB.svg"
                  alt=""
                />
                <div className="font-Font1 text-white text-[12px] ">
                  GET STARTED
                </div>
              </div>
              <div>
                <img
                  className="bg-[#1f2229] p-3 w-[3rem] rounded-full"
                  src="/public/images/CrossXB.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inview ? { opacity: 1 } : { opacity: 0 }}
        transition={{}}
        className="  px-6 w-full z-5 fixed bottom-4"
      >
        <div className="md:flex  md:justify-between border-t-[1px] border-r-[1px] md:border-r-0">
          <div className="font-Font1 text-white text-[14px]  w-[333px] md:w-[400px] lg:w-[400px] md:pb-5 pt-3">
            Give your residents or tenants control of their utility usage,
            allocate energy costs, and reduce energy waste.
          </div>

          <div className="pt-2 md:border-l-[1px] md:pl-3">
            <div className=" bg-white rounded-[6px] p-3 md:hidden ">
              <div className=" flex gap-2  justify-center items-center">
                <img className="" src="/public/images/Dot2.svg" alt="" />
                <p className="text-[#1c3568] text-[12px] font-medium ">
                  LEARN MORE
                </p>
              </div>
            </div>
            <div className=" hidden md:flex flex-col bg-white rounded-[6px] p-3 px-8 w-max lg:px-[4rem] lg:p-3 ">
              <div className=" flex gap-2 ">
                <img src="/public/images/Dot2.svg" alt="" />
                <p className="text-[#1c3568] text-[12px] font-Font1 font-medium ">
                  LEARN MORE
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inview2 ? { opacity: 1 } : { opacity: 0 }}
        transition={{}}
        className="  px-6 w-full z-5 fixed bottom-4"
      >
        <div className="md:flex  md:justify-between border-t-[1px] border-r-[1px] md:border-r-0">
          <div className="font-Font1 text-white text-[14px]  w-[333px] md:w-[420px] lg:w-[420px] md:pb-5 pt-3 ">
            Using a fully integrated portal, you can track energy usage and
            utilities expenses in real time.
          </div>

          <div className="pt-2 md:border-l-[1px] md:pl-3">
            <div className=" bg-white rounded-[6px] p-3 md:hidden ">
              <div className=" flex gap-2  justify-center items-center">
                <img className="" src="/public/images/Dot2.svg" alt="" />
                <p className="text-[#1c3568] text-[12px] font-medium ">
                  LEARN MORE
                </p>
              </div>
            </div>
            <div className=" hidden md:flex flex-col bg-white rounded-[6px] p-3 px-8 w-max lg:px-[4rem] lg:p-3 ">
              <div className=" flex gap-2 ">
                <img src="/public/images/Dot2.svg" alt="" />
                <p className="text-[#1c3568] text-[12px] font-Font1 font-medium ">
                  LEARN MORE
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inview3 ? { opacity: 1 } : { opacity: 0 }}
        transition={{}}
        className="  px-6 w-full z-5 fixed bottom-4"
      >
        <div className="md:flex  md:justify-between  border-t-[1px] border-r-[1px] md:border-r-0">
          <div className="font-Font1 text-white text-[14px]  w-[333px] md:w-[400px] lg:w-[400px] md:pb-5 pt-3">
            Achieve the perfect blend of comfort and sustainability with
            innovative heating and cooling solutions.
          </div>

          <div className="pt-2  md:border-l-[1px] md:pl-3">
            <div className=" bg-white rounded-[6px] p-3 md:hidden ">
              <div className=" flex gap-2  justify-center items-center">
                <img className="" src="/public/images/Dot2.svg" alt="" />
                <p className="text-[#1c3568] text-[12px] font-medium ">
                  LEARN MORE
                </p>
              </div>
            </div>
            <div className=" hidden md:flex flex-col bg-white rounded-[6px] p-3 px-8 w-max lg:px-[4rem] lg:p-3 ">
              <div className=" flex gap-2 ">
                <img src="/public/images/Dot2.svg" alt="" />
                <p className="text-[#1c3568] text-[12px] font-Font1 font-medium ">
                  LEARN MORE
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inview4 ? { opacity: 1 } : { opacity: 0 }}
        className="  px-6 w-full z-30 sticky bottom-4 "
      >
        <div className="md:flex  md:justify-between border-t-[1px] border-r-[1px] md:border-r-0">
          <div className="font-Font1 text-white text-[14px]  w-[333px] md:w-[440px] lg:w-[450px] md:pb-5 pt-3">
            Cut your residents’ carbon footprint by providing them advanced
            electric vehicle charging stations at home.
          </div>

          <div className="pt-2">
            <div className=" bg-white rounded-[6px] p-3 md:hidden  md:border-l-[1px] md:pl-3">
              <div className=" flex gap-2  justify-center items-center">
                <img className="" src="/public/images/Dot2.svg" alt="" />
                <p className="text-[#1c3568] text-[12px] font-medium ">
                  LEARN MORE
                </p>
              </div>
            </div>
            <div className=" hidden md:flex flex-col bg-white rounded-[6px] p-3 px-8 w-max lg:px-[4rem] lg:p-3 ">
              <div className=" flex gap-2 ">
                <img src="/public/images/Dot2.svg" alt="" />
                <p className="text-[#1c3568] text-[12px] font-Font1 font-medium ">
                  LEARN MORE
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className=" p-5 ">
        <div className=" md:flex md:justify-between gap-[130px] xl:gap-[35rem]  lg:gap-[18rem] absolute bottom-[3rem] border-t-[1px] ">
          <div className="font-Font1 text-white text-[14px]  w-[333px] md:w-[440px] lg:w-[450px] md:pb-5 pt-3">
            Cut your residents’ carbon footprint by providing them advanced
            electric vehicle charging stations at home.
          </div>

          <div className="pt-2">
            <div className=" bg-white rounded-[6px] p-3 md:hidden ">
              <div className=" flex gap-2  justify-center items-center">
                <img className="" src="/public/images/Dot2.svg" alt="" />
                <p className="text-[#1c3568] text-[12px] font-medium ">
                  LEARN MORE
                </p>
              </div>
            </div>
            <div className=" hidden md:flex flex-col bg-white rounded-[6px] p-3 px-8 w-max lg:px-[4rem] lg:p-3 ">
              <div className=" flex gap-2 ">
                <img src="/public/images/Dot2.svg" alt="" />
                <p className="text-[#1c3568] text-[12px] font-Font1 font-medium ">
                  LEARN MORE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
