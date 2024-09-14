import { Card, Col, Row, Space } from 'antd'
import Meta from 'antd/es/card/Meta'
import { useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'
import { moviesApi } from '../../api/moviesApi'
import { SearchMovieForm } from '../../components'

export const Home = () => {
  const [searchParams] = useSearchParams()
  const searchValue = searchParams.get('s') ?? ''
  const { data: moviesData } = useSelector(
    moviesApi.endpoints.searchMovieByName.select(searchValue)
  )

  return (
    <Space direction='vertical'>
      <SearchMovieForm />

      <Row gutter={[16, 16]}>
        {moviesData?.Search.map((movie) => (
          <Col key={movie.imdbID} span={4}>
            <Link to={`/movie/${movie.imdbID}`}>
              <Card
                hoverable
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: '100%',
                  height: '100%',
                }}
                cover={<img alt={movie.Title} src={movie.Poster} />}
              >
                <Meta title={movie.Title} description={movie.Year} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Space>
  )
}
