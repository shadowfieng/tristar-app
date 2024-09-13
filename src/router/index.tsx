import { createBrowserRouter } from 'react-router-dom'
import { Home, Movie } from '../pages'
import { App } from '../App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: 'Page not found',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <Movie />,
        path: '/movie/:id',
      },
    ],
  },
])

export { router }
