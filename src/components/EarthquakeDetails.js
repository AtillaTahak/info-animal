import React from 'react';
import {
  Marker, ComposableMap, Geographies, Geography,
} from 'react-simple-maps';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsBackspace } from 'react-icons/bs';
import Earthquake from './Earthquake';

function EarthquakeDetails() {
  const pageURL = window.location.href;
  const urlArray = pageURL.split('/');
  const reducersEarth = useSelector((state) => state.Earthquake);
  const content = (reducersEarth.data.features.filter((e) => e.id === urlArray[4]))[0];

  const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

  return (
    <div>
      <Link to="/earthquake">
        <BsBackspace>
          <Earthquake
            magInput={reducersEarth.minMag}
            startInput={reducersEarth.startDate}
            endInput={reducersEarth.endTime}
          />
        </BsBackspace>
      </Link>
      <div>
        <h2>{content.properties.title}</h2>
      </div>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) => geographies.map(
            (geo) => <Geography key={geo.rsmKey} geography={geo} />,
          )}
        </Geographies>
        <Marker coordinates={[content.geometry.coordinates[0],
          content.geometry.coordinates[1]]}
        >
          <circle r={8} fill="#F53" />
        </Marker>
      </ComposableMap>
      <table>
        <tr>
          <th>Magnitute</th>
          <th>Place</th>
          <th>tsunami</th>
        </tr>
        <tr>
          <td>{content.properties.mag}</td>
          <td>{content.properties.place}</td>
          <td>{content.properties.tsunami}</td>

        </tr>
      </table>

    </div>

  );
}

export default EarthquakeDetails;
