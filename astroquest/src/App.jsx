import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import AstronomyDetails from './components/AstronomyDetails';
import PageTracker from './components/PageTracker';

import Asteroids from './pages/Asteroids';
import Comets from './pages/Comets';
import ConstellationsPage from './pages/Constellations';
import Dashboard from './pages/Dashboard';
import Explore from './pages/ExplorePage';
import Galaxies from './pages/Galaxies';
import Learn from './pages/Learn';
import Login from './pages/Login';
import MajorStars from './pages/MajorStars';
import Meteors from './pages/Meteor';

import EarthMissions from './pages/missions/EarthMission';
import JupiterMissions from './pages/missions/JupiterMission';
import MarsMissions from './pages/missions/MarsMission';
import MercuryMissions from './pages/missions/MercuryMission';
import NeptuneMissions from './pages/missions/NeptuneMission';
import PlutoMissions from './pages/missions/PlutoMission';
import SaturnMissions from './pages/missions/SaturnMission';
import SunMissions from './pages/missions/SunMission';
import UranusMissions from './pages/missions/UranusMission';
import VenusMissions from './pages/missions/VenusMission';

import EarthMoonsPage from './pages/moons/EarthMoon';
import JupiterMoonsPage from './pages/moons/JupiterMoons';
import MarsMoonsPage from './pages/moons/MarsMoons';
import NeptuneMoons from './pages/moons/NeptuneMoons';
import PlutoMoonsPage from './pages/moons/PlutoMoons';
import SaturnMoonsPage from './pages/moons/SaturnMoons';
import UranusMoonsPage from './pages/moons/UranusMoons';

import EarthPage from './pages/planets/EarthPage';
import JupiterPage from './pages/planets/JupiterPage';
import MarsPage from './pages/planets/MarsPage';
import MercuryPage from './pages/planets/MercuryPage';
import NeptunePage from './pages/planets/NeptunePage';
import PlutoPage from './pages/planets/PlutoPage';
import SaturnPage from './pages/planets/SaturnPage';
import SunPage from './pages/planets/SunPage';
import UranusPage from './pages/planets/UranusPage';
import VenusPage from './pages/planets/VenusPage';

import Signup from './pages/Signup';
import SpaceObjects from './pages/SpaceObjects';
import StarsGalaxiesSection from './pages/StarsAndGalaxy';

// Auth Redirect
import AuthRedirect from './utils/AuthRedirect';

// ✅ Import Favorites Page
import FavoritesPage from './pages/FavoritePage';
import Profile from './pages/ProfilePage';
import SpaceGame from './pages/SpaceGame';

// Admin Pages
import Quiz from './components/Quiz'; // Import the Quiz component
import AdminDashboard from './pages/AdminPage';
import QuizZone from './pages/QuizZone';


import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

export default function App() {
  return (
    <Router>
      <PageTracker />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<AuthRedirect />} />

        {/* User Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/astronomy" element={<AstronomyDetails />} />

        {/* Planet Routes */}
        <Route path="/planet/sun" element={<SunPage />} />
        <Route path="/planet/mercury" element={<MercuryPage />} />
        <Route path="/planet/venus" element={<VenusPage />} />
        <Route path="/planet/earth" element={<EarthPage />} />
        <Route path="/planet/mars" element={<MarsPage />} />
        <Route path="/planet/jupiter" element={<JupiterPage />} />
        <Route path="/planet/saturn" element={<SaturnPage />} />
        <Route path="/planet/uranus" element={<UranusPage />} />
        <Route path="/planet/neptune" element={<NeptunePage />} />
        <Route path="/planet/pluto" element={<PlutoPage />} />

        {/* Stars and Galaxy Routes */}
        <Route path="/stars&galaxy" element={<StarsGalaxiesSection />} />
        <Route path="/stars&galaxy/constellations" element={<ConstellationsPage />} />
        <Route path="/stars&galaxy/major-stars" element={<MajorStars />} />
        <Route path="/stars&galaxy/galaxies" element={<Galaxies />} />

        {/* Space Objects Routes */}
        <Route path="/space-object" element={<SpaceObjects />} />
        <Route path="/space-object/asteroids" element={<Asteroids />} />
        <Route path="/space-object/comets" element={<Comets />} />
        <Route path="/space-object/meteors" element={<Meteors />} />

        {/* Moons Routes */}
        <Route path="/neptune/moons" element={<NeptuneMoons />} />
        <Route path="/earth/moons" element={<EarthMoonsPage />} />
        <Route path="/mars/moons" element={<MarsMoonsPage />} />
        <Route path="/jupiter/moons" element={<JupiterMoonsPage />} />
        <Route path="/saturn/moons" element={<SaturnMoonsPage />} />
        <Route path="/uranus/moons" element={<UranusMoonsPage />} />
        <Route path="/pluto/moons" element={<PlutoMoonsPage />} />

        {/* Missions Routes */}
        <Route path="/mars/mission" element={<MarsMissions />} />
        <Route path="/earth/mission" element={<EarthMissions />} />
        <Route path="/jupiter/mission" element={<JupiterMissions />} />
        <Route path="/mercury/mission" element={<MercuryMissions />} />
        <Route path="/neptune/mission" element={<NeptuneMissions />} />
        <Route path="/pluto/mission" element={<PlutoMissions />} />
        <Route path="/saturn/mission" element={<SaturnMissions />} />
        <Route path="/sun/mission" element={<SunMissions />} />
        <Route path="/uranus/mission" element={<UranusMissions />} />
        <Route path="/venus/mission" element={<VenusMissions />} />

        {/* Favorites and Profile */}
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/space-game" element={<SpaceGame />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Quiz Zone and Quiz */}
        <Route path="/quiz" element={<QuizZone />} />
        <Route path="/quiz/:id" element={<Quiz />} /> {/* Dynamic route for the quiz */}
      </Routes>
    </Router>
  );
}
