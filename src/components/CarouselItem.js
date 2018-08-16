import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const CarouselItem = props => {
  const { description, imageUrl, label } = props.item;

  const handleClick = () => {
    const path =
      props.item.type === 'Collection'
        ? `/collections/${props.item.id}`
        : `/items/${props.item.id}`;
    props.history.push(path);
  };

  return (
    <a className="swiper-slide" style={styles.itemStyle} onClick={handleClick}>
      <img alt={description} src={imageUrl} />
      <div className="caption">{label}</div>
    </a>
  );
};

const styles = {
  itemStyle: {
    cursor: 'pointer'
  }
};

CarouselItem.propTypes = {
  history: PropTypes.object.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    label: PropTypes.string
  })
};

const CarouselItemWithRouter = withRouter(CarouselItem);
export default CarouselItemWithRouter;
