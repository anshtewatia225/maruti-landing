import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    selectedCar: null,
  },
  reducers: {
    selectCar: (state, action) => {
      state.selectedCar = action.payload;
    },
    clearBooking: (state) => {
      state.selectedCar = null;
    }
  }
});

export const { selectCar, clearBooking } = bookingSlice.actions;
export default bookingSlice.reducer;