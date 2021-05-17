import { Nav, NavFlex, Anchor } from './style'
import { ButtonDark } from '../ButtonDak'

export function Navbar() {
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
