import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Title from "../Components/Title";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BiEnvelope, BiKey } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import loginAnimation from "../assets/loginAnimation.json";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "You successfully login!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Invalid Email or Password !",
          icon: "error",
          confirmButtonText: "OK",
        });
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You successfully login!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location?.state : "/");
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          photoURL: result.user?.photoURL,
          role: "User",
        };
        axiosPublic.post("/user", userInfo).then((res) => {
          console.log(res.data);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div className=" bg-[url(/img/bg2.png)] bg-contain bg ">
        <div className=" bg-white bg-opacity-90 min-h-screen">
          <div className="w-11/12 mx-auto py-10  ">
            <div className="title mt-5">
              <Title>Login Now</Title>
            </div>

            <div className="flex flex-col justify-between items-center gap-5 pt-8 lg:flex-row">
              <div className="login-for flex-1">
                <form
                  onSubmit={handleLogin}
                  className="flex flex-col gap-8 p-5 backdrop-blur-sm bg-white  bg-opacity-30 shadow-lg rounded-lg"
                >
                  <div className="flex justify-start items-center">
                    <div className="">
                      <BiEnvelope className="text-3xl text-slate-500"></BiEnvelope>
                    </div>
                    <input
                      className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                      type="email"
                      name="email"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-start items-center">
                      <div className="">
                        <BiKey className="text-3xl text-slate-500"></BiKey>
                      </div>
                      <input
                        className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                        type={showPassword ? "password" : "text"}
                        name="password"
                        placeholder="Enter Password"
                      />
                      <span
                        className="absolute top-[108PX] right-10 link link-hover"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <FaEyeSlash></FaEyeSlash>
                        ) : (
                          <FaEye></FaEye>
                        )}
                      </span>
                    </div>
                    <p className="text-end text-[13px] text-slate-500">
                      forgot password?
                    </p>
                  </div>

                  <div className=" p-1 flex gap-3 -mt-4">
                    <input type="checkbox" name="remember me" className="" />
                    Remember Me
                  </div>

                  <input type="submit" value="Login Now" className="button" />
                  <div className=" flex gap-2 justify-center">
                    New Here? Please
                    <Link to="/register">
                      <p className=" btn-link">Register</p>
                    </Link>
                    now.
                  </div>
                </form>

                <div className="divider ">Continue With</div>
                <button
                  onClick={handleGoogleSignIn}
                  className=" button w-full flex justify-center items-center gap-5 cursor-pointer "
                >
                  Log in With Google
                  <FcGoogle className="w-8 h-6" />
                </button>
              </div>
              {/* <Social></Social> */}
              <div className="flex-1 lg:mx-20">
                <Lottie animationData={loginAnimation} loop={true}></Lottie>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
