import bookImage from '../../Images/ספר מתכונים.png';
const initialState = {
    id: 400,
    name: "אופות לכם  הפתעות - ספר מתכוני בוטיק",
    images: [bookImage],
    price: 185,
    qty: 10,
    show: true
};
export default function bookReducer(state = initialState, action) {
    switch (action.type) {
        case "INCREASEQTY":
            return { ...state, qty: state.qty + 1 };


        case "DECREASEQTY":

            return { ...state, qty: state.qty - 1 };

        case "CHANGESHOWBOOK":
            return { ...state, show: !state.show };
    }

    return state
};

