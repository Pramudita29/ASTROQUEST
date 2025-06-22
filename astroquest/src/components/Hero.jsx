import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import heroVideo from '../assets/hero.mp4';

const phrases = [
  "Explore the Universe...",
  "Discover New Worlds...",
  "Journey to the Stars...",
];

const Typewriter = () => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < phrases[phraseIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + phrases[phraseIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setCharIndex(0);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, phraseIndex]);

  return (
    <p className="text-lg md:text-2xl mb-6 text-gray-300 h-8 select-none">
      {text}
      <span className="animate-pulse">|</span>
    </p>
  );
};

const ScrollDownIndicator = ({ onClick }) => (
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-yellow-400 text-4xl cursor-pointer select-none z-30"
    aria-label="Scroll down"
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyDown={(e) => e.key === 'Enter' && onClick()}
  >
    ↓
  </motion.div>
);

export default function Hero() {
  const [showToast, setShowToast] = useState(false);

  const handleExploreClick = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <section className="relative w-screen h-screen flex items-center justify-center text-white overflow-hidden select-none mt-[-80px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={heroVideo}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10" />

      {/* Toast Message - below nav */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed top-[80px] right-6 bg-[#DDE5F6] text-black px-6 py-3 rounded-lg shadow-xl z-50 font-['Inknut_Antiqua'] text-sm md:text-base border border-blue-200"
        >
          Please Login or Signup to continue
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-20 text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-serif tracking-wide whitespace-nowrap">
          Welcome To AstroQuest!
        </h1>

        <Typewriter />

        <button
          onClick={handleExploreClick}
          className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition focus:outline-none focus:ring-4 focus:ring-yellow-300 font-['Inknut_Antiqua']"
        >
          Explore
        </button>
      </div>

      <ScrollDownIndicator onClick={handleExploreClick} />
    </section>
  );
}
