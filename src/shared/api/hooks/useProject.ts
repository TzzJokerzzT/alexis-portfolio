import { useQuery } from "@tanstack/react-query";
import { projectService } from "../services/project.sevice";

export function useProject() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: () => projectService.list(),
    enabled: true,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
}
