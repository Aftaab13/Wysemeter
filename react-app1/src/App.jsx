import React, { useEffect, useRef, useState } from "react";
import "../public/Fonts/Font1/stylesheet.css";
import "../public/Fonts/Font2/stylesheet.css";
import Navbar from "./Navbar";
import Start from "./Start";
import Midway from "./Midway";
import Lastp from "./Lastp";
import End from "./End";
import { useInView } from "framer-motion";
// import { useInView } from "framer-motion";

const App = () => {
  const [white_, setWhite] = useState(false);
  const ref = useRef();
  const whiteview = useInView(ref, {});

  useEffect(() => {
    if (whiteview) {
      setWhite(true);
    } else {
      setWhite(false);
    }
  }, [whiteview]);

  return (
    <div>
      <Navbar white={white_} />
      <Start />
      <div ref={ref}>
        <Midway />
        <Lastp />
      <End />
      </div>
    </div>
  );
};

export default App;
