import { api } from "../apiClient";
import type { SkillListResponse } from "../types";

const SKILLS_BASE = "/api/skills";

export const skillsService = {
  list: () =>
    api
      .get<{ data: SkillListResponse[] }>(SKILLS_BASE)
      .then((response) => response.data),
};
