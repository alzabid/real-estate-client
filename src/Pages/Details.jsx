import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Spinner from "../Components/Spinner";
import PropertyReviews from "../Components/PropertyReviews";
import { MdVerified } from "react-icons/md";
import Title from "../Components/Title";

const Details = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState();
  const [review, setReview] = useState("")

   

  const { data: property = [] } = useQuery({
    queryKey: ["property", id],
    queryFn: async () => {
      setIsLoading(true);
      const res = await axiosSecure.get(`/property/${id}`);
      setIsLoading(false);
      return res.data;
    },
  });

  // console.log(property);
  const {
    _id,
    agent_name,
    agent_photoURL,
    title,
    photoURL,
    location,
    price,
    details,
    status,
  } = property;


  const { data: reviews = [], } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/review");
      const propertiesReview = res.data.filter(
        (reviews) => reviews.property_id === `${_id}`
      );
      // refetch()

      return propertiesReview;
    },
  });
  console.log(reviews);

  const handleWishlist = () => {
    const Wishlist = {
      property_id: _id,
      email: user.email,
      agent_name,
      agent_photoURL,
      title,
      photoURL,
      location,
      price,
      details,
      status,
    };
    axiosSecure.post("/wishlist", Wishlist).then((res) => {
      console.log(res.data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${title} added to your cart`,
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  const dateObject = new Date(Date.now());
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const seconds = dateObject.getSeconds();
  const formattedDateTime = `${year}-${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day} ${hours}h:${minutes}m:${seconds}s`;


  const handleReview = () => {
    const reviewInfo = {
      property_id: _id,
      email: user.email,
      user_name: user.displayName,
      user_photoURL: user.photoURL,
      review: review,
      title,
      agent_name,
      time: formattedDateTime,
    };
    axiosSecure.post("/review", reviewInfo).then((res) => {
      console.log(res.data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Thank you for your review",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <>
      {isLoading ? (
        <div className="h-[80vh] flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="card  md:card-side bg-base-100 shadow-xl mb-12">
            <figure>
              <img className="w-[600px]" src={photoURL} />
            </figure>
            <div className="card-body">
              <div className="flex justify-end -mt-5 mr-6">
                {status === "Verified" ? (
                  <div className="badge badge-info">
                    {status} <MdVerified />
                  </div>
                ) : (
                  ""
                )}
              </div>
              <h2 className="card-title">{title}</h2>
              <h2 className="card-title"> Agent: {agent_name}</h2>
              <h2 className="card-title"> Price: {price}</h2>
              <p>{details}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-sm md:btn-md btn-secondary text-black"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  Give Review
                </button>
                <dialog id="my_modal_5" className="modal sm:modal-middle">
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <p className="text-primary text-center text-xl font-semibold ">
                      Give Review
                    </p>

                    <div className="form-control">
                      <label className="label text-center">
                        <span className="label-text"> </span>
                      </label>
                      <textarea
                        onChange={(e) => setReview(e.target.value)}
                        name="review"
                        className="textarea textarea-bordered h-24"
                        placeholder="write your review here..."
                      ></textarea>
                    </div>

                    <div className="modal-action">
                      <form method="dialog">
                        <input
                          onClick={handleReview}
                          type="submit"
                          value="Submit"
                          className="btn btn-sm md:btn-md btn-primary"
                        />
                      </form>
                    </div>
                  </div>
                </dialog>

                <button
                  onClick={handleWishlist}
                  className="btn btn-sm md:btn-md btn-primary"
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
            </div>
            <Title>Reviews</Title>
          <div className="grid grid-cols-2 gap-6">
            {reviews.map((element, index) => (
              <PropertyReviews key={index} element={element} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
