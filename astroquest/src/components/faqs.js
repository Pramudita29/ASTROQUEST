// faqs.js
const faqsByCategory = {
  "Stars & Galaxies": [
    {
      question: 'How far is the nearest star from Earth?',
      answer: 'The nearest star to Earth (other than the Sun) is Proxima Centauri, about 4.24 light-years away.',
    },
    {
      question: 'What are galaxies made of?',
      answer: 'Galaxies are massive systems of stars, stellar remnants, gas, dust, and dark matter bound together by gravity.',
    },
    {
      question: 'What is a neutron star?',
      answer: 'A neutron star is the collapsed core of a massive star which exploded in a supernova, composed mostly of neutrons and incredibly dense.',
    },
    {
      question: 'Why do stars twinkle?',
      answer: 'Stars twinkle because Earth’s atmosphere causes the light to bend slightly as it passes through layers of varying density.',
    },
    {
      question: 'What is the Milky Way?',
      answer: 'The Milky Way is the galaxy that contains our Solar System, a barred spiral galaxy with billions of stars.',
    },
  ],
  "Black Holes & Universe": [
    {
      question: 'What is a black hole?',
      answer: 'A black hole is a region of space where gravity is so strong that nothing, not even light, can escape it.',
    },
    {
      question: 'What is the event horizon?',
      answer: 'The event horizon is the boundary around a black hole beyond which nothing can escape its gravitational pull.',
    },
    {
      question: 'What is dark matter?',
      answer: 'Dark matter is an invisible substance that does not emit light but exerts gravitational effects on visible matter in the universe.',
    },
    {
      question: 'What is dark energy?',
      answer: 'Dark energy is a mysterious force causing the accelerated expansion of the universe.',
    },
    {
      question: 'What is the Big Bang Theory?',
      answer: 'The Big Bang Theory explains how the universe started from a tiny, hot, dense point and expanded over billions of years.',
    },
  ],
  "Solar System": [
    {
      question: 'Why do planets orbit the Sun?',
      answer: 'Planets orbit the Sun due to the gravitational pull exerted by the Sun’s massive presence in the solar system.',
    },
    {
      question: 'What causes day and night on Earth?',
      answer: 'Day and night are caused by Earth’s rotation on its axis every 24 hours.',
    },
    {
      question: 'What is the asteroid belt?',
      answer: 'The asteroid belt is a region between Mars and Jupiter filled with numerous rocky bodies orbiting the Sun.',
    },
    {
      question: 'Why is Pluto no longer a planet?',
      answer: 'Pluto was reclassified as a dwarf planet because it does not clear its orbit of other debris, a key criterion for full planetary status.',
    },
    {
      question: 'What is a comet made of?',
      answer: 'Comets are made of ice, dust, and rocky material and develop tails when they get close to the Sun.',
    },
  ],
  "Space Exploration": [
    {
      question: 'Who was the first person to walk on the Moon?',
      answer: 'Neil Armstrong was the first person to walk on the Moon in 1969 during NASA’s Apollo 11 mission.',
    },
    {
      question: 'What is the International Space Station?',
      answer: 'The ISS is a space station orbiting Earth, used as a research laboratory and international cooperation project.',
    },
    {
      question: 'What are satellites used for?',
      answer: 'Satellites are used for communication, weather monitoring, navigation, and scientific research.',
    },
    {
      question: 'What is a space probe?',
      answer: 'A space probe is an unmanned spacecraft sent to explore space or other celestial bodies.',
    },
    {
      question: 'What is the Hubble Space Telescope?',
      answer: 'The Hubble Space Telescope is a powerful telescope orbiting Earth that provides high-resolution images of space.',
    },
  ],
  "General Astronomy": [
    {
      question: 'What is a light-year?',
      answer: 'A light-year is the distance light travels in one year, about 5.88 trillion miles (9.46 trillion kilometers).',
    },
    {
      question: 'What causes a solar eclipse?',
      answer: 'A solar eclipse happens when the Moon passes between the Sun and Earth, blocking the Sun’s light.',
    },
    {
      question: 'What is the difference between a meteor, meteorite, and meteoroid?',
      answer: 'A meteoroid is a small space rock, a meteor is the streak of light when it enters Earth’s atmosphere, and a meteorite is a meteoroid that hits the ground.',
    },
    {
      question: 'What tools do astronomers use?',
      answer: 'Astronomers use telescopes, spectrometers, and space probes to study celestial objects.',
    },
    {
      question: 'Why is the sky blue?',
      answer: 'The sky appears blue because Earth’s atmosphere scatters sunlight, and blue light scatters more than other colors.',
    },
  ],
};

export default faqsByCategory;
