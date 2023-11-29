import { useContext } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FaSkullCrossbones } from "react-icons/fa";

const PorpertyBought = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: offer = [] } = useQuery({
    queryKey: ["offer", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/offer?email=${user.email}`);
      return res.data;
    },
  });
  console.log(offer);
  return (
    <div className="grid grid-cols-3 gap-6 px-10 py-10">
      {offer.map((item) => (
        <div key={item._id} className="card bg-base-100 shadow-xl border-t-2">
          <figure>
            <img className="h-[300px]" src={item.photoURL} alt="" />
          </figure>

          <div className="card-body">
            <div className="flex justify-end -mt-6 -mr-5">
              {item?.status === "Pending" ? (
                <div className="badge badge-warning">{item.status}</div>
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
            <p> Offered Price: {item.price} Tk</p>
            <div className="flex gap-5 items-center">
              <p className="text-primary">
                Agent: <span className="text-black">{item.agent_name}</span>
              </p>
            </div>
            <div className="card-actions justify-center">
              {item.status === "Accepted" ? (
                <Link className="w-full">
                  <button className="btn btn-primary w-full">Pay Now</button>
                </Link>
              ) : (
                <>
                  <Link className="w-full">
                    <button disabled className="btn btn-primary w-full">
                      Pay Now
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PorpertyBought;
