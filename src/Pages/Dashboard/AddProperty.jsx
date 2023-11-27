import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddProperty = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const propertyInfo = {
      agent_email: user?.email,
      agent_name: data.agent_name,
      agent_photoURL: data.agent_photoURL,
      title: data.title,
      location: data.location,
      price: data.price,
      photoURL: data.photoURL,
      details: data.details,
    };
    axiosSecure.post("/property", propertyInfo).then((res) => {
      console.log(res.data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You successfully login !",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <div className="bg-[#F8F8F8] px-6 md:px-10 lg:px-52 py-10">
      <h1 className="text-3xl text-center  font-extrabold mb-5">
        Add Property
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* row 0 */}
        <div className="md:flex gap-4 md:mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Agent Name</span>
            </label>

            <input
              type="text"
              name="agent_name"
              placeholder="Agent Name"
              className="input input-bordered w-full"
              {...register("agent_name", { required: true })}
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Agent Image</span>
            </label>

            <input
              type="text"
              name="agent_photoURL"
              placeholder="Agent Image"
              className="input input-bordered w-full"
              {...register("agent_photoURL", { required: true })}
            />
          </div>
        </div>
        {/* row 1 */}
        <div className="md:flex gap-4 md:mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Property Title</span>
            </label>

            <input
              type="text"
              name="title"
              placeholder="Property Title"
              className="input input-bordered w-full"
              {...register("title", { required: true })}
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Property Location</span>
            </label>

            <input
              type="text"
              name="location"
              placeholder="Property Location"
              className="input input-bordered w-full"
              {...register("location", { required: true })}
            />
          </div>
        </div>
        {/* row 2 */}
        <div className="md:flex gap-4 md:mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price Range</span>
            </label>

            <input
              type="number"
              name="price"
              placeholder="Price Range"
              className="input input-bordered w-full"
              {...register("price", { required: true })}
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Property Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photoURL"
                placeholder="Property Image URL"
                className="input input-bordered w-full"
                {...register("photoURL", { required: true })}
              />
            </label>
          </div>
        </div>
        {/* row 3 */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Property Details</span>
            </label>

            <input
              type="text"
              name="details"
              placeholder="Property Details"
              className="input input-bordered w-full"
              {...register("details", { required: true })}
            />
          </div>
        </div>

        <div className=" flex justify-center items-center mb-8">
          <input
            type="submit"
            value="Add Property"
            className="btn btn-outline w-44"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
