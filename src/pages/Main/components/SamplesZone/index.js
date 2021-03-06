import Box from 'components/abstract/Box';
import Draggable from 'components/abstract/Draggable';
import { MainContext } from 'pages/Main';
import Sample from './components/Sample';
import Text from 'components/basic/Text';
import samples from './samples';
import theme from 'style/theme';
import { useContext } from 'react';

const SamplesZone = () => {
  const { isTrackDraftPlaying } = useContext(MainContext);

  return (
    <Box
      w='100%'
      h='100%'
      bgc={theme.colors.background2}
      br={`2px solid ${theme.colors.background4}`}
      p='1.6rem'
    >
      <Text
        type='h1'
        color={theme.colors.text2}
        containerProps={{ m: '1.6rem 0.8rem' }}
      >
        Samples
      </Text>
      {samples.map((sample) => (
        <Draggable
          key={sample.id}
          id={sample.id}
          type='sample'
          data={sample}
          renderDraggableComponent={({ events }) => (
            <div {...(isTrackDraftPlaying ? {} : events)}>
              <Sample sample={sample} key={sample.name} />
            </div>
          )}
          renderDragComponent={({ x, y }) => (
            <div
              style={{
                position: 'fixed',
                pointerEvents: 'none',
                left: x - 30,
                top: y - 30,
              }}
            >
              <Sample sample={sample} key={sample.name} isDragging />
            </div>
          )}
        />
      ))}
    </Box>
  );
};

export default SamplesZone;
