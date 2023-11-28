import { useContext, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Providers/AuthProvider";



const MyProfile = () => {
const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const [review, setReview] = useState("");
    
   const { data: profile = [], refetch} = useQuery({
     queryKey: ["profile", user?.email],
     queryFn: async () => {
       const res = await axiosSecure.get(`/user?email=${user.email}`);
       return res.data;
     },
   });

    const [item] = profile;
    console.log(item);


    
    const handleUpdate = () => {
        const reviewInfo = {
          photoURL : review,
          
        };
        axiosSecure.patch(`/user/${item._id}`, reviewInfo).then((res) => {
          console.log(res.data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for your review",
            showConfirmButton: false,
            timer: 1500,
          });
            refetch();
        });
        
    }
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure>
            <img className="" src={item?.photoURL} alt="" />
          </figure>
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title">{item?.name}</h2>
              {item?.role !== "User" ? (
                <div className="badge badge-secondary">{item?.role}</div>
              ) : (
                ""
              )}
            </div>
            <p>{item?.email}</p>
            <div className="card-actions justify-end">
              <button
                className="btn w-full bg-primary"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                update photo
              </button>
              <dialog id="my_modal_5" className="modal sm:modal-middle">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <p className="text-primary text-center text-xl font-semibold ">
                    Update Profile
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
                        onClick={handleUpdate}
                        type="submit"
                        value="Submit"
                        className="btn btn-sm md:btn-md btn-primary"
                      />
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyProfile;