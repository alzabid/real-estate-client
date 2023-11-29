import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useUser = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: profile = [], refetch } = useQuery({
      queryKey: ["profile", user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/user?email=${user.email}`);
        return res.data;
      },
    });

    const [item] = profile;
    
    return [item, refetch];
};

export default useUser;