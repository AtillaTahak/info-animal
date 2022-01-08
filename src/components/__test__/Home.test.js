import { render as rtlRender } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Home from '../Home';

test('renders App', () => {
  const tree = rtlRender(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
