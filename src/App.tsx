import { Layout, Spin } from 'antd'
import { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FavoritesLink } from './components'

export const App = () => {
  return (
    <Layout>
      <Layout.Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'grey',
          color: 'white',
        }}
      >
        <Link to='/' style={{ color: 'white' }}>
          Tristar
        </Link>

        <FavoritesLink />
      </Layout.Header>
      <Layout.Content
        style={{
          padding: '2rem',
          height: 'calc(100dvh - 64px)',
          overflowY: 'auto',
        }}
      >
        <Suspense fallback={<Spin />}>
          <Outlet />
        </Suspense>
      </Layout.Content>
    </Layout>
  )
}
