"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I've recently completed my university degree in Information Technology,
        where my passion for programming was ignited. My journey in programming
        began with completing the Front End Programming course at RG Academy
        during my university years. This experience led me to mentorship at RG
        Academy, where I discovered my joy in teaching and sharing knowledge.
        <br />
        Recognizing the importance of English proficiency, I dedicated myself to
        self-study and significantly improved my skills from A1 to an
        intermediate level. Following this, I pursued further programming
        education and secured a 100% scholarship for Code Academy's
        #codeforfuture project, graduating with excellence.
        <br />
        My enthusiasm for continuous learning has driven me to explore new
        technologies eagerly. You can find some of my projects on my GitHub
        account, reflecting my diverse interests and skills.
      </p>
    </motion.section>
  );
}
