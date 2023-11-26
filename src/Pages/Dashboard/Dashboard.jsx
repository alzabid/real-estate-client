import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import {
  FaCartPlus,
  FaList,
  FaRegClipboard,
  FaRegUser,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";


const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex">
      <div>
        <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-primary dark:border-primary">
          <NavLink
            to="/"
            className="flex justify-center items-end text-secondary"
          >
            <span className="icon">
              <img className="w-10" src="/img/fav.png" alt="" />
            </span>
            <span className="text-2xl ">Real Estate</span>
          </NavLink>

          <div className="flex flex-col items-center mt-6 -mx-2">
            <img
              className="object-cover  w-16 h-16 mx-2 rounded-full"
              src={user.photoURL}
              alt="avatar"
            />
            <h4 className="mx-2 mt-2 font-medium text-white">
              {user.displayName}
            </h4>
            <p className="mx-2 mt-1 text-sm font-medium text-white">
              {user.email}
            </p>
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav className="-mx-3 space-y-3 ">
              <a
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <FaRegClipboard />

                <span className="mx-4 font-medium">Dashboard</span>
              </a>
              <Link to="/dashboard/users"
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
               
              >
                <FaUsers />

                <span className="mx-4 font-medium"> Manage Users</span>
              </Link>

              <a
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <FaRegUser />
                <span className="mx-4 font-medium">My Profile</span>
              </a>
              <a
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <FaList />
                <span className="mx-4 font-medium">My Wishlist</span>
              </a>
              <a
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <FaCartPlus />
                <span className="mx-4 font-medium">Property Bought</span>
              </a>
              <a
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <MdOutlineRateReview />
                <span className="mx-4 font-medium">My Reviews</span>
              </a>

              <Link
                to="/dashboard/add"
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <IoIosAddCircleOutline />

                <span className="mx-4 font-medium">Add Property</span>
              </Link>
              <Link
                to="/dashboard/update"
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <IoIosAddCircleOutline />

                <span className="mx-4 font-medium">Update Property</span>
              </Link>

              <a
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="mx-4 font-medium">Settings</span>
              </a>
            </nav>
          </div>
        </aside>
      </div>
      <div className="flex-1">
        <div>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
