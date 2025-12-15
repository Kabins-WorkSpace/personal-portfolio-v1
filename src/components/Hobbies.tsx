"use client";
import { twMerge } from "tailwind-merge";
import Card from "./Card";
import CardHeader from "./CardHeader";
import { motion } from "framer-motion";
import { useRef } from "react";
const hobbies = [
  {
    title: "Football",
    emoji: "⚽️",
    left: "5%",
    top: "5%",
  },
  {
    title: "Learning",
    emoji: "📖",
    left: "45%",
    top: "30%",
  },
  {
    title: "Philosophy",
    emoji: "✨",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Psychology",
    emoji: "💆🏻",
    left: "10%",
    top: "35%",
  },
  {
    title: "Neuroscience",
    emoji: "🧠",
    left: "70%",
    top: "45%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♀️",
    left: "5%",
    top: "65%",
  },
];

export const Hobbies = ({ className }: { className?: string }) => {
  const constraintRef = useRef(null);
  return (
    <Card className={twMerge("h-[320px] flex flex-col", className)}>
      <CardHeader
        title="Beyond the Code"
        description="Explore my interests and hobbies beyond the digital realm."
      />
      <div className="relative flex-1 mt-6 md:mt-8" ref={constraintRef}>
        {hobbies.map((hobby) => (
          <motion.div
            className="inline-flex items-center py-1.5 px-6 gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute "
            style={{
              left: hobby.left,
              top: hobby.top,
            }}
            key={hobby.title}
            drag
            dragConstraints={constraintRef}
          >
            <p className="text-gray-950 font-medium">{hobby.title}</p>
            <p>{hobby.emoji}</p>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};
