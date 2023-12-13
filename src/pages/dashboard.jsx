import { useContext } from 'react';
import {Link, Outlet} from 'react-router-dom';
import Sidebar from '../components/sidebar.jsx';
import { Web5Context } from '../Utils/Web5Provider.jsx';
import doctorImage from '../assests/adewale.svg'
import patientImage from '../assests/esther.svg'

const Dashboard = () => {
    const {web5, myDID} = useContext(Web5Context)
    console.log(myDID);
    return (
        <>
            <div className="flex h-screen flex-col md:flex-row lg:flex-row">
                <Sidebar />
                <div className="flex-1 flex flex-col gap-4 justify-between p-4 my-12 md:flex-row md:justify-center md:my-6 md:gap-2 lg:flex-row lg:justify-around lg:gap-3">
                    <div className=" bg-font text-white rounded-lg p-4 w-90 mt-2 md:h-72 md:w-1/2 lg:w-3/6 lg:h-80 shadow-2xl shadow-slate-900 " data-aos="fade-left">
                        <h2 className="text-xl font-semibold mb-4">Patient</h2>
                        <div className="flex justify-center flex-col items-center">
                            <img src={patientImage} alt="doctor" />
                        </div>
                        <p className="mb-4">View patient records, view who has access to these records and adjust accessors permission.</p>
                        <Link to="/dashboard/patient" className="transition duration-500 ease-in-out bg-hover hover:bg-gray-700 shadow-lg shadow-yellow-800 text-white font-bold py-2 px-4 rounded">
                            Proceed
                        </Link>
                    </div>
                    <div className=" bg-font text-white rounded-lg p-4 mt-2 w-90 md:h-72 md:w-1/2 lg:w-3/6 lg:h-80 shadow-2xl shadow-slate-900 " data-aos="fade-right">
                        <h2 className="text-xl font-semibold mb-4">Doctor</h2>
                        <div className="flex justify-center flex-col items-center">
                            <img src={doctorImage} alt="doctor" />
                        </div>
                        <p className="mb-4">Create a patients record based on diagnosed result</p>
                        <Link to="/dashboard/doctor" className="transition duration-500 ease-in-out bg-hover hover:bg-gray-700 shadow-lg shadow-yellow-800 text-white font-bold py-2 px-4 rounded">
                            Proceed
                        </Link>
                    </div>
                </div>
            </div>


       
        </>


    );
}
export default Dashboard;