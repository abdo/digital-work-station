import {
  DragComponent,
  Draggable as DraggableComponent,
} from 'react-dragtastic';

import PropTypes from 'prop-types';

const Draggable = ({
  id,
  type,
  data,
  renderDraggableComponent,
  renderDragComponent,
}) => {
  return (
    <>
      <DraggableComponent id={id} type={type} data={data}>
        {renderDraggableComponent}
      </DraggableComponent>
      <DragComponent for={id}>{renderDragComponent}</DragComponent>
    </>
  );
};

Draggable.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.shape({}),
  renderDraggableComponent: PropTypes.func.isRequired,
  renderDragComponent: PropTypes.func.isRequired,
};

Draggable.defaultProps = {
  data: {},
};

export default Draggable;
