import { Container, Image, ContainerDescription, ContainerHeader, Anchor, ListInfo } from './style'
import { ArrowLeft } from 'react-feather'
import { ListBorder } from '../../components/ListBorder'
import { useParams } from 'react-router'
import { useContries } from '../../hooks/useCountries'
import { useTheme } from '../../hooks/useTheme'

export function DetailCountryPage() {
   const { theme } = useTheme()
   const { name } = useParams()
   const { countries } = useContries()
   const country = countries.find((country) => country.name === name)
   return (
      <div className="container">
         <ContainerHeader>
            <Anchor to="/" theme={theme}>
               <ArrowLeft />
               Back
            </Anchor>
         </ContainerHeader>

         <Container theme={theme}>
            <Image src={country.flag} alt={country.name} />
            <ContainerDescription>
               <h2>{country.name}</h2>
               <ListInfo>
                  <div>
                     <ul>
                        <li>
                           <strong>Native Name: </strong> {country.nativeName}
                        </li>
                        <li>
                           <strong>Poulation: </strong> {country.population}
                        </li>
                        <li>
                           <strong>Region: </strong> {country.region}
                        </li>
                        <li>
                           <strong>SubRegion </strong> {country.subregion}
                        </li>
                        <li>
                           <strong>Capital </strong> {country.capital}
                        </li>
                     </ul>
                  </div>
                  <div>
                     <ul>
                        <li>
                           <strong>Top Level Domain: </strong> {country.topLevelDomain}
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
               <ListBorder borders={country.borders} />
            </ContainerDescription>
         </Container>
      </div>
   )
}
