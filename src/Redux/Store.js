import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";
import guestReducer from "./Guest/guestSlice";
import bookingReducer from "./Booking/BookingSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    guest: guestReducer,
    booking: bookingReducer,
  },
});

export default store;
