import cookiesImg from '../Images/cookies&sweets/107/brownie-popsicles4.jpg';
import dessertsImg from '../Images/desserts/210/malabi4.jpg';
import chagimImg from '../Images/cakes/25/Shavuotparty4.jpg';
import breadsImg from '../Images/breads&salty/314/focaccia1.jpg';
import cakesImg from '../Images/cakes/18/easy-cheesecake3.jpg';
import placeholderImg from '../Images/תמונה באיכות נמוכה.jpg';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    return (

        <div className='home'>
            <div className="img-hover-zoom"
                onClick={() => { navigate("/pastries/dessertsReducer/all") }}>
                <LazyLoadImage src={dessertsImg}
                    className="img"
                    alt="Image Alt"
                    placeholderSrc={placeholderImg}
                    effect="blur"
                />
                <h2>קינוחים</h2>
            </div>
            <div className="img-hover-zoom"
                onClick={() => { navigate("/pastries/cookiesAndsweetsReducer/all") }}>
                <LazyLoadImage src={cookiesImg}
                    className="img"
                    alt="Image Alt"
                    placeholderSrc={placeholderImg}
                    effect="blur"
                />
                <h2>מתוקים</h2>
            </div>
            <div className="img-hover-zoom"
                onClick={() => { navigate("/pastries/chagim/all") }}>
                <LazyLoadImage src={chagimImg}
                    className="img"
                    alt="Image Alt"
                    placeholderSrc={placeholderImg}
                    effect="blur"
                />
                <h2 style = {{ padding: "0 35%"}}>חגים</h2>
            </div>
            <div className="img-hover-zoom"
                onClick={() => { navigate("/pastries/cakesReducer/all") }}>
                <LazyLoadImage src={cakesImg}
                    className="img"
                    alt="Image Alt"
                    placeholderSrc={placeholderImg}
                    effect="blur"
                />
                <h2 style = {{ padding: "0 35%"}}>עוגות</h2>
            </div>
            <div className="img-hover-zoom"
                onClick={() => { navigate("/pastries/breadsAndSaltyReducer/all") }}>
                <LazyLoadImage src={breadsImg}
                    className="img"
                    alt="Image Alt"
                    placeholderSrc={placeholderImg}
                    effect="blur"
                />
                <h2 style = {{ padding: "0 33%"}}>מלוחים</h2>
            </div>

        </div>

    )
}
export default HomePage;