import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../API";

// Get Rooms
export const getRooms = createAsyncThunk("guest/rooms ", async (thunkAPI) => {
  const config = {
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await axios.get(`${API_URL}/rooms`, config);

    localStorage.setItem("rooms", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Get Room By Id
export const getRoom = createAsyncThunk(
  "guest/rooms/id",
  async (id, thunkAPI) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    try {
      const response = await axios.get(`${API_URL}/rooms/${id}`, config);
      localStorage.setItem("room", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
