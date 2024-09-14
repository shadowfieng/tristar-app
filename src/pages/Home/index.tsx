import { Space } from 'antd'
import { MovieList, SearchMovieForm } from '../../components'

const Home = () => {
  return (
    <Space direction='vertical'>
      <SearchMovieForm />
      <MovieList />
    </Space>
  )
}

export default Home
