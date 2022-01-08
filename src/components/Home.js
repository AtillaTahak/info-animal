import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Container, { Elements } from './styles/Home.styled';
import { setDate } from '../redux/earthquakes/index';

function Home(props) {
  const content = props;
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.magInput.trim()) {
      const dates = {
        startDate: content.startInput,
        endTime: content.endInput,
        minMag: content.magInput,
      };
      dispatch(setDate(dates));
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Elements>
          <span>Start Date</span>
          <input id="end-date" type="date" value={content.startInput} onChange={(e) => content.setStartInput(e.target.value)} />
        </Elements>
        <Elements>
          <span>End Date</span>
          <input id="end-date" type="date" value={content.endInput} onChange={(e) => content.setEndInput(e.target.value)} />

        </Elements>
        <Elements>
          <span>Earth Quake Minumum Magnitute</span>
          <input type="text" value={content.magInput} onChange={(e) => content.setMagInput(e.target.value)} placeholder="Minumum Magnitute" />
          <Link to="/earthquake" handler={content}>
            <input className="search" type="submit" value="Search Earth Quake in World" />
          </Link>
        </Elements>
      </Container>
    </form>
  );
}

export default Home;
