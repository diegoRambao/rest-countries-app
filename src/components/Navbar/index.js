import { Nav, NavFlex, Anchor } from './style'
import { ButtonDark } from '../ButtonDak'
import { useTheme } from '../../hooks/useTheme'

export function Navbar() {
   const { theme } = useTheme()
   return (
      <Nav theme={theme}>
         <div className="container">
            <NavFlex>
               <Anchor to="/" theme={theme}>
                  Where in the world?
               </Anchor>
               <ButtonDark />
            </NavFlex>
         </div>
      </Nav>
   )
}
