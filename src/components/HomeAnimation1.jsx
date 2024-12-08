"use client";

import { motion } from "framer-motion";

export default function HomeAnimation1() {
  const heading1 = "Hello there!".split(" ");
  const text = "I'm Ashir Valjee, web developer".split(" ");

  return (
    <>
      <div className="text-5xl font-bold">
        {heading1.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>

      <div className="py-6">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: (2 * i) / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>
    </>
  );
}
