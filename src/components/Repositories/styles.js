import stylded from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

export const wrapperRepositories = stylded.div`
padding: 1rem;
`

export const TabStyle = stylded(Tab)``

export const TabsStyle = stylded(Tabs)``

export const TabListStyle = stylded(TabList)`

`

export const TabPanelStyle = stylded(TabPanel)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  cursor: pointer;
`
