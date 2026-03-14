"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [clickPulse, setClickPulse] = useState(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const frameRef = useRef<number>(0);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Dot snaps instantly
  const dotX = useSpring(mouseX, { stiffness: 2000, damping: 60 });
  const dotY = useSpring(mouseY, { stiffness: 2000, damping: 60 });

  // Reticle lags behind — gives the organic tracking feel
  const reticleX = useSpring(mouseX, { stiffness: 90, damping: 14 });
  const reticleY = useSpring(mouseY, { stiffness: 90, damping: 14 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        setCoords({ x: e.clientX, y: e.clientY });
      });
    },
    [mouseX, mouseY]
  );

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    setIsHovering(
      !!target.closest("a, button, [data-hover], input, textarea, label, [role='button']")
    );
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsClicking(true);
    setClickPulse((p) => p + 1);
  }, []);

  const handleMouseUp = useCallback(() => setIsClicking(false), []);

  useEffect(() => {
    setMounted(true);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseDown, handleMouseUp]);

  if (!mounted) return null;

  const size = isHovering ? 52 : isClicking ? 36 : 44;
  const cornerSize = isHovering ? 10 : 8;
  const primaryColor = "rgba(0,212,139,1)";
  const dimColor = "rgba(0,212,139,0.55)";

  return (
    <>
      {/* ── Center dot ── */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isClicking ? 3 : 5,
          height: isClicking ? 3 : 5,
          backgroundColor: primaryColor,
          boxShadow: `0 0 ${isHovering ? 10 : 6}px ${primaryColor}`,
        }}
        transition={{ duration: 0.08 }}
      />

      {/* ── Crosshair lines ── */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      >
        {/* Horizontal line left */}
        <motion.div
          className="absolute top-1/2 -translate-y-px rounded-full"
          style={{ backgroundColor: dimColor, height: 1, right: "50%", marginRight: 6 }}
          animate={{ width: isHovering ? 14 : 10, opacity: isHovering ? 0.9 : 0.5 }}
          transition={{ duration: 0.2 }}
        />
        {/* Horizontal line right */}
        <motion.div
          className="absolute top-1/2 -translate-y-px rounded-full"
          style={{ backgroundColor: dimColor, height: 1, left: "50%", marginLeft: 6 }}
          animate={{ width: isHovering ? 14 : 10, opacity: isHovering ? 0.9 : 0.5 }}
          transition={{ duration: 0.2 }}
        />
        {/* Vertical line top */}
        <motion.div
          className="absolute left-1/2 -translate-x-px rounded-full"
          style={{ backgroundColor: dimColor, width: 1, bottom: "50%", marginBottom: 6 }}
          animate={{ height: isHovering ? 14 : 10, opacity: isHovering ? 0.9 : 0.5 }}
          transition={{ duration: 0.2 }}
        />
        {/* Vertical line bottom */}
        <motion.div
          className="absolute left-1/2 -translate-x-px rounded-full"
          style={{ backgroundColor: dimColor, width: 1, top: "50%", marginTop: 6 }}
          animate={{ height: isHovering ? 14 : 10, opacity: isHovering ? 0.9 : 0.5 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* ── Reticle corner brackets ── */}
      <motion.div
        className="fixed top-0 left-0 z-[9997] pointer-events-none"
        style={{
          x: reticleX,
          y: reticleY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ width: size, height: size }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
      >
        {/* Top-left */}
        <motion.div
          className="absolute top-0 left-0"
          animate={{
            width: cornerSize,
            height: cornerSize,
            borderColor: isHovering ? primaryColor : dimColor,
            boxShadow: isHovering ? `0 0 8px rgba(0,212,139,0.5)` : "none",
          }}
          transition={{ duration: 0.18 }}
          style={{ borderTop: "2px solid", borderLeft: "2px solid" }}
        />
        {/* Top-right */}
        <motion.div
          className="absolute top-0 right-0"
          animate={{
            width: cornerSize,
            height: cornerSize,
            borderColor: isHovering ? primaryColor : dimColor,
            boxShadow: isHovering ? `0 0 8px rgba(0,212,139,0.5)` : "none",
          }}
          transition={{ duration: 0.18 }}
          style={{ borderTop: "2px solid", borderRight: "2px solid" }}
        />
        {/* Bottom-left */}
        <motion.div
          className="absolute bottom-0 left-0"
          animate={{
            width: cornerSize,
            height: cornerSize,
            borderColor: isHovering ? primaryColor : dimColor,
            boxShadow: isHovering ? `0 0 8px rgba(0,212,139,0.5)` : "none",
          }}
          transition={{ duration: 0.18 }}
          style={{ borderBottom: "2px solid", borderLeft: "2px solid" }}
        />
        {/* Bottom-right */}
        <motion.div
          className="absolute bottom-0 right-0"
          animate={{
            width: cornerSize,
            height: cornerSize,
            borderColor: isHovering ? primaryColor : dimColor,
            boxShadow: isHovering ? `0 0 8px rgba(0,212,139,0.5)` : "none",
          }}
          transition={{ duration: 0.18 }}
          style={{ borderBottom: "2px solid", borderRight: "2px solid" }}
        />

        {/* Coordinate readout */}
        <motion.div
          className="absolute font-mono select-none whitespace-nowrap"
          style={{
            top: "calc(100% + 6px)",
            left: "50%",
            translateX: "-50%",
            fontSize: 8,
            letterSpacing: "0.06em",
            color: dimColor,
            lineHeight: 1.4,
          }}
          animate={{ opacity: isHovering ? 0 : 0.7 }}
          transition={{ duration: 0.15 }}
        >
          {String(coords.x).padStart(4, "0")}:{String(coords.y).padStart(4, "0")}
        </motion.div>

        {/* Hover label */}
        <motion.div
          className="absolute font-mono select-none whitespace-nowrap"
          style={{
            top: "calc(100% + 6px)",
            left: "50%",
            translateX: "-50%",
            fontSize: 8,
            letterSpacing: "0.08em",
            color: primaryColor,
            lineHeight: 1.4,
          }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.15 }}
        >
          [ SELECT ]
        </motion.div>
      </motion.div>

      {/* ── Click pulse ring ── */}
      <AnimatePresence>
        {clickPulse > 0 && (
          <motion.div
            key={clickPulse}
            className="fixed top-0 left-0 z-[9996] pointer-events-none rounded-full"
            style={{
              x: dotX,
              y: dotY,
              translateX: "-50%",
              translateY: "-50%",
              border: `1.5px solid ${primaryColor}`,
            }}
            initial={{ width: 10, height: 10, opacity: 0.9 }}
            animate={{ width: 60, height: 60, opacity: 0 }}
            exit={{}}
            transition={{ duration: 0.45, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
