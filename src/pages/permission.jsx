
import Fega from "../assests/fega.svg";
import adewale from "../assests/adewale.svg";
import Ochuko from "../assests/ochuko.svg";
import Ochuko2 from "../assests/ochuko 2.svg";


function Permission(){
    return(
        < div className="min-h-screen">
        <main className="flex justify-center items-center md:justify-center md:ml-16 lg:flex lg:justify-between lg:ml-20 ">
            <section>
            <div className="mt-10" data-aos="fade-left" data-aos-delay="500">
                <h4 className=" font-Playfair underline" data-aos="fade-left">Control Your Data</h4>
                <h4 className="text-hover">Hi Esther</h4>
            </div>

            <div className="flex flex-col mt-4">
                <div className="flex justify-center items-center" data-aos="fade-right" data-aos-delay="500">
                    <div className="flex flex-col gap-2">
                        <div>
                        <label htmlFor="">DID</label>
                        <input type="text" />
                        </div>
                       <div className="flex gap-5 ml-4">
                       <div><input type="checkbox" name="" id="" /><label htmlFor="">Read only</label></div>
                        <div><input type="checkbox" name="" id="" /><label htmlFor="">Read & Write</label></div>
                       </div>
                        <div><button className="font-Playfair font-bold text-white bg-button w-24 h-10 rounded-lg md:w-32 lg:w-36 hover:text-white hover:bg-nav">
                            Grant Access
                           </button></div>
                    </div>
                </div>
            <div className="users" data-aos="fade-right" data-aos-delay="500">
            <div className="users-a">
                <div>
                   <img src={Fega} alt="fega" /> 
                </div>
                <div className="users-b">
                    <h5>Mediocre</h5>
                    <p>10-Oct-2023</p>
                </div>    
            </div>
            <div className="users-b">
                <h5>Status Only</h5>
                <p>Read & Write</p>
            </div>
            <div>
                <button>Remove Access</button>
            </div>
        </div> 
         <div>
            <div className="users" data-aos="fade-up" data-aos-delay="500">
                <div className="users-a">
                    <div>
                    <img src={adewale} alt="adewale" /> 
                    </div>
                    <div className="users-b">
                        <h5>Doctor Adewale </h5>
                        <p>20-Dec-2023</p>
                    </div>    
                </div>
                <div className="users-b">
                    <h5>Status Only</h5>
                    <p>Read Only</p>
                </div>
                <div>
                    <button>Remove Access</button>
                </div>
            </div>
            <div className="users" data-aos="fade-up" data-aos-delay="500">
                <div className="users-a">
                    <div>
                    <img src={Ochuko} alt="ochuko" /> 
                    </div>
                    <div className="users-b">
                        <h5>Dr.Ochuko O</h5>
                        <p>2-Sept-2023</p>
                    </div>    
                </div>
                <div className="users-b">
                    <h5>Status Only</h5>
                    <p>Read & Write</p>
                </div>
                <div>
                    <button>Remove Access</button>
                </div>
            </div> 
            <div className="users" data-aos="fade-up" data-aos-delay="500">
                <div className="users-a">
                    <div>
                    <img src={Ochuko2} alt="ochuko2" /> 
                    </div>
                    <div className="users-b">
                        <h5>John Hopkin Hospital</h5>
                        <p>23-Aug-2023</p>
                    </div>    
                </div>
                <div className="users-b">
                    <h5>Status Only</h5>
                    <p>Read & Write</p>
                </div>
                <div>
                    <button>Remove Access</button>
                </div>
            </div>
         </div>
            </div>
            </section>          
        </main>
    </div>
    )
}
export default Permission;