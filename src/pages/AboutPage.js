import React from "react";
import AboutUs from "../components/AboutUs";
import FaqSection from "../components/FaqSection";
import Servicesection from "../components/Servicesection";
import { motion } from "framer-motion";
import { pageAnimation } from "../components/PageAnimation";

function AboutPage() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutUs />
      <Servicesection />
      <FaqSection />
    </motion.div>
  );
}

export default AboutPage;
