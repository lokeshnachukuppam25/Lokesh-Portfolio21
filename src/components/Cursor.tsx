"use client";

import { FC, useEffect, useRef } from "react";

const Cursor: FC = () => {
  const isFirstMove = useRef(true);

  const cursorRef = useRef<HTMLDivElement>(null);

  const realMouse = useRef({
    x: 0,
    y: 0,
  });
  const displayedMouse = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    window.addEventListener("mousemove", (e) => {
      if (cursorRef.current) {
        if (isFirstMove.current) {
          cursorRef.current.style.display = "block";
          displayedMouse.current.x = e.clientX;
          displayedMouse.current.y = e.clientY;
          isFirstMove.current = false;
        }

        realMouse.current.x = e.clientX;
        realMouse.current.y = e.clientY;
      }
    });

    const updateMouse = () => {
      requestAnimationFrame(updateMouse);

      displayedMouse.current.x +=
        (realMouse.current.x - displayedMouse.current.x) * 0.15;
      displayedMouse.current.y +=
        (realMouse.current.y - displayedMouse.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${displayedMouse.current.x - 14}px, ${displayedMouse.current.y - 14}px, 0)`;
      }
    };

    updateMouse();
  }, []);

  return (
    <div
      ref={cursorRef}
      className="w-7 h-7 bg-transparent border border-white rounded-full fixed z-50 pointer-events-none hidden will-change-transform"
      style={{ top: 0, left: 0 }}
    ></div>
  );
};

export default Cursor;
