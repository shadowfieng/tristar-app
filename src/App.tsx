import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

export const App = () => {
  return (
    <Layout>
      <Layout.Header style={{ backgroundColor: 'grey', color: 'white' }}>
        Tristar
      </Layout.Header>
      <Layout.Content style={{ padding: '2rem' }}>
        <Outlet />
      </Layout.Content>
    </Layout>
  )
}
