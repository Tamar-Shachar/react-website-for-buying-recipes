import { useDispatch, useSelector } from "react-redux";
import { BsBagX } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import { addPastry, removePastry } from "../reduxProject/actions/updateLists";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Register from "./Register";
import { changeShow } from "../reduxProject/actions/changeShow";
import { decreaseQty, increaseQty } from "../reduxProject/actions/updateBook";

export default function ShoppingCartPage() {
    const customer = useSelector((state) => state.customerReducer);
    const shoppingCart = useSelector((state) => state.shoppingCartReducer);
    const booksQty = useSelector((state) => state.bookReducer.qty);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const show = useSelector((state) => state.loginModalReducer);
    const [qty, setQty] = useState(1);
    function showTotalPrice() {
        let sum = 0;
        shoppingCart.map(p => {
            if (p.id === 400) {
                sum = sum + p.price * qty;
            }
            else {
                sum = sum + p.price;
            }
        });
        setTotalPrice(sum);
    }
    if (isBeginning) {
        showTotalPrice();
        setIsBeginning(false);
    }
    function applyDiscount() {
        let sortedCart = shoppingCart.sort((p1, p2) => p1.price > p2.price ? 1 : -1);
        let count = sortedCart.length / 3;
        let discount = 0;
        for (let i = 0, j = 0; j < parseInt(count); i += 3, j++) {
            discount += sortedCart[i].price;
        }
        return discount;
    }
    return (
        <div >
            {shoppingCart.length == 0 ? <div style={{ opacity: "20%", fontSize: "10vh" }}><BsBagX /><h1>
                עגלת הקניות שלך ריקה</h1></div> :
                <>
                    <h3 style={{ margin: "3vh 0" }}>עגלת קניות ({shoppingCart.length})</h3>
                    <div className="wrapper-bag" >
                        <div className="payment">
                            <table>
                                <tbody dir="rtl">
                                    <tr><td>₪ {(totalPrice * 0.83).toFixed(2)}</td><td>סה"כ ללא מע"מ</td></tr>
                                    <tr><td>₪ {(totalPrice * 0.17).toFixed(2)}</td><td>מע"מ</td></tr>
                                    <tr><td>₪ {totalPrice.toFixed(2)}</td><td>מחיר לאחר מע"מ</td></tr>
                                    <tr style={{ color: "red" }}> <td>₪ {applyDiscount().toFixed(2)}-</td><td>הנחה</td></tr>
                                    <tr style={{ fontWeight: "bolder" }}><td>₪ {(totalPrice - applyDiscount()).toFixed(2)}</td><td>מחיר לאחר הנחה</td></tr>
                                </tbody>
                            </table>
                            <Button className="payment-button" variant="dark" size="lg"
                                style={{ backgroundColor: "rgb(146, 75, 87)", border: "none" }}
                                onClick={() => {
                                    customer.firstName ?
                                        navigate(`/payment/${totalPrice}/${applyDiscount()}`) :
                                    dispatch(changeShow());
                                }}>לתשלום</Button>
                        </div>
                        {show && <Register></Register>}
                        {shoppingCart.length > 0 && shoppingCart.map((pastry) => (
                            <div>
                                <div className="container-bag">
                                    <div className="links">
                                        {pastry.id === 400 &&
                                            <div className="book-qty">
                                                <button
                                                    onClick={(e) => {
                                                        if (qty === 1) {
                                                            e.preventDefault();
                                                            dispatch(removePastry(pastry.id, "shoppingCart"));
                                                        }
                                                        else {
                                                            setQty(qty - 1);
                                                        }
                                                        setTotalPrice(totalPrice - pastry.price);
                                                        e.preventDefault();
                                                        dispatch(increaseQty());
                                                    }}>-</button>

                                                <p>{qty}</p>
                                                <button
                                                    onClick={(e) => {
                                                        if (booksQty > 0) {
                                                            setQty(qty + 1);
                                                            setTotalPrice(totalPrice + pastry.price)
                                                            e.preventDefault();
                                                            dispatch(decreaseQty());
                                                        }

                                                    }}>+</button>
                                            </div>}
                                        <p><Link onClick={(e) => {
                                            e.preventDefault();
                                            dispatch(addPastry(pastry, "wishlist"));
                                            dispatch(removePastry(pastry.id, "shoppingCart"));
                                            setIsBeginning(true);
                                        }}>העבר למועדפים</Link>&nbsp;<AiOutlineStar />
                                        </p>
                                        <p>&nbsp;&nbsp;&nbsp;</p>
                                        <p><Link onClick={(e) => {
                                            e.preventDefault();
                                            dispatch(removePastry(pastry.id, "shoppingCart"));
                                            setIsBeginning(true);
                                        }}>הסר</Link>&nbsp;<HiOutlineTrash /></p>

                                    </div>
                                  <div className="details">
                                        <h4>{pastry.name}</h4>
                                        <br></br>
                                        <h5>₪   {pastry.price}.00 </h5>
                                    </div>
                                    <div>
                                       <img src={pastry.images[0]}
                                            onClick={() => navigate(`/showPastry/${pastry.id}`)}
                                        ></img> 
                                    </div>


                                </div>
                                <hr style={{ marginLeft: "40vw", width: "58vw" }}></hr>

                            </div>
                        ))
                        }

                    </div>
                </>}

        </div>

    )
}
