import { useGithub } from '../../hooks/githugHooks'
import { Header } from '../Header'
import { Profile } from '../../components/Profile'
import { Repositories } from "../../components/Repositories"
import * as C from './styles'

export const Layout = () => {
  const { githubState } = useGithub()

  return (
    <C.Layout>
      <C.LayoutContent>
        {githubState.loading ? <p>Loading</p> : 
        <>
          <Header />
          <Profile />
          <Repositories />
        </>}
      </C.LayoutContent>
    </C.Layout>
  )
}
