import { Anchor, ContainerCard, Image, CardBody, Title, List, Item } from './style'

export function Card({ country }) {
   return (
      <Anchor to={`detail/${country.name}`}>
         <ContainerCard>
            <Image src={country.flag} alt={country.name} />
            <CardBody>
               <Title>{country.name}</Title>
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
