import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className=" bg-footer text-slate-50 h-20 pt-3">
        <div className="flex flex-row justify-around items-center">
            <div>
                <img src="./src/assests/logo.svg" alt="logo" className="w-6" />
            </div>
            <div>
                <ul className="flex flex-row gap-4 font-Playfair text-xs">
                    <Link>Home</Link>
                    <Link>Hopsital</Link>
                    <Link>About Us</Link>
                    <Link>Contact</Link>
                </ul>
            </div>
            <div>
                <ul className="flex flex-row gap-4 font-Playfair text-xs">
                 <Link>Login</Link>
                 <Link className=' text-hover hover:text-font'>Sign Up</Link>
                </ul>
            </div>
            <div>
                <ul className="flex flex-col lg:flex-row gap-2 ">
                    <img src="./src/assests/linkedin 1.svg" alt="linkedinlogo" className="w-4"/>
                    <img src="./src/assests/facebook 1.svg" alt="twitterlogo" className="w-4"/>
                    <img src="./src/assests/instagram 1.svg" alt="instagramlogo" className="w-4"/>
                </ul>
            </div>
        </div>
        </footer>
    );
    }
    export default Footer;