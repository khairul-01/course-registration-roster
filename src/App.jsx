
import { useState } from 'react'
import './App.css'
import Courses from './components/courses/Courses'
import PurchasedCourse from './components/purchasedCourse/PurchasedCourse'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [remainingCredit, setRemainingCredit] = useState(20)
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectedCourses = course => {
    if(selectedCourses.includes(course)){
      toast('You can choose one course once at a time.')
    }
    else{
      const newselectedCourses = [...selectedCourses, course];
      setSelectedCourses(newselectedCourses);
      
      const newtotalCredit = totalCredit + course.credit;
      if(newtotalCredit>20){
        toast('Maximum credit limit is 20 hr')
      }
      else{
        setTotalCredit(newtotalCredit);
      }

      const newtotalPrice = totalPrice + course.price;
      setTotalPrice(newtotalPrice);

      const newRemainingCredit = remainingCredit - course.credit;
      if(newRemainingCredit<0){
        toast('You have taken maximum credit hrs')
      }
      else{
        setRemainingCredit(newRemainingCredit);
      }
    }
  }

  return (
    <>
      <h1 className='text-5xl font-bold text-center m-5 p-5 text-sky-700'>Course Registration</h1>
      <div className='flex'>
        <div className='w-3/4'>
          <Courses handleSelectedCourses={handleSelectedCourses}></Courses>
        </div>
        <div className='w-1/4 ml-5'>
          <ToastContainer/>
          <PurchasedCourse 
          selectedCourses={selectedCourses}
          remainingCredit = {remainingCredit}
          totalCredit = {totalCredit}
          totalPrice = {totalPrice}
          ></PurchasedCourse>
        </div>
      </div>
      
    </>
  )
}

export default App
