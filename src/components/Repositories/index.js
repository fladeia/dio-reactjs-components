import { useEffect } from 'react'
import { useGithub } from '../../hooks/githugHooks'
import { RepositoryItem } from '../RepositoryItem'
import * as C from './styles'

export const Repositories = () => {
  const { githubState, getUserRepos, getUserReposStarred } = useGithub()

  useEffect(() => {
      getUserRepos(githubState.user.login); // eslint-disable-next-line
      getUserReposStarred(githubState.user.login); // eslint-disable-next-line
  }, []);

  return (
    <C.wrapperRepositories selectedClassName='is-selected' selectedTabPanelClassName='is-selected'>
      <C.TabsStyle>
        <C.TabListStyle>
          <C.TabStyle>Repositories</C.TabStyle>
          <C.TabStyle>Starred</C.TabStyle>
        </C.TabListStyle>
        <C.TabPanelStyle>
            {githubState.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  repoLink={item.fullName}
                  fullName={item.fullName}
                />
              ))}
        </C.TabPanelStyle>
        <C.TabPanelStyle>
          {githubState.starred.map((item) => (
            <RepositoryItem
              key={item.id}
              name={item.name}
              repoLink={item.fullName}
              fullName={item.fullName}
                />
          ))}
        </C.TabPanelStyle>
      </C.TabsStyle>
    </C.wrapperRepositories>
  )
}