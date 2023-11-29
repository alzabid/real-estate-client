import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import { FaSkullCrossbones } from "react-icons/fa";

const AgentProperties = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: Property = [] } = useQuery({
    queryKey: ["Property", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/properties?email=${user.email}`);
      return res.data;
    },
  });
  console.log(Property);

  return (
    <div className="grid grid-cols-2 gap-6 px-10 py-10">
      {Property.map((item) => (
        <div
          key={item._id}
          className="card card-side h-[300px] bg-base-100 shadow-xl border-t-2"
        >
          <figure>
            <img className="w-[500px] h-full" src={item.photoURL} alt="" />
          </figure>

          <div className="card-body">
            <div className="flex justify-end -mt-6 -mr-5">
              {item?.status === "Verified" ? (
                <div className="badge badge-info">
                  {item.status} <MdVerified />
                </div>
              ) : item?.status === "Rejected" ? (
                <div className="badge badge-error">
                  {item.status} <FaSkullCrossbones />
                </div>
              ) : (
                ""
              )}
            </div>
            <h2 className="card-title">{item.title}</h2>
            <p>Location: {item.location}</p>
            <p>Price: {item.price} </p>
            <div className="flex gap-5 items-center">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={item.agent_photoURL} />
                </div>
              </div>
              <p className="text-primary">
                Agent: <span className="text-black">{item.agent_name}</span>
              </p>
            </div>
            <div className="card-actions justify-between">
              {item?.status === "Rejected" ? (
                <button disabled className="btn btn-sm btn-secondary">
                  Update
                </button>
              ) : (
                <Link className="" to={`/update/${item._id}`}>
                  <button className="btn btn-sm btn-secondary">Update</button>
                </Link>
              )}
              <Link className="" to={`/details/${item._id}`}>
                <button className="btn btn-sm btn-primary w-full">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AgentProperties;
