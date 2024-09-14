import { Layout, Spin } from 'antd'
import { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'

export const App = () => {
  return (
    <Layout>
      <Layout.Header style={{ backgroundColor: 'grey', color: 'white' }}>
        <Link to='/' style={{ color: 'black' }}>
          Tristar
        </Link>
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
