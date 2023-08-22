const initialState = false;
export default function shoppingModalReducer(state = initialState, action) {
    if (action.type == "CHANGESHOW2") {
        return !state;
    }
    return state;
};