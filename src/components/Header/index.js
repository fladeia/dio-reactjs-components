import * as C from './styles'
import {useGithub} from '../../hooks/githugHooks'
import { useState } from 'react'

export const Header = () => {
  const [usernameForSearch, setUsernameForSearch] = useState();
  const {getUser} = useGithub()

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <C.Wrapper>
      <input type='text' onChange={(event) => setUsernameForSearch(event.target.value)}></input>
      <button onClick={submitGetUser}>Buscar</button>
    </C.Wrapper>
  )
}