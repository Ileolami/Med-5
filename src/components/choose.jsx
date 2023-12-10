import Smart from "../assests/smart.svg";
function Choose () {
    return(
        <>
         <div className="flex flex-col justify-center items-center">
                <h4 className="mb-10">Why Choose Us</h4>
                <div className="flex justify-center items-center">
                  <div>
                    <img src={Smart} alt="smartlaptop" className=" animate-bounce-slow w-56 rounded-full"/>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
        </>
    )
}
export default Choose;