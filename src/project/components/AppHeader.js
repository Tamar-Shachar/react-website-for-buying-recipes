import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Container, InputGroup, Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FiArrowUp } from "react-icons/fi";
import MovingText from 'react-moving-text'
import { useDispatch, useSelector } from 'react-redux';
import { changeShow, changeShowAd } from '../reduxProject/actions/changeShow';
import logo from '../Images/לוגו סופי-01.png';
import icon from '../Images/סמל-01.png';
import { useRef } from 'react';
import Register from './Register';
import Advertisement from './Advertisement';

export default function AppHeader() {
  const dispatch = useDispatch();
  const showLogin = useSelector((state) => state.loginModalReducer);
  const showAd = useSelector(state => state.advertisementModalReducer);
  const [showIcon, setShowIcon] = useState(false);
  const customer = useSelector((state) => state.customerReducer);
  const shoppingCart = useSelector((state) => state.shoppingCartReducer);
  const wishlist = useSelector((state) => state.wishlistReducer);
  const navigate = useNavigate();
  const [star, setStar] = useState(AiOutlineStar);
  const [bag, setBag] = useState(AiOutlineShopping);
  const [person, setPerson] = useState(BsPerson);
  const [scrollTop, setScrollTop] = useState(false);
  const [showSubCategories, setShowSubCategories] = useState(false);
  const showDropdown = () => {
    setShowSubCategories(true);
  }
  const hideDropdown = e => {
    setShowSubCategories(false);
  }
  const [currentDropdown, setCurrentDropdown] = useState();

  const valueForSearch = useRef();
  const state = useSelector(state => state);
  const findPastries = () => {
    if (valueForSearch.current.value) {
      navigate(`/pastries/search/${valueForSearch.current.value}`);
      valueForSearch.current.value = "";
    }
  }

  function headerStyle() {
    const header = document.querySelector('.second-navbar');
    if (this.scrollY > 130) {
      header.style.position = "fixed";
      header.style.top = "0";
      header.style.boxShadow = "4px 4px 8px rgba(71, 71, 71, 0.222)";
      setScrollTop(true);
      setShowIcon(true);
    }
    else {
      header.style.position = "relative";
      header.style.top = "auto";
      header.style.boxShadow = "none";
      setScrollTop(false);
      setShowIcon(false);
    }
  }
  window.addEventListener("scroll", headerStyle, false);
  useEffect(() => {
    navigate("/home/");
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      dispatch(changeShowAd());
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='header-wrapper'>
        <div style={{ backgroundColor: "black" }}>
          <MovingText className="moving-text"
            style={{ textAlign: "end", margin: "0", color: "white", height: "3vh", fontSize: "1.8vh" }}
            type="slideOutToLeft"
            duration="50000ms"
            delay="0s"
            direction="normal"
            timing="liner"
            iteration=" infinite"
            fillMode="none">
            מתכון שלישי חינם  *הזול מביניהם
          </MovingText>
        </div>
        <div className='fixed-header'>
          <Navbar expand="lg" className='first-navbar'>
            <Container>
              <Nav>
                <Nav.Item>
                  <Nav.Link
                    className='icon-logo'
                    onMouseMove={() => { setPerson(BsFillPersonFill) }}
                    onMouseOut={() => { setPerson(BsPerson) }}
                    onClick={() => dispatch(changeShow())}
                    title="הכנס">
                    {person}
                  </Nav.Link>
                  {customer.firstName && <h6>היי {customer.firstName} </h6>}
                </Nav.Item>

                <Nav.Item style={{ position: "relative" }}>
                  <Nav.Link
                    className='icon-logo'
                    onMouseMove={() => { setBag(AiFillShopping) }}
                    onMouseOut={() => { setBag(AiOutlineShopping) }}
                    onClick={() => { navigate("/shoppingCart") }}
                    title="הסל שלי">
                    {bag}
                  </Nav.Link>
                  {(shoppingCart.length > 0) && <div className='qty-circle'>{shoppingCart.length}</div>}
                </Nav.Item>
                <Nav.Item style={{ position: "relative" }}>
                  <Nav.Link
                    className='icon-logo'
                    onMouseMove={() => { setStar(AiFillStar) }}
                    onMouseOut={() => { setStar(AiOutlineStar) }}
                    onClick={() => navigate("/wishlist")}
                    title="רשימת המשאלות שלי">
                    {star}
                  </Nav.Link>
                  {(wishlist.length > 0) && <div className='qty-circle'>{wishlist.length}</div>}
                </Nav.Item>
              </Nav>
              {/* <div className='app-logo'><h2>תמר ושני</h2><h5>אופות לכם הפתעות</h5></div> */}
              <img src={logo} style={{ width: "14vw", margin: "0 auto" }}></img>
              <Nav.Item>
                <InputGroup dir='ltr'>
                  <InputGroup.Text className='icon-warper'><BsSearch
                    className='search-icon'
                    onClick={(e) => {
                      findPastries();
                    }}
                  />
                  </InputGroup.Text>
                  <input className="form-control mr-sm-2" dir='rtl' ref={valueForSearch} type="text" placeholder="חפש..."
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        findPastries()
                      }
                    }} />
                </InputGroup>

              </Nav.Item>
            </Container>
          </Navbar>
          <hr style={{ color: " rgb(67, 25, 8)", margin: "0" }}></hr>

          <Navbar expand="lg" dir='rtl' className='second-navbar'>
            {showIcon && <img src={icon} style={{ width: "3vw", marginRight: "10vw !important" }} />}

            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ margin: "0 auto" }}>
                  <Nav.Link style={{ fontWeight: "700" }} onClick={() => navigate("/home")}>בית</Nav.Link>
                  <Nav.Link onClick={() => navigate("/about")}>אודות</Nav.Link>
                  <Nav.Link onClick={() => navigate("pastries/breadsAndSaltyReducer/all")}>לחמים ומלוחים</Nav.Link>
                  <NavDropdown
                    title="עוגות"
                    id="collasible-nav-dropdown"
                    show={currentDropdown == "עוגות" && showSubCategories}
                    onMouseEnter={() => { setCurrentDropdown("עוגות"); showDropdown(); }}
                    onMouseLeave={hideDropdown}>
                    <NavDropdown.Item onClick={() => { navigate("pastries/cakesReducer/עוגות בחושות") }}>עוגות בחושות</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { navigate("pastries/cakesReducer/עוגות גבינה") }} >עוגות גבינה</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { navigate("pastries/cakesReducer/עוגות יום הולדת") }} >עוגות יום הולדת</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { navigate("pastries/cakesReducer/עוגות מוס וקרם") }} >עוגות מוס וקרם</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => { navigate("pastries/cakesReducer/all") }}>הכל</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="קינוחים"
                    id="collasible-nav-dropdown"
                    show={currentDropdown == "קינוחים" && showSubCategories}
                    onMouseEnter={() => { setCurrentDropdown("קינוחים"); showDropdown(); }}
                    onMouseLeave={hideDropdown}>
                    <NavDropdown.Item onClick={() => { navigate("pastries/dessertsReducer/קינוחי מוס וקרם אישיים") }}>קינוחי מוס וקרם אישיים</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { navigate("pastries/dessertsReducer/אקלרים ופחזניות") }}>אקלרים ופחזניות</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { navigate("pastries/dessertsReducer/קינוחים קפואים") }}>קינוחים קפואים</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { navigate("pastries/dessertsReducer/טארטלים") }}>טארטלים</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { navigate("pastries/dessertsReducer/קינוחי כוסות") }}>קינוחי כוסות</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => { navigate("pastries/dessertsReducer/all") }}>הכל</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="עוגיות ומתוקים"
                    id="collasible-nav-dropdown"
                    show={currentDropdown == "עוגיות ומתוקים" && showSubCategories}
                    onMouseEnter={() => { setCurrentDropdown("עוגיות ומתוקים"); showDropdown(); }}
                    onMouseLeave={hideDropdown}>
                    <NavDropdown.Item onClick={() => { navigate("pastries/dessertsReducer/קינוחי מוס וקרם אישיים") }}>קינוחי מוס וקרם אישיים</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { navigate("pastries/cookiesAndsweetsReducer/חטיפי שוקולד") }} >חטיפי שוקולד</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { navigate("pastries/cookiesAndsweetsReducer/עוגיות") }} >עוגיות</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { navigate("pastries/cookiesAndsweetsReducer/ממתקים תוצרת בית") }} >ממתקים תוצרת בית</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { navigate("pastries/cookiesAndsweetsReducer/חיתוכיות וריבועיות") }} >חיתוכיות וריבועיות</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => { navigate("pastries/cookiesAndsweetsReducer/all") }} >הכל</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="חגים"
                    id="collasible-nav-dropdown"
                    show={currentDropdown == "חגים" && showSubCategories}
                    onMouseEnter={() => { setCurrentDropdown("חגים"); showDropdown(); }}
                    onMouseLeave={hideDropdown}>
                    <NavDropdown.Item onClick={() => { navigate("pastries/chagim/חגי תשרי") }} >חגי תשרי</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { navigate("pastries/chagim/פסח") }} >פסח</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => { navigate("pastries/chagim/שבועות") }} >שבועות</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        {showLogin && <Register></Register>}
        {showAd && <Advertisement></Advertisement>}
      </div>
      {scrollTop && <button className='scroll-button' onClick={() => window.scrollTo(0, 0)} title="חזרה ללמעלה"><FiArrowUp></FiArrowUp></button>}
    </>

  );
}
