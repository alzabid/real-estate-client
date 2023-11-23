import { GrTwitter, GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-[#1f5156] text-white  p-10 container">
      <div>
        <Link to="/" className="">
          <p className="text-secondary text-2xl">Real Estate</p>
        </Link>
        <p className=" lg:w-[700px] md:text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque at
          alias mollitia culpa fugit eaque facilis architecto omnis eveniet
          officiis, perferendis recusandae dolorem aliquid animi ipsa neque a
          molestiae veritatis?
        </p>
      </div>
      <nav>
        <div className="space-y-4">
          <h1 className="text-xl text-secondary mb-2">Navigations</h1>
          <div className="flex items-center gap-2">
            <div className="bg-black w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">FAQs</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-black w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">
              Privacy Policy
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-black w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">
              Terms & Conditions
            </p>
          </div>
        </div>
      </nav>
      <nav>
        <div className="space-y-4">
          <h1 className="text-xl text-secondary mb-2">Company</h1>
          <div className="flex items-center gap-2">
            <div className="bg-black w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">About</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-black w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">Team</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-black w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">
              Contact
            </p>
          </div>
        </div>
      </nav>
      <nav>
        <div className="space-y-2">
          <h1 className="text-xl text-secondary mb-2">
            Contact Information
          </h1>
          <p className="font-medium">Sector-7,Uttra, Dhaka 1212.</p>
          <p className="font-medium">+019 123 456 78</p>
          <p className="font-medium">info@cleanco.com</p>
          <div className="flex gap-5 text-3xl">
            <GrFacebookOption className="cursor-pointer" />
            <GrLinkedinOption className="cursor-pointer" />
            <GrTwitter className="cursor-pointer" />
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
