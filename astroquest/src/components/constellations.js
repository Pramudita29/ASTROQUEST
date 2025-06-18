// constellationsData.js

// Import your images here (use null if not yet available)
// import cassiopeiaImg from "../assets/constellations/cassiopeia.png";
import cygnusImg from "../assets/cygnus.png";
import orionImg from "../assets/orion.png";
// import scorpiusImg from "../assets/constellations/scorpius.png";
import carniaImg from "../assets/carnia.png";
import cassiopeiaImg from "../assets/cassiopeia.png";
import centaurusImg from "../assets/centaurus.png";
import cruxImg from "../assets/crux.png";
import lyraImg from "../assets/lyra.png";
import pavoImg from "../assets/pavo.png";
import scorpiusImg from "../assets/scorpius.png";
import tucanaImg from "../assets/tucana.png";
import ursaMajorImg from "../assets/ursa_major.png";
import ursaMinorImg from "../assets/ursa_minor.png";

// Add other imports when you have images

const constellations = [
    {
        name: "Orion – The Hunter",
        image: orionImg,
        hemisphere: "both",
        stars: [
            "Betelgeuse (Red supergiant – forms Orion’s shoulder)",
            "Bellatrix (Another shoulder star)",
            "Alnilam (Middle star of Orion’s Belt)",
            "Alnitak (One end of the Belt)",
            "Mintaka (The other end of the Belt)",
            "Saiph (One of Orion’s legs)",
            "Rigel (Very bright star – forms Orion’s other leg)",
        ],
        description: `Orion is one of the most iconic constellations visible across both hemispheres.  
Its bright stars form a distinct pattern resembling a hunter wielding a club and shield.  
The three stars of Orion’s Belt are especially famous and easy to spot in the night sky.  
Mythologically, Orion was a great hunter pursued by Scorpius, which is why these constellations never appear in the sky simultaneously.  
Orion has several bright stars, including Betelgeuse, a red supergiant nearing the end of its life.`,
    },
    {
        name: "Ursa Major – The Big Bear",
        image: ursaMajorImg,
        hemisphere: "northern",
        stars: [
            "Dubhe – the star at the edge of the bowl",
            "Merak – next to Dubhe",
            "Phecda – bottom of the bowl",
            "Megrez – connects to the handle",
            "Alioth – first star on the handle",
            "Mizar – middle of the handle",
            "Alkaid – tip of the handle",
        ],
        description: `Ursa Major, meaning "Great Bear," is one of the largest and most recognizable constellations in the northern sky.  
Its most famous asterism, the Big Dipper, helps navigate by pointing toward Polaris, the North Star.  
The constellation contains many stars visible to the naked eye and numerous deep-sky objects like galaxies and star clusters.  
It holds significant cultural importance in many civilizations as a symbol of strength and guidance.`,
    },
    {
        name: "Ursa Minor – The Little Bear",
        image: ursaMinorImg,
        hemisphere: "northern",
        stars: [
            "Polaris – The North Star",
            "Yildun – in the handle",
            "Epsilon Ursae Minoris",
            "Zeta Ursae Minoris",
            "Eta Ursae Minoris",
            "Pherkad – 'Guard' star",
            "Kochab – another 'Guard' star",
        ],
        description: `Ursa Minor contains Polaris, the North Star, which has been essential for navigation for centuries.  
Also called the Little Dipper, its stars form a smaller ladle shape in the northern sky.  
Despite its faintness compared to Ursa Major, it plays a vital role in celestial navigation.  
The stars Kochab and Pherkad, known as the "Guardians of the Pole," circle closely around Polaris.`,
    },
    {
        name: "Cassiopeia – The Queen",
        image: cassiopeiaImg,
        hemisphere: "northern",
        stars: [
            "Schedar – brightest in the W-shape",
            "Caph",
            "Ruchbah",
            "Segin",
            "Achird",
        ],
        description: `Cassiopeia is famous for its distinctive "W" shape formed by five bright stars.  
Named after a vain queen in Greek mythology, this constellation is visible year-round in the northern sky.  
It contains several deep-sky objects like the Andromeda Galaxy and numerous star clusters.  
Cassiopeia’s unique shape makes it a useful guide to finding other constellations and celestial objects.`,
    },
    {
        name: "Cygnus – The Swan",
        image: cygnusImg,
        hemisphere: "northern",
        stars: [
            "Deneb – Tail of the swan",
            "Sadr – center of the cross",
            "Albireo – the beak",
            "Gienah and Rukh – the wings",
        ],
        description: `Cygnus is also known as the Northern Cross due to its cross-shaped asterism.  
It represents a swan in flight, with the bright star Deneb marking the tail.  
Cygnus is rich in star clusters, nebulae, and is part of the Summer Triangle asterism.  
It lies in the Milky Way and offers a spectacular view of many stellar phenomena.`,
    },
    {
        name: "Lyra – The Harp",
        image: lyraImg, // lyraImg
        hemisphere: "northern",
        stars: [
            "Vega – One of the brightest stars",
            "Sheliak – Binary star",
            "Sulafat – Binary system",
            "Delta & Zeta Lyrae",
        ],
        description: `Lyra is a small but bright constellation, famous for its brilliant star Vega.  
Vega is one of the closest and brightest stars visible in the night sky and has been extensively studied.  
Lyra also contains the Ring Nebula, a well-known planetary nebula, making it popular among amateur astronomers.  
It symbolizes a lyre, a stringed musical instrument from Greek mythology.`,
    },
    {
        name: "Scorpius – The Scorpion",
        image: scorpiusImg,
        hemisphere: "southern",
        stars: [
            "Antares – Red supergiant",
            "Shaula – Tail",
            "Sargas – Body",
            "Dschubba – Claws",
        ],
        description: `Scorpius is a striking southern constellation that resembles a scorpion with its curved tail and claws.  
It contains Antares, a red supergiant star often called the "heart of the scorpion."  
Scorpius is rich in star clusters and nebulae and is prominent in summer southern skies.  
The mythology tells of a deadly scorpion sent to kill Orion, explaining why these constellations never appear together.`,
    },
    {
        name: "Crux – The Southern Cross",
        image: cruxImg, // cruxImg
        hemisphere: "southern",
        stars: [
            "Acrux",
            "Mimosa",
            "Gacrux",
            "Delta Crucis",
            "Epsilon Crucis",
        ],
        description: `Crux is the smallest constellation but extremely important for southern hemisphere navigation.  
Known as the Southern Cross, it points almost directly to the south celestial pole.  
It is a symbol of many southern countries and is easily recognizable in the night sky.  
Despite its size, it contains several bright stars that form a distinctive cross shape.`,
    },
    {
        name: "Centaurus – The Centaur",
        image: centaurusImg, // centaurusImg
        hemisphere: "southern",
        stars: [
            "Alpha Centauri – Closest system to Earth",
            "Beta Centauri",
            "Menkent",
            "Theta Centauri",
        ],
        description: `Centaurus is a large southern constellation representing a centaur.  
It contains Alpha Centauri, the closest star system to Earth, which includes Proxima Centauri.  
The constellation also holds many star clusters and notable deep-sky objects.  
It’s prominent in the southern hemisphere and visible during autumn and winter months.`,
    },
    {
        name: "Carina – The Keel",
        image: carniaImg, // carinaImg
        hemisphere: "southern",
        stars: ["Canopus", "Miaplacidus", "Avior"],
        description: `Carina was once part of the larger Argo Navis constellation and represents the keel of a ship.  
It contains Canopus, the second brightest star in the night sky, crucial for navigation.  
The constellation also features spectacular nebulae and star clusters.  
Carina is visible mainly in the southern hemisphere’s summer skies.`,
    },
    {
        name: "Pavo – The Peacock",
        image: pavoImg,
        hemisphere: "southern",
        stars: ["Peacock", "Beta Pavonis", "Delta Pavonis"],
        description: `Pavo is a southern constellation named after the peacock, showcasing vibrant stars.  
Although not very bright overall, it includes some interesting double stars and star clusters.  
Pavo is visible during southern hemisphere winter months and is part of the larger bird-themed constellations group.`,
    },
    {
        name: "Tucana – The Toucan",
        image: tucanaImg,
        hemisphere: "southern",
        stars: ["Alpha Tucanae", "Beta Tucanae", "Gamma Tucanae"],
        description: `Tucana is a southern constellation representing the toucan bird.  
It hosts the Small Magellanic Cloud, a nearby dwarf galaxy and one of the closest neighbors to our Milky Way.  
Tucana contains several star clusters and is popular among astronomers studying the southern sky.`,
    },
];

export default constellations;
