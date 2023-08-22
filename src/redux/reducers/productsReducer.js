const initalState = [{
    name: "Belgian Waffles",
    price: 29,
    amount: 60
},
{
    name: "French crape",
    price: 20,
    amount: 134
},
{
    name: "frozen",
    price: 16,
    amount: 200
},
{
    name: "Fruitshake",
    price: 23,
    amount: 36
},
{
    name: "milk shake",
    price: 27,
    amount: 100
},
{
    name: "Ice Cream",
    price: 12,
    amount: 398
},
{
    name: "Ice Coffee",
    price: 6,
    amount: 13
}];
const productsReducer = (state = initalState, action) => {
    switch (action.type) {
        // case "UPDATENAME":
        //     const { name, index1 } = action.payload;
        //     return [...state.slice(0, index1), { ...state[index1], name: name }, ...state.slice(index1 + 1)];
        // case "UPDATEPRICE":
        //     const { price, index2 } = action.payload;
        //     return [...state.slice(0, index2), { ...state[index2], price: price }, ...state.slice(index2 + 1)];
        // case "UPDATEAMOUNT":
        //     const { amount, index3 } = action.payload;
        //     return [...state.slice(0, index3), { ...state[index3], amount: amount }, ...state.slice(index3 + 1)];
        case  "UPDATEPRODUCT":
            const { name,price,amount, index } = action.payload;
            return [...state.slice(0, index), {name:name,price:price,amount: amount }, ...state.slice(index + 1)];
    }
    return state;
};
export default productsReducer;


