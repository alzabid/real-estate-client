import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useState } from "react";
import Spinner from "../Components/Spinner";

const Properties = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState();
  const [selectedSorting, setSelectedSorting] = useState();
  const axiosSecure = useAxiosSecure();

  const { data: property = [] } = useQuery({
    queryKey: ["user", search, selectedSorting],
    queryFn: async () => {
      setIsLoading(true);
      const res = await axiosSecure.get(
        `/property?search=${search}&sort=${selectedSorting}`
      );
      setIsLoading(false);
      return res.data;
    },
  });
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
  };

  return (
    <>
      {isLoading ? (
        <div className="h-[80vh] flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="container py-10">
          <div className="flex gap-5 justify-center">
            <div className="join">
              <form onSubmit={handleSearch}>
                <input
                  className="input input-bordered join-item"
                  name="search"
                  placeholder="Search"
                />
                <input
                  type="submit"
                  value="Search"
                  className="btn bg-primary join-item"
                />
              </form>
            </div>

            <select
              value={selectedSorting}
              onChange={(e) => setSelectedSorting(e.target.value)}
              className="select select-bordered join-item"
            >
              <option disabled selected>
                Filter
              </option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
          </div>
          {/* cards */}
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 ">
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
                      <button className="btn btn-primary w-full">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Properties;
