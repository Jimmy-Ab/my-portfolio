"use client";

import React, { useState, useEffect } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isEnlarged, setIsEnlarged] = useState(true);

  // Update position of the cursor
  const updatePosition = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  // Show the cursor
  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  // Hide the cursor
  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  // Enlarge the cursor when hovering over specific elements
  const handleMouseOver = () => {
    setIsEnlarged(true);
  };

  // Shrink the cursor back to normal
  const handleMouseOut = () => {
    setIsEnlarged(false);
  };

  useEffect(() => {
    // Add event listeners for cursor tracking
    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Add event listeners for cursor enlargement
    document.querySelectorAll("a, button, input, textarea, .enlarge-cursor").forEach((el) => {
      el.addEventListener("mouseover", handleMouseOver);
      el.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      // Remove event listeners when the component is unmounted
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);

      document.querySelectorAll("a, button, input, textarea, .enlarge-cursor").forEach((el) => {
        el.removeEventListener("mouseover", handleMouseOver);
        el.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  // Styles for the cursor
  const cursorStyles = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    opacity: isVisible ? 1 : 0,
    transform: isEnlarged ? "translate(-50%, -50%) scale(1.5)" : "translate(-50%, -50%) scale(30)",
  };

  return (
    <div
      className="fixed z-50 pointer-events-none bg-slate-200 w-6 h-6 rounded-full transition-transform duration-200 ease-in-out mix-blend-difference"
      style={cursorStyles}
    ></div>
  );
};

export default CustomCursor;
