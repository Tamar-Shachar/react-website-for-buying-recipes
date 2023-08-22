import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { InputGroup} from 'react-bootstrap';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import ReCAPTCHA from "react-google-recaptcha";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logIn,  signup } from '../reduxProject/actions/updateCustomer';
import { changeShow } from '../reduxProject/actions/changeShow';
export default function Register() {

    const dispatch = useDispatch();
    const [isSignup, setIsSignup] = useState(false);
    const [email, setEmail] = useState();
    const handleClose = () => dispatch(changeShow());
    const [errorSignup, setErrorSignup] = useState(false);
    const [errorLogin, setErrorLogin] = useState(false);
    const [isRobot, setIsRobot] = useState(true);
    const [isPersonExist, SetIsPersonExist] = useState(false);
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const show = useSelector((state) => state.loginModalReducer);
    const firstName = useRef();
    const lastName = useRef();
    const emailAdd = useRef();
    const password = useRef();
    const togglePassword = () => {
        if (passwordType === "password") {
          setPasswordType("text")
          return;
        }
        setPasswordType("password")
      }
      function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
      const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
      }
    
    return (
        <Modal show={show} onHide={handleClose} style={{ width: "40vw", marginLeft: "30vw", textAlign: "center" }}>
            <Modal.Header dir='rtl'>
                <Modal.Title>{isSignup ? "רישום" : "כניסה"}</Modal.Title>
                {!isSignup && <Modal.Title dir='ltr' style={{ fontSize: "14px" }}>עדיין לא רשום?<a href='#' onClick={() => { if (!isPersonExist) { setErrorLogin(false); setIsSignup(true); } }} style={{ color: "blue", textDecoration: "none" }}> להרשמה לחץ כאן</a></Modal.Title>}
            </Modal.Header>
            <Modal.Body>
                <Form dir='rtl'>
                    <Form.Group className="mb-3">
                        <Form.Label>שם פרטי:</Form.Label>
                        <Form.Control type="name" placeholder="הכנס שם פרטי" ref = {firstName} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>שם משפחה:</Form.Label>
                        <Form.Control type="name" placeholder="הכנס שם משפחה" ref = {lastName} />
                    </Form.Group>
                    {isSignup && <Form.Group className="mb-3">
                        <Form.Label>כתובת מייל</Form.Label>
                        <Form.Control type="email" placeholder="הכנס כתובת מייל" ref = {emailAdd}
                            onChange={(e) => {
                                if (isValidEmail(e.target.value)) {
                                    setEmail(true);
                                }
                                else {
                                    setEmail(false);
                                }
                            }} />
                        {email === false && <Form.Text style={{ color: "red" }}>אימייל לא תקין</Form.Text>}

                    </Form.Group>}

                    <Form.Group className="mb-3">
                        <Form.Label>סיסמא:</Form.Label>
                        <InputGroup dir='ltr'>
                            {/* <InputGroup.Prepend> */}
                            <InputGroup.Text><i onClick={togglePassword} >{passwordType === "password" ? <AiFillEyeInvisible /> : <AiFillEye />}</i></InputGroup.Text>

                            {/* </InputGroup.Prepend> */}
                            <Form.Control dir='rtl' type={passwordType} placeholder="הכנס סיסמא" 
                                onChange={handlePasswordChange} value={passwordInput} name="password" className="form-control" ref = {password} />
                        </InputGroup>
                    </Form.Group>
                    {isSignup && <ReCAPTCHA
                        sitekey="6LfZoqQjAAAAAPSycpT73-R8j1dC_Ur2HBUwJijD"
                        // onChange={() => {
                        //     setIsRobot(false);
                        // }}
                    />}
                    {errorSignup && <Form.Group className="mb-3">
                        <Form.Text style={{ color: "red" }}>אחד או יותר מהפרטים שהזנת שגויים, אנא נסה/י שנית</Form.Text>
                    </Form.Group>}
                    {errorLogin && <Form.Group className="mb-3">
                        <Form.Text style={{ color: "red" }}>שם משתמש ו/או סיסמא שגויים. אינך רשום ?<a href='#' onClick={() => { if (!isPersonExist) { setErrorLogin(false); setIsSignup(true); } }} style={{ color: "blue", textDecoration: "none" }}> להרשמה לחץ כאן</a></Form.Text>
                    </Form.Group>}
                </Form>
            </Modal.Body>
            <Modal.Footer style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="secondary" onClick={(e) => {
                    if (isSignup) {
                        if (email && password.current.value && firstName.current.value && lastName.current.value) {
                            e.preventDefault();
                            dispatch(signup(firstName.current.value, lastName.current.value, password.current.value, emailAdd.current.value));
                            SetIsPersonExist(true);
                            handleClose();
                        }
                        else {
                            setErrorSignup(true);
                        }
                    }
                    else {
                        let key = firstName.current.value + " " + lastName.current.value;
                        let userPassword = localStorage.getItem(key);
                        if (userPassword === password.current.value) {
                            dispatch(logIn(firstName.current.value, lastName.current.value));
                            handleClose();
                        }
                        else {
                            setErrorLogin(true);
                        }
                    }
                }}>{isSignup ? "הרשם" : "הכנס"}</Button>
                <Button variant="secondary" onClick={() => handleClose()}>בטל</Button>
            </Modal.Footer>
        </Modal>
   );
};