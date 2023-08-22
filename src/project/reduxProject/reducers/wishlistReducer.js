const initialState = [];

const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REMOVEPASTRY":
            if (state.length != 0 && action.payload.place == "wishlist") {
                console.log(state);
                let index = state.findIndex((p) => { return p.id == action.payload.id });
                console.log(action.payload.id);
                return [...state.slice(0, index), ...state.slice(index + 1)];
            }
        case "ADDPASTRY":
            if (action.payload.place == "wishlist") {
                const pastry = action.payload.pastry;
                let existPastry = state.find((p) => { return p.id == pastry.id });
                if (existPastry != null) {
                    return state;
                }

                return [...state.slice(0, state.length), { ...pastry}];
            }
    }
    return state;
};
export default wishlistReducer;