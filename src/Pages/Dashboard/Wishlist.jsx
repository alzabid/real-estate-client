import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


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
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 container">
      {wishlists.map((item) => (
        <div key={item._id} className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
              alt="Album"
            />
            {/* <img src={item.photoURL} alt="" /> */}
            <button
              onClick={() => handleDelete(item._id)}
              className="btn bg-secondary hover:bg-primary btn-circle absolute top-0 right-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary">{item.status}</div>
            </h2>
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
              <Link className="w-full" to={`/details/${item.property_id}`}>
                <button className="btn btn-primary w-full">Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;

// http://localhost:5000/health/wishlist?email=ashik@gmail.com