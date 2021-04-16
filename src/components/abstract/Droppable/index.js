import { Droppable as DroppableComponent } from 'react-dragtastic';
import PropTypes from 'prop-types';
import React from 'react';

const Droppable = ({ accepts, onDrop, renderDroppableComponent, id }) => {
  return (
    <DroppableComponent accepts={accepts} onDrop={onDrop} id={id}>
      {renderDroppableComponent}
    </DroppableComponent>
  );
};

Droppable.propTypes = {
  accepts: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  renderDroppableComponent: PropTypes.func.isRequired,
  onDrop: PropTypes.func,
};

Droppable.defaultProps = {
  onDrop: () => null,
};

export default Droppable;
