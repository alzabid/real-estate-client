// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Details = () => {
  // const axiosSecure = useAxiosSecure();
  // const { data: propertyDetails = [] } = useQuery({
  //   queryKey: ["property", id], // Assuming you have an 'id' variable
  //   queryFn: async ({ queryKey }) => {
  //     const [, id] = queryKey; // Destructure the queryKey array
  //     const res = await axiosSecure.get(`/property/${id}`);
  //     return res.data;
  //   },
  // });
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [property] = useLoaderData();
    const {
      _id,
    agent_name,
    agent_photo_URL,
    title,
    photoURL,
    location,
    Price,
    details,
    status,
  } = property;

  console.log(
    agent_name,
    agent_photo_URL,
    title,
    photoURL,
    location,
    Price,
    details,
    status
  );
  const Wishlist = {
    property_id: _id,
    email: user.email,
    agent_name,
    agent_photo_URL,
    title,
    photoURL,
    location,
    Price,
    details,
    status,
  };
  axiosSecure.post("/wishlist", Wishlist).then((res) => {
      console.log(res.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${title} added to your cart`,
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
   
  });

  return (
    <div className="container py-10 px-10">
      <div className="card  md:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{agent_name}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
