import {
  render as rtlRender, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import App from '../../App';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);
test('App page is working fine', () => {
  const { getByPlaceholderText } = render(<App />);
  const linkElement = screen.getByText(/Start/i);
  const linkElement2 = screen.getByText(/End /i);

  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(getByPlaceholderText(/Magnitute/i)).toBeInTheDocument();
  const addInput = screen.getByRole('button', { name: /search/i });
  expect(addInput).toBeInTheDocument();
});
