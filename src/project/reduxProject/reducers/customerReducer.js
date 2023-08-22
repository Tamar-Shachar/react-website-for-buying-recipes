const initialState = {};
export default function customerReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN":
            let keyLogin = action.payload.lastName + " " + action.payload.firstName;
            let email = localStorage.getItem(keyLogin);
            state = { firstName: action.payload.firstName, lastName: action.payload.lastName, email: email };
            return state;
        case "LOGOUT":
            if (state.firstName) {
                let key1Logout = state.firstName + " " + state.lastName;
                let key2Logout = state.lastName + " " + state.firstName;
                localStorage.removeItem(key1Logout);
                localStorage.removeItem(key2Logout);
                state = {};
            }
            return state;
        case "SIGNUP":
            console.log(action.payload);
            let key1Signup = action.payload.firstName + " " + action.payload.lastName;
            let userPassword = localStorage.getItem(key1Signup);
            state = { firstName: action.payload.firstName, lastName: action.payload.lastName, email: action.payload.email };
            if (!userPassword) {
                //בגלל שיש קצת לקוחות אין צורך במזהה יחודי לכל אחד ולכן הספיק לנו השם והמשפחה
                let key2Signup = action.payload.lastName + " " + action.payload.firstName;
                localStorage.setItem(key1Signup, action.payload.password);
                localStorage.setItem(key2Signup, action.payload.email);

            }
            return state;
    }
    return state;
};