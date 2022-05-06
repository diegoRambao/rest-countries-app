const initialState =
    window.localStorage.getItem("theme") === "true";

export const changeAction = (theme) => ({
    type: "@theme/change",
    payload: theme,
});

export const themeReducer = (state = initialState, action) =>
    action.type === "@theme/change" ? !action.payload : state;
