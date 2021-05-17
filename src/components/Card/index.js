import { Anchor, ContainerCard, Image, CardBody, Title, List, Item } from './style'

export function Card() {
   return (
      <Anchor to="detail">
         <ContainerCard>
            <Image src="https://restcountries.eu/data/bra.svg" />
            <CardBody>
               <Title>Brazil</Title>
               <List>
                  <Item>
                     <strong>Poulation: </strong> 206.135.893
                  </Item>
                  <Item>
                     <strong>Region: </strong> Americas
                  </Item>
                  <Item>
                     <strong>Capital: </strong> Brasilia
                  </Item>
               </List>
            </CardBody>
         </ContainerCard>
      </Anchor>
   )
}
