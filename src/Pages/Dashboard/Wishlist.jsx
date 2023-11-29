import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { MdVerified } from "react-icons/md";

const Wishlist = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: wishlists = [], refetch } = useQuery({
    queryKey: ["wishlists", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlist?email=${user.email}`);
      return res.data;
    },
  });
  console.log(wishlists);

  //  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

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
    <div className="grid grid-cols-2 gap-6 px-10 py-10  ">
      {wishlists.map((item) => (
        <div
          key={item._id}
          className="card card-side h-[300px] bg-base-100 shadow-xl border-t-2"
        >
          <figure>
            <img className="w-[500px] h-full" src={item.photoURL} alt="" />
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
            <div className="flex justify-end -mt-5 mr-6">
              {item?.status === "Verified" ? (
                <div className="badge badge-info">
                  {item.status} <MdVerified />
                </div>
              ) : (
                ""
              )}
            </div>

            <h2 className="card-title">{item.title}</h2>
            <p>Location: {item.location}</p>
            <p>Price: {item.price}</p>
            <div className="flex gap-5 items-center">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={item.agent_photoURL} />
                </div>
              </div>
              <p className="text-primary">
                Agent: <span className="text-black">{item.agent_name}</span>
              </p>
            </div>
            <div className="card-actions justify-end">
              {/* <Link className="" to={`/details/${item.property_id}`}>
                <button className="btn btn-primary">Details</button>
              </Link> */}
              <Link className="" to="/dashboard/makeOffer">
                <button className="btn btn-primary">Make an Offer</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
