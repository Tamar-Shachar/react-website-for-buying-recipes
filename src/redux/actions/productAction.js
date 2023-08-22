export const updateName = (name, index) => {
    return {
        type: "UPDATENAME",
        payload: { name, index }
    }
}

export const updatePrice = (price, index) => {
    return {
        type: "UPDATEPRICE",
        payload: { price, index }
    }
}

export const updateAmount = (amount, index) => {
    return {
        type: "UPDATEAMOUNT",
        payload: { amount, index }
    }
}
export const updateProduct = (name, price, amount, index) => {
    return {
        type: "UPDATEPRODUCT",
        payload: { name, price, amount, index }
    }
}