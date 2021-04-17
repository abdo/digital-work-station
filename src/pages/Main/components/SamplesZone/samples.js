import musicSamples from 'assets/music-samples';

const {
  Bass,
  Guitar,
  Vocals,
  Hammond,
  Drums,
  Chill,
  Wind,
  Cheering,
} = musicSamples;

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
    name: 'Chill',
    id: 'Chill',
    src: Chill,
    duration: 11,
  },
  {
    name: 'Wind',
    id: 'Wind',
    src: Wind,
    duration: 2,
  },
  {
    name: 'Cheer',
    id: 'Cheer',
    src: Cheering,
    duration: 2,
  },
];

export default samples;
