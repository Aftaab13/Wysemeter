import React, { useRef, useEffect } from "react";

const Logos = () => {
  const scrollContainerRef = useRef(null);
  const content = [
    "/images/HR.png",
    "/images/RESD.png",
    "/images/Capr.png",
    "/images/SKY.png",
    "/images/Strrrr.png",
    "/images/HR.png",
    "/images/RESD.png",
    "/images/Capr.png",
    "/images/SKY.png",
    "/images/Strrrr.png",
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    let translateAmount = 0;
    const translateIncrement = 1;
    const maxTranslate = content.length * 450;
    const translateDuration = 60;

    const translate = () => {
      translateAmount += translateIncrement;

      if (translateAmount >= maxTranslate) {
        translateAmount = 0;
      }

      container.style.transition = `transform ${translateDuration}ms ease`;
      container.style.transform = `translateX(-${translateAmount}px)`;
    };

    const interval = setInterval(translate, translateDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="w-full overflow-hidden">
        <div
          className="flex items-center gap-4 pb-[70px]"
          ref={scrollContainerRef}
        >
          {content.map((item, index) => (
            <div key={index} className="">
              <img
                className="min-w-[10em]  xl:min-w-[15em] "
                src={item}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logos;
