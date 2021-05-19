import { Anchor, ContainerCard, Image, CardBody, Title, List, Item } from './style'
import { useTheme } from '../../hooks/useTheme'

export function Card({ country }) {
   const { theme } = useTheme()
   return (
      <Anchor to={`detail/${country.name}`} theme={theme}>
         <ContainerCard theme={theme}>
            <Image src={country.flag} alt={country.name} />
            <CardBody>
               <Title theme={theme}>{country.name}</Title>
               <List>
                  <Item>
                     <strong>Poulation: </strong> {country.population}
                  </Item>
                  <Item>
                     <strong>Region: </strong> {country.region}
                  </Item>
                  <Item>
                     <strong>Capital: </strong> {country.capital}
                  </Item>
               </List>
            </CardBody>
         </ContainerCard>
      </Anchor>
   )
}
