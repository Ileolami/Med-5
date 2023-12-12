import {Outlet} from 'react-router-dom';
import Sidebar from '../components/sidebar.jsx';
import { useContext } from 'react';
import { Web5Context } from '../Utils/Web5Provider.jsx';

const Dashboard = () => {
    // const {web5, myDID} = useContext(Web5Context)
    // console.log(myDID);
    return (
        <div className="flex h-screen flex-col md:flex-row lg:flex-row">
            <Sidebar/>
           <Outlet/>
        </div>
    );
}
export default Dashboard;