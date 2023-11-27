import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Spinner from "../Components/Spinner";

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

  console.log(property);
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

  console.log(
    agent_name,
    agent_photoURL,
    title,
    photoURL,
    location,
    price,
    details,
    status
  );

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
  const handleReview = () => {
    const reviewInfo = {
      property_id: _id,
      user_email: user.email,
      user_name: user.displayName,
      user_photoURL: user.photoURL,
      review: review,
      title,
      time: Date.now(),
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
        </div>
      )}
    </>
  );
};

export default Details;
