import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

export const wrapperRepositories = styled.div`
`

export const TabListStyle = styled(TabList)`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

export const TabStyle = styled(Tab)`
    padding: 8px;
    border: 1px solid #30363d;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    background-color: #161b22;
    color: #8b949e;
    cursor: pointer;
    margin-bottom: 1rem;

    &:hover {
    background-color: #30363d;
    border: 1px solid #8b949e;
  }
`

export const TabsStyle = styled(Tabs)`
`

export const TabPanelStyle = styled(TabPanel)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  cursor: pointer;
`
