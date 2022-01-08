import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import Earthquake from './components/Earthquake';
import EarthquakeDetails from './components/EarthquakeDetails';
import Home from './components/Home';

function App() {
  const [magInput, setMagInput] = useState('');
  const [startInput, setStartInput] = useState('');
  const [endInput, setEndInput] = useState('');
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={(
            <Home
              magInput={magInput}
              setMagInput={setMagInput}
              startInput={startInput}
              setStartInput={setStartInput}
              endInput={endInput}
              setEndInput={setEndInput}
            />
          )}
        />
        <Route
          path="/earthquake"
          element={(
            <Earthquake
              magInput={magInput}
              startInput={startInput}
              endInput={endInput}
            />
          )}
        />
        <Route path="/earthquakeDetails/:id" element={<EarthquakeDetails />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
