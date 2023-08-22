import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ImagesComponent from './slider/ImagesComponent';
import emailjs from '@emailjs/browser';
import ReactTypingEffect from 'react-typing-effect';
import InputChildren from 'react-input-children/lib';

import { Image1, Image10, Image11, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9 } from './slider/children';
import { Spinner } from 'react-bootstrap';

export default function About() {
    function sendEmail() {
        console.log(document.querySelector('#response'));
        emailjs.sendForm('service_zzq2sps', "template_myr2atl", document.querySelector('#response'), '3FyxoORFNa1dy-j-q')
            .then(function (response) {
                setSended(1);
                console.log('SUCCESS!', response.status, response.text);
                document.querySelector('#response').reset();
            }, function (error) {
                setSended(2);
                console.log('FAILED...', error);
            });

    }
    const [clicked, setClicked] = useState(false);
    //לפני שליחה - 0, הצלחה - 1, כשלון - 2
    const [sended, setSended] = useState(0);
    const [input1Text, setInput1Text] = useState(false);
    const [isFirstTime1, setIsFirstTime1] = useState(true);
    const [input2Text, setInput2Text] = useState(false);
    const [isFirstTime2, setIsFirstTime2] = useState(true);
    const [input3Text, setInput3Text] = useState(false);
    const [isFirstTime3, setIsFirstTime3] = useState(true);
    const [input4Text, setInput4Text] = useState(false);
    const [isFirstTime4, setIsFirstTime4] = useState(true);
    const [input5Text, setInput5Text] = useState(false);
    const [isFirstTime5, setIsFirstTime5] = useState(true);
    return (
        <div dir="rtl" className='about'>
            <div style={{ width: "60vw", margin: "6vh auto", padding: "2vh" }}>

                <h1>אז איך התחלנו את הפרויקט?</h1>
                <hr></hr>

                <p>
                    כשהתחלנו לעבוד על האתר התלבטנו רבות איזה מוצרים למכור,
                    בתחילה רצינו לעשות אתר אמיתי של תכשיטים שיעלה לענן
                    (ואפילו היתה לנו לקוחה)
                    התחלנו לבנות את האתר,
                    אך מספר נקודות הפריעו לנו להמשיך,
                    כמו איכות התמונות והכמות המצומצמת של המידע.
                    ואז צץ לנו רעיון - אתר לקניית מתכונים אמיתיים,
                    ככה יש לנו תמונות יפות, תאורים עסיסיים ובעיקר משהו אמיתי לקבל בסוף
                </p>

                <h1>מה היו הקשיים בדרך?</h1>
                <hr></hr>

                <p>
                    הפרויקט לא היה כל כך תמים כמו שהוא היה נראה בהתחלה,
                    לדוגמא העובדה שלא השתמשנו בDB חיצוני אלא בנינו אותו מאפס
                    כולל הפעולות של חיבורים שונים ומשונים היתה מורכבת ולקחה זמן רב,
                    תכננו גם לצרף למייל תמונות מתאימות וכן מתכון בקובץ מצורף
                    אבל נדרש מנוי פרימיום (לאתר emailjs), רצינו גם כפתור נגישות,
                    אפשרות לבחירת שפה ועוד מלא חלומות שהזמן לא אפשר.
                    היו עוד שלל בעיות רבות ומגוונות שלכל אחד פתרון אחר מעניין אבל לא נכביד עליכם...
                </p>

                <h1>מה הכי אהבנו לעשות?</h1>
                <hr></hr>

                <p>
                    הכי נהנינו מהעבודה המשותפת יומם ולילה דרך המחשב,
                    ידענו רגעי צחוק, בכי, אושר, תסכול וסיפוק - בקיצור - נדנדת רגשות אמיתית,
                    למדנו להכיל, לזרום ולהבין מה השניה מתכוונת גם בלי שתדבר .<br></br>
                    התמונות המגרות מלאו את הצורך שלנו באכילה
                    והאתגרים האינסופיים יחד עם הסיפוק - דחו את הצורך בשינה.
                    נהנינו מכל התוספות הקטנות ובמיוחד ממה שאנחנו עושות עכשיו...
                </p>

                <h1>אז מה יש פה בסוף?</h1>
                <hr></hr>

                <p>אתר לרכישת מתכונים שמגיעים למייל,
                    יש גם אפשרות לקנות את ספר המתכונים שלנו.
                    המתכונים כולם אמיתיים וכן התאורים והתמונות,
                    כדי לקנות יש להרשם לאתר, ההרשמה היא כמעט אמיתית לגמרי
                    (כלומר אין צורך להרשם בכל הרצה של הפרויקט)
                    יש אפשרות הסרה.
                    בנוסף לקטגוריות השונות יש אפשרות חיפוש כדי להקל.
                    לכל מוצר יש דף עם תאור מורחב,
                    יש רשימת משאלות למי שמעונין לשמור מתכונים מסוימים למאוחר יותר
                    וכמובן - אל תפספסו את המבצע - מתכון שלישי חינם!!
                </p>
            </div>
            <ImagesComponent>
                <Image1></Image1>
                <Image2></Image2>
                <Image3></Image3>
                <Image4></Image4>
                <Image5></Image5>
                <Image6></Image6>
                <Image7></Image7>
                <Image8></Image8>
                <Image9></Image9>
                <Image10></Image10>
                <Image11></Image11>
            </ImagesComponent>

            <hr ></hr>
            <h3 id='keep-in-touch'>נשמח לשמוע תגובות</h3>

            <Form id='response' style={{ width: "50vw", margin: "3vh auto", textAlign: "right", backgroundColor: "white" }}>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <InputChildren type="text" required={true} name='name' disabled={input1Text} className='form-control'
                        onClick={() => {
                            if (isFirstTime1) {
                                setIsFirstTime1(false);
                                setInput1Text(true);
                                setTimeout(() => { setInput1Text(false); }, 3400);
                            }
                        }}
                    >
                        {input1Text &&
                            <div className='wrapper-typing-effect' >
                                <ReactTypingEffect
                                    className='typing-effect'
                                    text="הכנס שם מלא"
                                    speed="200"
                                    typingDelay="100"
                                    eraseDelay="200"
                                    eraseSpeed="50"
                                /></div>
                        }
                    </InputChildren>

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <InputChildren type="email" required={true} name='email' disabled={input2Text} className='form-control'
                        onClick={() => {
                            if (isFirstTime2) {
                                setIsFirstTime2(false);
                                setInput2Text(true);
                                setTimeout(() => { setInput2Text(false); }, 4200);
                            }
                        }}
                    >
                        {input2Text &&
                            <div className='wrapper-typing-effect' >
                                <ReactTypingEffect
                                    className='typing-effect'
                                    text="הכנס כתובת מייל"
                                    speed="200"
                                    typingDelay="100"
                                    eraseDelay="200"
                                    eraseSpeed="50"
                                /></div>
                        }
                    </InputChildren>
                </Form.Group>
                <Form.Group className="mb-3" style={{ position: "relative" }}>
                    <Form.Control as='textarea' rows={5} required={true} name='message1'
                        disabled={input3Text}
                        className='form-control'
                        onClick={() => {
                            if (isFirstTime3) {
                                setIsFirstTime3(false);
                                setInput3Text(true);
                                setTimeout(() => { setInput3Text(false); }, 3400);
                            }
                        }}>
                    </Form.Control>

                    {input3Text &&
                        <div className='wrapper-typing-effect' style={{ position: "absolute", top: "1vh" }}>
                            <ReactTypingEffect
                                className='typing-effect'
                                text="דברים שאהבת"
                                speed="200"
                                typingDelay="100"
                                eraseDelay="200"
                                eraseSpeed="50"
                            /></div>
                    }
                </Form.Group>
                <Form.Group className="mb-3" style={{ position: "relative" }}>
                    <Form.Control as='textarea' rows={5} required={true} name='message2'
                        disabled={input4Text}
                        className='form-control'
                        onClick={() => {
                            if (isFirstTime4) {
                                setIsFirstTime4(false);
                                setInput4Text(true);
                                setTimeout(() => { setInput4Text(false); }, 3500);
                            }
                        }}>
                    </Form.Control>

                    {input4Text &&
                        <div className='wrapper-typing-effect' style={{ position: "absolute", top: "1vh" }}>
                            <ReactTypingEffect
                                className='typing-effect'
                                text="הצעות לשיפור"
                                speed="200"
                                typingDelay="100"
                                eraseDelay="200"
                                eraseSpeed="50"
                            /></div>
                    }
                </Form.Group>
                <Form.Group className="mb-3" style={{ position: "relative" }}>
                    <Form.Control as='textarea' rows={3} required={true} name='message3'
                        disabled={input5Text}
                        className='form-control'
                        onClick={() => {
                            if (isFirstTime5) {
                                setIsFirstTime5(false);
                                setInput5Text(true);
                                setTimeout(() => { setInput5Text(false); }, 6300);
                            }
                        }}>
                    </Form.Control>
                    {input5Text &&
                        <div className='wrapper-typing-effect' style={{ position: "absolute", top: "1vh", margin: "0 15vw", width: "20vw" }}>
                            <ReactTypingEffect
                                className='typing-effect'
                                text=" שאלות, בקשות או כל דבר אחר"
                                speed="150"
                                typingDelay="100"
                                eraseDelay="200"
                                eraseSpeed="50"
                            /></div>
                    }
                </Form.Group>
            </Form>
            <Button variant="dark" style={{ marginBottom: "3vh" }} onClick={() => {
                setClicked(true);
                sendEmail();
                setTimeout(() => { setClicked(false); setSended(0); }, 8000);

            }}>
                {(clicked && sended === 0) && <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />}
                {(!clicked) ? "שלח" : ((sended === 1) ? "נשלח בהצלחה" : (sended === 2) ? "מייל לא תקין" : " שולח ")}
            </Button>

        </div>
    )
};