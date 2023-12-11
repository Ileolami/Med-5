import Esther from "../assests/esther.svg";
import Fega from "../assests/fega.svg";
import adewale from "../assests/adewale.svg";
import Ochuko from "../assests/ochuko.svg";
import Ochuko2 from "../assests/ochuko 2.svg";

const Patients =()=>{
    return(
        < div className="min-h-screen">
            <main className="flex justify-center items-center md:justify-center md:ml-16 lg:flex lg:justify-between lg:ml-20 ">
                <section>
                <div><h4 className=" font-Playfair underline" data-aos="fade-left">Patient’s Record</h4></div>
                <div className="flex flex-col mt-4">
                <div className=" users" data-aos="fade-left" data-aos-delay="500">
                <div className="users-a">
                    <div>
                       <img src={Esther} alt="esther" className="w-14"/> 
                    </div>
                    <div className=" users-b">
                        <h5>Miss Esther</h5>
                        <p>20-Dec-2023</p>
                    </div>    
                </div>
                <div className=" users-b">
                    <h5>Status Only</h5>
                    <p>Read Only</p>
                </div>
                <div>
                    <button>View Record</button>
                </div>
            </div>
            <div className="users" data-aos="fade-right" data-aos-delay="500">
                <div className="users-a">
                    <div>
                       <img src={Fega} alt="fega" /> 
                    </div>
                    <div className="users-b">
                        <h5>Mrs.Fega W.</h5>
                        <p>10-Oct-2023</p>
                    </div>    
                </div>
                <div className="users-b">
                    <h5>Status Only</h5>
                    <p>Read & Write</p>
                </div>
                <div>
                    <button>View Record</button>
                </div>
            </div> 
             <div>
                <div className="users" data-aos="fade-up" data-aos-delay="500">
                    <div className="users-a">
                        <div>
                        <img src={adewale} alt="adewale" /> 
                        </div>
                        <div className="users-b">
                            <h5>Mr.Adewale F</h5>
                            <p>16-Sept-2023</p>
                        </div>    
                    </div>
                    <div className="users-b">
                        <h5>Status Only</h5>
                        <p>Read Only</p>
                    </div>
                    <div>
                        <button>View Record</button>
                    </div>
                </div>
                <div className="users" data-aos="fade-up" data-aos-delay="500">
                    <div className="users-a">
                        <div>
                        <img src={Ochuko} alt="ochuko" /> 
                        </div>
                        <div className="users-b">
                            <h5>Mr.Ochuko O</h5>
                            <p>2-Sept-2023</p>
                        </div>    
                    </div>
                    <div className="users-b">
                        <h5>Status Only</h5>
                        <p>Read & Write</p>
                    </div>
                    <div>
                        <button>View Record</button>
                    </div>
                </div> 
                <div className="users" data-aos="fade-up" data-aos-delay="500">
                    <div className="users-a">
                        <div>
                        <img src={Ochuko2} alt="ochuko2" /> 
                        </div>
                        <div className="users-b">
                            <h5>Mr.Ochuko A</h5>
                            <p>23-Aug-2023</p>
                        </div>    
                    </div>
                    <div className="users-b">
                        <h5>Status Only</h5>
                        <p>Read & Write</p>
                    </div>
                    <div>
                        <button>View Record</button>
                    </div>
                </div>
             </div>
                </div>
                </section>          
            </main>
        </div>
    )
}
export default Patients;