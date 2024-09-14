import { Col, Row, Space } from 'antd'
import { Link } from 'react-router-dom'
import { GoBackButton } from '../../components'
import { Movie } from '../../components/Movie'
import { useAppSelector } from '../../store/hooks'

const Favorites = () => {
  const favorites = useAppSelector((state) => state.favorites.items)

  if (favorites.length === 0) return <p>No favorites!</p>

  return (
    <Space direction='vertical'>
      <GoBackButton />
      <Row gutter={[16, 16]}>
        {favorites.map((movie) => (
          <Col key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <Movie
                id={movie.id}
                title={movie.title}
                description={movie.description}
                posterImg={movie.posterImg}
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Space>
  )
}

export default Favorites
