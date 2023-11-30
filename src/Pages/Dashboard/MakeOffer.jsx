import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useUser from "../../Hooks/useUser";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const MakeOffer = () => {
  const axiosSecure = useAxiosSecure();
  const [item] = useUser();
  const { id } = useParams();
  const [stringPrice, setStringPrice] = useState("")

  const { register, handleSubmit } = useForm();

  const { data: wishlist = [] } = useQuery({
    queryKey: ["wishlist", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlist/${id}`);
      return res.data;
    },
  });

  const { agent_email, agent_name, title, location, price, photoURL } =
    wishlist;
  

  //  console.log(typeof(price));
  // console.log(price.split("-"));

  useEffect(() => {
    setStringPrice(price);
     
  }, [price,]);

  const [minValueString, maxValueString] = stringPrice.split("-");
  const minValue = parseInt(minValueString, 10);
  const maxValue = parseInt(maxValueString, 10);
  console.log("Minimum Value:", minValue);
  console.log("Maximum Value:", maxValue);

  

  const onSubmit = (data) => {
    console.log(data);

    const offerInfo = {
      email: item?.email,
      buyer_name: item?.name,
      agent_name,
      agent_email,
      title,
      location,
      photoURL,
      status: "Pending",
      price: data.price,
      date: data.date,
    };

    if (data.price < minValue || data.price > maxValue) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Offer amount must be price range!",
      });
    } else {
      axiosSecure.post("/offer", offerInfo).then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You successfully offer !",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    }
  };

  return (
    <div className=" px-6 md:px-10 lg:px-52 py-10">
      <h1 className="text-3xl text-center  font-extrabold mb-5">Make Offer</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              readOnly
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
              readOnly
              className="input input-bordered w-full"
              {...register("location")}
            />
          </div>
        </div>
        {/* row 0 */}
        <div className="md:flex gap-4 md:mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Buyer Name</span>
            </label>

            <input
              type="text"
              name="agent_name"
              placeholder="Buyer Name"
              defaultValue={item?.name}
              readOnly
              className="input input-bordered w-full"
              {...register("buyer_name")}
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Buyer Email</span>
            </label>

            <input
              type="text"
              name="email"
              placeholder="Buyer Email"
              defaultValue={item?.email}
              readOnly
              className="input input-bordered w-full"
              {...register("email")}
            />
          </div>
        </div>

        {/* row 2 */}
        <div className="md:flex gap-4 md:mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Offered Amount</span>
            </label>

            <input
              type="text"
              name="price"
              placeholder="Offered Amount"
              defaultValue={price}
              className="input input-bordered w-full"
              {...register("price")}
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Buying Date</span>
            </label>

            <input
              type="date"
              name="date"
              placeholder="Buying Date"
              className="input input-bordered w-full"
              {...register("date")}
            />
          </div>
        </div>
        {/* row 3 */}
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
              readOnly
              className="input input-bordered w-full"
              {...register("agent_name")}
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Agent Email</span>
            </label>

            <input
              type="text"
              name="agent_email"
              placeholder="Agent Email"
              defaultValue={agent_email}
              readOnly
              className="input input-bordered w-full"
              {...register("agent_email")}
            />
          </div>
        </div>

        <div className=" flex justify-center items-center mb-8">
          <input
            type="submit"
            value="Make Offer"
            className="btn btn-outline w-44"
          />
        </div>
      </form>
    </div>
  );
};

export default MakeOffer;
