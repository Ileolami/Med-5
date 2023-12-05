import {Link} from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Signup = () => {
    return (
        <main className="min-h-screen">
        <form action="" className=" bg-nav text-white  m-4 mr-10 p-10 h-2/6 rounded-3xl shadow-2xl sm:max sm:m-36">
        <div className='flex justify-center items-center gap-10 lg:gap-20 font-extralight p-10 sm:p-5 md:p-7 lg:p-10 xl:p-14 flex-row'>
            <Link to="/home"><FaArrowLeft/></Link>
            <h3 className="text-4xl font-bold font-Playfair underline mb-px">Patients SignUp</h3>
            <Link to="/login"><FaArrowRight/></Link>
          </div>
              <div className='flex justify-center items-center flex-col gap-10 sm:flex-row'>
              <div className='flex flex-col'>
                <label htmlFor="" >First Name:</label>
                <input className=" rounded-lg h-8 w-60 lg:w-80  p-4 text-left" type="text" placeholder='Enter first name'/>
                <label htmlFor="">D.O.B</label>
                <input className=" rounded-lg h-8 w-60 lg:w-80  p-4 text-left" type='date' />
                <label htmlFor="">City</label>
                <input className=" rounded-lg h-8 w-60 lg:w-80  p-4 text-left"  type="text" placeholder='Enter city'/>
                <label htmlFor="">Password</label>
                <input className=" rounded-lg h-8 w-60 lg:w-80  p-4 text-left" type="password" placeholder='enter password'/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="">Second Name:</label>
                <input className=" rounded-lg h-8 w-60 lg:w-80  p-4 text-left" type="text" placeholder='Enter second name'/>
                <label htmlFor="">Mobile Number</label>
                <input className=" rounded-lg h-8 w-60  lg:w-80  p-4 text-left" type="tel" placeholder='Enter mobile number'/>
                <label htmlFor="">State</label>
                <input className=" rounded-lg h-8 w-60 lg:w-80 p-4 text-left" type="text" placeholder='Enter state'/>
                <label htmlFor="">Confirm Password</label>
                <input className=" rounded-lg h-8 w-60  lg:w-80 p-4 text-left" type="password" placeholder='reenter password'/>
              </div>
              </div>
                <div className='flex justify-center items-center mt-6'>
                    <button className='btn'>SignUp</button>
                    </div>
          
          {/* <div ></div> */}
          <div className='flex justify-center items-center'>
            <p className='text-center text-xs font-extralight'>Already have an account?<Link to={'/login'} className='underline'> Click Me</Link></p>
          </div>
        </form>
      </main>
    )
}
export default Signup;