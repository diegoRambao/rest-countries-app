import { Nav, NavFlex, Anchor } from './style'
import { ButtonDark } from '../ButtonDak'
import { useSelector } from 'react-redux'

export function Navbar() {
   const theme = useSelector((state) => state.theme)
   return (
      <Nav>
         <div className="container">
            <NavFlex>
               <Anchor to="/">Where in the world?</Anchor>
               <ButtonDark />
            </NavFlex>
         </div>
      </Nav>
   )
}
