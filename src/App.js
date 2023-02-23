import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import DashBoardPage from "./Pages/DashBoardPage";
import Students from "./components/StudentsPage/Students";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateStudent from "./components/CreateStudent/CreateStudent";
import UpdateStudent from "./components/UpdateStudent/UpdateStudent";
import Courses from "./components/CoursesPage/Courses";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import UpdateCourse from "./components/UpadateCouese/UpdateCourse";
import CourseCatogory from "./components/CatogoriesPage/CourseCatogory";

import UpdateCourseCtgry from "./components/UpdateCourseCtgry/UpdateCourseCtgry";
import CreateCourseCtgry from "./components/CreateCourseCatogorypage/CreateCourseCtgry";
import StudentView from "./components/StudentView/StudentView";
import CreateNew from "./components/CreateNewCourse/CreateNew";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboardpage" element={<DashBoardPage />} />
          <Route path="/students" element={<Students />} />
          <Route path="/updatestudent/:id" element={<UpdateStudent />} />
          <Route path="/createstudent" element={<CreateStudent />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/updatecsourse" element={<UpdateCourse />} />
          <Route path="/createcourse" element={<CreateCourse />} />
          <Route path="/coursecatogory" element={<CourseCatogory />} />
          <Route path="/updatecoursectgry"  element={<UpdateCourseCtgry />} />
          <Route path="/createcoursectgry" element={<CreateCourseCtgry />} />
          <Route path="/studentview/:id" element={<StudentView/>}/>
          <Route path='/CreateNew/:id' element={<CreateNew/>}>

          </Route>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
