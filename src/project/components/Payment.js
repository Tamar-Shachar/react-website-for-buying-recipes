import { Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import { emptying, removePastry } from '../reduxProject/actions/updateLists';
export default function Payment() {
  const { total } = useParams();
  const { discount } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customer = useSelector((state) => state.customerReducer);
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();
  const email = useRef();
  const shoppingCart = useSelector((state) => state.shoppingCartReducer);
  const book = useSelector((state) => state.bookReducer);
  let recipeToSend;
  let mailContent = "";
  let receiptContent = "";
  let isOnlyBook = false;
  let isThereBook = false;

  if (shoppingCart.length === 1 && shoppingCart[0].id === 400) {
    isOnlyBook = true;
  }
  async function readRecipe(recipe) {
    await fetch(recipe)
      .then((r) => r.text())
      .then(text => {
        mailContent += `${text}\n\n\n`;
      });
  }

  function sendReceipt() {
    recipeToSend = {
      customerEmail: email.current.value,
      customerName: customer.firstName,
      message: receiptContent
    }
    emailjs.send('service_zzq2sps', 'template_n77ed86', recipeToSend, '3FyxoORFNa1dy-j-q')
      .then((result) => {
        setSended(1);
        setTimeout(() => { 
            dispatch(emptying());
            navigate("/home");
        },
           10000);
        console.log("receipt sended succesfully "+ result.text);
      }, (error) => {
        setSended(2);
        console.log(error.text);
      });
  }

  async function createMessage() {
    for (const pastry of shoppingCart) {
      if (pastry.id === 400) {
        let qty = 10 - book.qty;
        receiptContent = `אישור רכישת ספר "אופות לכם  הפתעות - ספר מתכוני בוטיק", כמות:${qty},
         התשלום בסך: ₪${qty * book.price} המשלוח יגיע תוך 7-14 ימי עסקים`
        isThereBook = true;
      }
      else {
        mailContent += `--- ${pastry.name} ---\n\n`;
        await readRecipe(pastry.recipe);
      }
    }
  }


  function sendEmail() {

    recipeToSend = {
      customerEmail: email.current.value,
      customerName: customer.firstName,
      message: mailContent
    }
    emailjs.send('service_zzq2sps', 'template_n77ed86', recipeToSend, '3FyxoORFNa1dy-j-q')
      .then((result) => {
        setSended(1);
        setTimeout(() => {
          dispatch(emptying());
          navigate("/home");
        },
          10000);
        console.log("recipes sended succefully"+result.text);
      }, (error) => {
        setSended(2);
        console.log(error.text);
        console.log()
      });
  };

  const [clicked, setClicked] = useState(false);
  //לפני שליחה - 0, הצלחה - 1, כשלון - 2
  const [sended, setSended] = useState(0);

  createMessage()
  return (

    <div className="payment-container" dir='rtl'>
      <div className="details">

        <label>כתובת מייל לשליחת המתכונים<input className="form-control" type="email"
          defaultValue={customer.email} ref={email} /></label>
        <h5><b>פרטי תשלום</b></h5>
        <p style={{ margin: "0" }}>מלא את פרטי כרטיס האשראי</p>
        <div className='credit-card-details'>
          <PaymentInputsWrapper {...wrapperProps} dir='ltr'>
            <svg {...getCardImageProps({ images })} />
            <input {...getCardNumberProps()} className="form-control" placeholder='מספר כרטיס' />
          </PaymentInputsWrapper>
          <input {...getExpiryDateProps()} className="form-control"  />
          <input {...getCVCProps()} className="form-control"  />
          <input className="form-control" type="text" required={true} placeholder='שם בעל הכרטיס'
            defaultValue={customer.firstName + "  " + customer.lastName} />
          <Button variant="dark" size="lg"
            onClick={() => {
              setClicked(true);
              isOnlyBook ? sendReceipt() : sendEmail();
              if (!isOnlyBook && isThereBook) { sendReceipt(); }
              setTimeout(() => {
                setSended(0);
                setClicked(false);
              },
                7000);
            }}>
            {(clicked && sended === 0) && <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />}
            {(!clicked) ? "שלם" : ((sended === 1) ? "התקבל בהצלחה" : (sended === 2) ? "בעייה בשליחת הנתונים" : " טוען ")}
          </Button>


        </div>

      </div >
      <div className="d-flex flex-column">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <p>מחיר לפני מע"מ</p>
          <p><span className="fas fa-dollar-sign"></span>₪{(total * 0.83).toFixed(2)}</p>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <p>מע"מ</p>
          <p><span className="fas fa-dollar-sign"></span>₪{(total * 0.17).toFixed(2)}</p>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <p className="fw-bold">מחיר לאחר מע"מ</p>
          <p className="fw-bold"><span className="fas fa-dollar-sign"></span>₪{total}.00</p>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <p className="fw-bold" style={{ color: "red" }}>הנחה<span> (מוצר שלישי חינם)</span></p>
          <p className="fw-bold" style={{ color: "red" }}><span className="fas fa-dollar-sign"></span>{discount}.00- ₪</p>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <p className="fw-bold">סה"כ</p>
          <p className="fw-bold"><span className="fas fa-dollar-sign"></span>₪{(total - discount).toFixed(2)}</p>
        </div>


      </div>
    </div >
  )
}