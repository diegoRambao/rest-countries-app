import { getAll } from '../../services/country.service'

const ACTION_TYPES = {
   init: '@countries/init',
}

export const countryReducer = (state = [], action) => {
   if (action.type === ACTION_TYPES.init) {
      return action.payload
   }
   return state
}

export const actionCountryInit = () => {
   return async (dispatch) => {
      const countries = await getAll()
      dispatch({
         type: ACTION_TYPES.init,
         payload: countries,
      })
   }
}
