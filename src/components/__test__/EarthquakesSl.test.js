import { render as rtlRender } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import EarthquakeSl from '../EarthquakeSl';

const example = {
  id: 1,
  properties: {
    place: 'Turkey',
    title: 'Turkey have earthquake',
  },

};

test('renders App', () => {
  const tree = rtlRender(
    <Provider store={store}>
      <BrowserRouter>
        <EarthquakeSl data={example} />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
