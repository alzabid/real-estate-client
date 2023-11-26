import Lottie from "lottie-react";
import loading from "../assets/loading.json";

const Spinner = () => {
    return (
      <div>
        <div className="lottie w-24 md:w-32">
          <Lottie animationData={loading} loop={true}></Lottie>
        </div>
      </div>
    );
};

export default Spinner;