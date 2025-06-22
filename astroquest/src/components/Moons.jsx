import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import BackgroundLayout from './BackgroundLayout';
import moons from './moonsData';

export default function Moons() {
  const [index, setIndex] = useState(0);
  const moon = moons[index];

  const nextMoon = () => setIndex((prev) => (prev + 1) % moons.length);
  const prevMoon = () => setIndex((prev) => (prev - 1 + moons.length) % moons.length);

  useEffect(() => {
    window.speechSynthesis.cancel();
  }, [index]);

  const speakDescription = () => {
    const utterance = new SpeechSynthesisUtterance(moon.description);
    utterance.lang = 'en-US';
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const scrollToWhyAstro = () => {
    const section = document.getElementById('why-astroquest');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BackgroundLayout>
      <section
        id="moons"
        className="relative min-h-screen w-full text-white px-6 py-10 flex flex-col items-center justify-start overflow-hidden gap-6 mt-[-65px]"
      >
        {/* Scroll Arrow */}
        <motion.div
          onClick={scrollToWhyAstro}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer z-50 select-none"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          aria-label="Scroll down to Why AstroQuest section"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && scrollToWhyAstro()}
        >
          <div className="text-white text-3xl hover:text-blue-400 transition duration-300 drop-shadow-lg">
            ↓
          </div>
        </motion.div>

        <div className="text-center z-10 space-y-2">
          <h2 className="text-xs tracking-[0.25em] text-gray-400 uppercase">Explore the Night</h2>
          <h1 className="text-5xl font-extrabold font-serif tracking-widest text-blue-100 drop-shadow-lg">
            Moons with Story
          </h1>
        </div>

        <div className="text-center z-10 space-y-3 max-w-xl px-4">
          <h2 className="text-4xl font-serif uppercase tracking-wider text-blue-200">{moon.name}</h2>
          <div className="flex justify-center items-start gap-2 text-lg text-gray-200 leading-relaxed">
            <p className="max-w-md">{moon.description}</p>
            <button
              onClick={speakDescription}
              className="text-white hover:text-blue-400 transition text-sm pt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
              aria-label="Listen to moon description"
            >
              🔊
            </button>
          </div>
        </div>

        <div className="relative w-full flex items-center justify-center h-64 z-10">
          <button
            onClick={prevMoon}
            className="absolute left-[150px] top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-3xl z-20 opacity-70 hover:opacity-100 transition focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            aria-label="Previous moon"
          >
            ‹
          </button>
          <div className="w-64 h-64 relative flex items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute w-full h-full rounded-full border-2 border-white/10 blur-xl animate-spin-slow"
            />
            <AnimatePresence mode="wait">
              <motion.img
                key={moon.name}
                src={moon.image}
                alt={moon.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="w-56 h-56 object-contain animate-float drop-shadow-xl"
                style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' }}
              />
            </AnimatePresence>
          </div>
          <button
            onClick={nextMoon}
            className="absolute right-[150px] top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-3xl z-20 opacity-70 hover:opacity-100 transition focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            aria-label="Next moon"
          >
            ›
          </button>
        </div>

        <div className="flex items-center justify-center gap-[6px] z-10 mt-[-10px]">
          {moons.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              style={{
                width: '11px',
                height: '11px',
                borderRadius: '100%',
                backgroundColor: i === index ? '#fff' : 'rgba(255, 255, 255, 0.3)',
                border: 'none',
                padding: 0,
                display: 'inline-block',
                cursor: 'pointer',
              }}
              aria-label={`Select moon ${i + 1}`}
              aria-pressed={i === index}
              tabIndex={0}
              onKeyPress={(e) => (e.key === 'Enter' ? setIndex(i) : null)}
            />
          ))}
        </div>

        <div className="z-10 w-full max-w-xl px-6">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 flex justify-between text-base text-gray-200 shadow-xl">
            <div>
              <p className="tracking-wider text-xs font-bold uppercase text-gray-400">Climate</p>
              <p className="text-white text-lg font-semibold">{moon.climate}</p>
            </div>
            <div>
              <p className="tracking-wider text-xs font-bold uppercase text-gray-400">Type</p>
              <p className="text-white text-lg font-semibold">{moon.type}</p>
            </div>
          </div>
        </div>
      </section>
    </BackgroundLayout>
  );
}
