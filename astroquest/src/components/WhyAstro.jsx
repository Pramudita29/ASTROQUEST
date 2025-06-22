import { AcademicCapIcon, QuestionMarkCircleIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import BackgroundLayout from './BackgroundLayout';

const features = [
  {
    title: 'Fun & Easy Learning',
    icon: AcademicCapIcon,
    description: 'Learn space concepts effortlessly with interactive lessons designed for all ages.',
  },
  {
    title: 'Explore Real Space',
    icon: RocketLaunchIcon,
    description: 'Dive into real-time space exploration data and stunning visuals of the cosmos.',
  },
  {
    title: 'Interactive Quizzes',
    icon: QuestionMarkCircleIcon,
    description: 'Test your knowledge and challenge yourself with fun, engaging quizzes.',
  },
];

export default function WhyAstroQuest() {
  return (
    <BackgroundLayout>
      <section
        id="why-astroquest"
        className="text-white py-16 px-6 max-w-4xl mx-auto select-none"
        style={{ backgroundColor: 'transparent' }}
      >

        <motion.h2
          className="text-3xl font-semibold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why AstroQuest?
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-12 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Because space learning should be clear, engaging, and rewarding.
        </motion.p>

        <div className="space-y-8">
          {features.map(({ title, icon: Icon, description }, index) => (
            <motion.div
              key={title}
              className="flex items-center space-x-6 rounded-lg p-5 select-text"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              <div className="relative flex-shrink-0 rounded-full p-3 bg-gradient-to-tr from-yellow-500 to-yellow-300 shadow-lg transition-transform">
                <Icon className="w-8 h-8 text-black" />
                <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-20 blur-xl pointer-events-none" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold transition-colors group-hover:text-yellow-400">
                  {title}
                </h3>
                <p className="text-gray-300 text-sm max-w-xl">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </BackgroundLayout>
  );
}
