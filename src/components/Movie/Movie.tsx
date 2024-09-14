import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'

type Props = {
  title: string
  posterImg: string
  description: string
}

export const Movie = ({ title, description, posterImg }: Props) => {
  return (
    <Card
      hoverable
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
      }}
      cover={<img alt={title} src={posterImg} />}
    >
      <Meta title={title} description={description} />
    </Card>
  )
}
