import { useQuery } from "@tanstack/react-query";
import { experienceService } from "../services/experience.service";

export function useExperience() {
  return useQuery({
    queryKey: ["experience"],
    queryFn: () => experienceService.list(),
    enabled: true,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
}
