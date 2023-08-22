import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeShow } from '../reduxProject/actions/changeShow';
import { logout } from '../reduxProject/actions/updateCustomer';
import Register from './Register';
import icon from '../Images/סמל-01.png';

export default function Footer() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showRegister = useSelector((state) => state.loginModalReducer);
    const [showRemoving, setShowRemoving] = useState(false);
    const [isRemoving, setIsRemoving] = useState(false);
    const person = useSelector((state) => state.customerReducer);
    const handleClose = () => setShowRemoving(false);


    return (
        <div className="footer" dir='rtl'>
            <div className="footer-grid">
                <div>
                    <label><input style={{ width: "2vw" }} type='checkbox' />
                        הריני לאשר בזאת קבלת דואר מאתר אופות 
                        הפתעות הכולל מתכונים ומידע מהאתר,
                        וכן דואר שיווקי גם של מפרסמים הקשורים עם האתר</label>
                    <br></br>
                    <br></br>
                    <img src={icon} style={{ width: "3vw" }} />
                </div>
                <div>
                    <a onClick={() => { navigate("about") }} href="#keep-in-touch">צור קשר</a>
                    <a href='#' onClick={(e) => { e.preventDefault(); dispatch(changeShow()); }}>הרשמה</a>
                    <a href='#' onClick={(e) => { e.preventDefault(); dispatch(changeShow()); }}>כניסה</a>
                    <a href='#' onClick={() => setShowRemoving(true)}>הסרה</a>
                    <a href='#' onClick={() => { navigate("/about") }}>אודות</a>
                </div>


                <div>
                    <a href='#' onClick={() => { navigate("pastries/cakesReducer/all") }}><b>עוגות</b></a>
                    <a href='#' onClick={() => { navigate("pastries/cakesReducer/עוגות בחושות") }}>עוגות בחושות</a>
                    <a href='#' onClick={() => { navigate("pastries/cakesReducer/עוגות גבינה") }}>עוגות גבינה</a>
                    <a href='#' onClick={() => { navigate("pastries/cakesReducer/עוגות יום הולדת") }}>עוגות יום הולדת</a>
                    <a href='#' onClick={() => { navigate("pastries/cakesReducer/עוגות מוס וקרם") }}>עוגות מוס וקרם</a>
                </div>
                <div>
                    <a href='#' onClick={() => { navigate("pastries/dessertsReducer/all") }}><b>קינוחים</b></a>
                    <a href='#' onClick={() => { navigate("pastries/dessertsReducer/קינוחי מוס וקרם אישיים") }}>קינוחי מוס וקרם אישיים</a>
                    <a href='#' onClick={() => { navigate("pastries/dessertsReducer/אקלרים ופחזניות") }}>אקלרים ופחזניות</a>
                    <a href='#' onClick={() => { navigate("pastries/dessertsReducer/קינוחים קפואים") }}>קינוחים קפואים</a>
                    <a href='#' onClick={() => { navigate("pastries/dessertsReducer/טארטלים") }}>טארטלים</a>
                    <a href='#' onClick={() => { navigate("pastries/dessertsReducer/קינוחי כוסות") }}>קינוחי כוסות</a>
                </div>
                <div>
                    <a href='#' onClick={() => { navigate("pastries/cookiesAndsweetsReducer/all") }}><b>עוגיות ומתוקים</b></a>
                    <a href='#' onClick={() => { navigate("pastries/cookiesAndsweetsReducer/חטיפי שוקולד") }} >חטיפי שוקולד</a>
                    <a href='#' onClick={() => { navigate("pastries/cookiesAndsweetsReducer/עוגיות") }} >עוגיות</a>
                    <a href='#' onClick={() => { navigate("pastries/cookiesAndsweetsReducer/ממתקים תוצרת בית") }} >ממתקים תוצרת בית</a>
                    <a href='#' onClick={() => { navigate("pastries/cookiesAndsweetsReducer/חיתוכיות וריבועיות") }} >חיתוכיות וריבועיות</a>
                    <a href='#' onClick={() => { navigate("pastries/dessertsReducer/קינוחי כוסות") }}>קינוחי כוסות</a>
                </div>
                <div>
                    <a href='#' onClick={() => navigate("pastries/breadsAndSaltyReducer/all")}><b>לחמים ומלוחים</b></a>
                    <a href='#' onClick={() => { navigate("/pastries/chagim/all") }}><b>חגים</b></a>
                    <a href='#' onClick={() => { navigate("pastries/chagim/חגי תשרי") }} >חגי תשרי</a>
                    <a href='#' onClick={() => { navigate("pastries/chagim/פסח") }} >פסח</a>
                    <a href='#' onClick={() => { navigate("pastries/chagim/שבועות") }} >שבועות</a>
                </div>
            </div>
            <hr></hr>
            <div className="footer-bottom">
                <p>© כל הזכויות שמורות לתמר שחר ושני שורקין </p>
                <p>Jan 2023</p>
            </div>
            {showRegister && <Register></Register>}
            <Modal className='remove-modal' show={showRemoving} onHide={handleClose} dir='rtl'>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Title >הסרה</Modal.Title>

                {!isRemoving && <h5>{person.firstName ? ` ${person.firstName}, האם את/ה בטוח/ה שברצונך להסיר את פרטיך מהאתר שלנו?` :
                    "כדי לבצע הסרה יש להכנס עם שם וסיסמא"}</h5>}
                {isRemoving && <h5>הסרת בהצלחה את פרטיך</h5>}

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    {isRemoving ? <Button variant="secondary" onClick={() => { setIsRemoving(false); handleClose(); }}>אישור</Button> :
                        <Button variant="secondary" onClick={handleClose}>ביטול</Button>}
                    {person.firstName && <Button variant="secondary" onClick={() => { dispatch(logout()); setIsRemoving(true) }}>להסרה</Button>}

                </div>

            </Modal>
        </div>);
};
