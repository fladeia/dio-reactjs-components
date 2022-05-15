import { Layout } from "./components/Layout"
import { Profile } from './components/Profile'
import { Repositories } from "./components/Repositories"
import { GlobalStyle } from "./global/resetCSS"
import { GithubProvider } from './provider/githubProvider'
 
export const App = () => {
  return (
    <main>
      <GithubProvider>
        <GlobalStyle />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>
  )
}