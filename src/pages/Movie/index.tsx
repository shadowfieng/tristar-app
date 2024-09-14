import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Card, Descriptions, Space, Spin } from 'antd'
import Meta from 'antd/es/card/Meta'
import { useNavigate, useParams } from 'react-router-dom'
import { moviesApi } from '../../api/moviesApi'
import styles from './Movie.module.css'

const Movie = () => {
  const { movieId } = useParams()
  const navigate = useNavigate()

  const { data: movie, isFetching } = moviesApi.useGetMovieByIdQuery(
    movieId ?? ''
  )

  if (isFetching) return <Spin size='large' />
  if (!movie) return <div>No movie found!</div>

  return (
    <>
      <Button
        type='link'
        icon={<ArrowLeftOutlined />}
        iconPosition='start'
        style={{ marginBottom: '2rem' }}
        onClick={() => navigate(-1)}
      >
        Go back to search
      </Button>
      <Space className={styles.page} size='middle' align='start'>
        <Card
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

export default Movie
