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
                <div className="flex-1 flex justify-between p-4 m-8">
                    <div className="w-1/2 bg-font text-white rounded-lg shadow-md p-4 mt-2">
                        <h2 className="text-xl font-semibold mb-4">Patient</h2>
                        <div className="flex justify-center flex-col items-center">
                            <img src={patientImage} alt="doctor" />
                        </div>
                        <p className="mb-4">View patient records, view who has access to these records and adjust accessors permission.</p>
                        <Link to="/dashboard/patient" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Proceed
                        </Link>
                    </div>
                    <div className="w-1/2 bg-font text-white rounded-lg shadow-md p-4 mt-2 ml-4">
                        <h2 className="text-xl font-semibold mb-4">Doctor</h2>
                        <div className="flex justify-center flex-col items-center">
                            <img src={doctorImage} alt="doctor" />
                        </div>
                        <p className="mb-4">Create a patients record based on diagnosed result</p>
                        <Link to="/dashboard/doctor" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Proceed
                        </Link>
                    </div>
                </div>
            </div>


       
        </>


    );
}
export default Dashboard;