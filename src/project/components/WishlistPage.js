import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addPastry, removePastry } from "../reduxProject/actions/updateLists";
import { AiOutlineShopping } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";

export default function WishlistPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const wishlist = useSelector((state) => state.wishlistReducer);
    return (
        <>

            {wishlist.length == 0 && <div style={{ opacity: "20%" }}><h1 style={{ fontSize: "75px" }}>x</h1>
                <h1>רשימת המשאלות שלך ריקה</h1></div>}
            {wishlist.length > 0 && <h3>רשימת המשאלות ({wishlist.length})</h3>}
            {wishlist.length > 0 && wishlist.map((pastry) => (
                <div>
                    <div className="container-bag">
                        <div className="links">

                            <p><a onClick={(e) => {
                                e.preventDefault();
                                dispatch(addPastry(pastry, "shoppingCart"));
                                dispatch(removePastry(pastry.id, "wishlist"));
                            }}>העבר לסל</a>&nbsp;<AiOutlineShopping />
                            </p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <p><a onClick={(e) => {
                                e.preventDefault();
                                dispatch(removePastry(pastry.id, "wishlist"));
                            }}>הסר</a>&nbsp;<HiOutlineTrash /></p>

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
                        {/* </div> */}

                    </div>
                    <hr style={{ marginLeft: "40vw", width: "58vw" }}></hr>
                </div>
            ))
            }

        </>
    )
}
