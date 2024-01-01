import { Link } from "react-router-dom";
import medlogo from "../assests/logo.svg";
import Avatar from "../assests/Avatar.svg";
import Dash from "../assests/Vector dash.svg"
import Pat from "../assests/Vector pat.svg"
import Copy from "copy-to-clipboard";
import { Web5Context } from "../Utils/Web5Provider";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useState, useEffect } from 'react';
const Sidebar = () => {
  const { myDID} = useContext(Web5Context);
  const [height, setHeight] = useState('h-screen');

  const checkScroll = () => {
    if (window.pageYOffset > 50) {
      setHeight('h-full');
    } else {
      setHeight('h-screen');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);
    return (
      <div className={`bg-nav text-white w-screen text-sm md:w-2/6 md:${height} lg:w-1/6 lg:${height} lg:text-sm m-0 p-5`}>
        <div className="flex justify-center items-center">
          <div>
            <div>
                <a href="/">
                  <img src={medlogo} alt="Medvult Logo" className="mb-4 ml-10"/>
                </a>
                </div>
              <div>
              <img src={Avatar} alt="Avatar" className=" w-32 lg:w-40 " />
                <button onClick = {() => {Copy(myDID);toast.success("copied!")}}
                className="bg-hover hover:bg-orange-700 hover:w-20 transition duration-500 ease-in-out shadow-lg shadow-yellow-800 text-white p-2 mt-4 rounded self-end">Copy DID</button>
              </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
        <ul className="flex gap-7 md:flex-col lg:flex-col">
          <Link to="/dashboard">
            <li className="flex gap-3  mb-3">
              <img src={Dash} alt="" className="w-4" />
              Dashboard
            </li>
          </Link>
          <Link to="/dashboard/doctor">
            <li className="flex gap-3  mb-3">
              <img src={Dash} alt="" className="w-4" />
              Doctor
            </li>
          </Link>
          <Link to="/dashboard/patient">
            <li className="flex gap-3 mb-3">
            <img src={Pat} alt="" className="w-4" />
             Patient
            </li>
          </Link>
          {/* {isWeb5Connected && (
        <button className="fixed-button button" id="copy-did-button" onClick={handleCopyDid}>
            {didCopied ? "DID Copied!" : "Copy DID"}
        </button>
        )} */}
          {/* <Link to="/dashboard/my-permission">
            <li className="flex gap-3">
            <img src={Perm} alt="" className="w-4" />
              Permission
            </li>
          </Link> */}
        </ul>
        </div>
      </div>
    );
}

export default Sidebar;