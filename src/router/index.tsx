/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom'
import { App } from '../App'
import { lazy } from 'react'

// Lazily loaded pages
const Home = lazy(() => import('../pages/Home'))
const Movie = lazy(() => import('../pages/Movie'))
const Favorites = lazy(() => import('../pages/Favorites'))

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
        element: <Favorites />,
        path: '/favorites',
      },
      {
        element: <Movie />,
        path: '/movie/:movieId',
      },
    ],
  },
])

export { router }
