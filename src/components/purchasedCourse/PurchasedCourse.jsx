
const PurchasedCourse = ({selectedCourses, remainingCredit, totalCredit, totalPrice}) => {
   return (
      <div className="bg-white rounded-lg p-3 space-y-5">
         <h3 className="text-blue-600 font-semibold">Credit Hours Remaining: {remainingCredit}</h3>
         <hr />
         <div>
            <h2 className="text-black font-bold">Course Names</h2>
            <br />
            <ol>
                  {
                     selectedCourses.map((course, idx)=> <li>{idx+1}. {course.course_name}</li>)
                  }
            </ol>
         </div>
         <hr />
         <h6>Total Credit Hour: {totalCredit} </h6>
         <hr />
         <p>Total Price: {totalPrice} USD</p>
      </div>
   );
};

export default PurchasedCourse;