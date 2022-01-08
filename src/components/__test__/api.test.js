import '@testing-library/jest-dom/extend-expect';
import fetchingResults from '../__mocks__/apiFetch';

describe('test fetching results', () => {
  it('test fetching id name', async () => {
    await fetchingResults().then((results) => expect(results.data.id).toBe('ak022704nuk'));
  });
  it('test fetching mag', async () => {
    await fetchingResults().then((results) => expect(results.data.properties.mag).toBe(1.5));
  });

  it('test fetching place', async () => {
    await fetchingResults().then((results) => expect(results.data.properties.place).toEqual('9 km E of Tyonek, Alaska'));
  });
});
