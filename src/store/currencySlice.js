import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCurrence = createAsyncThunk(
  'currency/fetchCurrence',
  async function () {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = response.json();
    console.log(data);
    return data;
  }
);

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currency: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCurrence.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchCurrence.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.currency = action.payload;
      state.error = null;
    },
    [fetchCurrence.rejected]: (state) => {
      state.status = 'rejected';
    },
  },
});

export default currencySlice.reducer;
