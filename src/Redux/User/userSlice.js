import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister, userLogout } from "./userActions";

const initialState = {
  isLoading: false,
  success: false,
  user: {
    id: "",
    name: "",
    email: "",
    token: "",
  },
  error: "",
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state, action) => {
      let userDetails = JSON.parse(localStorage.getItem("user")) || null;
      state.user = {
        id: userDetails?.user?.id,
        name: userDetails?.user?.name,
        email: userDetails?.user?.email,
        token: userDetails?.accessToken,
      };
    },
  },
  extraReducers: (builder) => {
    userLogin: {
      builder.addCase(userLogin.pending, (state) => {
        state.isLoading = true;
      });

      builder.addCase(userLogin.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.success = true),
          (state.user = {
            id: action.payload.user?.id,
            name: action.payload.user?.name,
            email: action.payload.user?.email,
            token: action.payload?.accessToken,
          });
      });

      builder.addCase(userLogin.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      });
    }

    userRegister: {
      builder.addCase(userRegister.pending, (state) => {
        state.isLoading = true;
      });

      builder.addCase(userRegister.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.success = true),
          (state.user = {
            id: action.payload.user?.id,
            name: action.payload.user?.name,
            email: action.payload.user?.email,
            token: action.payload?.accessToken,
          });
      });

      builder.addCase(userRegister.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      });
    }

    userLogout: {
      builder.addCase(userLogout.fulfilled, (state) => {
        state.user = {
          id: "",
          name: "",
          email: "",
          token: "",
        };
      });
    }
  },
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
