import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosApi } from "./axios-method";





export const CourseApi=createAsyncThunk('courses/CourseApi',async()=>{
   const response=await axiosApi.get ("/course/course/");
   console.log(response.data.results)
   return response.data
});
  
export const CreateCourseApi=createAsyncThunk('courses/CreateCourseApi',async({data,navigate})=>{
    const response=await axiosApi.post('/course/course/',data);
    console.log(response);
    navigate('/course')
    return response.data
})
 export const DeleteCourseApi=createAsyncThunk('courses/ DeleteCourseApi',async({id,navigate})=>{
  const response=await axiosApi.delete(`/course/course/${id}`)
   console.log(response);
   navigate('/course')
   return response.data
 })
  export const UpdateCourseApi=createAsyncThunk('courses/ UpdateCourseApi',async({id,navigate,data})=>{
    const response=await axiosApi.put(`/course/course/${id}`,data)
    console.log(response);
    navigate("/course")
    return response.data
  })
    export const SingleCourseApi=createAsyncThunk('courses/SingleCourseApi',async(id)=>{
      const response=await axiosApi.get(`/course/course/${id}`)
      console.log(response);
      return response.data
    })
 const initialState= {
    allcourses:[],
    Createcourse:{},
    Deletecourse:{},
    Updatecourses:{},
    SingleCourse:{}

 };
export const CourseSlice=createSlice({
    name:'courses',
    initialState,
    reducers:{},
    extraReducers:{
        [CourseApi.fulfilled]:(state,action) => {
            console.log("data fullfilled")
            state.allcourses=action.payload
        },
        [CourseApi.pending]:(state,action) => {
            console.log("data pending");
           
        },
        [CourseApi.rejected]:() =>{
            console.log("data rejected");
           
        },
        [CreateCourseApi.fulfilled]:(state,action)=>{
            console.log("data fullfilled");
            state.Createcourse=action.payload
        },
        [CreateCourseApi.pending]:(state,action)=>{
            console.log("data pending");
         
        },
        [CreateCourseApi.rejected]:(state,action)=>{
            console.log("data rejected");
          
        },
              [UpdateCourseApi.pending]:()=>{
                console.log("data pending");
              },
              [UpdateCourseApi.fulfilled]:(state,action)=>{
                console.log("data fulfileed");
                state.Updatecourses=action.payload
              },
              [UpdateCourseApi.rejected]:()=>{
                console.log("data rejected");
              },
              [SingleCourseApi.pending]:()=>{
                console.log("data pending");
               
              },
              [SingleCourseApi.fulfilled]:(state,action)=>{
                console.log("data fulfilled");
                state.SingleCourse=action.payload
              },
              [SingleCourseApi.rejected]:()=>{
                console.log("data rejected");
                
              }
    }
});
export default CourseSlice.reducer;