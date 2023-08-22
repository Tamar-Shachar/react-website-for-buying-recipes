const initialState = false;
export default function loginModalReducer(state = initialState, action) {
    if (action.type == "CHANGESHOW") {
        return !state;
    }
    return state;
};