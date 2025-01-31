import ReactDOM from 'react-dom/client'

import './index.css'
import { 
  createHashRouter,
  RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './app/store.ts' 

import { Home } from './Pages/Home/Home.tsx'
import { ProjectsPage } from './Pages/Projects/ProjetsPage.tsx'
import { About } from './Pages/About/About.tsx'
import GlobalStyle from './components/GlobalStyle/GlobalStyle.tsx'
import ProjectPage from './Pages/Project/ProjectPage.tsx'

const router = createHashRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/projects",
    element: <ProjectsPage/>,
  },
  {
    path: "/projects/:id",
    element: <ProjectPage/>
  },
  {
    path: "/about",
    element: <About/>
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
    <GlobalStyle/>
  </Provider>
)
