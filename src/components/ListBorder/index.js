import { Container, ItemBorder } from './style'
import { useTheme } from '../../hooks/useTheme'

export function ListBorder({ borders }) {
   const { theme } = useTheme()
   return (
      <Container>
         <strong>Border Countries: </strong>
         {borders.map((border) => (
            <ItemBorder key={border} theme={theme}>
               {border}
            </ItemBorder>
         ))}
      </Container>
   )
}
