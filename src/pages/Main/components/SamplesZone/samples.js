import musicSamples from 'assets/music-samples';

const { Bass, Guitar, Vocals, Hammond, Drums, News } = musicSamples;

const samples = [
  {
    name: 'Bass',
    id: 'Bass',
    src: Bass,
    duration: 3.3,
  },
  {
    name: 'Guitar',
    id: 'Guitar',
    src: Guitar,
    duration: 3.3,
  },
  {
    name: 'Vocals',
    id: 'Vocals',
    src: Vocals,
    duration: 3.3,
  },
  {
    name: 'Hammond',
    id: 'Hammond',
    src: Hammond,
    duration: 3.3,
  },
  {
    name: 'Drums',
    id: 'Drums',
    src: Drums,
    duration: 3.3,
  },
  {
    name: 'News Opening',
    id: 'News Opening',
    src: News,
    duration: 7,
  },
];

export default samples;
