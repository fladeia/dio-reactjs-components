import { useContext } from "react";
import { GithubContext } from "../provider/githubProvider";

export const useGithub = () => {
  const { githubState, getUser, getUserRepos, getUserReposStarred } = useContext(GithubContext)
  
  return { githubState, getUser, getUserRepos, getUserReposStarred }
}