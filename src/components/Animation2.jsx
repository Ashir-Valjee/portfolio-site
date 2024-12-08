"use client";
import { motion } from "framer-motion";

export default function Animation2() {
  const bounceTransition = {
    y: { duration: 0.6, yoyo: Infinity, ease: "easeOut" },
    backgroundColor: {
      duration: 0.6,
      yoyo: Infinity,
      ease: "easeOut",
      repeatDelay: 0.2,
      repeat: Infinity,
    },
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        {" "}
        <motion.div
          className="w-12 h-12 bg-blue-500 rounded-full"
          animate={{
            y: ["100%", "-100%"],
            backgroundColor: ["#ff0055", "#0099ff"],
          }}
          transition={bounceTransition}
        />{" "}
      </div>
    </>
  );
}
