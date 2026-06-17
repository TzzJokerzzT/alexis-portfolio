export interface IntroductionListResponse {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface AboutMe {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface AboutMeResponse {
  _id: string;
  title: string;
  description: string;
  about: AboutMe[];
  createdAt: string;
  updatedAt: string;
}

export interface ProjectListResponse {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveUrl: string;
  repoUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export type ExperienceType = "work" | "freelance" | "education";
export type LocationType = "hybrid" | "remote" | "office";

export interface ExperienceListResponse {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  techStack: string[];
  type: ExperienceType;
  location: LocationType;
  createdAt: string;
  updatedAt: string;
}

export interface SkillListResponse {
  id: string;
  name: string;
  category: string;
  icon?: string;
}

export interface QuoteListResponse {
  id: string;
  author: string;
  description: string;
}

interface Basic {
  name: string;
  label: string;
  image?: string;
  email: string;
  summary: string;
}

interface Social {
  github: string;
  linkedin: string;
  twitter: string;
}

interface Contact {
  id: string;
  name: string;
  url: string;
  icon?: string;
}

interface PersonalExperience {
  id: string;
  title: string;
  description: string;
}

export interface PersonalInformationListResponse {
  _id?: string;
  basic: Basic;
  social: Social;
  personalExperience: PersonalExperience;
  contact: Contact[];
}
