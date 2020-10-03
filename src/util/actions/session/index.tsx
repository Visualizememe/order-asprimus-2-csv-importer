import { ReduxDispatcher } from "../../interfaces";


export const SESSION_LOGIN = "SESSION_LOGIN";
export const SESSION_LOGOUT = "SESSION_LOGOUT";

export const sessionLogin = (token: string) => (dispatch: ReduxDispatcher<any>) => dispatch({
    type: SESSION_LOGIN,
    payload: token
});

export const sessionLogout = () => (dispatch: ReduxDispatcher<any>) => dispatch({
    type: SESSION_LOGOUT,
    payload: {}
})
