import styled from 'styled-components'

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 1rem;

  input, button {
    padding: 8px;
    border: 1px solid #30363d;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    background-color: #161b22;
    color: #8b949e;
  }
  
  input {
    margin-right: 8px;
  }
  
  button:hover {
    background-color: #30363d;
    border: 1px solid #8b949e;
  }
`
