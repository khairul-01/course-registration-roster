
import { useState } from 'react'
import './App.css'
import Courses from './components/courses/Courses'
import PurchasedCourse from './components/purchasedCourse/PurchasedCourse'

function App() {

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [remainingCredit, setRemainingCredit] = useState(20)
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectedCourses = course => {
    const newselectedCourses = [...selectedCourses, course];
    setSelectedCourses(newselectedCourses);
    const newtotalCredit = totalCredit + course.credit;
    setTotalCredit(newtotalCredit);
    const newtotalPrice = totalPrice + course.price;
    setTotalPrice(newtotalPrice);
    const newRemainingCredit = remainingCredit - course.credit;
    setRemainingCredit(newRemainingCredit);
  }

  return (
    <>
      <h1 className='text-4xl font-bold text-center text-green-800 m-5 p-5'>Course Registration</h1>
      <div className='flex'>
        <div className='w-3/4'>
          <Courses handleSelectedCourses={handleSelectedCourses}></Courses>
        </div>
        <div className='w-1/4 ml-5'>
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
