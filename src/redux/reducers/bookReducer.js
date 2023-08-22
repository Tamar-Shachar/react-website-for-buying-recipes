const initialState =[ 
    { barcode: "A-8751", name: "Hamasa", author: "Dvori Rand", userId: '0' },
    { barcode: "G-3177", name: "Mesilot", author: "Nachman Lev", userId: '1' },
    { barcode: "A-7688", name: "Adom Lavan", author: "Dvori Rand", userId: '2' },
    { barcode: "D-9867", name: "Shomeret Hashearim", author: "Dvori Rand", userId: '2' },
    { barcode: "A-5684", name: "Tachanot", author: "Dvori Rand", userId: '3' },
    { barcode: "A-6666", name: "Alea Hashalom", author: "Dvori Rand", userId: '4' },
    { barcode: "R-1111", name: "Hatofet", author: "Nachman Seltzer", userId: '0' },
    { barcode: "S-6722", name: "Hatzavaa", author: "Chaim Grinboim", userId: '5' }]
const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATEUSERID":
            // return { ...state, userId: action.payload }
            const {id, index} = action.payload;
            // console.log(userId +"    "+index);
             // const changedIdx = state.findIndex((item) => item.team === team);
             return[...state.slice(0, index),{...state[index],userId:id }, ...state.slice(index + 1)];
    }
    return state
};
export default bookReducer;