"use client";

import React, { FC, useState, useEffect } from "react";
import { BiChevronsDown } from "react-icons/bi";
import Canvas from "./Canvas";
import GradientText from "./GradientText";
import { m } from "framer-motion";

// Custom typewriter hook
const useTypewriter = (words: string[], typeSpeed: number = 150, deleteSpeed: number = 75, delayBetweenWords: number = 2000) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex(prev => (prev + 1) % words.length);
        }
      } else {
        setCurrentText(prev => currentWord.slice(0, prev.length + 1));
        
        if (currentText === currentWord) {
          setIsPaused(true);
        }
      }
    }, isPaused ? delayBetweenWords : isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, isPaused, words, typeSpeed, deleteSpeed, delayBetweenWords]);

  return { text: currentText, isTyping: !isPaused };
};

const Intro: FC = () => {
  const roles = ["Software Developer", "Full Stack Developer", "ML Enthusiast", "Data Analyst"];
  const { text: currentRole, isTyping } = useTypewriter(roles, 100, 50, 1500);

  return (
    <div className="relative h-screen flex justify-center items-center flex-col gap-5">
      <Canvas />

      <m.div
        initial={{ 
          opacity: 0, 
          scale: 0.5,
          rotateX: -90 
        }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          rotateX: 0 
        }}
        transition={{ 
          duration: 1.2, 
          delay: 0.5,
          type: "spring",
          stiffness: 100 
        }}
        className="z-[1]"
      >
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider text-center"
        >
          NACHUKUPPAM LOKESH
        </GradientText>
      </m.div>
      <m.div
        data-scroll
        data-scroll-speed="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="text-3xl text-center z-[1] overflow-hidden flex items-center justify-center"
      >
        <span><b>I am a</b></span>
        <span className="ml-2 text-[#40ffaa] font-bold min-w-[280px] text-left">
          {currentRole}
          <span 
            className={`inline-block w-[2px] h-[1.2em] bg-[#40ffaa] ml-1 ${
              isTyping ? 'animate-pulse' : 'animate-pulse'
            }`}
          />
        </span>
      </m.div>

      {/* Social Media Icons */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="flex items-center justify-center gap-8 mt-2 z-[1]"
      >
        <a
          href="mailto:lokesh@example.com"
          className="text-white hover:text-[#40ffaa] transition-colors duration-300 hover:scale-125 transform"
        >
          <i className="fas fa-envelope text-3xl"></i>
        </a>
        <a
          href="https://wa.me/916281008697"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#25D366] transition-colors duration-300 hover:scale-125 transform"
        >
          <i className="fab fa-whatsapp text-3xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/lokesh-nachukuppam-403057218"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#0077B5] transition-colors duration-300 hover:scale-125 transform"
        >
          <i className="fab fa-linkedin-in text-3xl"></i>
        </a>
        <a
          href="https://leetcode.com/u/NachukuppamLokesh/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#FFA116] transition-colors duration-300 hover:scale-125 transform"
        >
          <i className="fas fa-code text-3xl"></i>
        </a>
        <a
          href="https://github.com/lokeshnachukuppam25"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#40ffaa] transition-colors duration-300 hover:scale-125 transform"
        >
          <i className="fab fa-github text-3xl"></i>
        </a>
      </m.div>

      <m.a
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer"
        href="#who"
        data-scroll-to
      >
        <BiChevronsDown className="animate-bounce" size={56} />
      </m.a>
    </div>
  );
};

export default Intro;
