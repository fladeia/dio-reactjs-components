import { useGithub } from '../../hooks/githugHooks'
import * as C from './styles'

export const Profile = () => {
  const { githubState } = useGithub()

  return (
    <C.Wrapper>
        <img src={githubState.user.avatar_url} alt="user avater"></img>
        <h1>{githubState.user.name}</h1>
        <h3>{githubState.user.login}</h3>
        <div className='userNumbers'>
          <h4>Followers</h4>
          <span>{githubState.user.followers}</span>
          <h4>Followings</h4>
          <span>{githubState.user.following}</span>
          <h4>Gist</h4>
          <span>{githubState.user.public_gists}</span>
          <h4>Repo pública</h4>
          <span>{githubState.user.public_repos}</span>
        </div>
    </C.Wrapper>
  )
}