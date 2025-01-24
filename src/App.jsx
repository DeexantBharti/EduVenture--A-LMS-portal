import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/student/Home.jsx';
import CoursesLIst from './pages/student/CoursesLIst.jsx';
import CourseDetails from './pages/student/CourseDetails.jsx';
import MyEnrollments from './pages/student/MyEnrollments.jsx';
import Player from './pages/student/Player.jsx';
import { Loading } from './components/student/Loading.jsx';
const  App = () =>  {
  return (
    <div>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/course-list'element={<CoursesLIst />} />
    <Route path='/course-list/:input' element={<CoursesLIst />} />
    <Route path='/course/:id' element={<CourseDetails />} />
    <Route path='/my-enrollments' element={<MyEnrollments />} />
    <Route path='/player/:courseId' element={<Player />} />
    <Route path='/loading/:path' element={<Loading />} />
   </Routes>
    </div>
  );
}
export default App
