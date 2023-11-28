import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import { FaSkullCrossbones } from "react-icons/fa";

const AllProperty = () => {
  const axiosSecure = useAxiosSecure();
  const { data: Property = [], refetch } = useQuery({
    queryKey: ["Property"],
    queryFn: async () => {
      const res = await axiosSecure.get("/properties");
      return res.data;
    },
  });
  console.log(Property);

  const handleMakeVerify = (item) => {
    axiosSecure.patch(`/property/${item._id}`,{status:"Verified"}).then((res) => {
      console.log(res.data);
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${item.title} is Verified !`,
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  const handleMakeReject = (item) => {
    axiosSecure
      .patch(`/property/${item._id}`, { status: "Rejected" })
      .then((res) => {
        console.log(res.data);
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${item.title} is Rejected !`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleDelete = (_id) => {
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
        axiosSecure.delete(`/wishlist/${_id}`).then((res) => {
          console.log(res.data);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your Wishlist Item has been deleted.",
            icon: "success",
          });
        });
      }
    });
  };
  return (
    <div className="grid grid-cols-2 gap-6 px-10 py-10 ">
      {Property.map((item) => (
        <div
          key={item._id}
          className="card card-side max-w-3xl bg-base-100 shadow-xl"
        >
          <figure>
            <img
              className="w-[300px]"
              src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
              alt="Album"
            />
            {/* <img src={item.photoURL} alt="" /> */}
            <button
              onClick={() => handleDelete(item._id)}
              className="absolute top-0 right-0  btn-circle "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>Location: {item.location}</p>
            <p>Price: {item.price}</p>
            <div className="flex gap-5 items-center">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={item.agent_photoURL} />
                </div>
              </div>
              <p>{item.agent_name}</p>
            </div>
            <div className="card-actions justify-center">
              <Link className="" to={`/update/${item._id}`}>
                <button className="btn btn-sm btn-secondary">Update</button>
              </Link>

              {item.status === "Verified" ? (
                <button disabled className="btn btn-sm btn-info">
                  Verify
                  <MdVerified />
                </button>
              ) : (
                <button
                  onClick={() => handleMakeVerify(item)}
                  className="btn btn-sm bg-sky-500"
                >
                  Verify
                  <MdVerified />
                </button>
              )}
              {item.status === "Rejected" ? (
                <button disabled className="btn btn-sm btn-info">
                  Rejected
                  <MdVerified />
                </button>
              ) : (
                <button
                  onClick={() => handleMakeReject(item)}
                  className="btn btn-sm bg-red-700"
                >
                  Rejected
                  <FaSkullCrossbones />
                </button>
              )}
              <Link className="w-full" to={`/details/${item._id}`}>
                <button className="btn btn-sm btn-primary w-full ">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProperty;
