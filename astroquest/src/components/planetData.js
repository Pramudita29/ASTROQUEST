export const planets = [
    // Sun centered left (unchanged position, smaller radius)
    { name: 'Sun', texture: '/textures/sun.png', radius: 10.5, position: [-100, 0, 0] },

    // Top row (Mercury to Mars) — unchanged positions, smaller radii
    { name: 'Mercury', texture: '/textures/mercury.png', radius: 4.9, position: [-50, 20, 0] },
    { name: 'Venus', texture: '/textures/venus.png', radius: 5.6, position: [-20, 20, 0] },
    { name: 'Earth', texture: '/textures/earth.png', radius: 5.6, position: [10, 20, 0] },
    { name: 'Mars', texture: '/textures/mars.png', radius: 5.25, position: [40, 20, 0] },

    // Middle row (Jupiter to Neptune) — adjusted positions, smaller radii
    { name: 'Jupiter', texture: '/textures/jupiter.png', radius: 10.5, position: [-45, -15, 0] }, // Shifted closer
    { name: 'Saturn', texture: '/textures/saturn.png', radius: 9.1, position: [5, -15, 0] }, // Shifted closer
    { name: 'Uranus', texture: '/textures/uranus.png', radius: 7.7, position: [55, -15, 0] }, // Shifted closer
    { name: 'Neptune', texture: '/textures/neptune.png', radius: 7.7, position: [105, -15, 0] }, // Shifted closer

    // Pluto — adjusted position, smaller radius
    { name: 'Pluto', texture: '/textures/pluto.png', radius: 4.55, position: [115, -50, 0] }, // Shifted closer
];