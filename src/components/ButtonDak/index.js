import styled from 'styled-components'
import { Moon } from 'react-feather'
import { useTheme } from '../../hooks/useTheme'

const Button = styled.button`
   border: none;
   outline: none;
   background: transparent;
   display: flex;
   align-items: center;
   gap: 10px;
   font-weight: 600;
   font-size: 14px;
   color: ${(props) => (props.theme === true ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
   &:hover {
      cursor: pointer;
   }
`
export function ButtonDark() {
   const { changeTheme, theme } = useTheme()
   return (
      <Button onClick={() => changeTheme()} theme={theme}>
         <Moon />
         Dark Mode
      </Button>
   )
}
