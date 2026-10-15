import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Layout from './components/Layout.jsx'
import Landing from './pages/Landing.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import { sections } from './sections.js'

// A data router (rather than <BrowserRouter>) is needed for links to run
// view transitions.
const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  {
    element: <Layout />,
    children: [
      { path: '/home', element: <Home /> },
      ...sections.map(({ path, Page }) => ({ path, element: <Page /> })),
      { path: '/contact', element: <Contact /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
