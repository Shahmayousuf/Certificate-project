import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";





export const CourseApi=createAsyncThunk('courses/CourseApi',async()=>{
   const response=await axiosApi.get ("/course/course/");
   console.log(response)
   return response.data
});
  
export const CreateCourseApi=createAsyncThunk('courses/CreateCourseApi',async({data,navigate})=>{
    const response=await axiosApi.post('/course/course/',data);
    console.log(response);
    navigate('/course')
    return response.data
})


 const initialState= {
    allcourses:[],
    Createcourse:{},

 };
export const CourseSlice=createSlice({
    name:'courses',
    initialState,
    reducers:{},
    extraReducers:{
        [CourseApi.fulfilled]:(state,action) => {
            console.log("data fullfilled")
            state.allcourses=action.payload
        } ,
        [CourseApi.pending]:(state,action) => {
            console.log("data pending");
            state.Createcourse=action.payload
        },
        [CourseApi.rejected]:(state,action) =>{
            console.log("data rejected");
            state.Createcourse=action.payload
        },
        [CreateCourseApi.fulfilled]:(state,action)=>{
            console.log("data fullfilled");
            state.Createcourse=action.payload
        },
        [CreateCourseApi.pending]:(state,action)=>{
            console.log("data pending");
            state.Createcourse=action.payload
        },
        [CreateCourseApi.rejected]:(state,action)=>{
            console.log("data rejected");
            state.Createcourse=action.payload
        },
              
    }
});
export default CourseSlice.reducer;