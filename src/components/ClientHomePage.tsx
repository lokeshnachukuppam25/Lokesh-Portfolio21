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
        multiplier: 0.8,
        lerp: 0.075,
        smartphone: {
          smooth: true,
          multiplier: 0.6,
        },
        tablet: {
          smooth: true,
          breakpoint: 768,
          multiplier: 0.7,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <Cursor />
      
      <div data-scroll-container ref={containerRef} className="relative w-full">
        <section data-scroll-section>
          <Intro />
        </section>
        
        <section data-scroll-section>
          <Who />
        </section>
        <section data-scroll-section>
          <Skills />
        </section>
        <section data-scroll-section>
          <Experience />
        </section>
        <section data-scroll-section>
          <MainProjects />
        </section>
        <section data-scroll-section>
          <Services />
        </section>
        <section data-scroll-section>
          <Contact />
          <Footer />
        </section>
      </div>
    </LocomotiveScrollProvider>
  );
}
