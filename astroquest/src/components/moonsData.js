import callisto from '../assets/callisto.png';
import deimos from '../assets/deimos.png';
import mimas from '../assets/mimas.png';
import moon from '../assets/moon.png';
import oberon from '../assets/oberon.png';
import triton from '../assets/triton.png';

export default [
  {
    name: 'Moon (Earth)',
    description: 'Humans Walked Here!',
    label: 'Moon (Earth)',
    image: moon,
    climate: 'Rocky & Reflective',
    type: 'Natural Satellite',
  },
  {
    name: 'Deimos (Mars)',
    description: 'Tiny but Mysterious',
    label: 'Deimos (Mars)',
    image: deimos,
    climate: 'Dry & Dusty',
    type: 'Irregular Moon',
  },
  {
    name: 'Callisto (Jupiter)',
    description: 'Craters Older Than Dinosaurs',
    label: 'Callisto (Jupiter)',
    image: callisto,
    climate: 'Frozen & Ancient',
    type: 'Galilean Moon',
  },
  {
    name: 'Mimas (Saturn)',
    description: 'The Death Star moon!',
    label: 'Mimas (Saturn)',
    image: mimas,
    climate: 'Icy & Cratered',
    type: 'Mid-sized Moon',
  },
  {
    name: 'Oberon (Uranus)',
    description: 'The royal moon of ice and mystery.',
    label: 'Oberon (Uranus)',
    image: oberon,
    climate: 'Cold & Dark',
    type: 'Major Moon',
  },
  {
    name: 'Triton (Neptune)',
    description: 'The only big moon that orbits backward.',
    label: 'Triton (Neptune)',
    image: triton,
    climate: 'Retrograde & Frozen',
    type: 'Captured Moon',
  },
];
