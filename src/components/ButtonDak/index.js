import styled from 'styled-components'
import { Moon } from 'react-feather'
import { useDispatch } from 'react-redux'
import { changeAction } from '../../store/reducers/themeReducers'

const Button = styled.button`
   border: none;
   outline: none;
   background: transparent;
   display: flex;
   align-items: center;
   gap: 10px;
   font-weight: 600;
   font-size: 14px;
   color: hsl(200, 15%, 8%);
   &:hover {
      cursor: pointer;
   }
`
export function ButtonDark() {
   const dispatch = useDispatch()
   return (
      <Button onClick={() => dispatch(changeAction())}>
         <Moon />
         Dark Mode
      </Button>
   )
}
