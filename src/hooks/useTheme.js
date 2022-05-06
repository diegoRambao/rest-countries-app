import { useSelector, useDispatch } from 'react-redux'
import { changeAction } from '../store/reducers/themeReducers'

export const useTheme = () => {
   const dispatch = useDispatch()
   const theme = useSelector((state) => state.theme)

   const changeTheme = () => {
      dispatch(changeAction(theme))
      window.localStorage.setItem('theme', !theme)
   }

   return {
      theme: theme ? 1 : undefined,
      changeTheme,
   }
}
