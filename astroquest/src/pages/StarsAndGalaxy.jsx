import { Link } from 'react-router-dom';
import constellationImage from '../assets/constellation.png';
import galaxyImage from '../assets/galaxies.png';
import majorStarImage from '../assets/majorstars.png';
import galaxyVideo from '../assets/videos/galaxy_background.mp4';
import Navbar from '../components/Navbar';

export default function StarsGalaxiesSection() {
    return (
        <div className="relative w-full h-screen overflow-hidden text-white bg-black">
            {/* Background Video */}
            <video
                src={galaxyVideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Foreground Content */}
            <div className="relative z-10">
                <Navbar />

                <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-4rem)] px-4 pt-32">
                    <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wide mb-4 font-serif">
                        STARS & GALAXIES
                    </h1>

                    <p className="text-xl sm:text-2xl mb-1 font-semibold">Did you know?</p>
                    <p className="text-lg sm:text-xl max-w-2xl leading-relaxed">
                        Our solar system orbits the center of the Milky Way once <br />
                        every <span className="font-bold">225–250 million years</span>.
                    </p>

                    {/* Categories Section */}
                    <div className="mt-24 w-full max-w-5xl">
                        <h2 className="text-3xl font-bold mb-8 text-left">Categories</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                            {/* Constellation */}
                            <Link
                                to="/stars&galaxy/constellations"
                                className="w-60 h-60 border border-white/40 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform bg-black/30 backdrop-blur-sm"
                            >
                                <img src={constellationImage} alt="Constellation" className="h-100 mb-4" />
                                <p className="text-xl font-medium">Constellation</p>
                            </Link>

                            {/* Major Stars */}
                            <Link
                                to="/stars&galaxy/major-stars"
                                className="w-60 h-60 border border-white/40 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform bg-black/30 backdrop-blur-sm"
                            >
                                <img src={majorStarImage} alt="Major Stars" className="h-40 mb-4" />
                                <p className="text-xl font-medium">Major Stars</p>
                            </Link>

                            {/* Galaxies */}
                            <Link
                                to="/stars&galaxy/galaxies"
                                className="w-60 h-60 border border-white/40 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform bg-black/30 backdrop-blur-sm"
                            >
                                <img src={galaxyImage} alt="Galaxies" className="h-28 mb-4" />
                                <p className="text-xl font-medium">Galaxies</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
