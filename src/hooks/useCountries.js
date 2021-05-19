import { useEffect } from 'react'
import { actionCountryInit } from '../store/reducers/countryReducers'
import { useDispatch, useSelector } from 'react-redux'

export const useContries = () => {
   const dispatch = useDispatch()
   const countries = useSelector((state) => state.countries)
   useEffect(() => {
      dispatch(actionCountryInit())
   }, [dispatch])

   return {
      countries,
   }
}
