let initialState = [];

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REMOVEPASTRY":
            if (state.length > 0 && action.payload.place == "shoppingCart") {
                let index = state.findIndex((p) => { return p.id === action.payload.id });
                return [...state.slice(0, index), ...state.slice(index + 1)];
            }
        case "ADDPASTRY":
            if (action.payload.place == "shoppingCart") {
                const pastry = action.payload.pastry;
                let existPastry = state.find((p) => { return p.id === pastry.id });
                if (existPastry != null) {
                    let index = state.findIndex((p) => { return p.id === pastry.id });
                    return [...state.slice(0, index), { ...state[index], count: state[index].count + 1 }, ...state.slice(index + 1)];
                }

                return [...state.slice(0, state.length), { ...pastry, count: 1 }];
            }
        case "EMPTYING":
            if (action.type === "EMPTYING") {
                state = [];
                return state;
            }
    }
    return state;
};
export default shoppingCartReducer;
