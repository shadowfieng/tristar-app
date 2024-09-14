import { Button, Card, Descriptions, Space } from 'antd'
import Meta from 'antd/es/card/Meta'
import { useNavigate, useParams } from 'react-router-dom'
import { moviesApi } from '../../api/moviesApi'

export const Movie = () => {
  const { movieId } = useParams()
  const navigate = useNavigate()

  const { data: movie } = moviesApi.useGetMovieByIdQuery(movieId ?? '')

  if (!movie) return <div>No movie found!</div>

  return (
    <>
      <Button
        type='link'
        style={{ marginBottom: '2rem' }}
        onClick={() => navigate(-1)}
      >
        Go home
      </Button>
      <Space size='middle' align='start'>
        <Card
          hoverable
          style={{ width: 340 }}
          cover={
            <img
              height={400}
              alt={movie.Title}
              src={movie.Poster}
              style={{ objectFit: 'cover' }}
            />
          }
        >
          <Meta title={movie.Title} description={movie.Plot} />
        </Card>
        <Descriptions title='Description'>
          <Descriptions.Item label='Genre'>{movie.Genre}</Descriptions.Item>
          <Descriptions.Item label='Released'>
            {movie.Released}
          </Descriptions.Item>
          <Descriptions.Item label='Runtime'>{movie.Runtime}</Descriptions.Item>
          <Descriptions.Item label='Director'>
            {movie.Director}
          </Descriptions.Item>
          <Descriptions.Item label='Actors'>{movie.Actors}</Descriptions.Item>
          <Descriptions.Item label='Awards'>{movie.Awards}</Descriptions.Item>
          <Descriptions.Item label='Language'>
            {movie.Language}
          </Descriptions.Item>
          <Descriptions.Item label='Country'>{movie.Country}</Descriptions.Item>
          <Descriptions.Item label='Metascore'>
            {movie.Metascore}
          </Descriptions.Item>
          <Descriptions.Item label='IMDB Rating'>
            {movie.imdbRating}
          </Descriptions.Item>
          <Descriptions.Item label='IMDB Votes'>
            {movie.imdbVotes}
          </Descriptions.Item>
          <Descriptions.Item label='Box Office'>
            {movie.BoxOffice}
          </Descriptions.Item>
        </Descriptions>
      </Space>
    </>
  )
}
