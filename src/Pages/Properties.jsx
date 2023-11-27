import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Properties = () => {
  const axiosSecure = useAxiosSecure();
  const { data: property = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/property");
      return res.data;
    },
  });

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 container">
      {property.map((item) => (
        <div key={item._id} className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
              alt="Album"
            />
            {/* <img src={item.photoURL} alt="" /> */}
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary">{item.status}</div>
            </h2>
            <p>Location: {item.location}</p>
            <p>Price: {item.price}</p>
            <div className="flex gap-5 items-center">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={item.agent_photoURL} />
                </div>
              </div>
              <p>{item.agent_name}</p>
            </div>
            <div className="card-actions justify-center">
              <Link className="w-full" to={`/details/${item._id}`}>
                <button className="btn btn-primary w-full">Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Properties;
