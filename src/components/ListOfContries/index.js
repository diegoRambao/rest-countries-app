import { useEffect } from 'react'
import { Card } from '../Card'
import { ContainerList } from './style'
import { actionCountryInit } from '../../store/reducers/countryReducers'
import { useDispatch, useSelector } from 'react-redux'

export function ListOfContries() {
   const dispatch = useDispatch()
   const countries = useSelector((state) => state.countries)
   useEffect(() => {
      dispatch(actionCountryInit())
   }, [dispatch])
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
