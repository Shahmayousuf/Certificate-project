import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";
import { axiosApi } from "./axios-method";

export const CatogryApi = createAsyncThunk("catogry/CatogryApi", async () => {
  const response = await axiosApi.get("/course/course_category/");
  console.log(response);
  return response.data;
});
export const CreateCourseCatgryApi = createAsyncThunk(
  " catogry/CreateCourseCatgryApi",
  async ({ data, navigate }) => {
    const response = await axiosApi.post("/course/course_category/", data);
    console.log(response);
    navigate("/coursecatogory");
    return response.data;
  }
);
export const DeleteCourseCatgryApi = createAsyncThunk(
  "catogry/DeleteCourseCatgryApi",
  async (id ) => {
    const response = await axiosApi.delete(`/course/course_category/${id}`);
    redirect("/coursecatogory");
    console.log(response.data);
    return response.data;
  }
);
export const UpdateCourseCtgryApi = createAsyncThunk(
  "catogry/UpdateCourseCtgryApi",
  async ({ id, navigate, data }) => {
    const response = await axiosApi.put(`/course/course_category/${id}`, data);
    console.log(response);
    navigate("/coursecatogory");

    return response.data;
  }
);
export const SingleCatgryApi = createAsyncThunk(
  "catogry/SingleCatgryApi",
  async ( id ) => {
    const response = await axiosApi.get(`/course/course_category/${id}`);
     console.log(response);
    return response.data;
  }
);

const initialState = {
  allcatogrys: [],
  Createcoursecatgory: [],
  Deletecoursecatogry: [],
  Updatecoursecatogry: {},
  singlecatory: {},
};
export const CatogorySlice = createSlice({
  name: "catogry",
  initialState,
  reducers: {},
  extraReducers: {
    [CatogryApi.fulfilled]: (state, action) => {
      console.log("data fullfilled");
      state.allcatogrys = action.payload;
    },
    [CatogryApi.pending]: () => {
      console.log("data Pending");
    },
    [CatogryApi.rejected]: () => {
      console.log("data rejected");
    },
    [CreateCourseCatgryApi.fulfilled]: (state, action) => {
      console.log("data fulfilled");
      state.Createcoursecatgory = action.payload;
    },
    [CreateCourseCatgryApi.pending]: (state, action) => {
      console.log("data pending");
    },
    [CreateCourseCatgryApi.rejected]: (state, action) => {
      console.log("data rejected");
    },
    [DeleteCourseCatgryApi.pending]: (state, action) => {
      console.log("task Pending");
    },
    [DeleteCourseCatgryApi.fulfilled]: (state, action) => {
      console.log("data Deleted");
      state.Deletecoursecatogry = action.payload;
    },

    [DeleteCourseCatgryApi.rejected]: () => {
      console.log("task rejected");
    },
    [UpdateCourseCtgryApi.pending]: () => {
      console.log("Updation pending");
    },
    [UpdateCourseCtgryApi.fulfilled]: (state, action) => {
      console.log("Updation fulfilled");
      state.Updatecoursecatogry = action.payload;
    },

    [UpdateCourseCtgryApi.rejected]: () => {
      console.log("Updation rejected");
    },
    [SingleCatgryApi.pending]: () => {
      console.log("penidng");
    },
    [SingleCatgryApi.fulfilled]: (state, action) => {
      console.log("fulfilled");
      state.singlecatory = action.payload;
    },
    [SingleCatgryApi.rejected]: () => {
      console.log("rejected");
    },
  },
});
export default CatogorySlice.reducer;
