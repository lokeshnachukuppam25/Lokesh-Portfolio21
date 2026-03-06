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
        multiplier: 1,
        lerp: 0.1, // Higher lerp = less computation, smoother feel
        smartphone: {
          smooth: false, // Disable smooth scroll on mobile for better performance
        },
        tablet: {
          smooth: false, // Disable smooth scroll on tablet for better performance
          breakpoint: 768,
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
