import { api } from "../apiClient";
import type { ProjectListResponse } from "../types";

const PROJECT_BASE = "/api/projects";

export const projectService = {
  list: () =>
    api
      .get<{ data: ProjectListResponse[] }>(PROJECT_BASE)
      .then((response) => response.data),
};
