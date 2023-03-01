import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { toast } from "react-toastify";
import { axiosApi } from "./axios-method"; 


export const StudentAPi = createAsyncThunk("students/StudentApi", async () => {
  const response = await axiosApi.get("/student/student/");
  console.log(response);
  return response.data;
});
export const StudentviewApi = createAsyncThunk("students/StudentviewApi",async ({studentId}) => {
    const response = await axiosApi.get(`/student/student/${studentId}`);
    console.log(response);
    return response.data;
  }
);
export const DeleteStudentApi= createAsyncThunk("students/DeleteStudentApi",async({studentId,navigate})=>{
 const response=await axiosApi.delete(`/student/student/${studentId}`)
  navigate('/students')
return response.data

}
);
export const UpdateStudentApi=createAsyncThunk("students/UpdateStudentApi",async({data,studentId,navigate})=>{

  const response=await axiosApi.put(`/student/student/${studentId}`,data)

   navigate(`/studentview/${studentId}`)
  return response.data

})
export const CreateNewCourseApi=createAsyncThunk('students/CreateNewCourseApi',async({selectedItem,studentId,navigate})=>{
  const response=await axiosApi.post("/student/student_course/",selectedItem)
  navigate(`/studentview/${studentId}`)
  return response.data
})
export const SingleStudeCourseApi=createAsyncThunk('students/SingleStudeCourseApi',async(navigate)=>{
   const response=await axiosApi.get(`/student/student_course/`)
   navigate('/studentview')
   return response.data
})
export const CreateStudentApi=createAsyncThunk('students/CreateStudentApi',async({data,navigate})=>{
  const response=await axiosApi.post("/student/student/",data)
  navigate('/students')
  return response.data
})
   
const initialState = {
  allStudents: [],
  singleview: {},
  deleteview:{},
  updateview:{},
  createstudcourse:[],
  singlecourse:[],
  createstudent:{}
};
export const StudentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: {
    [StudentAPi.fulfilled]: (state, action) => {
      console.log("data fullfilled");
      state.allStudents = action.payload;
      toast.success('Item fulfilled')
    },
    [StudentviewApi.fulfilled]: (state, action) => {
      console.log("data fullfilled");
      state.singleview = action.payload;
    },
    [DeleteStudentApi.fulfilled]:(state,action)=>{
      console.log("data deleted");
      state.deleteview=action.payload
      
    },
    [UpdateStudentApi.fulfilled]:(state,action)=>{
      console.log("data updated");
      state.updateview=action.payload
    },
    [CreateNewCourseApi.fulfilled]:(state,acton)=>{
      console.log("course created");
      state.createstudcourse=acton.payload
    },
    [CreateStudentApi.fulfilled]:(state,action)=>{
      console.log('Student created');
      state.createstudent=action.payload
    }
  
  },
});
export default StudentSlice.reducer;
