import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../API";

export const userLogin = createAsyncThunk(
  "auth/userLogin ",
  async ({ values, navigate }, thunkAPI) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    try {
      const response = await axios.post(`${API_URL}/login`, values, config);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userRegister = createAsyncThunk(
  "auth/userRegister ",
  async ({ values, navigate }, thunkAPI) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      const response = await axios.post(`${API_URL}/users`, values, config);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/login");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogout = createAsyncThunk(
  "auth/userLogout",
  async (_, thunkAPI) => {
    localStorage.removeItem("user");
    return null;
  }
);
