import { useNavigate } from 'react-router-dom';
import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

import earthImg from '../../assets/half-moon.png';
import moonImg from '../../assets/moon.png';

export default function EarthMoonsPage() {
  const navigate = useNavigate();

  const majorMoons = [
    {
      title: 'The Moon 🌕 (Our Only Natural Satellite)',
      img: moonImg,
      facts: [
        'Discovered: Known since prehistoric times',
        'Diameter: ~3,474 km',
        'Orbit: Synchronous rotation with Earth',
        'Key Facts:',
        'Only natural satellite of Earth',
        'Influences Earth’s tides',
        'Surface covered with craters and maria',
      ],
    },
  ];

  return (
    <BackgroundLayout>
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="w-screen text-white font-serif pt-8 pb-[130px]">
        <div className="w-full">
          <button
            onClick={() => navigate(-1)}
            className="ml-10 text-white text-sm px-4 py-2 bg-white/10 rounded hover:bg-white hover:text-black transition mb-1"
          >
            ← Back to Earth
          </button>

          {/* Title and Top Image */}
          <div className="relative w-full mb-24">
            <img
              src={earthImg}
              alt="Earth"
              className="absolute -top-[50px] -right-[15%] w-[460px] md:w-[580px] lg:w-[660px] h-auto opacity-90 z-0 pointer-events-none"
            />
            <h1 className="text-4xl md:text-5xl text-center font-bold z-10 relative tracking-wide">
              EARTH MOONS
            </h1>
          </div>

          {/* Overview */}
          <div className="mb-20 z-10 relative max-w-4xl mx-auto md:ml-24 px-6 md:px-10 text-left text-base md:text-lg">
            <h2 className="text-blue-300 font-semibold mb-4 flex items-center text-lg md:text-xl">
              <span className="mr-2">🔵</span> Overview of Earth’s Moon
            </h2>
            <ul className="list-disc list-inside space-y-1 max-w-xl">
              <li>Earth has one natural satellite — the Moon.</li>
              <li>Significant influence on Earth’s tides and environment.</li>
              <li>Fifth largest moon in the Solar System.</li>
            </ul>
            <p className="mt-6 text-white/80 max-w-xl">
              The Moon is the only natural satellite of Earth, characterized by a synchronous orbit and a surface marked by craters and maria. Its gravitational pull affects ocean tides and stabilizes Earth's axial tilt.
            </p>
            <div className="mt-6 italic text-sm text-gray-400 max-w-xl">
              Fun Fact: The Moon is slowly moving away from Earth at a rate of about 3.8 cm per year.
            </div>
          </div>
        </div>
      </section>

      {/* Section Title */}
      <section className="w-screen text-center font-serif -mt-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Major Moon of Earth</h2>
      </section>

      {/* MAJOR MOONS */}
      <section className="w-screen font-serif text-base md:text-lg">
        {majorMoons.map((moon, index) => (
          <section
            key={index}
            className="mb-20 px-4 md:px-20"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <div className="text-center">
                <img src={moon.img} alt={moon.title} className="w-60 md:w-72 rounded-full mx-auto shadow-xl" />
                <p className="mt-4 text-xl font-bold text-white text-center">{moon.title}</p>
              </div>
              <div className="max-w-2xl text-left text-white/90 space-y-2">
                <ul className="list-disc list-inside">
                  {moon.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </section>
    </BackgroundLayout>
  );
}
