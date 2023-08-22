import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";
import { useNavigate, useParams } from 'react-router-dom';
import { addPastry, removePastry } from '../reduxProject/actions/updateLists';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import placeholderImg from '../Images/תמונה באיכות נמוכה.jpg';
import AddedToCart from './AddedToCart';
import { changeShow2 } from '../reduxProject/actions/changeShow';
import Book from './Book';
import { changeShowBook } from '../reduxProject/actions/updateBook';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export default function Pastries() {
    const show = useSelector((state) => state.shoppingModalReducer);
    const showBook = useSelector((state) => state.bookReducer.show);
    const navigate = useNavigate();
    let { category } = useParams();
    let { subCategory } = useParams();
    let allPastries = [], pastries = [];
    let title = "", secondaryTitle = "";
    const state = useSelector((state) => state);
    allPastries = useSelector((state) => state[category]);
    const findPastries = (valueForSearch) => {
        let matchPastries = [];
        let categoryArr = ["cakesReducer", "cookiesAndsweetsReducer", "dessertsReducer", "breadsAndSaltyReducer"];
        for (let category in state) {
            if (categoryArr.includes(category)) {
                let results = state[category].filter((pastry) => {
                    return pastry.name.includes(valueForSearch) || (pastry.categories && pastry.categories.includes(valueForSearch));
                })
                matchPastries = [...matchPastries, ...results]
            }
        }
        for (let i = 0; i < matchPastries.length; i++) {
            if (matchPastries[i]) {
                for (let j = i + 1; j < matchPastries.length; j++) {
                    if (matchPastries[j]) {
                        if (matchPastries[i].name == matchPastries[j].name) {
                            delete (matchPastries[j]);
                        }
                    }
                }
            }

        }
        matchPastries = [...matchPastries.filter(p => { if (p) { return true; } })]
        return matchPastries;
    }
    if (category === "search") {
        pastries = findPastries(subCategory);
        secondaryTitle = "תוצאות חיפוש"
        title = subCategory;
        if (pastries.length === 0) {
            secondaryTitle = `לא נמצאו מתכונים המתאימים לחיפוש שלך`
        }
    }
    else if (category === "chagim") {
        title = subCategory;
        if (title === "all") {
            title = "חגים";
        }
        let categoryArr = ["cakesReducer", "cookiesAndsweetsReducer", "dessertsReducer"];
        for (let categoryState in state) {

            if (categoryArr.includes(categoryState)) {
                state[categoryState].map(
                    (pastry) => {
                        if (subCategory == "all") {
                            if (pastry.categories.includes("פסח") || pastry.categories.includes("שבועות") || pastry.categories.includes("חגי תשרי")) {
                                pastries.push(pastry)
                            }
                        }
                        else if (pastry.categories.includes(subCategory)) {
                            pastries.push(pastry)
                        }
                    }
                )
            }
        }
    }
    else {
        switch (category) {
            case "cakesReducer":
                title = "עוגות"
                break;
            case "cookiesAndsweetsReducer":
                title = "עוגיות ומתוקים"
                break;
            case "dessertsReducer":
                title = "קינוחים"
                break;
            case "breadsAndSaltyReducer":
                title = "לחמים ומלוחים"
                break;
            default:
                break;
        }
        if (subCategory === "all") {
            pastries = allPastries;
        }
        else {
            title = subCategory;
            allPastries.map((pastry) => {
                if (pastry.categories.includes(subCategory)) {
                    pastries.push(pastry);
                }
            })
        }
    }
    const dispatch = useDispatch();
    const [img, setImg] = useState();
    const [currentPastry, setCurrentPastry] = useState();
    const [currentId, setCurrentId] = useState(0);
    const [overOnImg, setOverOnImg] = useState(false);
    function isInReducer(reducer, pastry) {
        let flag = false;
        state[reducer].map((p) => {
            if (pastry.id == p.id) {
                flag = true;
                return true;
            }
        });
        return flag;
    }
    return (

        //     {Array.from({ length: 4 }).map((_, idx) => (
        //       <Col>
        //         <Card>
        //           <Card.Img variant="top" src="holder.js/100px160" />
        //           <Card.Body>
        //             <Card.Title>Card title</Card.Title>
        //             <Card.Text>
        //               This is a longer card with supporting text below as a natural
        //               lead-in to additional content. This content is a little bit
        //               longer.
        //             </Card.Text>
        //           </Card.Body>
        //         </Card>
        //       </Col>
        //     ))}

        <div className='pastries-wrapper' dir='rtl'>
            {secondaryTitle && <h6 style={{ margin: "2vh 0", opacity: "50%" }}>{secondaryTitle}</h6>}
            {title && <h3 style={{ marginBottom: "2vh", fontWeight: "600" }}>{title}</h3>}
            <hr style={{ width: "3vw", margin: "1vh auto", marginBottom: "4vh", color: "black" }}></hr>
            {/* <div className="img-container" > */}
            <Row  md={4}>
                {pastries.map((pastry) => (
                    <Col>
                        <Card>
                            <Card.Body
                                className='image'
                                onMouseOver={() => {
                                    setImg(pastry.images[1]);
                                    setOverOnImg(true);
                                }}
                                onMouseOut={() => { setImg(pastry.images[0]); setOverOnImg(false); }}>
                                <LazyLoadImage
                                    src={pastry.images.includes(img) ? img : pastry.images[0]}
                                    title={pastry.name}
                                    alt="Image Alt"
                                    placeholderSrc={placeholderImg}
                                    effect="blur"
                                    onClick={() => { navigate(`/showPastry/${pastry.id}`) }} />

                                <div className="options-circle"
                                    style={{
                                        top: "2vh",
                                    }}
                                    onMouseDown={(e) => {
                                        if (isInReducer("wishlistReducer", pastry)) {
                                            e.preventDefault();
                                            dispatch(removePastry(pastry.id, "wishlist"));
                                        }
                                        else {
                                            e.preventDefault();
                                            dispatch(addPastry(pastry, "wishlist"));
                                        }
                                    }}>
                                    <i title='לרשימת המשאלות'>
                                        {!(isInReducer("wishlistReducer", pastry)) && < AiOutlineStar />}
                                        {(isInReducer("wishlistReducer", pastry)) && <AiFillStar />}
                                    </i></div>
                                <div className="options-circle"
                                    style={{
                                        top: "18%",
                                    }}
                                    onMouseDown={(e) => {
                                        if (isInReducer("shoppingCartReducer", pastry)) {
                                            e.preventDefault();
                                            dispatch(removePastry(pastry.id, "shoppingCart"));
                                        }
                                        else {
                                            e.preventDefault();
                                            dispatch(addPastry(pastry, "shoppingCart"));
                                            dispatch(changeShow2());
                                            setCurrentPastry(pastry);
                                        }
                                    }}>
                                    <i title='להוספה לסל'>
                                        {!(isInReducer("shoppingCartReducer", pastry)) && < AiOutlineShopping />}
                                        {(isInReducer("shoppingCartReducer", pastry)) && <AiFillShopping />}

                                    </i>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                {pastry.images[0] && <div >
                                    <Card.Title>{pastry.name}</Card.Title>
                                    <hr ></hr>
                                    <Card.Text>{pastry.price} ₪</Card.Text>
                                </div>}
                            </Card.Footer>
                        </Card>
                    </Col>
                ))
                }
            </Row>
            {/* </div> */}
            {show && <AddedToCart pastry={currentPastry}></AddedToCart>}
            {showBook ? <Book></Book> : <button className='book-tab' onClick={() => { dispatch(changeShowBook()) }}>לקניית הספר</button>}
        </div>
    )
}
