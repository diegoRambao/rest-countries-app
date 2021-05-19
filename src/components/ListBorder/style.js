import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
   font-size: 0.875rem;
`

export const ItemBorder = styled.div`
   padding: 5px 20px;
   background: ${(props) => (props.theme === true ? 'hsl(209, 23%, 22%)' : '#fff')};
   color: ${(props) => (props.theme === true ? 'hsl(0, 0%, 98%)' : 'hsl(200, 15%, 8%)')};
   border: ${(props) => (props.theme === true ? 'none' : '1px solid #cecece')};
   border-radius: 5px;
`
