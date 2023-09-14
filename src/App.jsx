import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { SERVER_URL } from './config'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/projects'
import ProjectsLayout from './layout/projects-layout'
import Project from './pages/project'
const client = new ApolloClient({
  uri: SERVER_URL,
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProjectsLayout />} >
            <Route index element={<Projects />} />
            <Route path=':projectId' element={<Project />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App