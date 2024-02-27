import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const End = () => {
  const [Click1, ClickG] = useState(false);
  const [Set, SetG] = useState(false);
  const [kar, karg] = useState(false);
  const [plus, add] = useState(false);
  return (
    <div>
      <div className="bg-[#171a1f]   w-full z-20 relative">
        <div className=" pt-[30px]">
          {" "}
          <img
            className=" md:w-[48rem] md:mx-auto xm:w-full"
            src="/images/LGB.svg"
            alt=""
          />
        </div>

        <div className=" pt-[30px]  p-3">
          <div className=" md:border-t-[1px] border-[#676d7a]">
            <div className=" md:flex  items-center justify-between  md:items-start">
              <div className=" font-Font2 text-white text-[36px] font-semibold leading-9 md:text-[3em] md:w-[26rem] lg:w-[43rem] md:leading-10 md:pt-[30px]">
                Are You Ready For Metering?
              </div>
              <div className="  pt-[30px] pb-[30px] md:h-[30vh] xm:h-[20vh] xl:h-[30vh] md:border-l-[1px] md:border-[#676d7a]  md:pl-4 md:pr-4">
                <div className=" bg-white rounded-[6px] p-3  h-max lg:px-[4rem]">
                  <div className=" flex gap-2  justify-center items-center">
                    <img className="" src="/public/images/Dot2.svg" alt="" />
                    <p className="text-[#1c3568] text-[12px] font-medium ">
                      GET MY SOLUTION
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-black z-20 relative">
        <div className="md:hidden pt-[30px] p-3 grid gap-[30px]">
          <div className=" grid gap-[30px] md:hidden">
            <p className=" text-[1.25em] font-Font2 font-semibold  text-white ">
              Contact Us
            </p>
            <div>
              <p className=" text-[#7f8aa1]">Address</p>
              <p className="  text-[15px] font-Font1 font-semibold  text-white ">
                PO Box 418 RPO Steeles West <br /> North York, ON, M3J 0J3
              </p>
            </div>
            <div className=" ">
              <p className=" text-[#7f8aa1]">Customer Care</p>
              <p className="  text-[15px] font-Font1 font-semibold  text-white ">
                customercare@wysemeter.com <br /> 1.844.411.0663
              </p>
            </div>

            <div>
              <p className=" text-[#7f8aa1]">Company Sales</p>
              <p className="  text-[15px] font-Font1 font-semibold  text-white ">
                sales@wysemeter.com
                <br /> 1.800.672.1134
              </p>
            </div>
          </div>
        </div>
        <div className=" p-3 grid gap-[25px] md:hidden">
          <p className=" text-[1.25em] font-Font2 font-semibold  text-white ">
            Follow Us
          </p>
          <p className="  text-[15px] font-Font1 font-medium  text-white ">
            {" "}
            Instagram
          </p>
          <p className="  text-[15px] font-Font1 font-medium  text-white ">
            {" "}
            Linkedin
          </p>
        </div>

        <div className=" pt-[50px] md:hidden">
          <div className="  border-t-[1px] mx-2 boreder-b-[1px]">
            <div className=" flex items-center justify-between ">
              <div className=" text-[1.25em] font-Font2 font-semibold  text-white pt-4 pb-4 ">
                Solutions
              </div>
              <div></div>

              <div className=" ">
                <div
                  className={`h-[2px] w-[15px] bg-white rounded-[5px] relative overflow-visible`}
                >
                  <div
                    onClick={() => ClickG(!Click1)}
                    className={clsx(
                      "h-[15px] w-[2px] bg-white rounded-[5px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2",
                      Click1 ? "-rotate-90 duration-300" : "duration-300"
                    )}
                  ></div>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ height: "0rem" }}
              animate={Click1 ? { height: "100%" } : { height: "0rem" }}
              transition={{ duration: 0.5 }}
              onClick={() => ClickG(!Click1)}
              className={clsx("  overflow-hidden")}
            >
              <div className="p-3 flex flex-col gap-3">
                <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                  Utility Submetering & Billing
                </div>
                <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                  Utility Data & Reporting
                </div>
                <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                  HVAC Services
                </div>
                <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                  EV Charging
                </div>
              </div>
            </motion.div>
          </div>
          <div className="  border-t-[1px] mx-2 boreder-b-[1px]">
            <div className=" flex items-center justify-between ">
              <div className=" text-[1.25em] font-Font2 font-semibold  text-white pt-4 pb-4 ">
                Markets
              </div>
              <div className=" ">
                <div
                  className={`h-[2px] w-[15px] bg-white rounded-[5px] relative overflow-visible`}
                >
                  <div
                    onClick={() => SetG(!Set)}
                    className={clsx(
                      "h-[15px] w-[2px] bg-white rounded-[5px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2",
                      Set ? "-rotate-90 duration-300 " : "duration-300  "
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ height: "0rem" }}
            animate={Set ? { height: "100%" } : { height: "0rem" }}
            transition={{ duration: 0.5 }}
            onClick={() => SetG(!Set)}
            className={clsx("  overflow-hidden")}
          >
            <div className=" flex flex-col gap-3 p-3">
              <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                Residential Rental
              </div>
              <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                Condominium
              </div>
              <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                Mixed-Use
              </div>
              <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                Affordable Housing
              </div>
              <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                Commercial
              </div>
              <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                Student Housing
              </div>
              <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                Case Studies
              </div>
            </div>
          </motion.div>
          <div className="  border-t-[1px] mx-2 boreder-b-[1px]">
            <div className=" flex items-center justify-between ">
              <div className=" text-[1.25em] font-Font2 font-semibold  text-white pt-4 pb-4 ">
                Company
              </div>
              <div className=" ">
                <div
                  className={`h-[2px] w-[15px] bg-white rounded-[5px] relative overflow-visible`}
                >
                  <div
                    onClick={() => karg(!kar)}
                    className={clsx(
                      "h-[15px] w-[2px] bg-white rounded-[5px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2",
                      kar ? "-rotate-90  duration-300 " : "duration-300  "
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ height: "0rem" }}
            animate={kar ? { height: "100%" } : { height: "0rem" }}
            transition={{ duration: 0.5 }}
            onClick={() => karg(!kar)}
            className={clsx("  overflow-hidden")}
          >
            <div className=" flex flex-col gap-3 p-3">
              <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                About Us
              </div>
              <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                How Our Solutions Work
              </div>
              <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                Media
              </div>
              <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                Careers
              </div>
            </div>
          </motion.div>
          <div className="  border-t-[1px] mx-2 boreder-b-[1px]">
            <div className=" flex items-center justify-between ">
              <div className=" text-[1.25em] font-Font2 font-semibold  text-white pt-4 pb-4 ">
                Customer Care
              </div>
              <div className=" ">
                <div
                  className={`h-[2px] w-[15px] bg-white rounded-[5px] relative overflow-visible`}
                >
                  <div
                    onClick={() => add(!plus)}
                    className={clsx(
                      "h-[15px] w-[2px] bg-white rounded-[5px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2",
                      plus ? "-rotate-90 duration-300 " : "duration-300  "
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ height: "0rem" }}
            animate={plus ? { height: "100%" } : { height: "0rem" }}
            transition={{ duration: 0.5 }}
            onClick={() => add(!plus)}
            className={clsx(" overflow-hidden")}
          >
            <div className="flex flex-col gap-3 p-3">
              <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                Open an Account
              </div>
              <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                Find Ways to Pay
              </div>
              <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                Explore My Account
              </div>
              <div className=" text-[#d3d7e0] text-[15px] font-Font1">FAQ</div>
              <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                Conservation Tips
              </div>
              <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                Understand My Bill
              </div>
              <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                Explore Financial Assistance
              </div>
              <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                Close an Account
              </div>
              <div className=" text-[#d3d7e0] text-[15px] font-Font1">
                Conditions of Service
              </div>
            </div>
          </motion.div>
        </div>

        <div className=" hidden md:flex justify-between p-8 xl:pt-[50px]">
          <div className=" flex items-start">
            <img src="/images/WYSE LOGO.svg " alt="" />
          </div>
          <div>
            <p className=" text-[1.7em] font-Font2 font-semibold  text-white ">
              Contact Us
            </p>
            <div className=" pt-[20px]">
              <div className=" flex gap-[20px]">
                <div>
                  <p className=" text-[#7f8aa1]">Address</p>
                  <p className="  text-[15px] font-Font1 font-semibold  text-white w-[7rem] lg:w-[15rem]">
                    PO Box 418 RPO Steeles West <br /> North York, ON, M3J 0J3
                  </p>
                </div>
                <div className=" ">
                  <p className=" text-[#7f8aa1]">Customer Care</p>
                  <p className="  text-[15px] font-Font1 font-semibold  text-white ">
                    customercare@wysemeter.com <br /> 1.844.411.0663
                  </p>
                  <div className=" pt-[90px] lg:pt-[30px]">
                    <p className=" text-[#7f8aa1]">Company Sales</p>
                    <p className="  text-[15px] font-Font1 font-semibold  text-white ">
                      sales@wysemeter.com
                      <br /> 1.800.672.1134
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col  gap-[20px]">
            <p className=" text-[1.7em] font-Font2 font-semibold  text-white ">
              Follow Us
            </p>
            <p className="  text-[15px] font-Font1 font-medium  text-white ">
              {" "}
              Instagram
            </p>
            <p className="  text-[15px] font-Font1 font-medium  text-white ">
              {" "}
              Linkedin
            </p>
          </div>
        </div>

        <div className=" border-t-[1px] border-[#676d7a] mx-3 ">
          <div className=" hidden md:flex justify-between p-6 pt-0">
            <div>
              <div className=" font-semibold font-Font2 text-white text-[2em] pt-3">
                Solutions
              </div>
              <div className=" hidden md:flex flex-col gap-2 cursor-pointer">
                <p className=" text-[#d3d7e0] text-[1.8vw] w-[9rem]  lg:text-[1.2vw]  lg:w-full hover:text-[#6ACC92]">
                  Utility Submetering & Billing
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw] w-[8rem]  lg:text-[1.2vw]  lg:w-full hover:text-[#6ACC92]">
                  Utility Data & Reporting
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92]">
                  HVAC Services
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92]">
                  EV Charging
                </p>
              </div>
            </div>

            <div className="border-l-[1px] border-[#676d7a]  pl-4 lg:w-[12rem]">
              <div className=" font-semibold font-Font2 text-white text-[2em] pt-3 ">
                Markets
              </div>
              <div className=" hidden md:flex flex-col gap-2 cursor-pointer">
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92]">
                  Residential Rental
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92]">
                  Condominium
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92]">
                  Mixed-Use
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92]">
                  Affordable Housing
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92]">
                  Commercial
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92]">
                  Student Housing
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92]">
                  Case Studies
                </p>
              </div>
            </div>

            <div className="border-l-[1px] border-[#676d7a]  pl-4 lg:w-[12rem]">
              <div className=" font-semibold font-Font2 text-white text-[2em] pt-3  ">
                Company
              </div>
              <div className=" hidden md:flex flex-col gap-2 cursor-pointer">
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92]">
                  About Us
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92]">
                  How Our Solutions Work
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92]">
                  Mixed-Use
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92]">
                  Media
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92]">
                  Careers
                </p>
              </div>
            </div>
            <div className="border-l-[1px] border-[#676d7a]  pl-4 ">
              <div className=" font-semibold font-Font2 text-white text-[2em] w-[10rem] lg:w-[16rem]  pt-3 ">
                Customer Care
              </div>
              <div className=" hidden md:flex flex-col gap-2 cursor-pointer">
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92] ">
                  Open an Account
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw] lg:text-[1.2vw]  hover:text-[#6ACC92]">
                  Find Ways to Pay
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92]">
                  Explore My Account
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92]">
                  FAQ
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92]">
                  Conservation Tips
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92] ">
                  Understand My Bill
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92]">
                  Explore Financial Assistance
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92]">
                  Close an Account
                </p>
                <p className=" text-[#d3d7e0] text-[1.8vw]  lg:text-[1.2vw] hover:text-[#6ACC92]">
                  Conditions of Service
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" pt-[30px] p-4 flex flex-col gap-[1rem] md:hidden">
          <div className=" flex gap-[9.7rem]">
            <div className=" text-[#aeb5c2] text-[.88em] font-Font1 ">
              Sitemap
            </div>
            <div className=" text-[#aeb5c2] text-[.88em] font-Font1">
              Accessibility
            </div>
          </div>
          <div className=" flex gap-[4rem]">
            <div className=" text-[#aeb5c2] text-[.88em] font-Font1 w-[12rem]">
              Privacy Policy
            </div>
            <div className=" text-[#aeb5c2] text-[.88em] font-Font1">
              Unit Sub-metering Licence
            </div>
          </div>
          <div className=" flex flex-col gap-[2rem]">
            <div className=" text-[#aeb5c2] text-[.88em] font-Font1">
              Ontario Electricity Support Program
            </div>
            <div className=" text-[#aeb5c2] text-[.88em] font-Font1">
              © Wyse, 2024. All rights reserved.
            </div>
          </div>
        </div>

        <div className="hidden md:flex gap-[2rem] pt-[30px] p-4 justify-center lg:hidden">
          <div className=" text-[#aeb5c2] text-[.88em] font-Font1 w-[17rem] lg:w-max ">
            © Wyse, 2024. All rights reserved.
          </div>
          <div className=" text-[#aeb5c2] text-[.88em] font-Font1 lg:w-max">
            Ontario Electricity Support Program
          </div>
          <div className=" text-[#aeb5c2] text-[.88em] font-Font1">Sitemap</div>
          <div className=" text-[#aeb5c2] text-[.88em] font-Font1">
            Accessibility
          </div>
          <div className=" text-[#aeb5c2] text-[.88em] font-Font1 lg:w-max">
            Privacy Policy
          </div>
          <div className=" text-[#aeb5c2] text-[.88em] font-Font1 lg:w-max">
            Unit Sub-metering Licence
          </div>
        </div>

        <div className=" hidden lg:flex justify-between pt-[30px] p-4 cursor-pointer ">
          <div className=" flex gap-[5rem]">
            <div className=" text-[#aeb5c2] text-[.88em] font-Font1 w-[17rem] hover:text-[#6ACC92]">
              © Wyse, 2024. All rights reserved.
            </div>
            <div className=" text-[#aeb5c2] text-[.88em] font-Font1 hover:text-[#6ACC92] ">
              Ontario Electricity Support Program
            </div>
          </div>
          <div className=" flex gap-[20px]">
            {" "}
            <div className=" text-[#aeb5c2] text-[.88em] font-Font1 hover:text-[#6ACC92]">
              Sitemap
            </div>
            <div className=" text-[#aeb5c2] text-[.88em] font-Font1 hover:text-[#6ACC92]">
              Accessibility
            </div>
            <div className=" text-[#aeb5c2] text-[.88em] font-Font1 lg:w-max hover:text-[#6ACC92]">
              Privacy Policy
            </div>
            <div className=" text-[#aeb5c2] text-[.88em] font-Font1 lg:w-max hover:text-[#6ACC92]">
              Unit Sub-metering Licence
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default End;
