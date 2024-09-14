import { HeartFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'

export const FavoritesLink = () => {
  const favoritesLength = useAppSelector(
    (state) => state.favorites.items.length
  )

  return (
    <div style={{ position: 'relative' }}>
      {favoritesLength > 0 && (
        <span
          style={{
            position: 'absolute',
            width: 24,
            height: 24,
            borderRadius: '50%',
            background: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: -10,
            right: -15,
          }}
        >
          {favoritesLength}
        </span>
      )}

      <Link to='/favorites' style={{ display: 'flex', cursor: 'pointer' }}>
        <HeartFilled color='yellow' style={{ fontSize: 32, color: 'gold' }} />
      </Link>
    </div>
  )
}
