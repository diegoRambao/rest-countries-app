import { Card } from '../Card'
import { ContainerList } from './style'
import { useContries } from '../../hooks/useCountries'

export function ListOfContries() {
   const { countries } = useContries()
   return (
      <div className="container">
         <ContainerList>
            {countries.map((country) => (
               <Card country={country} key={country.name} />
            ))}
         </ContainerList>
      </div>
   )
}
