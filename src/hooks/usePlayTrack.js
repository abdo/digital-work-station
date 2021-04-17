import { useContext, useEffect, useState } from 'react';

import { MainContext } from 'pages/Main';

const usePlayTrack = ({ parts, id }) => {
  const {
    currentlyPlayingAudio: currentlyGlobalPlayingAudio,
    setCurrentlyPlayingAudio: setCurrentlyGlobalPlayingAudio,
  } = useContext(MainContext);

  const [currentlyPlayingAudio, setCurrentlyPlayingAudio] = useState(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentlyPlayingPart, setCurrentlyPlayingPart] = useState(false);

  const pauseTrack = () => {
    if (currentlyPlayingAudio) {
      currentlyPlayingAudio.pause();
    }
    setIsPlaying(false);

    setCurrentlyPlayingAudio(null);
    setCurrentlyPlayingPart(null);
  };

  const playTrack = () => {
    setIsPlaying(true);
    setCurrentlyGlobalPlayingAudio({
      src: id,
    });

    const playPart = ({ part, index }) => {
      const playNextPart = () => {
        // To get updated state
        setIsPlaying((currentIsTrackDraftPlaying) => {
          if (currentIsTrackDraftPlaying) {
            if (index + 1 <= parts.length - 1) {
              playPart({
                part: parts[index + 1],
                index: index + 1,
              });
            } else {
              pauseTrack();
            }
          }
          return currentIsTrackDraftPlaying;
        });
      };

      setCurrentlyPlayingPart(part);
      if (part.src) {
        const partAudio = new Audio(part.src);
        setCurrentlyPlayingAudio(partAudio);
        partAudio.play();
        partAudio.onended = () => {
          playNextPart();
        };
      } else {
        setCurrentlyPlayingAudio(null);
        setTimeout(() => {
          playNextPart();
        }, part.duration * 1000);
      }
    };

    playPart({ part: parts[0], index: 0 });
  };

  useEffect(() => {
    if (currentlyGlobalPlayingAudio.src !== id) {
      pauseTrack();
    }
  }, [currentlyGlobalPlayingAudio]);

  return { playTrack, pauseTrack, isPlaying, currentlyPlayingPart };
};

export default usePlayTrack;
