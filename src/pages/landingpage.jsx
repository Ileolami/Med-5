import Navbar from "../components/Navbar.jsx";
import Footer from "../components/footer.jsx";
import Team from "../components/team.jsx";
import Testimonials from "../components/testimonial.jsx";
import Choose from "../components/choose.jsx";


import FccLogo from "../assests/FCC-logo.svg";
import Image from "../assests/images.svg";
import Reddington from "../assests/redding.svg";
import NewLogo from "../assests/New-Logo-White@3x-2048x871 1.svg";
import Group6 from "../assests/Group 6.svg";
import Nurse from "../assests/image-nurse.png";



const LandingPage = () => {
     return(
        <div className="min-h-screen m-0">
            <Navbar/>
          <main>
            <section className=" bg-[url(/src/assests/Bg-image.png)] bg-cover bg-center h-80 flex justify-center flex-col items-center">
                <p className=" tracking-normal font-Playfair lg:tracking-widest text-white">Leveraging Web5's capabilities, stands at the forefront of healthcare innovation</p>
                <button className=" mt-9 btn">Get Started</button>
            </section>
            <section className="flex flex-col justify-center items-center gap-6 lg:flex-row sect">
                <div>
                    <img src={Group6} alt="" className=" lg:max-w-sm  rolling-image"/>
                </div>
                <div className="flex flex-col italic lg:items-start lg:p-20 lg:text-2xl lg:w-3/5 lg:h-96">
                    <h4 className="text-3xl">MED 5</h4>
                    <p className=" text-justify">Leveraging Web5's capabilities, stands 
                     at the forefront of healthcare innovation. 
                     By seamlessly integrating data security, quality, patient autonomy, and streamlined processes,
                     it is poised to revolutionize healthcare data management practices, 
                     setting a new standard for excellence in
                     Nigerian hospitals.
                    </p>
                </div>
            </section>
            <section className="sect fade-in">
      <h4 className=" underline pb-3">Hospital & Organization</h4>
      <div className="grid grid-cols-2 md:flex md:flex-row lg:flex lg:justify-center lg:items-center lg:gap-10">
        <img src={FccLogo} alt="fcclogo" className="logo logo-animation" />
        <img src={Image}alt="images" className="logo logo-animation" />
        <img src={Reddington} alt="reddington" className="logo logo-animation" />
        <img
          src={NewLogo}
          alt="newlogo"
          className="logo logo-animation"
        />
      </div>
      <button className="btn mt-5">View List</button>
    </section>
            <section className="sect">
                <div>
                    <img src={Nurse} alt="nurse" className=" max-lg:w-full"/>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row">
                    <div className=" bg-nav text-white font-Lato h-40 p-6 md:h-56 lg:h-60">
                    <h4 className=" underline pb-3">Mission</h4>
                    <p  className=" text-justify">
                    Empower Healthcare through technological 
                    innovation to bridge the gap in healthcare data management. 
                    Our mission is to revolutionize the traditional documentation 
                    of patient information, ensuring universal access to 
                    secure electronic health records (EHRs) 
                    and eliminating barriers that impede comprehensive healthcare delivery.
                    </p>
                    </div>
                    <div className=" bg-white text-font font-Lato h-46 p-6 md:h-56 lg:h-60">
                        <h4 className=" underline pb-3">Objectives</h4>
                        <p  className=" text-justify">
                        To pioneer a paradigm shift in Healthcare by establishing an 
                        innovative and comprehensive electronic health record system (EHR). 
                        This system will ensure universal accessibility, data security, 
                        and longevity, empowering individuals with control 
                        over their health information while fostering 
                        collaboration and quality assurance for improved healthcare outcomes nationwide.
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex justify-center items-center mt-10">
              <Testimonials/>
            </section>
            <section>
              <Team/>
            </section>
            <section className="flex justify-center items-center mt-10">
             <Choose/>
            </section>
          </main>
            <Footer/>
        </div>

     )

};
export default LandingPage;