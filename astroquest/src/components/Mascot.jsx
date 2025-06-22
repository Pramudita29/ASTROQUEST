// Mascot.jsx
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import mascotImg from "../assets/mascot.png";

const spaceFacts = [
    "🌌 Did you know? The Milky Way is 100,000 light-years across.",
    "🪐 Saturn has 145 moons — more than any other planet.",
    "☄️ A comet’s tail always points away from the sun.",
    "🔭 Space is completely silent — there’s no air for sound.",
    "🌕 One day on the Moon lasts 29.5 Earth days.",
    "🚀 Light takes 8 minutes to reach Earth from the Sun.",
];

export function Mascot() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [factIndex, setFactIndex] = useState(0);

    const toggleChat = () => setIsChatOpen((prev) => !prev);
    const nextFact = () => setFactIndex((i) => (i + 1) % spaceFacts.length);

    return (
        <>
            {/* Floating Mascot + Tooltip Bubble */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
                {/* Bubble */}
                {!isChatOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-[#1f1f2e] text-white text-sm px-4 py-2 rounded-lg shadow-lg border border-[#33334a] max-w-[200px]"
                    >
                        ✨ Click me for space facts!
                    </motion.div>
                )}

                {/* Mascot */}
                <motion.img
                    src={mascotImg}
                    alt="AstroBot"
                    className="w-40 cursor-pointer select-none"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                    onClick={toggleChat}
                    draggable={false}
                />
            </div>

            {/* Chat UI */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="fixed bottom-44 right-6 w-96 bg-[#0e0e1f] text-white border border-[#2b2b41] shadow-2xl rounded-xl z-50 p-6 backdrop-blur-sm"
                    >
                        <div className="text-base leading-relaxed font-mono tracking-normal mb-4">
                            {spaceFacts[factIndex]}
                        </div>

                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={nextFact}
                                className="px-3 py-1.5 text-sm bg-[#1f1f2e] hover:bg-[#2a2a3f] rounded transition"
                            >
                                Next 🚀
                            </button>
                            <button
                                onClick={toggleChat}
                                className="px-3 py-1.5 text-sm bg-[#1f1f2e] hover:bg-[#3a3a5f] rounded transition"
                            >
                                Close ✖
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
