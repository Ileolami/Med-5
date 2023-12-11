import { useState } from "react";
import { Link } from "react-router-dom";
import medlogo from "../assests/logo.svg";
import Avatar from "../assests/Avatar.svg";
import Dash from "../assests/Vector dash.svg"
import Pat from "../assests/Vector pat.svg"
import Perm from "../assests/Vector per.svg"

const Sidebar = () => {
    return (
        <div className=" bg-nav text-white h-80 w-screen md:w-1/5 md:h-screen lg:w-1/6 lg:h-screen m-0 p-5">
        <div className="flex justify-center items-center">
          <div>
            <div>
                <a href="/">
                  <img src={medlogo} alt="Medvult Logo" className="mb-4 ml-10"/>
                </a>
                </div>
              <div>
              <img src={Avatar} alt="Avatar" className=" w-32 lg:w-40" />
                <p className=" text-hover underline">view patient</p>
              </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
        <ul className="flex gap-7 md:flex-col lg:flex-col">
          <Link to="/dashboard/overview">
            <li className="flex gap-3  mb-3">
              <img src={Dash} alt="" className="w-4" />
              Dashboard
            </li>
          </Link>
          <Link to="/dashboard/my-patient">
            <li className="flex gap-3 mb-3">
            <img src={Pat} alt="" className="w-4" />
             Patients
            </li>
          </Link>
          <Link to="/dashboard">
            <li className="flex gap-3">
            <img src={Perm} alt="" className="w-4" />
              Permission
            </li>
          </Link>
        </ul>
        </div>
      </div>
    );
}

export default Sidebar;