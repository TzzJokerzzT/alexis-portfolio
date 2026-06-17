import { api } from "../apiClient";
import type { QuoteListResponse } from "../types";

const QUOTES_BASE = "/api/quotes";

export const quotesService = {
  list: () =>
    api
      .get<{ data: QuoteListResponse[] }>(QUOTES_BASE)
      .then((response) => response.data),
};
