import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
    return(
    <main className='min-h-screen'>
        <form action="" className=" bg-nav text-white  m-4 mr-10 p-10 h-2/6 rounded-3xl shadow-2xl sm:max sm:m-36">
          <div className='flex justify-center items-center gap-10 lg:gap-20 font-extralight p-10 sm:p-5 md:p-7 lg:p-10 xl:p-14 flex-row'>
            <Link to="/signup"><FaArrowLeft/></Link>
            <h3 className="text-4xl font-bold font-Playfair underline mb-px">Patients Login</h3>
           <Link to="/home"><FaArrowRight/></Link>
          </div>
          <section className="flex flex-col justify-center items-center lg:flex-row">
          <div className="flex justify-center items-center mt-28 mb-24 lg:m-0">
            <img src="src/assests/Group.svg" alt="group" className="absolute w-40" />
            <img src="src/assests/Vector.svg" alt="vector" className="absolute w-40" />
            <img src="src/assests/Group 1.svg" alt="group1" className="absolute w-40" />
        </div>
        <div className="lg:h-screen flex flex-col">
            <label htmlFor="">Name</label>
            <input type="text"  className=" rounded-lg h-8 w-60 lg:w-80 p-4 text-left" placeholder='first name'/>
            <label htmlFor="" >Password</label>
            <input type="password" className=" rounded-lg h-8 w-60 lg:w-80 p-4 text-left"  placeholder="0800000000"/>
            <div className='flex justify-center items-center mt-6'>
                    <button className='btn'>Login</button>
                    </div>
        </div>
          </section>
        <div className='flex justify-center items-center'>
            <p className='text-center text-xs font-extralight'>Create an account<Link to={'/signup'} className='underline'> Click Me</Link></p>
          </div>
      </form>
    </main>
    )
}
  
export default Login;
  
  