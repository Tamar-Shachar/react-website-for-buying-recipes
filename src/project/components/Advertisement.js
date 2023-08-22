import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import adImage from '../Images/רק דובדבן.jpg'
import logo from '../Images/לוגו סופי-01.png';
import { changeShowAd } from "../reduxProject/actions/changeShow";
export default function Advertisement() {
    const show = useSelector(state => state.advertisementModalReducer);
    const dispatch = useDispatch();
    const handleClose = () => { dispatch(changeShowAd()) };
    return (
        <Modal show={show} onHide={handleClose} className="adv-model-wrapper">
            <button className="close" onClick={handleClose}><p>x</p>
            </button>
            <div className="adv-modal">
                <div className="grid-1">
                    <img src={adImage}></img>
                </div>
                <div className="grid-2">

                    <div dir="rtl">
                        {/* <div style={{ opacity: "50%" }}>
                            <p>תמר ושני אופות הפתעות</p>
                        </div> */}

                        <hr></hr>

                        <h2>מתכונים חדשים באתר</h2>

                        <h5 style={{ border: "1px black solid", padding: "1vw", width: "80%", margin: "3vh auto", marginBottom: "6vh" }}>
                            מתכונים חדשים בכל הקטגוריות
                        </h5>
                        <h4>אל תפספסו!!!</h4>
                        <h3>מתכון שלישי חינם</h3>
                        <p>* הזול מביניהם</p>
                        <hr></hr>
                        {/* <img src={logo} style={{ width: "50%", opacity: "50%", marginBottom: "0 !important" }} /> */}
                    </div>
                </div>
            </div>
        </Modal>);
};
