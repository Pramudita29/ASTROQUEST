import andromeda from '../assets/andromeda.png';
import milky_way from '../assets/milky-way.png';
import pinwheel from '../assets/pinwheel.png';
import triangulum from '../assets/triangulum.png';
import whirlpool from '../assets/whirlpool.png';

import ic1101 from '../assets/ic1101.png';
import messier from '../assets/messier.png';
import ngc from '../assets/ngc.png';
import ngc4621 from '../assets/ngc4621.png';
import ngc4889 from '../assets/ngc4889.png';

import lmc from '../assets/lmc.png';
import ngc1427A from '../assets/ngc1427A.png';
import ngc4449 from '../assets/ngc4449.png';
import smc from '../assets/smc.png';
import zwicky from '../assets/zwicky.png';



const galaxies = [
    // 🌌 SPIRAL GALAXIES
    {
        name: "Milky Way",
        type: "spiral",
        distance: "0 (we live inside it)",
        size: "100,000 ly diameter",
        description: `The Milky Way is our home galaxy. It contains over 200 billion stars and appears as a milky band across the sky.`,
        image: milky_way,
    },
    {
        name: "Andromeda Galaxy (M31)",
        type: "spiral",
        distance: "2.5 million ly",
        size: "220,000 ly diameter",
        description: `The closest spiral galaxy to the Milky Way. It's on a slow collision course with us and is visible with the naked eye.`,
        image: andromeda,
    },
    {
        name: "Whirlpool Galaxy (M51)",
        type: "spiral",
        distance: "31 million ly",
        size: "76,000 ly diameter",
        description: `Famous for its spiral arms and interaction with a companion galaxy. A stunning example of galaxy collisions.`,
        image: whirlpool,
    },
    {
        name: "Triangulum Galaxy (M33)",
        type: "spiral",
        distance: "2.7 million ly",
        size: "60,000 ly diameter",
        description: `The third-largest galaxy in the Local Group, after Andromeda and the Milky Way. It's face-on and rich in star-forming regions.`,
        image: triangulum,
    },
    {
        name: "Pinwheel Galaxy (M101)",
        type: "spiral",
        distance: "21 million ly",
        size: "170,000 ly diameter",
        description: `One of the largest and most well-defined spiral galaxies, it lies in the Ursa Major constellation.`,
        image: pinwheel,
    },

    // 🌠 ELLIPTICAL GALAXIES
    {
        name: "Messier 87 (M87)",
        type: "elliptical",
        distance: "53.5 million ly",
        size: "120,000 ly diameter",
        description: `A giant elliptical galaxy in the Virgo Cluster, famous for its supermassive black hole image captured by the Event Horizon Telescope.`,
        image: messier,
    },
    {
        name: "NGC 1132",
        type: "elliptical",
        distance: "320 million ly",
        size: "120,000 ly diameter",
        description: `A fossil group galaxy — likely the merged remains of an entire galaxy group, now a single large elliptical galaxy.`,
        image: ngc,
    },
    {
        name: "IC 1101",
        type: "elliptical",
        distance: "1.04 billion ly",
        size: "400,000 ly diameter",
        description: `One of the largest galaxies ever discovered. It’s so massive it contains hundreds of trillions of stars.`,
        image: ic1101,
    },
    {
        name: "NGC 4889",
        type: "elliptical",
        distance: "308 million ly",
        size: "250,000 ly diameter",
        description: `Home to one of the largest known black holes, this giant elliptical galaxy lies in the Coma Cluster.`,
        image: ngc4889,
    },
    {
        name: "NGC 4621 (Messier 59)",
        type: "elliptical",
        distance: "60 million ly",
        size: "90,000 ly diameter",
        description: `A moderately sized elliptical galaxy in the Virgo Cluster. It contains old stars and little gas for star formation.`,
        image: ngc4621,
    },

    // 🌑 IRREGULAR GALAXIES
    {
        name: "Large Magellanic Cloud (LMC)",
        type: "irregular",
        distance: "163,000 ly",
        size: "14,000 ly diameter",
        description: `A satellite galaxy of the Milky Way. It’s irregular in shape and contains the Tarantula Nebula, a massive star-forming region.`,
        image: lmc,
    },
    {
        name: "Small Magellanic Cloud (SMC)",
        type: "irregular",
        distance: "200,000 ly",
        size: "7,000 ly diameter",
        description: `Another satellite of the Milky Way, the SMC is smaller than the LMC and visible from the southern hemisphere.`,
        image: smc,
    },
    {
        name: "NGC 1427A",
        type: "irregular",
        distance: "52 million ly",
        size: "20,000 ly diameter",
        description: `A young irregular galaxy being torn apart as it plunges into the Fornax Cluster, triggering bursts of star formation.`,
        image: ngc1427A,
    },
    {
        name: "I Zwicky 18",
        type: "irregular",
        distance: "59 million ly",
        size: "2,500 ly diameter",
        description: `Once thought to be a newly formed galaxy, it is now believed to be old but undergoing new bursts of star formation.`,
        image: zwicky,
    },
    {
        name: "NGC 4449",
        type: "irregular",
        distance: "12.5 million ly",
        size: "20,000 ly diameter",
        description: `A Magellanic-type irregular galaxy in the constellation Canes Venatici. It has active star formation and interaction with nearby galaxies.`,
        image: ngc4449,
    },
];

export default galaxies;
