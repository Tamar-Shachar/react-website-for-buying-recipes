const initialState = false;
export default function advertisementModalReducer(state = initialState, action) {
    if (action.type == "CHANGESHOWAD") {
        return !state;
    }
    return state;
};