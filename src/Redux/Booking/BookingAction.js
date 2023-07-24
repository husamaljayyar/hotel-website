import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API_URL from "../../API";

// Add Booking
export const addBooking = createAsyncThunk(
  "room/addBooking",
  async (values, thunkAPI) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      const response = await axios.post(`${API_URL}/bookings`, values, config);
      localStorage.setItem("booking", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(errotr.message);
    }
  }
);

// Booking Info
export const bookingInfo = createAsyncThunk(
  "room/bookingInfo",
  async ({ values, Id, navigate }, thunkAPI) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      const response = await axios.patch(
        `${API_URL}/bookings/${Id}`,
        {
          user: {
            name: values.name,
            email: values.email,
            nationality: values.nationality,
            arrivalTime: values.arrivalTime,
            phone: values.phone,
          },
        },
        config
      );
      localStorage.setItem("booking", JSON.stringify(response.data));
      navigate(`/booking/payment-now/${Id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(errotr.message);
    }
  }
);

// Payment For Booking
export const payForBooking = createAsyncThunk(
  "room/payForBooking",
  async ({ Id, details, booking, navigate }, thunkAPI) => {
    const paymentResults = {
      ...booking,
      pay: {
        paymentMethod: "PayPal",
        amount_paid: details.purchase_units[0].amount.value,
        status: details.status,
        create_time: details.create_time,
        update_time: details.update_time,
        email_address: details.payer.email_address,
        id: details.id,
      },
    };

    const config = {
      headers: { "Content-Type": "application/json" },
    };
    try {
      const response = await axios.put(
        `${API_URL}/bookings/${Id}`,
        paymentResults,
        config
      );
      localStorage.setItem("booking", JSON.stringify(response.data));
      navigate("/room/booking/payment-now/booking-succes");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(errotr.message);
    }
  }
);
