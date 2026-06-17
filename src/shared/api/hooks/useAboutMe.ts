import { useQuery } from "@tanstack/react-query";
import { aboutMeService } from "../services/about_me.service";

export function useAboutMe() {
  return useQuery({
    queryKey: ["about-me"],
    queryFn: () => aboutMeService.list(),
    enabled: true,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
}
