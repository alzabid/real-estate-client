import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useProperty = () => {
  const axiosSecure = useAxiosSecure();
  const { data: property = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/property");
      return res.data;
    },
  });

  return property;
};

export default useProperty;