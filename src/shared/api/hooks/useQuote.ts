import { useQuery } from "@tanstack/react-query";
import { quotesService } from "../services/quotes.service";

export function useQuotes() {
  return useQuery({
    queryKey: ["quotes"],
    queryFn: () => quotesService.list(),
    enabled: true,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
}
