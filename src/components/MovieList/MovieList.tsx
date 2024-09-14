import { Col, Row, Spin } from 'antd'
import { Link, useSearchParams } from 'react-router-dom'
import { moviesApi } from '../../api'
import { Movie } from '../Movie'

export const MovieList = () => {
  const [searchParams] = useSearchParams()
  const searchValue = searchParams.get('s') ?? ''
  const { data: moviesData, isFetching } =
    moviesApi.useSearchMovieByNameQuery(searchValue)

  if (isFetching) return <Spin size='large' />
  if (moviesData?.Response === 'False') return <p>No movies found!</p>

  return (
    <Row gutter={[16, 16]}>
      {moviesData?.Search.map((movie) => (
        <Col key={movie.imdbID} span={4}>
          <Link to={`/movie/${movie.imdbID}`}>
            <Movie
              title={movie.Title}
              description={movie.Year}
              posterImg={movie.Poster}
            />
          </Link>
        </Col>
      ))}
    </Row>
  )
}
