import { useState } from 'react';
import {Link} from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !email || !mobileNumber || !state || !dob || !city || !password || !confirmPassword)  {
      setErrorMessage("Please enter all the details");
      setIsModalOpen(true);
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      setIsModalOpen(true);
    } else {
      setErrorMessage('Signed up successfully');
      setIsModalOpen(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };


    return (
        <main className="min-h-screen">
        <form action="" onSubmit={handleSubmit} className=" bg-nav text-white w-screen p-10 h-2/6 rounded-3xl shadow-2xl md:mt-40 lg:mt-20 lg:w-2/3 lg:ml-48">
        <div className='flex justify-center items-center gap-10 lg:gap-20 font-extralight p-10 sm:p-5 md:p-7 lg:p-10 xl:p-14 flex-row'>
            <Link to="/"><FaArrowLeft/></Link>
            <h3 className="text-4xl font-bold font-Playfair underline mb-px">Patients SignUp</h3>
            <Link to="/login"><FaArrowRight/></Link>
          </div>
       
              <div className='flex justify-center items-center flex-col gap-10 md:flex-col lg:flex-row'>
              <div className='flex flex-col'>
                <label htmlFor="" >Full Name:</label>
                <input className=" rounded-lg h-8 w-60 md:w-80 lg:w-80  p-4 text-left" type="text" 
                placeholder='John Smith Doe' 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                
                /> 
                <label htmlFor="">D.O.B</label>
                <input className=" rounded-lg h-8 w-60 md:w-80 lg:w-80  p-4 text-left"
                type='date' 
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                
              />
                <label htmlFor="">City</label>
                <input className=" rounded-lg h-8 w-60 md:w-80 lg:w-80  p-4 text-left"  
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                
            />
                <label htmlFor="">State</label>
                <input className=" rounded-lg h-8 w-60 md:w-80 lg:w-80  p-4 text-left" 
                type="text" 
                placeholder='state'
                value={state}
                onChange={(e) => setState(e.target.value)}
                
          />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="">Email:</label>
                <input className=" rounded-lg h-8 w-60 md:w-80 lg:w-80  p-4 text-left" 
                type="email" 
                placeholder='johndoe@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
                />
                <label htmlFor="">Mobile Number</label>
                <input className=" rounded-lg h-8 w-60 md:w-80  lg:w-80  p-4 text-left" 
                type="tel" 
                placeholder='Enter mobile number'
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                
                />
                <label htmlFor="">Password</label>
                <input className=" rounded-lg h-8 w-60 md:w-80 lg:w-80 p-4 text-left" 
                type="password" 
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                
                />
                <label htmlFor="">Confirm Password</label>
                <input className=" rounded-lg h-8 w-60 md:w-80  lg:w-80 p-4 text-left" 
                type="password" 
                placeholder='reenter password'
                value={confirmPassword}
                 onChange={(e) => setConfirmPassword(e.target.value)}
                  
                />
     
              </div>
              
              </div>
                <div className='flex justify-center items-center mt-6'>
                
                    <button className='btn' type='submit' >SignUp</button>
                    </div>
          
          {/* <div ></div> */}
          <div className='flex justify-center items-center'>
            <p className='text-center text-xs font-extralight'>Already have an account?<Link to={'/login'} className='underline'> Click Me</Link></p>
          </div>
        </form>
        {isModalOpen && (
      <div className="modal">
        <div className="modal-content">
          
          <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
          <p>{errorMessage}</p>
        </div>
      </div>
    )}
      </main>
    )
}
export default Signup;