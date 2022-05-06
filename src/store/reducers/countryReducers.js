import { getAll } from '../../services/country.service'

const ACTION_TYPES = {
   init: '@countries/init',
}

export const countryReducer = (state = [], action) =>
    action.type === ACTION_TYPES.init ?  action.payload : state

export const actionCountryInit = () => {
   return async (dispatch) => {
      const countries = await getAll()
      dispatch({
         type: ACTION_TYPES.init,
         payload: countries,
      })
   }
}
