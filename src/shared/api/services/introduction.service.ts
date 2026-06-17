import { api } from "../apiClient";
import type { IntroductionListResponse } from "../types";

const INTRODUCTION_BASE = "/api/introduction";

export const introductionService = {
  list: () =>
    api
      .get<{ data: IntroductionListResponse }>(INTRODUCTION_BASE)
      .then((response) => response.data),
};
