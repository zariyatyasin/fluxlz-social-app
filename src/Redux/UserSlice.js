import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchSignupUser = createAsyncThunk(
  "signup/FetchSignupUser",
  async ({ email, fullname, username, password }, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/signup",
        { email, fullname, username, password },
        config
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  currentUser: null,
  isLoading: false,
  isError: null,
};

export const SignupSlice = createSlice({
  name: "signup",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(FetchSignupUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(FetchSignupUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.isError = null;
    });
    builder.addCase(FetchSignupUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});
export default SignupSlice.reducer;
