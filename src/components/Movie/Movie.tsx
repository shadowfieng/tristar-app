import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { favoritesSlice } from '../../store/slices'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { CSSProperties } from 'react'

type Props = {
  title: string
  posterImg: string
  description: string
  id: string
}

const iconStyles: CSSProperties = {
  fontSize: 24,
  color: 'gold',
}

export const Movie = ({ title, description, posterImg, id }: Props) => {
  const dispatch = useAppDispatch()
  const allFavorites = useAppSelector((state) => state.favorites.items)
  const isFavorite = allFavorites.find((favMovie) => favMovie.id === id)

  const handleAddToFavorites = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.preventDefault()
    dispatch(
      favoritesSlice.actions.addToFavorites({
        title,
        description,
        posterImg,
        id,
      })
    )
  }

  const handleRemoveFromFavorites = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.preventDefault()
    dispatch(
      favoritesSlice.actions.removeFromFavorites({
        id,
      })
    )
  }

  return (
    <Card
      hoverable
      actions={[
        isFavorite ? (
          <HeartFilled style={iconStyles} onClick={handleRemoveFromFavorites} />
        ) : (
          <HeartOutlined style={iconStyles} onClick={handleAddToFavorites} />
        ),
      ]}
      style={{
        display: 'flex',
        position: 'relative',
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
