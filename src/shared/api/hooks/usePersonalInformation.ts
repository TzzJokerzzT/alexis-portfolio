import { useQuery } from "@tanstack/react-query";
import { personalInformationService } from "../services/personal-information.service";

export function usePersonalInformation() {
  return useQuery({
    queryKey: ["personal-information"],
    queryFn: () => personalInformationService.list(),
    enabled: true,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
}
