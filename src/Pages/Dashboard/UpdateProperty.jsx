import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const UpdateProperty = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  // const [isLoading, setIsLoading] = useState();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const { data: property = [] } = useQuery({
    queryKey: ["property", id],
    queryFn: async () => {
      // setIsLoading(true);
      const res = await axiosSecure.get(`/property/${id}`);
      // setIsLoading(false);
      return res.data;
    },
  });

  console.log(property);

  const {
    _id,
    agent_email,
    agent_name,
    agent_photoURL,
    title,
    photoURL,
    location,
    price,
    details,
  } = property;

  const onSubmit = (data) => {
    console.log(data);

    const updateInfo = {
      agent_email,
      agent_name: data.agent_name,
      agent_photoURL: data.agent_photoURL,
      title: data.title,
      location: data.location,
      price: data.price,
      photoURL: data.photoURL,
      details: data.details,
    };
    axiosSecure.patch(`/property/${_id}`, updateInfo).then((res) => {
      console.log(res.data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${title} Successfully Updated`,
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <div className="bg-[#F8F8F8] px-6 md:px-10 lg:px-52 py-10">
      <h1 className="text-3xl text-center  font-extrabold mb-5">
        Update Property
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
              defaultValue={agent_name}
              className="input input-bordered w-full"
              {...register("agent_name")}
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
              defaultValue={agent_photoURL}
              className="input input-bordered w-full"
              {...register("agent_photoURL")}
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
              defaultValue={title}
              className="input input-bordered w-full"
              {...register("title")}
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
              defaultValue={location}
              className="input input-bordered w-full"
              {...register("location")}
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
              defaultValue={price}
              className="input input-bordered w-full"
              {...register("price")}
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
                defaultValue={photoURL}
                className="input input-bordered w-full"
                {...register("photoURL")}
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
              defaultValue={details}
              className="input input-bordered w-full"
              {...register("details")}
            />
          </div>
        </div>

        <div className=" flex justify-center items-center mb-8">
          <input
            type="submit"
            value="Update Property"
            className="btn btn-outline w-44"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProperty;
