import { Repository } from "@/pages/repositories";
import axios from "axios";

export interface DeveloperProps {
  login: string;
  avatar_url: string;
  gravatar_id: string;
  html_url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}

export async function getRepositories(
  username: string,
  page: number = 1,
  perPage: number = 10
) {
  return new Promise<Repository[]>(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`,
        {
          params: {
            per_page: perPage,
            page: page,
          },
        }
      );

      resolve(response.data as Repository[]);
    } catch (err) {
      reject(err);
    }
  });
}

export async function getDeveloperInfo(username: string) {
  return new Promise<DeveloperProps[]>(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );

      resolve(response.data as DeveloperProps[]);
    } catch (err) {
      reject(err);
    }
  });
}
