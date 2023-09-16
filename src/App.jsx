
import './App.css'
import Courses from './components/courses/Courses'
import PurchasedCourse from './components/purchasedCourse/PurchasedCourse'

function App() {

  return (
    <>
      <h1 className='text-4xl font-bold text-center text-green-800 m-5 p-5'>Course Registration</h1>
      <div className='flex'>
        <div className='w-3/4'>
          <Courses></Courses>
        </div>
        <div className='w-1/4 ml-5'>
          <PurchasedCourse></PurchasedCourse>
        </div>
      </div>
      
    </>
  )
}

export default App
