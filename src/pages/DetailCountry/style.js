import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContainerHeader = styled.div`
   margin-top: 50px;
`

export const Anchor = styled(Link)`
   box-shadow: 0px 0px 18px -4px rgba(0, 0, 0, 0.1);
   border: none;
   outline: none;
   background: ${(props) => (props.theme === true ? 'hsl(209, 23%, 22%)' : '#fff')};
   border-radius: 5px;
   font-size: 0.875em;
   display: flex;
   align-items: center;
   gap: 10px;
   padding: 5px 20px;
   width: fit-content;
   text-decoration: none;
   color: ${(props) => (props.theme === true ? 'hsl(0, 0%, 98%)' : 'hsl(200, 15%, 8%)')}; ;
`

export const Container = styled.div`
   color: ${(props) => (props.theme === true ? 'hsl(0, 0%, 98%)' : 'hsl(200, 15%, 8%)')};
   display: flex;
   margin-top: 70px;
   gap: 60px;
   @media (max-width: 700px) {
      flex-direction: column;
   }
`

export const Image = styled.img`
   width: 50%;
   @media (max-width: 700px) {
      width: 100%;
   }
`

export const ContainerDescription = styled.div`
   width: 100%;
`

export const ListInfo = styled.div`
   display: flex;
   font-size: 0.875em;
   justify-content: space-between;
   margin-bottom: 30px;

   @media (max-width: 700px) {
      flex-direction: column;
   }

   ul {
      padding-left: 0;
      list-style: none;
      li {
         margin-bottom: 10px;
      }
   }
`
