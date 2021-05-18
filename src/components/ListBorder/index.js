import { Container, ItemBorder } from './style'

export function ListBorder({ borders }) {
   return (
      <Container>
         <strong>Border Countries: </strong>
         {borders.map((border) => (
            <ItemBorder key={border}>{border}</ItemBorder>
         ))}
      </Container>
   )
}
