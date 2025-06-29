import { useNavigate } from 'react-router-dom';
import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

// Image placeholders (update later)
import AquaImg from '../../assets/aqua.png';
import AuraImg from '../../assets/aura.png';
import ERSImg from '../../assets/ers.png';
import ICESatImg from '../../assets/icesat.png';
import LandsatImg from '../../assets/landsat.png';
import SentinelImg from '../../assets/sentinel.png';
import SMAPImg from '../../assets/smap.png';
import TerraImg from '../../assets/terra.png';

export default function EarthMissions() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen text-white font-inknut relative">
            <BackgroundLayout>
                <Navbar />

                <div className="pt-50 px-4 md:px-20 max-w-[1200px] mx-auto pb-32 relative z-20">
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute top-5 -left-24 text-sm bg-white/10 px-4 py-2 rounded-md hover:bg-white/20 transition"
                    >
                        ← Back to Solar System
                    </button>

                    <h1 className="text-center text-5xl font-bold mt-12 mb-8 tracking-wide">
                        EARTH MISSIONS
                    </h1>

                    {/* 🌍 Observation Satellites */}
                    <section className="mt-12">
                        <h2 className="text-3xl mb-12 font-bold text-center">
                            🌍 Observation Satellites (1970s–1990s)
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="text-center space-y-4">
                                <img src={LandsatImg} alt="Landsat Program" className="w-full max-w-[400px] mx-auto rounded-md" />
                                <p>
                                    <strong>Landsat Program (1972–Present):</strong> Joint NASA–USGS satellites monitoring land use, forestry, and agriculture. It's the longest-running Earth imaging program, providing critical data for climate, development, and disaster response.
                                </p>
                            </div>
                            <div className="text-center space-y-4">
                                <img src={ERSImg} alt="ERS Missions" className="w-full max-w-[400px] mx-auto rounded-md" />
                                <p>
                                    <strong>ERS-1 & ERS-2 (1991–1995):</strong> ESA’s first Earth observation satellites. They used synthetic aperture radar (SAR) to measure ocean circulation, wave heights, and polar ice, laying the foundation for modern Earth monitoring systems.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 🌐 Climate Missions */}
                    <section className="mt-24">
                        <h2 className="text-3xl mb-12 font-bold text-center">
                            🌐 Climate Missions (2000s)
                        </h2>
                        <div className="grid md:grid-cols-3 gap-12 text-center">
                            <div className="space-y-4">
                                <img src={TerraImg} alt="Terra" className="w-full max-w-[300px] mx-auto rounded-md" />
                                <p>
                                    <strong>Terra (1999):</strong> Part of NASA’s Earth Observing System, Terra carries five instruments studying atmosphere, land, and oceans. It's vital for understanding human impacts and global change.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <img src={AquaImg} alt="Aqua" className="w-full max-w-[300px] mx-auto rounded-md" />
                                <p>
                                    <strong>Aqua (2002):</strong> Focuses on Earth's water systems — oceans, clouds, precipitation, and ice. Aqua helps track El Niño, monitor droughts, and improve weather forecasting.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <img src={AuraImg} alt="Aura" className="w-full max-w-[300px] mx-auto rounded-md" />
                                <p>
                                    <strong>Aura (2004):</strong> Specializes in atmospheric chemistry. Tracks ozone levels, greenhouse gases, and air pollutants, contributing to climate models and public health studies.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 🚀 Modern Earth Science Missions */}
                    <section className="mt-24">
                        <h2 className="text-3xl mb-8 font-bold text-center">
                            🚀 Modern Earth Science Missions (2010s–Present)
                        </h2>
                        <div className="grid md:grid-cols-3 gap-12 text-center">
                            <div className="space-y-4">
                                <img src={SentinelImg} alt="Sentinel Program" className="w-full max-w-[300px] mx-auto rounded-md" />
                                <p>
                                    <strong>Sentinel Program (2014–Present):</strong> Developed by ESA under Copernicus, this series monitors land movement, sea levels, vegetation, and atmospheric gases. Data is openly available worldwide.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <img src={ICESatImg} alt="ICESat-2" className="w-full max-w-[300px] mx-auto rounded-md" />
                                <p>
                                    <strong>ICESat-2 (2018):</strong> Uses laser altimetry to measure Earth's surface elevation — particularly ice sheets, glaciers, and forests — with extreme precision. Crucial for climate change and sea level studies.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <img src={SMAPImg} alt="SMAP" className="w-full max-w-[300px] mx-auto rounded-md" />
                                <p>
                                    <strong>SMAP (2015):</strong> Measures global soil moisture and freeze/thaw states. Its data improves weather predictions, agricultural planning, and drought monitoring.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </BackgroundLayout>
        </div>
    );
}
