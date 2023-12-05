import ReactDOM from 'react-dom/client'

import './index.css'
import { 
  createBrowserRouter,
  RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './app/store.ts' 

import { Home } from './Pages/Home/Home.tsx'
import { ProjectsPage } from './Pages/Projects/ProjetsPage.tsx'
import { About } from './Pages/About/About.tsx'
import GlobalStyle from './components/GlobalStyle/GlobalStyle.tsx'
import ProjectPage from './Pages/Project/ProjectPage.tsx'

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <Home/>,
  },
  {
    path: "/portfolio/projects",
    element: <ProjectsPage/>,
  },
  {
    path: "/portfolio/projects/:id",
    element: <ProjectPage/>
  },
  {
    path: "/portfolio/about",
    element: <About/>
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
    <GlobalStyle/>
  </Provider>
)
