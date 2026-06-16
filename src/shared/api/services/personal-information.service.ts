import { api } from "../apiClient";
import type { PersonalInformationListResponse } from "../types";

const PERSONAL_INFORMATION_BASE = "/api/personal-information";

export const personalInformationService = {
  list: () =>
    api
      .get<{ data: PersonalInformationListResponse }>(PERSONAL_INFORMATION_BASE)
      .then((response) => response.data),
};
