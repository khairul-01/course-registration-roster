import { BiDollar } from "react-icons/bi";
import { GoBook } from "react-icons/go";

const Course = ({course, handleSelectedCourses}) => {
   const {id, course_name, credit, price, course_details, image } = course;
   return (
      <div className="bg-white p-3 rounded-lg space-y-3">
         <img className="h-52 rounded-xl w-full" src={image} alt={course_name} />
         <h2 className=" font-bold">{course_name}</h2>
         <p>{course_details}</p>
         <div className="flex items-center justify-between">
            
               <span><BiDollar/></span>
               <span>Price : {price}</span>
            
            
               <GoBook/>
               <span>Credit : {credit}hr</span>
            
         </div>
         <button onClick={()=>handleSelectedCourses(course)} className="bg-blue-500 w-full rounded-lg text-center text-white font-bold">Select</button>
      </div>
   );
};

export default Course;