const initialState = window.localStorage.getItem('theme') === 'true' ? true : false

export const changeAction = (theme) => {
   return {
      type: '@theme/change',
      payload: theme,
   }
}

export function themeReducer(state = initialState, action) {
   if (action.type === '@theme/change') {
      return !action.payload
   }
   return state
}
