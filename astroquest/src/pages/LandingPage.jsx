import BackgroundLayout from '../components/BackgroundLayout';
import { DidYouKnow } from '../components/DidYouKnowCards';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { Mascot } from '../components/Mascot';
import Moons from '../components/Moons';
import Navbar from '../components/Navbar';
import WhyAstroQuest from '../components/WhyAstro';

const LandingPage = () => {
    return (
        <BackgroundLayout>
            <Navbar />
            <Hero />
            <Mascot />
            <DidYouKnow />
            <Moons />
            <WhyAstroQuest />
            <Footer />
        </BackgroundLayout>
    );
};

export default LandingPage;
