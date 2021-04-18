import { useContext, useEffect, useState } from 'react';

import Box from 'components/abstract/Box';
import Droppable from 'components/abstract/Droppable';
import EmptyTrackPart from './components/EmptyTrackPart';
import FilledTrackPart from './components/FilledTrackPart';
import { MainContext } from 'pages/Main';
import TrackActions from './components/TrackActions';
import samples from 'pages/Main/components/SamplesZone/samples';
import theme from 'style/theme';

const emptyPartPrint = { name: 'blank', duration: 2, src: '' };

const TrackDraft = () => {
  const {
    currentlyPlayingDraftTrackPart,
    isTrackDraftPlaying,
    savedTracks,
  } = useContext(MainContext);

  const [parts, setParts] = useState(
    Array.from(new Array(25), () => ({
      id: Math.random().toString(),
      ...emptyPartPrint,
    }))
  );

  const onDropSample = ({ droppableId, draggableData }) => {
    setParts((oldParts) => {
      const newParts = [...oldParts].map((part) => {
        if (part.id === droppableId) {
          const colorsArray = [
            theme.colors.green,
            theme.colors.yellow,
            theme.colors.blue,
          ];
          return {
            ...draggableData,
            id: droppableId,
            color: colorsArray[Math.floor(Math.random() * colorsArray.length)],
          };
        }
        return part;
      });
      return newParts;
    });
  };

  const onRemoveSample = ({ droppableId }) => {
    setParts((oldParts) => {
      const newParts = [...oldParts].map((part) => {
        if (part.id === droppableId) {
          return {
            ...emptyPartPrint,
            id: droppableId,
          };
        }
        return part;
      });
      return newParts;
    });
  };

  const onClearTrackDraft = () => {
    setParts((oldParts) => {
      const newParts = [...oldParts].map(() => ({
        id: Math.random().toString(),
        ...emptyPartPrint,
      }));
      return newParts;
    });
  };

  useEffect(() => {
    onClearTrackDraft();
  }, [savedTracks]);

  return (
    <Box
      bgc={theme.colors.background2}
      borderRadius='0.8rem'
      h='14rem'
      w='100%'
      display='flex'
    >
      <TrackActions parts={parts} />
      <Box
        w='100%'
        h='100%'
        display='flex'
        alignItems='center'
        bgc={theme.colors.background3}
        borderRadius='0.8rem'
      >
        {parts.map(({ id, src, duration, name, color }, index) => {
          const isPartBeingPlayed = currentlyPlayingDraftTrackPart?.id === id;

          return !src ? (
            <Droppable
              key={id}
              id={id}
              accepts='sample'
              onDrop={(draggableData) =>
                onDropSample({ droppableId: id, draggableData })
              }
              renderDroppableComponent={({
                events,
                isOver,
                currentlyDraggingId,
              }) => {
                const draggedSample = samples.find(
                  (sample) => sample.id === currentlyDraggingId
                );
                const draggedSampleDuration = draggedSample?.duration;

                return (
                  <EmptyTrackPart
                    events={events}
                    isOver={isOver}
                    draggedSampleDuration={draggedSampleDuration}
                    parts={parts}
                    index={index}
                    isPartBeingPlayed={isPartBeingPlayed}
                  />
                );
              }}
            />
          ) : (
            <FilledTrackPart
              id={id}
              key={id}
              color={color}
              duration={duration}
              name={name}
              isTrackDraftPlaying={isTrackDraftPlaying}
              isPartBeingPlayed={isPartBeingPlayed}
              onRemoveSample={onRemoveSample}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default TrackDraft;
