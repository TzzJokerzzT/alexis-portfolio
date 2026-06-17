import { useQuery } from "@tanstack/react-query";
import { skillsService } from "../services/skills.service";

export function useSkills() {
  return useQuery({
    queryKey: ["skills"],
    queryFn: () => skillsService.list(),
    enabled: true,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
}
