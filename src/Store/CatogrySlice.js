import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "./axios-method";

  

  

export const CatogryApi=createAsyncThunk('catogry/CatogryApi',async()=>{
    const response=await axiosApi.get("/course/course_category/")
    console.log(response)
    return response.data
})
export const CreateCourseCatgryApi=createAsyncThunk(' catogry/CreateCourseCatgryApi',async({data,navigate})=>{
  const response=await axiosApi.post( "/course/course_category/",data)
  console.log(response);
  navigate('/coursecatogory')
  return response.data
})
export const DeleteCourseCatgryApi=createAsyncThunk('catogry/DeleteCourseCatgryApi',async({courseCategoryId})=>{
  const response=await axiosApi.delete(`/course/course_category/${courseCategoryId}`)
  console.log(response);
  return response.data
})

  const initialState={
    allcatogrys:[],
    Createcoursecatgory:[],
    Deletecoursecatogry:[]
  }
export const CatogorySlice=createSlice({
    name:'catogry',
    initialState,
    reducers:{},
    extraReducers:{
        [CatogryApi.fulfilled]:(state,action)=>{
            console.log("data fullfilled")
            state.allcatogrys=action.payload
        },
        [CatogryApi.pending]:(state,action)=>{
          console.log("data Pending");
          state.allcatogrys=action.payload
        },
        [CatogryApi.rejected]:(state,action)=>{
          console.log("data rejected");
          state.allcatogrys=action.payload
        } ,
        [CreateCourseCatgryApi.fulfilled]:(state,action)=>{
          console.log("data fulfilled");
          state.Createcoursecatgory=action.payload
        },
        [CreateCourseCatgryApi.pending]:(state,action)=>{
          console.log("data pending");
          state.Createcoursecatgory=action.payload
        },
        [CreateCourseCatgryApi.rejected]:(state,action)=>{
          console.log("data rejected");
          state.Createcoursecatgory=action.payload
        },
        [ DeleteCourseCatgryApi.fulfilled]:(state,action)=>{
          console.log("data fulfilled");
          state.CreateCourseCatgryApi=action.payload
        }
      }

})
export default CatogorySlice.reducer