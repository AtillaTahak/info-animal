import earthquake from './api';

const fetchingResults = () => earthquake().then((results) => results);

export default fetchingResults;
