// DidYouKnow.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const facts = [
  "Did you know? The Moon is moving away from Earth at about 3.8 cm per year.",
  "Did you know? Jupiter has 79 known moons.",
  "Did you know? Titan, Saturn's moon, has lakes of liquid methane.",
  "Did you know? The largest moon in the solar system is Ganymede.",
];

export function DidYouKnow() {
  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((i) => (i + 1) % facts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="max-w-3xl bg-yellow-400 bg-opacity-20 text-yellow-200 rounded-xl p-6 mx-auto my-12 shadow-lg cursor-default select-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      aria-live="polite"
    >
      <p className="text-lg italic font-semibold">{facts[factIndex]}</p>
    </motion.div>
  );
}
