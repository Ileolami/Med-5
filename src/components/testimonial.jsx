
import James from "../assests/Mask group.svg";
import Chio from "../assests/Mask group 2.svg";
import Cynthia from "../assests/Mask group 3.svg";
import Faith from "../assests/Mask group 4.svg";


const Testimonials = () => {
    return (
        <>
                <div className="shadow-lg">
              <h4 className=" text-center">Testimonial</h4>
              <div className="flex justify-center items-center text-xs">
                <div className=" grid grid-cols-1 p-6 gap-x-8 md:grid-cols-2 md:gap-y-10 lg:flex lg:flex-row">
                <div className="testimonial">
                  <img src={James} alt="james" className=" " />
                  <p>The App had a great system in place that made it easy to check in and get the care I needed.</p>
                  <span> James Derrick</span>
                </div>
                <div className="testimonial">
                  <img src={Chio} alt="chio" className=" w-20"  />
                  <p>I would highly recommend med5 to anyone looking for a great doctor</p>
                  <span>Chio Yuah</span>
                </div>
                <div className="testimonial">
                  <img src={Cynthia} alt="cynthia"  className=" w-20" />
                  <p>The App had a great system in place that made it easy to check in and get the care I needed.</p>
                  <span>Cynthia McClean</span>
                </div>
                <div className="testimonial">
                  <img src={Faith} alt="faith" className=" w-20" />
                  <p>I would highly recommend med5 to anyone looking for a great doctor</p>
                  <span>Faith David</span>
                </div>
              </div>
                </div>
              </div>
        </>
    )
}

export default Testimonials;