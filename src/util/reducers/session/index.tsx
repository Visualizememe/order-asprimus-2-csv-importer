import actions from "../../actions";
import CONSTANTS from "../../constants";


export type SessionStore = {
    authentication: {
        token: null | string;
    };
    user: null | {
        name: string;
    };
};

export default function (state, action: any): SessionStore {
    console.log(`Reducer: ${ action.type } - ${ JSON.stringify(action) }`);
    
    // This means that we should return the initial value from the constants
    if (typeof state === "undefined") {
        return CONSTANTS.SESSION.initialState;
    }
    
    // Otherwise, we check what (session) action it was, and then determine the new state based on it
    switch (action.type) {
        case actions.session.SESSION_LOGIN: {
            console.log(`Logging in`);
            
            return {
                authentication: {
                    token: action.payload.token
                },
                user: {
                    name: "Martini"
                }
            };
        }
        
        default: {
            console.log("yes");
            
            return {
                authentication: {
                    token: null
                },
                user: null
            };
        }
    }
}
