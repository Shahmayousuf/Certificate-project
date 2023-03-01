import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { toast } from "react-toastify";
import { axiosApi } from "./axios-method";

export const loginApi = createAsyncThunk("login/loginApi", async (datas) => {
  const response = await axiosApi.post("/account/login/", datas.data);
  console.log(response.data.token);
  localStorage.setItem("token", response.data.token);

  datas.navigate("/dashboardpage");

  return response.data;
});
export const logOutApi = createAsyncThunk(
  "login/logOutApi",
  async ({ navigate }) => {
    const token = localStorage.getItem("token");
    const response = await axiosApi.post("/account/logout/", token);
    localStorage.removeItem("token");
    navigate("/");
  }
);

const initialState = {
  token: "",
};
export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [loginApi.fulfilled]: (state, action) => {
      console.log("login fullfilled");
      state.token = action.payload;
      toast.success("Login Successfull");
    },
    [loginApi.pending]: () => {
      console.log("login pening");
    },
    [loginApi.rejected]: () => {
      console.log("login rejected");
    },
  },
});

export default LoginSlice.reducer;
