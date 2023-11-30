import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaSkullCrossbones } from "react-icons/fa";

const RequestedProperties = () => {
  const axiosSecure = useAxiosSecure();
  const { data: offer = [], refetch } = useQuery({
    queryKey: ["offer"],
    queryFn: async () => {
      const res = await axiosSecure.get("/offer");
      return res.data;
    },
  });
  console.log(offer);

  const handleMakeAccepted = (item) => {
    axiosSecure
      .patch(`/offer/${item._id}`, { status: "Accepted" })
      .then((res) => {
        console.log(res.data);
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${item.title} is Accepted !`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const handleMakeReject = (item) => {
    axiosSecure
      .patch(`/offer/${item._id}`, { status: "Rejected" })
      .then((res) => {
        console.log(res.data);
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${item.title} is Rejected !`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="grid grid-cols-2 gap-6 px-10 py-10 ">
      {offer.map((item) => (
        <div
          key={item._id}
          className="card card-side h-[350px] bg-base-100 shadow-xl"
        >
          <figure>
            <img className="w-[300px] h-full" src={item.photoURL} alt="" />
            {/* <button
                onClick={() => handleDelete(item._id)}
                className="absolute top-0 right-0  btn-circle "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button> */}
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>Agent: {item.agent_name}</p>
            <p>Location: {item.location}</p>
            <p>Offered Price: {item.price}</p>
            <p>Buyer Name: {item.buyer_name}</p>
            <p>Buying Date: {item.date}</p>

            <div className="card-actions justify-center">
              {item.status === "Accepted" ? (
                <button disabled className="btn btn-sm btn-info">
                  Accepted
                </button>
              ) : (
                <button
                  onClick={() => handleMakeAccepted(item)}
                  className="btn btn-sm btn-success"
                >
                  Accepted
                </button>
              )}
              {item.status === "Rejected" ? (
                <button disabled className="btn btn-sm btn-info">
                  Rejected
                  <FaSkullCrossbones />
                </button>
              ) : (
                <button
                  onClick={() => handleMakeReject(item)}
                  className="btn btn-sm bg-red-700"
                >
                  Rejected
                  <FaSkullCrossbones />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequestedProperties;
