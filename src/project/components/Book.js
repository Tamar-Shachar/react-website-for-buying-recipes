import { Button } from "react-bootstrap";
import { increaseQty, decreaseQty, changeShowBook } from "../reduxProject/actions/updateBook";
import { useSelector, useDispatch } from "react-redux";
import { addPastry } from "../reduxProject/actions/updateLists";
import { changeShow2 } from "../reduxProject/actions/changeShow";
import AddedToCart from "./AddedToCart";
export default function Book() {
    const dispatch = useDispatch();
    const book = useSelector((state) => state.bookReducer);
    let book2 = [];
    book2 = book;
    const show = book.show;
    const showAdded = useSelector((state) => state.shoppingModalReducer);
    const handleClose = () => dispatch(changeShowBook());
    return (show && <div className="book-wrapper">
        <div className="grid-1">
            <button className="close" onClick={(e) => {
                e.preventDefault();
                dispatch(changeShowBook());
            }}>X</button>
            <div className="book-details">
                <p>{book.name}</p>
                <p>₪{book.price} </p>
            </div>
            <div className="book-buttons">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        // dispatch(changeShow2());
                        dispatch(decreaseQty());
                        dispatch(addPastry(book, "shoppingCart"));
                        handleClose();
                    }}>הוסף לעגלה</button>
                <button onClick={() => {
                    dispatch(addPastry(book, "wishlist"));
                    handleClose();
                }
                }>הוסף למועדפים</button>
            </div>
        </div>
        <div className="grid-2">

            <img className="book-img" src={book.images[0]}></img>

        </div>
        {/* <AddedToCart pastry={{...book}}></AddedToCart> */}
    </div>);
}
