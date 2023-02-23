import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from './LoginSlice';
import StudentReducer from './StudentSlice'
import CourseReducer from './CourseSlice'
import CatogoryReducer from './CatogrySlice'
export default configureStore({
    reducer:{
        login:LoginReducer,
        students:StudentReducer,
        courses:CourseReducer,
        catogry:CatogoryReducer

    }

})