import { useEffect } from "react";
import { useState } from "react";
import Course from "../course/Course";

const Courses = () => {
   const [courses, setCourses] = useState([]);

   useEffect(()=>{
      fetch('courses.json')
      .then(res=>res.json())
      .then(data => setCourses(data))
   },[])
   return (
      <div className="grid grid-cols-3 gap-3">
         {
            courses.map((course,i)=><Course key={i} course={course}></Course>)
         }
      </div>
   );
};

export default Courses;