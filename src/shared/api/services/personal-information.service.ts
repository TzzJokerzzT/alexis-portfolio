import { api } from "../apiClient";
import type { IntroductionListResponse } from "../types";

const PERSONAL_INFORMATION_BASE = "/api/personal-information";

export const personalInformationService = {
  list: () =>
    api
      .get<{ data: IntroductionListResponse }>(PERSONAL_INFORMATION_BASE)
      .then((response) => response.data),
};
