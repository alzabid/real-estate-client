import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

import useUser from "../../Hooks/useUser";

const MyProfile = () => {
  const axiosSecure = useAxiosSecure();
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [item, refetch] = useUser();

  const handleUpdate = () => {
    const reviewInfo = {
      name: name || item?.name,
      photoURL: review || item?.photoURL,
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
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-72 bg-base-100 shadow-xl border-t-2 border-primary">
        <figure>
          <div className="avatar mt-6">
            <div className="w-48 rounded-full">
              <img src={item?.photoURL} />
            </div>
          </div>
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
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              update Profile
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
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text"> Your Name </span>
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    type="text"
                    className="input input-bordered w-full"
                    placeholder=" Your Name"
                    defaultValue={item?.name}
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text"> Your Name </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    readOnly
                    defaultValue={item?.email}
                  />
                </div>

                <div className="form-control">
                  <label className="label text-center">
                    <span className="label-text"> Your Photo URL </span>
                  </label>
                  <textarea
                    onChange={(e) => setReview(e.target.value)}
                    name="review"
                    className="textarea textarea-bordered h-24"
                    placeholder="PhotoURL....  "
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
