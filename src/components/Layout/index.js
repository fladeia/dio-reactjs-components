import { useGithub } from '../../hooks/githugHooks'
import { Header } from '../Header'
import * as C from './styles'

export const Layout = ({ children }) => {
  const { githubState } = useGithub()

  return (
    <C.WrapperLayout>
      <Header />
      {/* {children} */}
      {githubState.loading ? <p>Loading</p> : <>{children}</>}
    </C.WrapperLayout>
  )
}