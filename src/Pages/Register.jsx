import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Title from "../Components/Title";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BiEnvelope, BiImageAdd, BiKey, BiUser } from "react-icons/bi";
import Lottie from "lottie-react";
import registrationAnimation from "../assets/registrationAnimation.json";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, handleUpdateProfile, signInWithGoogle, logOut } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleRegister = (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("password should 6 character");
      return;
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=])/.test(password)
    ) {
      setRegisterError(
        "At least one uppercase letter, one lowercase letter, one number and one special character."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        handleUpdateProfile(name, photo)
          .then(() => {
            e.target.reset();
            Swal.fire({
              position: "middle",
              icon: "success",
              title: "You Successfully Create an Account !",
              showConfirmButton: false,
              timer: 1500,
            });
            logOut()
              .then(() => {
                navigate("/login");
              })
              .catch((error) => console.error(error));
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "You successfully login !",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className=" bg-[url(img/bg.png)] bg-contain container">
      <div className=" bg-white bg-opacity-90 min-h-screen">
        <div className="w-11/12 mx-auto py-10 m-5 p-5 ">
          <div className="title mt-5">
            <Title>Join with Us</Title>
          </div>

          <div className="flex flex-col justify-between items-center gap-5 pt-8 lg:flex-row">
            <div className="login-for flex-1">
              <form
                onSubmit={handleRegister}
                className="flex flex-col gap-8 p-5 backdrop-blur-sm bg-white bg-opacity-5 shadow-lg rounded-lg"
              >
                <div className="flex justify-start items-center">
                  <div className="">
                    <BiUser className="text-3xl text-slate-500"></BiUser>
                  </div>
                  <input
                    className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                    type="text"
                    name="name"
                    placeholder="Enter Full Name"
                    required
                  />
                </div>

                <div className="flex justify-start items-center">
                  <div className="">
                    <BiImageAdd className="text-3xl text-slate-500"></BiImageAdd>
                  </div>
                  <input
                    className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                    type="text"
                    name="photo"
                    placeholder="Enter Image Url"
                    required
                  />
                </div>
                <div className="flex justify-start items-center">
                  <div className="">
                    <BiEnvelope className="text-3xl text-slate-500"></BiEnvelope>
                  </div>
                  <input
                    className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                  />
                </div>

                <div className="flex justify-start items-center">
                  <div className="">
                    <BiKey className="text-3xl text-slate-500"></BiKey>
                  </div>
                  <input
                    className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                    type={showPassword ? "password" : "text"}
                    name="password"
                    placeholder="Enter Password"
                    required
                  />
                  <span
                    className="absolute top-[255PX] right-12 link link-hover"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                <div className=" p-1 flex gap-3 -mt-4">
                  {registerError && (
                    <p className="text-red-700 text-sm ">{registerError}</p>
                  )}
                </div>

                <input type="submit" value="Register Now" className="button" />
                <div className=" p-1 flex gap-3 -mt-4">
                  Already have an account? Please
                  <Link to="/login">
                    <p className=" btn-link">Login</p>
                  </Link>
                  now.
                </div>
              </form>
              <div className="divider ">Continue With</div>
              <div className="px-5">
                <button
                  onClick={handleGoogleSignIn}
                  className="button w-full flex justify-between items-center cursor-pointer "
                >
                  Log in With Google
                  <FcGoogle className="w-8 h-6" />
                </button>
              </div>
            </div>
            {/* <Social></Social> */}
            <div className="lottie  flex-1 mx-20">
              <Lottie
                animationData={registrationAnimation}
                loop={true}
              ></Lottie>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
