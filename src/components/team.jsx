import James from "../assests/Mask group.svg";
import Chio from "../assests/Mask group 2.svg";
import Cynthia from "../assests/Mask group 3.svg";
import Faith from "../assests/Mask group 4.svg";
const Team = () => {
    return(
        <>
        <div className="flex justify-center items-center mt-10">
                <div className="flex flex-col justify-center items-center">
                  <h4 className=" text-center">Our Team</h4>
                  <div className="flex justify-center items-center text-xs">
                    <div className=" grid grid-cols-1 p-6 gap-x-8 md:grid-cols-2 md:gap-y-10 lg:flex lg:flex-row">
                      <div className="testimonial">
                        <img src={James} alt="james" className=" w-20" />
                        <p>Hassid</p>
                        <span>Data Scientist</span>
                      </div>
                      <div className="testimonial">
                        <img src={Chio} alt="chio" className=" w-20"  />
                        <p>Valentine</p>
                        <span>Backend Developer</span>
                      </div>
                      <div className="testimonial">
                        <img src={Cynthia} alt="cynthia"  className=" w-20" />
                        <p>Micah</p>
                        <span>Product Designer</span>
                      </div>
                      <div className="testimonial">
                        <img src={Faith} alt="faith" className=" w-20" />
                        <p>Ileolami</p>
                        <span>Frontend Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        
        </>
    )
}
export default Team;