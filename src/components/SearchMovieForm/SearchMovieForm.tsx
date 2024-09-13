import { Button, Form, FormProps, Input } from 'antd'
import styles from './SearchMovieForm.module.css'

type FieldType = {
  movie?: string
}

type Props = {
  onSubmit: (value: FieldType) => void
}

export const SearchMovieForm = ({ onSubmit }: Props) => {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    onSubmit(values)
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
    >
      <Form.Item<FieldType>
        label='Movie'
        name='movie'
        rules={[{ required: true, message: 'Please enter movie name!' }]}
      >
        <Input />
      </Form.Item>
      <Button>Search</Button>
    </Form>
  )
}
