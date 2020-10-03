import { SessionStore } from "../../reducers/session";


export const initialState: SessionStore = {
    authentication: {
        token: null
    },
    user: null
};
