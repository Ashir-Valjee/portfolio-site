"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaJs, FaReact, FaNode, FaCss3Alt } from "react-icons/fa";
import { FaHtml5, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiSqlite,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: FaHtml5, name: "HTML" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaReact, name: "React" },
    { icon: FaNode, name: "Node.js" },
    { icon: FaCss3Alt, name: "CSS" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiExpress, name: "Express.js" },
    { icon: SiSqlite, name: "SQL" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: FaPython, name: "Python" },
  ]; // Add more skills here if needed ];

  return (
    <>
      <div className=" grid grid-cols-3 lg:grid-cols-5 justify-center items-center ">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="text-6xl text-blue-500"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
            // whileHover="hover"
            // variants={skillVariants}
          >
            <div className="flex flex-col items-center justify-center">
              <skill.icon />
              <p className="text-center mt-2 text-lg">{skill.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
