import Box from 'components/abstract/Box';
import Droppable from 'components/abstract/Droppable';
import Part from './style';
import Text from 'components/basic/Text';
import TrackActions from './components/TrackActions';
import samples from 'pages/Main/components/SamplesZone/samples';
import theme from 'style/theme';
import { useState } from 'react';

const TrackDraft = () => {
  const [parts, setParts] = useState(
    Array.from(new Array(15), () => ({
      id: Math.random().toString(),
      name: 'blank',
      duration: 2,
      src: '',
    }))
  );

  const onDropSample = ({ droppableId, draggableData }) => {
    setParts((oldParts) => {
      const newParts = [...oldParts].map((part) => {
        if (part.id === droppableId) {
          return {
            ...draggableData,
            id: droppableId,
            color:
              Math.random() < 0.5 ? theme.colors.green : theme.colors.yellow,
          };
        }
        return part;
      });
      return newParts;
    });
  };

  return (
    <Box
      bgc={theme.colors.background2}
      borderRadius='0.8rem'
      h='14rem'
      w='100%'
      display='flex'
    >
      <TrackActions />
      <Box
        w='100%'
        h='100%'
        display='flex'
        alignItems='center'
        bgc={theme.colors.background3}
        borderRadius='0.8rem'
      >
        {parts.map(({ id, src, duration, name, color }) =>
          !src ? (
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
                  <Part
                    {...events}
                    w={
                      isOver
                        ? `${draggedSampleDuration * 20}px`
                        : `${(1 / 15) * 100}%`
                    }
                    h={isOver ? '90%' : '100%'}
                    bl={`1px solid ${theme.colors.background5}`}
                    bgc={
                      isOver
                        ? theme.colors.background5
                        : theme.colors.background3
                    }
                    borderRadius={isOver ? '0.8rem' : ''}
                  >
                    {isOver && draggedSampleDuration ? (
                      <Box>
                        <Text
                          type='small'
                          color={theme.colors.flame}
                          containerProps={{ m: '0.3rem' }}
                        >
                          {draggedSampleDuration}s
                        </Text>
                      </Box>
                    ) : null}
                  </Part>
                );
              }}
            />
          ) : (
            <Part
              key={id}
              w={`${duration * 20}px`}
              h='100%'
              bgc={color}
              borderRadius='0.8rem'
              p='1rem'
              display='flex'
              flexDirection='column'
              justifyContent='space-between'
            >
              <Text
                color={theme.colors.white}
                type='small'
                containerProps={{ m: '0' }}
              >
                {duration}s
              </Text>
              <Text
                color={theme.colors.white}
                type='small'
                containerProps={{ m: '0' }}
              >
                {name}
              </Text>
            </Part>
          )
        )}
      </Box>
    </Box>
  );
};

export default TrackDraft;
