import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeShow2 } from "../reduxProject/actions/changeShow";
import { changeShowBook } from "../reduxProject/actions/updateBook";
export default function AddedToCart(props) {
    const navigate = useNavigate();
    const book = useSelector(state => state.bookReducer.show);
    const currentPastry = props.pastry;

    const handleClose = () => {
        dispatch(changeShow2());
    };
    const dispatch = useDispatch();
    const show = useSelector((state) => state.shoppingModalReducer);
    return (
        <Modal show={show} onHide={handleClose} style={{ width: "40vw", marginLeft: "30vw", textAlign: "center" }}>
            <Modal.Header>
                <Modal.Title style={{ margin: "1vh auto" }}>המוצר נוסף בהצלחה לעגלת הקניות שלך</Modal.Title>
            </Modal.Header>
            {currentPastry &&<Modal.Body>
            <h6 className="card-title">{currentPastry.name}</h6>
                <img className="card-img-top" src={currentPastry.images[0]} style={{ width: "15vw", margin: "3vh auto" }}></img>
                <h6> מחיר: ₪{currentPastry.price} </h6>
            </Modal.Body>}
            <Modal.Footer style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="secondary" onClick={() => {navigate("/shoppingCart"); handleClose();}}>למעבר לעגלת הקניות</Button>
                <Button variant="secondary" onClick={() => 
                {handleClose();
                navigate(1)}
                }>להמשך קניה</Button>
            </Modal.Footer>

        </Modal>);
};