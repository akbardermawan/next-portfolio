export interface ProjectType {
  id: string;
  name: string;
  image?: string;
  tecnology: string;
  description: string;
  url_github: string;
  url_project: string;
  createdAt: string;
}

export interface ProjectResponse {
  projects: ProjectType[];
}
