import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/review?email=${user.email}`);
      return res.data;
    },
  });
  console.log(reviews);

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
              {item.review}
            </p>

            <div className="flex justify-end mt-4">
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
