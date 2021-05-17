import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Anchor = styled(Link)`
   text-decoration: none;
   color: hsl(200, 15%, 8%);
`

export const ContainerCard = styled.article`
   box-shadow: 4px 13px 18px -11px rgba(0, 0, 0, 0.1);
   border-radius: 5px;
   border: 1px solid #f5f5f5;
`

export const Image = styled.img`
   width: 100%;
   border-top-left-radius: 5px;
   border-top-right-radius: 5px;
`

export const CardBody = styled.div`
   padding: 20px;
`

export const Title = styled.h3`
   margin-top: 0;
   color: hsl(200, 15%, 8%);
`

export const List = styled.ul`
   list-style: none;
   padding-left: 0;
   font-size: 14px;
`

export const Item = styled.li``
