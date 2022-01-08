import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const earthquakeAction = createAsyncThunk('earthquake/earthquake',
  async (content) => {
    const req = await fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${content.startInput}&endtime=${content.endInput}&minmagnitude=${content.magInput}`);
    const reqs = await req.json();
    return reqs;
  });

const projectSlice = createSlice({
  name: 'earthquake',
  initialState: {
    data: [],
    loading: false,
    error: null,
    startDate: '2022-01-01',
    endTime: '2022-01-02',
    minMag: '2',
  },
  reducers: {
    setDate: (state, action) => {
      state.startDate = action.payload.startDate;
      state.endTime = action.payload.endTime;
      state.minMag = action.payload.minMag;
    },
  },

  extraReducers: (builder) => {
    /* eslint no-param-reassign: "error" */

    builder.addCase(earthquakeAction.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(earthquakeAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(earthquakeAction.rejected, (state) => {
      state.loading = false;
      state.error = 'Error fetching user data';
    });
  },
});

export const { setDate } = projectSlice.actions;
export default projectSlice.reducer;
