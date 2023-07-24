import { createSlice } from "@reduxjs/toolkit";
import { getRooms, getRoom } from "./guestActions";

const initialState = {
  isLoading: false,
  success: false,
  rooms: [],
  room: [],
  error: "",
};

const userSlice = createSlice({
  name: "guest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Rooms
    getRooms: {
      builder.addCase(getRooms.pending, (state) => {
        state.isLoading = true;
      });

      builder.addCase(getRooms.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.success = true),
          (state.rooms = action.payload);
      });

      builder.addCase(getRooms.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      });
    }

    // Get Room By Id
    getRoom: {
      builder.addCase(getRoom.pending, (state) => {
        state.isLoading = true;
      });

      builder.addCase(getRoom.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.success = true),
          (state.room = action.payload);
      });

      builder.addCase(getRoom.rejected, (state, action) => {
        state.error = action.payload;
      });
    }
  },
});

export default userSlice.reducer;
