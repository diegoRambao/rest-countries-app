import { Card } from '../Card'
import { ContainerList } from './style'

export function ListOfContries() {
   return (
      <div className="container">
         <ContainerList>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
               <Card />
            ))}
         </ContainerList>
      </div>
   )
}
