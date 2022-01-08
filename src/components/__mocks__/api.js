const earthquake = () => Promise.resolve({
  data: {
    type: 'Feature',
    properties: {
      mag: 1.5,
      place: '9 km E of Tyonek, Alaska',
      time: 1641340087641,
      updated: 1641340380395,
      tz: null,
      url: 'https://earthquake.usgs.gov/earthquakes/eventpage/ak022704nuk',
      detail: 'https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=ak022704nuk&format=geojson',
      felt: null,
      cdi: null,
      mmi: null,
      alert: null,
      status: 'automatic',
      tsunami: 0,
      sig: 35,
      net: 'ak',
      code: '022704nuk',
      ids: ',ak022704nuk,',
      sources: ',ak,',
      types: ',origin,',
      nst: null,
      dmin: null,
      rms: 0.51,
      gap: null,
      magType: 'ml',
      type: 'earthquake',
      title: 'M 1.5 - 9 km E of Tyonek, Alaska',
    },
    geometry: {
      type: 'Point',
      coordinates: [
        -150.9586,
        61.073,
        33.3,
      ],
    },
    id: 'ak022704nuk',
  },
});

export default earthquake;
