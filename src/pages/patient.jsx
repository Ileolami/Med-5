import Esther from "../assests/esther.svg";
import Adewale from "../assests/adewale.svg";
import Hopstial from "../assests/Hospital.svg";
import Fega from "../assests/fega.svg";
import Mecure from "../assests/mediocre.svg";
import { useContext } from "react";
import { Web5Context } from "../Utils/Web5Provider";
import Sidebar from "../components/sidebar";
const Patient = () => {
  const {web5, myDID} = useContext(Web5Context)
    console.log(myDID);
    return (
      <div className="flex h-screen flex-col md:flex-row lg:flex-row">
                <Sidebar />
          <main className=" ">
            <div className="flex items-start gap-2 flex-col m-3">
              <h4>Welcome Back </h4>
              <h5 className=" font-Lato text-sm text-hover">Hi Patient !</h5>
              <p className="font-Playfair text-font font-semibold italic">How are doing ?</p>
            </div>
            <div className="general-one flex flex-col lg:flex-row gap-20 h-96">
            <section className="bg-font text-lg shadow-slate-950 py-4">
              <div className="flex justify-center gap-10  text-white w-full p-10 h-48 lg:w-max lg:">
                <div className="flex flex-col justify-center items-start ">
                  <p><span className="text-hover">Sex: </span> Female</p>
                  <p><span  className="text-hover">Last check-in: </span>24 feb, 2020</p>
                  <p><span className="text-hover">Surgery-type: </span>None</p>
                  <p><span className="text-hover">Last Diagnosis: </span>Malaria</p>
                </div>
                <div className="flex justify-center flex-col items-center">
                  <img src={Esther} alt="Esther" />
                  <p className="text-hover underline">View Profile</p>
                </div>
              </div>
              <div className=" flex justify-center font-serif gap-8 text-white">
                <div>
                  <h3>BLOOD</h3>
                  <p>A+</p>
                </div>
                <div>
                  <h3>WEIGHT</h3>
                  <p>80kg</p>
                </div>
                <div>
                  <h3>HEIGHT</h3>
                  <p>170cm</p>
                </div>
              </div>
            </section>
            <section className=" flex flex-col gap-5rounded-lg shadow-2xl shadow-slate-950 lg:w-96">
              <div className="flex justify-around border-solid border-b-2 border-slate-900 shadow-lg">
                <div>
                <img src={Adewale} alt="" className="lg:w-12" />
                <p>Doctor Adewale</p>
                </div>
                <button className="mt-6 hover:bg-font font-Playfair font-bold text-white bg-button w-24 h-10  md:w-32 lg:w-32 ">Remove Access</button>
              </div>
              <div className="flex justify-around border-solid border-b-2  border-slate-900 shadow-lg">
                <div>
                  <img src={Mecure} alt="" className="lg:w-12" />
                  <p>Mecure</p>
                  </div>
                  <button className="mt-6 hover:bg-font font-Playfair font-bold text-white bg-button w-24 h-10  md:w-32 lg:w-36 ">Remove Access</button>
              </div>
              <div className="flex justify-around border-solid border-b-2 border-slate-900 shadow-lg">
                <div>
                  <img src={Hopstial} alt="" className="lg:w-12"/>
                  <p>General Hospital</p>
                  </div>
                  <button className="mt-6 hover:bg-font font-Playfair font-bold text-white bg-button w-24 h-10  md:w-32 lg:w-36 ">Remove Access</button>
              </div>
              <div className="flex justify-around border-solid border-b-2 p-2 border-slate-900 shadow-lg">
                <div>
                  <img src={Fega} alt="" className="lg:w-12"/>
                  <p>Doctor Esther</p>
                  </div>
                  <button className="mt-6 hover:bg-font font-Playfair font-bold text-white bg-button w-24 h-10  md:w-32 lg:w-36 ">Remove Access</button>
              </div>
            </section>
            </div>
          </main>
        </div>
    );
};
export default Patient;