import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";

const Zinda = ({ white }) => {
  const [islapt, setisact] = useState(false);
  const [islap, setisac] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [Click1, ClickG] = useState(false);
  const [Set, SetG] = useState(false);
  const [Big, Bigs] = useState(false);

  const menu = () => {
    setisact(true);
    setisac(true);
  };
  const backmenu = () => {
    setisact(false);
    setisac(false);
  };

  return (
    <div
      className={clsx(" z-30 sticky top-0 cursor-pointer", islapt ? " " : " ")}
    >
      <div
        onClick={() => setisac(false)}
        className={clsx(
          " absolute top-[10%] h-[60vh] w-full ",
          islap ? " block" : " hidden"
        )}
      ></div>
      <div
        onClick={() => Bigs(false)}
        className={clsx(
          " absolute top-[10%] h-[60vh] w-full ",
          Big ? " block" : " hidden"
        )}
      ></div>

      <div
        className={clsx(
          "hidden md:flex  h-[4vh] xl:h-[6vh] z-10 text-white relative transition-all duration-500 border-b-[1px] border-[#999999] bg-blur backdrop-blur-md",
          islap ? "bg-white" : " bg-transparent ",
          Big ? " bg-white" : " bg-transparent",
          white ? "bg-white text-black" : "bg-transparent"
        )}
      >
        <div className="w-[19vw] xl:w-[10vw] bg-blur backdrop-blur-md"> </div>
        <div className=" hidden md:flex   justify-between   gap-3 items-center  w-[61vw] lg:w-[63vw] xl:w-[70vw] px-2  bg-blur backdrop-blur-md">
          <div className=" md:flex gap-3">
            <p className=" text-[#6ACC92] text-[12px] font-Font1 font-medium ">
              Business
            </p>
            <p
              className={clsx(
                " text-[#f5f7fa] text-[12px] font-Font1 font-medium hover:text-[#6ACC92]",
                islap ? "text-black" : "",
                Big ? " text-black" : "",
                white ? " text-black" : ""
              )}
            >
              Customer Care
            </p>
            <p
              className={clsx(
                " text-[#f5f7fa] font-Font1 text-[14px] font-medium hover:text-[#6ACC92]",
                islap ? "text-black" : "",
                Big ? " text-black" : "",
                white ? " text-black" : ""
              )}
            >
              {" "}
              Company{" "}
            </p>
          </div>
          <div className="md: flex gap-3">
            <p
              className={clsx(
                " text-[#f5f7fa] text-[12px] font-Font1 font-medium pl-[60px]  flex gap-1 hover:text-[#6ACC92]",
                islap ? "text-black" : "",
                Big ? " text-black" : "",
                white ? " text-black" : ""
              )}
            >
              <img
                className="w-[15px] "
                src="/public/images/search1.svg"
                alt=""
              />
              Search
            </p>
            <p
              className={clsx(
                " text-[#f5f7fa] text-[12px] font-Font1 font-medium hover:text-[#6ACC92] ",
                islap ? "text-black" : "",
                Big ? " text-black" : "",
                white ? " text-black" : ""
              )}
            >
              Contact Us
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="">
          <div
            className={clsx(
              "relative  z-10 h-[8vh] md:h-[5vh] lg:h-[8vh] lg:pt-0 xl:h-[8vh]  transition-all duration-500 flex justify-between md:justify-normal  border-b-[1px]",
              islap ? "bg-white" : "bg-transparent bg-blur backdrop-blur-md",
              Big ? " bg-white" : " bg-transparent",
              white ? "bg-white " : "bg-transparent "
            )}
          >
            <div
              className={clsx(
                "flex flex-col  justify-center xl:pr-0  px-7  z-10 md:w-[20vw] xl:w-[10vw]",
                islap ? "hidden" : "",
                white ? " hidden" : " "
              )}
            >
              <img
                className=" w-[4.5rem] "
                src="/images/WYSE LOGO.svg"
                alt=""
              />
            </div>
            <div
              className={clsx(
                "flex flex-col  justify-center xl:pr-0  px-7  z-10  md:w-[20vw] xl:w-[10vw]",
                islap || white ? " " : " hidden"
              )}
            >
              <img
                className={clsx(" w-[4.5rem] ")}
                src="/images/Wyse Black.svg"
                alt=""
              />
            </div>

            <div className=" hidden md:flex h-[4.5rem] xm:h-[5rem] lg:h-[6rem]  xl:h-[5rem] w-[1px] bg-[#999999] absolute bottom-0  left-[18%] xl:left-[10%] z-20  "></div>

            <div
              className={clsx(
                " hidden md:flex  gap-7 items-center transition-all duration-600 w-[65vw]  px-[20px] ",
                islap ? "bg-white " : " bg-transparent",
                Big ? " bg-white" : " bg-transparent",
                white ? "bg-white " : "bg-transparent"
              )}
            >
              <p
                className={clsx(
                  " text-[#f5f7fa] text-[14px] font-Font1 font-medium",
                  islap ? "text-black" : "",
                  Big ? " text-black" : "",
                  white ? " text-black" : ""
                )}
              >
                Home
              </p>

              <div onClick={() => setisac(true)}>
                <p
                  className={clsx(
                    " text-[#f5f7fa] text-[14px] font-Font1 font-medium",
                    islap ? "text-black" : "",
                    Big ? " text-black" : "",
                    white ? " text-black" : ""
                  )}
                >
                  <span className={clsx(islap ? "hidden" : "")}> +</span>{" "}
                  Solutions
                </p>
                <div onClick={() => setisac(true)}>
                  <div
                    className={clsx(
                      islap
                        ? "absolute  mt-6 bg-white p-4 rounded-[10px] "
                        : "hidden"
                    )}
                  >
                    <div className="grid gap-3">
                      <p className="text-[14px] text-black font-Font1 font-medium">
                        Utility Submetering & Billing
                      </p>
                      <p className="text-[14px] text-black font-Font1 font-medium">
                        Utility Data & Reporting
                      </p>
                      <p className="text-[14px] text-black font-Font1 font-medium">
                        HVAC Services
                      </p>
                      <p className="text-[14px] text-black font-Font1 font-medium">
                        EV Charging
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div onClick={() => Bigs(true)}>
                <p
                  className={clsx(
                    " text-[#f5f7fa] font-Font1 text-[14px] font-medium",
                    islap ? "text-black" : "",
                    Big ? "text-black" : "",
                    white ? " text-black" : ""
                  )}
                >
                  {" "}
                  <span className={clsx(Big ? "hidden" : "")}> +</span> Markets
                </p>{" "}
                <div onClick={() => Bigs(true)}>
                  <div
                    className={clsx(
                      Big
                        ? "absolute  mt-6 bg-white p-4 rounded-[10px] "
                        : "hidden"
                    )}
                  >
                    <div className="grid gap-3">
                      <p className="text-[14px] text-black font-Font1 font-medium">
                        Residential Rental
                      </p>
                      <p className="text-[14px] text-black font-Font1 font-medium">
                        Condominium
                      </p>
                      <p className="text-[14px] text-black font-Font1 font-medium">
                        Mixed-Use
                      </p>
                      <p className="text-[14px] text-black font-Font1 font-medium">
                        Affordable Housing
                      </p>
                      <p className="text-[14px] text-black font-Font1 font-medium">
                        Commercial
                      </p>
                      <p className="text-[14px] text-black font-Font1 font-medium">
                        Student Housing
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p
                className={clsx(
                  " text-[#f5f7fa] text-[14px] font-Font1 font-medium",
                  islap ? "text-black" : "",
                  Big ? " text-black" : "",
                  white ? " text-black" : ""
                )}
              >
                {" "}
                Case Studies{" "}
              </p>
            </div>

            <div className="w-[20%] md:hidden flex flex-col items-center justify-center px-[60px]  border-x-[1px] border-[#999999]  ease-in-out">
              {!islapt && (
                <div onClick={() => menu()}>
                  <div
                    className={`h-[2px] w-[25px] ${
                      white ? "bg-[#1c3568]" : "bg-white"
                    }  rounded-[5px] }`}
                  ></div>
                  <div
                    className={`h-[2px] w-[25px] ${
                      white ? "bg-[#1c3568]" : "bg-white"
                    }  my-[5px] rounded-[5px]}`}
                  ></div>
                  <div
                    className={`h-[2px] w-[25px] ${
                      white ? "bg-[#1c3568]" : "bg-white"
                    }  rounded-[5px] }`}
                  ></div>
                </div>
              )}

              {islapt && (
                <div>
                  <div className=" overflow-hidden ">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className={` absolute top-0 left-0 w-full  pt-[10px]  bg-white px-2 ease-out ${
                        islapt ? "h-[100vh]" : " h-[100vh]"
                      }`}
                    >
                      <div
                        onClick={() => backmenu()}
                        className="h-10 w-10 mx-auto"
                      >
                        <img className=" " src="/images/cross1.png" alt="" />
                      </div>

                      <div className="pt-[25px] ">
                        <div className="border-[1px] border-solid rounded-[40px] p-[4px]">
                          {" "}
                          <div className="flex justify-between">
                            <p className="text-[14px] bg-[#1c3568] rounded-[40px] p-3 px-7 font-Font1 font-semibold text-white w-max">
                              Business
                            </p>
                            <p className="text-[14px]   p-3  font-Font1 font-medium w-max ">
                              Customer Care
                            </p>
                            <p className="text-[14px]  p-3 font-Font1 font-medium w-max">
                              Company
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-[10rem]">
                          <div>
                            <div className="text-[18px] font-Font1 font-medium text-[#171a1f]  px-6 pt-6">
                              Home
                            </div>
                            <div className="  ">
                              <div className=" flex items-center justify-between ">
                                <div className=" text-[18px] font-Font1 font-medium text-[#171a1f] px-6 pt-6">
                                  Solutions
                                </div>
                                <div></div>

                                <div className=" ">
                                  <div
                                    className={`h-[2px] w-[15px] bg-[#b5bcc8] rounded-[5px] relative overflow-visible`}
                                  >
                                    <div
                                      onClick={() => ClickG(!Click1)}
                                      className={clsx(
                                        "h-[15px] w-[2px] bg-[#b5bcc8] rounded-[5px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2",
                                        Click1
                                          ? "-rotate-90 duration-300"
                                          : "duration-300"
                                      )}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                              <motion.div
                                initial={{ height: "0rem" }}
                                animate={
                                  Click1
                                    ? { height: "100%" }
                                    : { height: "0rem" }
                                }
                                transition={{ duration: 0.5 }}
                                onClick={() => ClickG(!Click1)}
                                className={clsx("  overflow-hidden")}
                              >
                                <div className="p-3 flex flex-col gap-3 mx-auto w-[85vw]">
                                  <div className=" text-black text-[18px] font-Font1 font-medium">
                                    Utility Submetering & Billing
                                  </div>
                                  <div className=" text-black text-[18px] font-Font1 font-medium">
                                    Utility Data & Reporting
                                  </div>
                                  <div className=" text-black text-[18px] font-Font1 font-medium">
                                    HVAC Services
                                  </div>
                                  <div className=" text-black text-[18px] font-Font1 font-medium">
                                    EV Charging
                                  </div>
                                </div>
                              </motion.div>
                            </div>
                            <div className="  ">
                              <div className=" flex items-center justify-between ">
                                <div className=" text-[18px] font-Font1 font-medium text-[#171a1f] px-6 pt-6">
                                  Markets
                                </div>
                                <div></div>

                                <div className=" ">
                                  <div
                                    className={`h-[2px] w-[15px] bg-[#b5bcc8] rounded-[5px] relative overflow-visible`}
                                  >
                                    <div
                                      onClick={() => SetG(!Set)}
                                      className={clsx(
                                        "h-[15px] w-[2px] bg-[#b5bcc8] rounded-[5px] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2",
                                        Set
                                          ? "-rotate-90 duration-300"
                                          : "duration-300"
                                      )}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                              <motion.div
                                initial={{ height: "0rem" }}
                                animate={
                                  Set ? { height: "100%" } : { height: "0rem" }
                                }
                                transition={{ duration: 0.5 }}
                                onClick={() => SetG(!Set)}
                                className={clsx("  overflow-hidden")}
                              >
                                <div className="p-3 flex flex-col gap-3 mx-auto w-[85vw]">
                                  <div className=" text-black text-[18px] font-Font1 font-medium">
                                    Residential Rental
                                  </div>
                                  <div className=" text-black text-[18px] font-Font1 font-medium">
                                    Condominium
                                  </div>
                                  <div className=" text-black text-[18px] font-Font1 font-medium">
                                    Mixed-Use
                                  </div>
                                  <div className=" text-black text-[18px] font-Font1 font-medium">
                                    Affordable Housing
                                  </div>
                                  <div className=" text-black text-[18px] font-Font1 font-medium">
                                    Commercial
                                  </div>
                                  <div className=" text-black text-[18px] font-Font1 font-medium">
                                    Student Housing
                                  </div>
                                </div>
                              </motion.div>
                            </div>
                            <div className="text-[18px] font-Font1 font-medium text-[#171a1f]  px-6 pt-6">
                              Case Studies
                            </div>
                          </div>

                          <div className="px-2">
                            <div className="w-full px-4 py-4 rounded-md focus:outline-none bg-[#f5f7fa] flex gap-2">
                              <img src="/public/images/search1.svg" alt="" />
                              <input
                                className="bg-[#f5f7fa] focus:outline-none text-[14px] font-Font1"
                                type="text"
                                id="search"
                                placeholder="Search..."
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid items-center  px-2 z-10 pt-5">
                          <div className=" bg-[#2d69e0] rounded-[6px] p-3">
                            <div className=" flex gap-2  justify-center">
                              <img
                                className=""
                                src="/public/images/Dot1.svg"
                                alt=""
                              />
                              <p className="text-white text-[12px] font-Font1 font-medium ">
                                CONTACT US
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
            <div className=" hidden md:flex h-[4.5rem] xm:h-[5rem]  lg:h-[6rem]  xl:h-[5rem]  w-[1px] bg-[#999999] absolute bottom-0  right-[18%] z-20  "></div>
            <div className="flex flex-col items-center justify-center px-5 md:px-0  pt-2 xl:pt-1 z-10 md:w-[20vw] xl:w-[25vw]">
              <div className=" bg-[#2d69e0] rounded-[6px] p-2 md:px-3 ">
                <div className=" flex gap-2 ">
                  <img
                    className="w-[1rem]"
                    src="/public/images/Login..svg"
                    alt=""
                  />
                  <p className="text-white text-[12px] font-Font1 font-medium ">
                    LOG IN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zinda;
