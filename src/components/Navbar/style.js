import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
   padding: 20px 0;
   box-shadow: 0px 9px 15px -11px rgba(0, 0, 0, 0.1);
   border-top: #f8f8f8;
   background: ${(props) => (props.theme === true ? 'hsl(209, 23%, 22%)' : '#fff')};
`

export const NavFlex = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`

export const Anchor = styled(Link)`
   color: ${(props) => (props.theme === true ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)')};
   font-weight: 800;
   font-size: 1.4em;
   text-decoration: none;
`
