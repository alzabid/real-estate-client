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
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const { createUser, handleUpdateProfile, signInWithGoogle, logOut } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // create user
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        handleUpdateProfile(data.name, data.photoURL)
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "You Successfully Create an Account !",
              showConfirmButton: false,
              timer: 1500,
            });
            logOut();
            navigate("/login");
            // send user data to DB
            const userInfo = {
              name: data.name,
              email: data.email,
              photoURL: data.photoURL,
              password: data.password,
              role:"User",
            };
            axiosPublic.post("/user", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("user added");
              }
            });
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
          position: "center",
          icon: "success",
          title: "You successfully login !",
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
        <title>Register</title>
      </Helmet>

      <div className=" bg-[url(img/bg.png)] bg-contain bg">
        <div className=" bg-white bg-opacity-90 min-h-screen">
          <div className="w-11/12 mx-auto py-10 ">
            <div className="title mt-5">
              <Title>Join with Us</Title>
            </div>

            <div className="flex flex-col justify-between items-center gap-5 pt-8 lg:flex-row">
              <div className="login-for flex-1">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-8 p-5 backdrop-blur-sm bg-white bg-opacity-30 shadow-lg rounded-lg"
                >
                  <div className="flex justify-start items-center">
                    <div className="">
                      <BiUser className="text-3xl text-slate-500"></BiUser>
                    </div>
                    <input
                      className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                      type="text"
                      placeholder="Enter Full Name"
                      {...register("name", { required: true })}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-600 text-sm">Name is required</p>
                  )}

                  <div className="flex justify-start items-center">
                    <div className="">
                      <BiImageAdd className="text-3xl text-slate-500"></BiImageAdd>
                    </div>
                    <input
                      className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                      type="text"
                      placeholder="Enter Image Url"
                      {...register("photoURL", { required: true })}
                    />
                  </div>
                  {errors.photoURL && (
                    <p className="text-red-600 text-sm">
                      Photo URL is required
                    </p>
                  )}
                  <div className="flex justify-start items-center">
                    <div className="">
                      <BiEnvelope className="text-3xl text-slate-500"></BiEnvelope>
                    </div>
                    <input
                      className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                      type="email"
                      placeholder="Enter Email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-600 text-sm">Email is required</p>
                  )}

                  <div className="flex justify-start items-center">
                    <div className="">
                      <BiKey className="text-3xl text-slate-500"></BiKey>
                    </div>
                    <input
                      className="outline-none flex-1 border-b-2 p-2 bg-transparent focus:border-orange-400 transition-all  duration-200"
                      type={showPassword ? "password" : "text"}
                      placeholder="Enter Password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      })}
                    />

                    <span
                      className="absolute top-[255PX] right-12 link link-hover"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash></FaEyeSlash>
                      ) : (
                        <FaEye></FaEye>
                      )}
                    </span>
                  </div>
                  {errors.password?.type === "required" && (
                    <p className="text-red-600 text-sm">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600 text-sm">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600 text-sm">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600 text-sm">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                  <div className=" p-1 flex gap-3 -mt-4">
                    {registerError && (
                      <p className="text-red-700 text-sm ">{registerError}</p>
                    )}
                  </div>

                  <input
                    type="submit"
                    value="Register Now"
                    className="button"
                  />
                  <div className="flex gap-2 justify-center">
                    Already have an account? Please
                    <Link to="/login">
                      <p className=" btn-link">Login</p>
                    </Link>
                    now.
                  </div>
                </form>
                <div className="divider ">Continue With</div>
                <button
                  onClick={handleGoogleSignIn}
                  className="button w-full flex justify-center items-center gap-5 cursor-pointer "
                >
                  Log in With Google
                  <FcGoogle className="w-8 h-6" />
                </button>
              </div>
              {/* <Social></Social> */}
              <div className="lottie flex-1 lg:mx-20">
                <Lottie
                  animationData={registrationAnimation}
                  loop={false}
                ></Lottie>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
