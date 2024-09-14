import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

export const GoBackButton = () => {
  const navigate = useNavigate()

  return (
    <Button
      type='link'
      icon={<ArrowLeftOutlined />}
      iconPosition='start'
      style={{ marginBottom: '2rem' }}
      onClick={() => navigate(-1)}
    >
      Go back
    </Button>
  )
}
