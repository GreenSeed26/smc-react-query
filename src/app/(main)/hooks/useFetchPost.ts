import { getPosts } from "@/lib/actions";
import { useQuery } from "@tanstack/react-query";

export const useFetchPost = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};
