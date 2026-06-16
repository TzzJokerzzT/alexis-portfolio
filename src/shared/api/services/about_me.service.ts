import { api } from "../apiClient";
import type { AboutMeResponse } from "../types";

const ABOUT_ME_BASE = "/api/about-me";

export const aboutMeService = {
  list: () =>
    api
      .get<{ data: AboutMeResponse }>(ABOUT_ME_BASE)
      .then((response) => response.data),
};
