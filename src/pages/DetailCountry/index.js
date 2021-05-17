import { Container, Image, ContainerDescription, ContainerHeader, Anchor, ListInfo } from './style'
import { ArrowLeft } from 'react-feather'
import { ListBorder } from '../../components/ListBorder'

export function DetailCountryPage() {
   return (
      <div className="container">
         <ContainerHeader>
            <Anchor to="/">
               <ArrowLeft />
               Back
            </Anchor>
         </ContainerHeader>

         <Container>
            <Image src="https://restcountries.eu/data/bra.svg" />
            <ContainerDescription>
               <h2>Brazil</h2>
               <ListInfo>
                  <div>
                     <ul>
                        <li>
                           <strong>Native Name: </strong>dkjsk
                        </li>
                        <li>
                           <strong>Poulation: </strong>dkjsk
                        </li>
                        <li>
                           <strong>Region: </strong>dkjsk
                        </li>
                        <li>
                           <strong>SubRegion </strong>dkjsk
                        </li>
                        <li>
                           <strong>Capital </strong>dkjsk
                        </li>
                     </ul>
                  </div>
                  <div>
                     <ul>
                        <li>
                           <strong>Top Level Domain: </strong>dkjsk
                        </li>
                        <li>
                           <strong>Currencies: </strong>dkjsk
                        </li>
                        <li>
                           <strong>Languages </strong>dkjsk
                        </li>
                     </ul>
                  </div>
               </ListInfo>
               <ListBorder />
            </ContainerDescription>
         </Container>
      </div>
   )
}
