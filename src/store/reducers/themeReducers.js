const initialState = false

export const changeAction = () => {
   return {
      type: '@theme/change',
   }
}

export function themeReducer(state = initialState, action) {
   if (action.type === '@theme/change') {
      return !state
   }
   return state
}
