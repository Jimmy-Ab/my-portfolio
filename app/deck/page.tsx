"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import "./deck.css";
import { SLIDES_HTML } from "./slides-content";

export default function DeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentMode, setCurrentMode] = useState<"scroll" | "deck">("scroll");
  const [scrollProgress, setScrollProgress] = useState(0);
  const totalSlides = 21;
  const containerRef = useRef<HTMLDivElement>(null);

  // Jump to specific slide
  const jumpToSlide = useCallback((slideId: string) => {
    const target = document.getElementById(slideId);
    if (!target) return;
    if (currentMode === "deck") {
      const allSlides = Array.from(document.querySelectorAll(".slide-page"));
      const idx = allSlides.indexOf(target);
      if (idx !== -1) {
        setCurrentSlide(idx);
      }
    } else {
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [currentMode]);

  // Deck view: control body overflow
  useEffect(() => {
    if (currentMode === "deck") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [currentMode]);

  // Update progress bar
  useEffect(() => {
    const updateProgress = () => {
      if (currentMode === "deck") {
        setScrollProgress(((currentSlide + 1) / totalSlides) * 100);
      } else {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight =
          document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        setScrollProgress(pct);
      }
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, [currentMode, currentSlide]);

  // Keyboard navigation for deck mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentMode === "deck") {
        if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
          setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
        } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
          setCurrentSlide((prev) => Math.max(prev - 1, 0));
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentMode]);

  // Handle TOC clicks inside container
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLAnchorElement>("a.toc-item");
      if (target) {
        e.preventDefault();
        const href = target.getAttribute("href");
        if (href && href.startsWith("#")) {
          const slideId = href.substring(1);
          jumpToSlide(slideId);
        }
      }
    };

    container.addEventListener("click", handleClick);
    return () => container.removeEventListener("click", handleClick);
  }, [jumpToSlide]);

  // Cleanup: restore body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Ensure all slides display when printing to PDF
  useEffect(() => {
    const handleBeforePrint = () => {
      document.body.style.overflow = "";
    };
    const handleAfterPrint = () => {
      if (currentMode === "deck") {
        document.body.style.overflow = "hidden";
      }
    };
    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);
    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, [currentMode, currentSlide]);

  // CSS that controls slide visibility in deck mode via nth-child.
  // This is synchronous with React renders — no DOM timing race conditions.
  const deckModeStyles = currentMode === "deck"
    ? `
      .portfolio-wrapper .slide-page {
        display: none !important;
      }
      .portfolio-wrapper .slide-page:nth-child(${currentSlide + 1}) {
        display: flex !important;
        animation: deckSlideIn 0.28s cubic-bezier(0.16, 1, 0.3, 1) both;
      }
      @media print {
        .portfolio-wrapper .slide-page {
          display: flex !important;
        }
      }
    `
    : `
      .portfolio-wrapper .slide-page {
        display: flex !important;
      }
    `;

  return (
    <div className={`portfolio-deck-root${currentMode === "deck" ? " deck-mode" : ""}`}>
      {/* Dynamic slide visibility style — synchronous with render */}
      <style dangerouslySetInnerHTML={{ __html: deckModeStyles }} />

      {/* Interactive Top Frosted Glass Header */}
      <header className="app-header">
        <div className="flex items-center gap-4">
          <Link href="/" className="btn-back-portfolio" title="Return to Main Portfolio">
            <span>← Portfolio</span>
          </Link>
          <div className="brand-title">
            <span>DALASA ABOMA</span>
            <span className="brand-badge">Executive Portfolio</span>
          </div>
        </div>

        <div className="header-actions">
          {/* Pager controls for deck mode */}
          {currentMode === "deck" && (
            <div className="pager-controls" style={{ display: "flex" }}>
              <button
                className="pager-btn"
                onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
                title="Previous Slide (Left Arrow)"
                aria-label="Previous Slide"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <span id="slideIndicator">{currentSlide + 1} / {totalSlides}</span>
              <button
                className="pager-btn"
                onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1))}
                title="Next Slide (Right Arrow or Space)"
                aria-label="Next Slide"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
              <span className="keyboard-hint" title="Use Arrow Keys or Space to Navigate">
                <kbd>←</kbd><kbd>→</kbd>
              </span>
            </div>
          )}

          {/* View toggle (Scroll View vs Deck View) */}
          <div className="view-toggle">
            <button
              className={`toggle-btn ${currentMode === "scroll" ? "active" : ""}`}
              onClick={() => {
                setCurrentMode("scroll");
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
              <span>Scroll View</span>
            </button>
            <button
              className={`toggle-btn ${currentMode === "deck" ? "active" : ""}`}
              onClick={() => {
                setCurrentMode("deck");
                setCurrentSlide(0);
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              <span>Deck View</span>
            </button>
          </div>

          {/* Export as PDF button */}
          <button className="btn-export" onClick={() => window.print()}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Export as PDF</span>
          </button>
        </div>

        {/* Dynamic scroll progress bar */}
        <div
          className="scroll-progress-bar"
          id="scrollProgressBar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </header>

      {/* Render the 21 Slides */}
      <div
        ref={containerRef}
        dangerouslySetInnerHTML={{ __html: SLIDES_HTML }}
      />
    </div>
  );
}