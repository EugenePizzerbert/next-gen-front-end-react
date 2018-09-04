import React from 'react';
import PropTypes from 'prop-types';
import MetadataDisplay from './MetadataDisplay';

const TabContent = props => {
  if (!props.items) {
    return [];
  }

  return (
    <div>
      {props.items.map((item, i) => (
        <MetadataDisplay
          key={item.label}
          title={item.label}
          items={item.value}
          facet_value={item.facet_value}
        />
      ))}
    </div>
  );
};

TabContent.propTypes = {
  items: PropTypes.array
};

export default TabContent;
