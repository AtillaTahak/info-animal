import React from 'react';
import { Link } from 'react-router-dom';

function EarthquakeSl(props) {
  const content = props;
  const newTo = {
    pathname: `/earthquakeDetails/${content.data.id}`,
  };

  return (
    <div>
      <h5>{content.data.properties.place}</h5>
      <span>
        title :
        {content.data.properties.title}
      </span>
      <div>
        <Link to={newTo}>More</Link>
      </div>
    </div>
  );
}

export default EarthquakeSl;
