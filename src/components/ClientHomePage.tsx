"use client";

import React, { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import Contact from "./Contact";
import Cursor from "./Cursor";
import Experience from "./Experience";
import Footer from "./Footer";
import Intro from "./Intro";
import MainProjects from "./MainProjects";
import Services from "./Services";
import Skills from "./Skills";
import Who from "./WhoAmI";

export default function ClientHomePage() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: {
          smooth: true,
          breakpoint: 768,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <Cursor />
      
      <div data-scroll-container ref={containerRef} className="relative w-full">
        <Intro />
        
        <Who />
        <Skills />
        <Experience />
        <MainProjects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
}
