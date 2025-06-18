import { useEffect, useState } from 'react';
import BackgroundLayout from '../components/BackgroundLayout';
import Navbar from '../components/Navbar';
import faqsByCategory from '../components/faqs';

const categoryKeys = Object.keys(faqsByCategory);

export default function AstronomyDetails() {
    const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);
    const [flashIndex, setFlashIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [autoFlip, setAutoFlip] = useState(false);

    const currentFaqs = faqsByCategory[selectedCategory];

    const handleNext = () => {
        setFlashIndex((prev) => (prev + 1) % currentFaqs.length);
        setFlipped(false);
    };

    const handlePrev = () => {
        setFlashIndex((prev) => (prev - 1 + currentFaqs.length) % currentFaqs.length);
        setFlipped(false);
    };

    const handleShuffle = () => {
        const randomIndex = Math.floor(Math.random() * currentFaqs.length);
        setFlashIndex(randomIndex);
        setFlipped(false);
    };

    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        setSelectedCategory(newCategory);
        setFlashIndex(0);
        setFlipped(false);
    };

    useEffect(() => {
        let timer;
        if (autoFlip) {
            timer = setTimeout(() => {
                setFlipped(true);
            }, 5000); // auto-flip after 5s
        }
        return () => clearTimeout(timer);
    }, [flashIndex, autoFlip]);

    return (
        <div className="w-full min-h-screen bg-black text-white font-['Inknut_Antiqua']">
            <BackgroundLayout>
                <Navbar />
                <div className="px-6 md:px-16 py-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold">Astronomy Deep Dive</h1>

                        <select
                            onChange={handleCategoryChange}
                            value={selectedCategory}
                            className="bg-white/10 border border-white/30 rounded-lg px-4 py-2 text-white text-sm focus:outline-none"
                        >
                            {categoryKeys.map((cat) => (
                                <option key={cat} value={cat} className="text-black">
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10">
                        {/* FAQ List */}
                        <div className="flex-1 space-y-6">
                            {currentFaqs.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition cursor-default"
                                >
                                    <p className="text-lg font-semibold mb-2">{item.question}</p>
                                    <p className="text-sm text-gray-300">{item.answer}</p>
                                </div>
                            ))}
                        </div>

                        {/* Flashcard */}
                        <div className="flex-1 flex flex-col items-center">
                            <h2 className="text-2xl mb-4">Flash Card Mode</h2>

                            <div className="w-full max-w-md h-52 perspective" style={{ perspective: '1000px' }}>
                                <div
                                    onClick={() => setFlipped(!flipped)}
                                    className={`relative w-full h-full cursor-pointer select-none rounded-2xl shadow-lg transition-transform duration-700 transform ${flipped ? 'rotate-y-180' : ''
                                        }`}
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    {/* Front */}
                                    <div
                                        className="absolute w-full h-full bg-white/10 border border-white/30 rounded-2xl flex items-center justify-center p-6 text-lg text-white font-semibold backface-hidden"
                                        style={{ backfaceVisibility: 'hidden' }}
                                    >
                                        {currentFaqs[flashIndex].question}
                                    </div>

                                    {/* Back */}
                                    <div
                                        className="absolute w-full h-full bg-white/20 border border-white/30 rounded-2xl flex items-center justify-center p-6 text-lg text-gray-300 font-normal rotate-y-180 backface-hidden"
                                        style={{ backfaceVisibility: 'hidden' }}
                                    >
                                        {currentFaqs[flashIndex].answer}
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-6">
                                <button
                                    onClick={handlePrev}
                                    className="bg-[#FDD365] text-black px-4 py-2 rounded-full font-semibold hover:brightness-105"
                                >
                                    ⬅ Prev
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="bg-[#FDD365] text-black px-4 py-2 rounded-full font-semibold hover:brightness-105"
                                >
                                    Next ➡
                                </button>
                                <button
                                    onClick={handleShuffle}
                                    className="bg-white/10 border border-white/30 px-4 py-2 rounded-full text-sm hover:bg-white/20"
                                >
                                    🔀 Surprise Me
                                </button>
                            </div>

                            <div className="flex items-center mt-4 gap-2 text-sm text-gray-400">
                                <input
                                    type="checkbox"
                                    checked={autoFlip}
                                    onChange={() => setAutoFlip(!autoFlip)}
                                    className="accent-yellow-400"
                                />
                                <label>Auto-flip after 5s</label>
                            </div>

                            <p className="text-sm text-gray-500 mt-2">
                                Card {flashIndex + 1} of {currentFaqs.length} — click to flip
                            </p>
                        </div>
                    </div>
                </div>
            </BackgroundLayout>

            <style jsx>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
        </div>
    );
}
