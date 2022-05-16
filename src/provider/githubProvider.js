import { createContext, useState, useCallback } from 'react'
import { api } from '../services/api'

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: [],
})

export const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    hasUser: false,
    loading: false,
    user: {
      login: 'github',
      id: 9919,
      avatar_url: 'https://avatars.githubusercontent.com/u/9919?v=4',
      html_url: 'https://github.com/github',
      name: 'GitHub',
      public_repos: 0,
      public_gists: 0,
      followers: 0,
      following: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = (username) => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    api
      .get(`users/${username}`)
      .then(({ data }) => {
        setGithubState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            login: data.login,
            id: data.id,
            avatar_url: data.avatar_url,
            html_url: data.html_url,
            name: data.name,
            public_repos: data.public_repos,
            public_gists: data.public_gists,
            followers: data.followers,
            following: data.following,
          },
        }));
      })
      .finally(() => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };

  const getUserRepos = (username) => {
    api
      .get(`users/${username}/repos`)
      .then(({ data }) => {
        setGithubState((prevState) => ({
          ...prevState,
          repositories: data
        }));
      })
  };

  const getUserReposStarred = (username) => {
    api
      .get(`users/${username}/starred`)
      .then(({ data }) => {
        setGithubState((prevState) => ({
          ...prevState,
          starred: data
        }));
      })
  };

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepos: useCallback((username) => getUserRepos(username), []),
    getUserReposStarred: useCallback((username) => getUserReposStarred(username), []),
  }

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
}
