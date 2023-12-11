import Solve from "../assests/solve.svg";
import Unsolve from "../assests/unsolve.svg";
import Active from "../assests/active.svg";
import Adewale from "../assests/adewale.svg";
import Fega from "../assests/fega.svg";
import Esther from "../assests/esther.svg";
import Ochuko from "../assests/ochuko.svg";
const Overview = () => {
    return (
        <div className="min-h-screen">
           <main className="flex justify-center items-center md:ml-12 md:justify-center lg:flex lg:justify-between">
  <section>
    <div className="mt-4">
      <p>How are you feeling today ?😊</p>
      <h1>Welcome Back</h1>
      <h2 className=" text-hover text-2xl">Dr. Justine</h2>
    </div>
    <div className="flex flex-col lg:flex-row ">
      <div className="shadow-lg p-2">
        <div className="flex mb-6 mt-6 gap-4 ">
          <div className="case">
            <div> <img src={Solve} alt="solve" /></div>
            <div>
              <h1>28</h1>
              <p>Solved Case</p>
            </div>
          </div>
          <div className="case">
            <div> <img src={Unsolve} alt="unsolve" /></div>
            <div>
              <h1>10</h1>
              <p>Unsolved Case</p>
            </div>
          </div>
          <div className="case">
            <div> <img src={Active} alt="active" /></div>
            <div>
              <h1>4</h1>
              <p>Active Case</p>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="mb-6 ">Today Appointment</h1>
          <div className="flex justify-start mx-8 ">
            <div>
              <div className="schedule">
                <div>9:00am</div>
                <div className="flex gap-6">
                  <div>
                    <img src={Adewale} alt="adewale"/>
                  </div>
                  <div>
                    <h6>Mr. Adewale</h6>
                    <p>Consultation</p>
                  </div>
                </div>
                <div>On going...</div>  
              </div>
              <div className="schedule">
                <div>9:00am</div>
                <div className="flex gap-6">
                  <div>
                    <img src={Fega} alt="adewale"/>
                  </div>
                  <div>
                    <h6>Mrs.Adewale</h6>
                    <p>Checkup</p>
                  </div>
                </div>
                <div>25-Dec-22023</div>
              </div>
              <div className="schedule">
                <div>11:00am</div>
                <div className="flex gap-6">
                  <div>
                    <img src={Esther} alt="adewale"/>
                  </div>
                  <div>
                    <h6>Miss. Gloria</h6>
                    <p>Consultation</p>
                  </div>
                </div>
                <div>23-Dec-2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  </section>
</main>
        </div>
    );
};
export default Overview;