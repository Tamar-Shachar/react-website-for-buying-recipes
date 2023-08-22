import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addPastry, removePastry } from "../reduxProject/actions/updateLists";
import { useRef } from "react";
import AddedToCart from "./AddedToCart";
import { changeShow2 } from "../reduxProject/actions/changeShow";
export default function ShowPastry(props) {
    const dispatch = useDispatch();
    const { id } = useParams();
    let pastry = [];
    let state = useSelector((state) => state);
    const show = useSelector((state) => state.shoppingModalReducer);
    let categoryArr = ["cakesReducer", "cookiesAndsweetsReducer", "dessertsReducer", "breadsAndSaltyReducer"];
    for (let categoryState in state) {
        if (categoryArr.includes(categoryState)) {
            state[categoryState].map(
                (p) => {
                    if (id == p.id) {
                        pastry = p;
                    }
                }
            )
        }
    }
    const book = useSelector((stste) => state.bookReducer);

    if (id == 400) {
        pastry = book;
    }
    const images = pastry.images;
    const numOfImages = images.length;
    const [img, setImg] = useState(images[0]);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();


    function correctBorder(smallImg) {
        return img == smallImg ? "1px solid black" : "none";
    }
    function showDescription() {
        if (id != 400) {
            fetch(pastry.description)
            .then((r) => r.text())
            .then(text => {
                setDescription(text);
            })
        }
    }
    function isInReducer(pastry, reducer) {
        let flag = false;
        state[reducer].map((p) => {
            if (pastry.id == p.id) {
                flag = true;
                return true;
            }
        });
        return flag;
    }
    let categories = "";
    if (pastry.categories) {
        pastry.categories.map((p, i) => i == pastry.categories.length - 1 ? categories += ` ${p}` : categories += ` ${p} |`)
    }
    return (
        <div style={{ display: "flex", width: "100%", alignContent: "flex-start" }}>
            <div style={{ alignItems: "center", textAlign: "center", padding: "100px", paddingTop: "20px" }}>
                <h6>{categories}</h6>
                <h2 style={{ color: "rgb(146, 75, 87)" }}>{pastry.name}</h2>
                <h4 >₪ {pastry.price}</h4>

                {showDescription()}
                <p dir="rtl">{description}</p>
                {/* <h4>מחיר: ₪{pastry.price}</h4> */}
                <Button variant="dark" size="lg"
                    style={{ margin: "5px", width: "15vw", backgroundColor: "rgb(146, 75, 87)", border: "none" }}
                    onClick={(e) => {
                        if (isInReducer(pastry, "shoppingCartReducer")) {
                            e.preventDefault();
                            dispatch(removePastry(pastry.id, "shoppingCart"));
                        }
                        else {
                            e.preventDefault();
                            dispatch(addPastry(pastry, "shoppingCart"));
                            dispatch(changeShow2());
                        }
                    }}
                    
                >{isInReducer(pastry, "shoppingCartReducer") ? "הסר מהעגלה" : "הוסף לעגלה"} </Button>

                <Button variant="dark" size="lg"
                    style={{ margin: "5px", width: "15vw", backgroundColor: "rgb(146, 75, 87)", border: "none" }}
                    onClick={(e) => {
                        if (isInReducer(pastry, "wishlistReducer")) {
                            e.preventDefault();
                            dispatch(removePastry(pastry.id, "wishlist"));
                        }
                        else {
                            e.preventDefault();
                            dispatch(addPastry(pastry, "wishlist"));
                        }
                    }}
                    
                >{isInReducer(pastry, "wishlistReducer") ? "הסר מהמועדפים" : "הוסף למועדפים"} </Button>
            </div>

            <img
                src={img}
                // onClick = {(e) => {e.target.className = "moving" }}
                style={{ height: "65vh" }}
                className="shadow-sm p-1 bg-white"
            ></img>

            <div>
                {images.map((img) => (

                    <img
                        src={img}
                        style={{ height: "16vh", margin: "5px", marginTop: "0px", border: correctBorder(img) }}
                        className="shadow-sm p-1 bg-white"
                        onClick={() => { setImg(img) }} >
                    </img>

                ))}

            </div>
            {show && <AddedToCart pastry={pastry}></AddedToCart>}
        </div>);
};