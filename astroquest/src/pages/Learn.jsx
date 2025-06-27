import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundLayout from '../components/BackgroundLayout';
import Navbar from '../components/Navbar';

export default function Learn() {
    const faqs = [
        {
            question: 'What is astronomy?',
            answer: 'Astronomy is the scientific study of celestial objects, space, and the universe as a whole.',
        },
        {
            question: 'What is the difference between astronomy and astrology?',
            answer: 'Astronomy is a science focused on celestial phenomena, while astrology is a belief system that suggests a connection between celestial events and human behavior.',
        },
        {
            question: 'What are stars made of?',
            answer: 'Stars are made mostly of hydrogen and helium, undergoing nuclear fusion to emit light and heat.',
        },
        {
            question: 'What causes day and night?',
            answer: 'Day and night are caused by Earth’s rotation on its axis every 24 hours.',
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);
    const navigate = useNavigate();

    const exploreCards = [
        { title: 'Planets & their Moons', link: '/explore' },
        { title: 'Stars & Galaxies', link: '/stars&galaxy' },
        { title: 'Space Objects', link: '/space-object' },
    ];

    return (
        <div className="w-full min-h-screen bg-black text-white font-['Inknut_Antiqua']">
            <BackgroundLayout>
                <Navbar />

                <div className="px-6 md:px-16 py-10 space-y-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Learn Astronomy</h2>

                    {/* Explore Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {exploreCards.map((card, idx) => (
                            <div
                                key={idx}
                                className="border border-white rounded-3xl p-6 text-center flex flex-col justify-between items-center h-full"
                            >
                                <h3 className="text-xl md:text-2xl font-bold mb-6">{card.title}</h3>
                                <button
                                    className="bg-[#FDD365] text-black font-semibold px-6 py-2 text-lg rounded-full hover:brightness-105 transition-all"
                                    onClick={() => {
                                        if (card.link) {
                                            navigate(card.link);
                                        }
                                    }}
                                >
                                    Explore
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* FAQ Section */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Astronomy Basics</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-white rounded-2xl px-6 py-4 bg-black/20 hover:bg-white/10 transition-all duration-300"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <p className="font-semibold">{faq.question}</p>
                                        <span className="text-xl">{openIndex === index ? '▲' : '▼'}</span>
                                    </div>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 mt-2 ${openIndex === index ? 'max-h-40' : 'max-h-0'
                                            }`}
                                    >
                                        <p className="text-gray-300 text-sm">{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Learn More Button */}
                        <div className="mt-6 text-center">
                            <button
                                onClick={() => navigate('/learn/astronomy')}
                                className="bg-[#FDD365] text-black font-semibold px-6 py-2 text-lg rounded-full hover:brightness-105 transition-all"
                            >
                                Learn more about astronomy
                            </button>
                        </div>
                    </div>
                </div>
            </BackgroundLayout>
        </div>
    );
}
