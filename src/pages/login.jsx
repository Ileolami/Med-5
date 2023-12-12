import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Group21 from "../assests/Group 21.svg";
const Login = () => {
    return(
    <main className='min-h-screen flex flex-col-reverse md:flex-row  lg:flex-row'>
        <div className=" hidden md:flex justify-center items-center md:w-1/2 lg:w-3/5">
            <img src={Group21} alt="group21" className=" w-80"/>
        </div>
        <div className="flex justify-center items-center md:w-1/2 bg-font">
            <div className='flex flex-col justify-center items-center h-screen'>
                <div className='flex flex-col justify-center items-center'>
                  <div className="flex gap-16">
                  <Link to='/signup'><FaArrowLeft className='text-white text-2xl mb-4'/></Link>
                    <Link to='/'><FaArrowRight className='text-white text-2xl mb-4'/></Link>
                  </div>
                    <h1 className='text-4xl text-white font-bold mb-2 font-Playfair'>Welcome Back!</h1>
                    <p className='text-hover text-center mb-6'>Login to your account to continue</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <form className='flex flex-col justify-center items-center'>
                        <input type='text' className='border border-gray-300 rounded-lg px-4 py-2 mb-4 w-80 focus:outline-none' placeholder='did:ion:fhfgwerherwe'/>
                        <button className=' bg-font hover:bg-hover text-white font-bold py-2 px-4 rounded-lg w-80 focus:outline-none'>Login</button>
                    </form>
                    <div className='flex justify-center items-center mt-4 text-xs'>
                        <p className='text-gray-500'>Don't have an account?</p>
                        <Link to='/signup' className='text-slate-400 hover:text-hover ml-2'>Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
      
    </main>
    )
}
  
export default Login;
  
  