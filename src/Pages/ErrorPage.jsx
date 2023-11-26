import { Link } from "react-router-dom";
// import Lottie from "lottie-react";
// import Error from "../assets/404.json"


const ErrorPage = () => {
    return (
      <div className=" max-w-7xl mx-auto">
        <div className=" h-[80vh] flex flex-col justify-center items-center">
          {/* <Lottie animationData={Error} loop={true}></Lottie> */}
          <img src="/img/404.png" alt="" />
          <h2>
            
          </h2>
          <Link to={"/"}>
            <button className="btn btn-sm md:btn-md btn-primary">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;