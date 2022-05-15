import * as C from './styles'

export const RepositoryItem = ({ name, fullName, repoLink }) => {
  return (
    <C.Wrapper>
      <h2>{name}</h2>
      <h3>{fullName}</h3>
      <span>{repoLink}</span>
    </C.Wrapper>
  )
}
