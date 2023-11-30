import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaCartPlus,
  FaList,
  FaRegUser,
  FaUsers,
  FaRegClipboard,
} from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import useUser from "../../Hooks/useUser";


const Dashboard = () => {
  const [item] = useUser();
  console.log(item);

  return (
    <div className="flex">
      <div>
        <aside className="flex flex-col w-64 bg-primary h-screen px-4 py-8">
          <NavLink
            to="/"
            className="flex justify-center items-end text-secondary"
          >
            <span className="icon">
              <img className="w-10" src="/img/fav.png" alt="" />
            </span>
            <span className="text-2xl ">Real Estate</span>
          </NavLink>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav className="-mx-3 space-y-3 ">
              {/* {item?.role !== "Admin" ? <></>:item?.role !== "Agent" ?<></>:<></>} */}

              {item?.role === "Admin" ? (
                <>
                  <Link
                    to="/dashboard/profile"
                    className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <FaRegUser />
                    <span className="mx-4 font-medium">Admin Profile</span>
                  </Link>
                  <Link
                    to="/dashboard/users"
                    className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <FaUsers />

                    <span className="mx-4 font-medium"> Manage Users</span>
                  </Link>
                  <Link
                    to="/dashboard/allreviews"
                    className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <MdOutlineRateReview />
                    <span className="mx-4 font-medium">Manage Reviews</span>
                  </Link>
                  <Link
                    to="/dashboard/property"
                    className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <FaRegClipboard />

                    <span className="mx-4 font-medium">Manage Properties</span>
                  </Link>
                </>
              ) : item?.role === "Agent" ? (
                <>
                  <Link
                    to="/dashboard/profile"
                    className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <FaRegUser />
                    <span className="mx-4 font-medium">My Profile</span>
                  </Link>
                  <Link
                    to="/dashboard/agentproperty"
                    className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <FaRegClipboard />

                    <span className="mx-4 font-medium">My Properties</span>
                  </Link>
                  <Link
                    to="/dashboard/add"
                    className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <IoIosAddCircleOutline />

                    <span className="mx-4 font-medium">Add Property</span>
                  </Link>
                  <Link
                    to="/dashboard/request"
                    className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <VscGitPullRequestGoToChanges />

                    <span className="mx-4 font-medium">Requested Property</span>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/dashboard/profile"
                    className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <FaRegUser />
                    <span className="mx-4 font-medium">My Profile</span>
                  </Link>
                  <Link
                    to="/dashboard/wishlist"
                    className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <FaList />
                    <span className="mx-4 font-medium">My Wishlist</span>
                  </Link>
                  <Link
                    to="/dashboard/myreviews"
                    className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <MdOutlineRateReview />
                    <span className="mx-4 font-medium">My Reviews</span>
                  </Link>
                  <Link
                    to="/dashboard/bought"
                    className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                  >
                    <FaCartPlus />
                    <span className="mx-4 font-medium">Property Bought</span>
                  </Link>
                </>
              )}
            </nav>
          </div>
        </aside>
      </div>
      <div className="flex-1">
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
