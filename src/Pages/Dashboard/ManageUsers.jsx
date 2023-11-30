import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });

  const handleMakeAdmin = (item) => {
    axiosSecure.patch(`/user/admin/${item._id}`).then((res) => {
      console.log(res.data);
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${item.name} is an Admin Now!`,
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  const handleMakeAgent = (item) => {
    axiosSecure.patch(`/user/agent/${item._id}`).then((res) => {
      console.log(res.data);
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${item.name} is an Agent Now!`,
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  const handleMakeFraud = (item) => {
    axiosSecure.patch(`/user/fraud/${item._id}`).then((res) => {
      console.log(res.data);
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${item.name} is Mark as Fraud!`,
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  const handleDeleteUser = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/user/${item._id}`).then((res) => {
          console.log(res.data);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been Deleted!`,
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <section className="container px-4 mx-auto">
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    {/* 1 */}
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Image</span>
                      </div>
                    </th>
                    {/* 2 */}
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Name</span>
                      </button>
                    </th>
                    {/* 3 */}
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Email address
                    </th>
                    {/* 4 */}
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Role</span>
                      </button>
                    </th>
                    {/* 5 */}
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Make Role
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Mark Fraud
                    </th>
                    {/* 6 */}
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                {users.map((item) => (
                  <tbody
                    key={item._id}
                    className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-700"
                  >
                    <tr id="item._id">
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <div className="flex items-center gap-x-2">
                            <img
                              className="object-cover w-10 h-10 rounded-full"
                              src={item.photoURL}
                              alt=""
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <h2 className="font-medium text-gray-800 dark:text-white ">
                          {item.name}
                        </h2>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {item.email}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                          <button className="font-medium text-gray-800 dark:text-white ">
                            {item.role}
                          </button>
                        </div>
                      </td>

                      <td className=" px-4 py-4 text-sm whitespace-nowrap">
                        {item.status === "Fraud" ? (
                          <summary className="m-1 btn btn-error btn-sm">
                            Mark Fraud
                          </summary>
                        ) : (
                          <>
                            {item.role !== "Admin" ? (
                              <details className="dropdown dropdown-right dropdown-end">
                                <summary className="m-1 btn btn-sm">
                                  Make Role
                                </summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                  <li>
                                    <button
                                      onClick={() => handleMakeAdmin(item)}
                                    >
                                      Make Admin
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      onClick={() => handleMakeAgent(item)}
                                    >
                                      Make Agent
                                    </button>
                                  </li>
                                </ul>
                              </details>
                            ) : (
                              ""
                            )}
                          </>
                        )}
                      </td>
                      <td>
                        {item.role === "Agent" ? (
                          <>
                            {item.status !== "Fraud" ? (
                              <summary
                                onClick={() => handleMakeFraud(item)}
                                className="m-1 btn btn-sm"
                              >
                                Mark Fraud
                              </summary>
                            ) : (
                              ""
                            )}
                          </>
                        ) : (
                          <></>
                        )}
                      </td>
                      <td className=" px-4 py-4 text-sm whitespace-nowrap">
                        <button
                          onClick={() => handleDeleteUser(item)}
                          className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageUsers;
