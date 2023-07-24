import { createSlice } from "@reduxjs/toolkit";
import { addBooking, bookingInfo, payForBooking } from "./BookingAction";

const initialState = {
  isLoading: false,
  success: false,
  booking: [],
  error: "",
};
const bookingSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    getBooking: (state, action) => {
      let Booking = JSON.parse(localStorage.getItem("booking")) || null;
      state.booking = Booking;
    },
  },
  extraReducers: (builder) => {
    addBooking: {
      builder.addCase(addBooking.pending, (state) => {
        state.isLoading = true;
      }),
        builder.addCase(addBooking.fulfilled, (state, action) => {
          (state.isLoading = false),
            (state.success = true),
            (state.booking = action.payload);
        });
      builder.addCase(addBooking.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      });
    }
    bookingInfo: {
      builder.addCase(bookingInfo.pending, (state) => {
        state.isLoading = true;
      }),
        builder.addCase(bookingInfo.fulfilled, (state, action) => {
          (state.isLoading = false),
            (state.success = true),
            (state.booking = action.payload);
        });
      builder.addCase(bookingInfo.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      });
    }
    payForBooking: {
      builder.addCase(payForBooking.pending, (state) => {
        state.isLoading = true;
      }),
        builder.addCase(payForBooking.fulfilled, (state, action) => {
          (state.isLoading = false),
            (state.success = true),
            (state.booking = action.payload);
        });
      builder.addCase(payForBooking.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      });
    }
  },
});

export const { getBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
