import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const Medtoc = () => {
  // const ref20 = useRef();
  // const photos = useInView(ref20, { once: true });
  const scrollContainerRef = useRef(null);
  const content = [
    "/images/roads.jpg",
    "/images/Mazdoors.jpg",
    "/images/Wind.jpg",
    "/images/Frd.jpg",
    "/images/L&G.jpg",
    "/images/Solar.jpg",
    "/images/MB.jpg",
    "/images/MBB.jpg",
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    let translateAmount = 0;
    const translateIncrement = 1;
    const maxTranslate = content.length * 450;
    const translateDuration = 18;

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
        <div className="flex gap-4" ref={scrollContainerRef}>
          {content.map((item, index) => (
            <motion.div
              // ref={ref20}
              // initial={{ opacity: 0 }}
              // animate={photos ? { opacity: 1 } : { opacity: 0 }}
              // transition={{ duration: 0.5, delay: 0.5 }}
              key={index}
              className=""
            >
              <motion.img
                className="h-[16em] min-w-[30em] lg:min-w-[23em] xl:min-w-[26em]  object-cover rounded-[10px] "
                src={item}
                alt=""
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Medtoc;
