import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsBackspace } from 'react-icons/bs';
import { earthquakeAction } from '../redux/earthquakes/index';
import EarthquakeSl from './EarthquakeSl';
import Home from './Home';

function Earthquake(props) {
  const content = props;
  const reducersEarth = useSelector((state) => state.Earthquake);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(earthquakeAction(content));
  }, []);
  return (
    <div className="ListContainer">
      <div className="home-go-back">
        <Link to="/">
          <BsBackspace color="black">
            <Home />
          </BsBackspace>
        </Link>
      </div>
      <div>
        <ul>
          {reducersEarth.data.features && reducersEarth.data.features.map((e) => (
            <li key={e.id}>
              <EarthquakeSl data={e} />
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default Earthquake;
