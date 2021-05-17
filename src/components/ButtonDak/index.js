import styled from 'styled-components'
import { Moon } from 'react-feather'

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
   return (
      <Button>
         <Moon />
         Dark Mode
      </Button>
   )
}
