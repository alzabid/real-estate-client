import Lottie from "lottie-react";
import loading from "../assets/loading.json";

const Loader = () => {
    return (
      <div>
        <div className="lottie">
          <Lottie animationData={loading} loop={true}></Lottie>
        </div>
      </div>
    );
};

export default Loader;