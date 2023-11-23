import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
      <div className=" max-w-7xl mx-auto">
        <div className=" h-[80vh] flex flex-col justify-center items-center">
          <img src="/img/error.jpg" alt="" />
          <Link to={"/"}>
            <button className="btn btn-sm md:btn-md btn-secondary">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;