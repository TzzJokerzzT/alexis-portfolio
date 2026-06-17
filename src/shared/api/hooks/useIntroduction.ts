import { useQuery } from "@tanstack/react-query";
import { introductionService } from "../services/introduction.service";

export function useIntroduction() {
  return useQuery({
    queryKey: ["introduction"],
    queryFn: () => introductionService.list(),
    enabled: true,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
}
