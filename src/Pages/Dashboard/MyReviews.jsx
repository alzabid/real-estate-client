import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdAutoDelete } from "react-icons/md";
import Swal from "sweetalert2";

const MyReviews = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/review?email=${user.email}`);
      return res.data;
    },
  });
  // console.log(reviews);
 

  
  

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
        axiosSecure.delete(`/review/${_id}`).then((res) => {
          console.log(res.data);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your Review Item has been deleted",
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 gap-6">
        {reviews.map((item) => (
          <div
            key={item._id}
            className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg border-t-2 border-primary shadow-lg"
          >
            <div className="flex justify-center -mt-16 md:justify-end">
              <img
                className="object-cover w-20 h-20 border-2 border-primary rounded-full"
                alt="Testimonial avatar"
                src={item.user_photoURL}
              />
            </div>

            <h2 className="mt-2 text-xl font-semibold text-black  md:mt-0">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-gray-600 ">
              Agent Name: {item.agent_name}
            </p>

            <p className="mt-2 text-sm text-gray-600 ">{item.review}</p>

            <p className="mt-2 text-sm text-gray-600 ">{item.time}</p>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleDelete(item._id)}
                className="btn btn-sm btn-warning"
              >
                Delete
                <MdAutoDelete />
              </button>
              <p className="text-lg font-medium text-primary">
                {item.user_name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
