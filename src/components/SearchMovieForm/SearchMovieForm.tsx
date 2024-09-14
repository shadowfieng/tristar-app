import { Button, Form, FormProps, Input } from 'antd'
import styles from './SearchMovieForm.module.css'
import { moviesApi } from '../../api'
import { useSearchParams } from 'react-router-dom'

type FieldType = {
  movie: string
}

export const SearchMovieForm = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchValue = searchParams.get('s') ?? ''
  const [searchMovieMyName, { isLoading }] =
    moviesApi.useLazySearchMovieByNameQuery()

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    searchMovieMyName(values.movie)
    setSearchParams(new URLSearchParams({ s: values.movie }))
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      className={styles.form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{ movie: searchValue }}
    >
      <Form.Item<FieldType>
        label='Movie'
        name='movie'
        rules={[{ required: true, message: 'Please enter movie name!' }]}
      >
        <Input />
      </Form.Item>
      <Button loading={isLoading} htmlType='submit'>
        Search
      </Button>
    </Form>
  )
}
