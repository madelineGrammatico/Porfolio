import ReactDOM from 'react-dom/client'

import './index.css'
import { 
  createBrowserRouter,
  RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './app/store.ts' 

import { Home } from './Pages/Home/Home.tsx'
import { Projects } from './Pages/Projects/Projets.tsx'
import { About } from './Pages/About/About.tsx'
import GlobalStyle from './components/GlobalStyle/GlobalStyle.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Projects",
    element: <Projects/>
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
