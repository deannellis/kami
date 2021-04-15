import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import PageLayout from "../components/PageLayout";
import useClickOutside from "../hooks/useClickOutside";
import CSSUtilities from "../components/CSSUtilities";

const UtilitiesPage = () => {
  const ref = useRef();
  const [clicked, setClicked] = useState(false);
  useClickOutside(ref, () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  });
  const aniStates = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <PageLayout>
      <h1>Functional Utilities</h1>
      <h2>Handle Outside Click</h2>
      <section
        ref={ref}
        style={{
          height: "25.6rem",
          width: "25.6rem",
          background: "var(--danger-color)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>Inside</h3>
      </section>
      <motion.h3
        variants={aniStates}
        initial="hidden"
        animate={clicked ? "visible" : "hidden"}
      >
        Clicked Outside!
      </motion.h3>
      <CSSUtilities />
    </PageLayout>
  );
};

export default UtilitiesPage;
