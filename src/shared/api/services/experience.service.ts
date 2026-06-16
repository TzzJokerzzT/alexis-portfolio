import { api } from "../apiClient";
import type { ExperienceListResponse } from "../types";

const EXPERIENCE_BASE = "/api/experience";

export const experienceService = {
  list: () =>
    api
      .get<{ data: ExperienceListResponse[] }>(EXPERIENCE_BASE)
      .then((response) => response.data),
};
