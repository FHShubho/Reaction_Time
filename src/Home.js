import fast_icon from './images/thunder.png';
import {useState} from 'react';


const Home = () => {
    const [stage, setStage] = useState(0);
    const [bgColor, setBgColor] = useState('Transparent');
    const [showMessage, setShowMesage] = useState();
    const [showMessage2, setShowMesage2] = useState();
    const [stageTwoState, setStageTwoState] = useState(false);
    const [earlyClick, setEarlyClick] = useState(false);
    let [startTime, setStartTime] = useState();
    const [scores, setScores] = useState([]);

    const runTest = () => {
        setStage(1);
        //console.log(earlyClick, stageTwoState);

        if (!earlyClick && stageTwoState) {
            let endTime = Date.now();
            let result = (endTime - startTime) / 1000;
            setShowMesage('Your Reaction time is ' + result + 's.');
            setShowMesage2('Click to try again 💁‍♂️')
            setStageTwoState(false)
            //console.log(endTime, startTime, result);
            let s = scores;
            s.push(result);
            setScores(s);
            localStorage.setItem('score', scores);
            console.log(scores);
        }

        else if(earlyClick) {
            setBgColor('#778899');
            setShowMesage('Too early!');
            setShowMesage2('Click to try again 🤷‍♂️');
            setEarlyClick(false);
            clearTimeout();
            console.log(earlyClick, stageTwoState);
            var highestTimeoutId = setTimeout();
            for (var i = 0 ; i < highestTimeoutId ; i++) {
                clearTimeout(i); 
            }
        }

        else if(!earlyClick && !stageTwoState) {
            setBgColor('#F08080');
            setShowMesage('Wait for color to turn Bisque ⏳');
            setShowMesage2('');
            let value = (2 - 0.5) + (Math.random() * ((8 - 2) + 1))
            value = Math.ceil(value) * 1000;
            setEarlyClick(true);
            console.log(value);
            setTimeout( () => {
                setBgColor('bisque');
                setShowMesage('Click ⚡');
                setEarlyClick(false);
                setStageTwoState(true);
                setStartTime(Date.now());
                console.log(startTime);
            }, value);
        }
    }

    if(stage === 1) {
        return (
            <div className="homescreen" style={{backgroundColor: bgColor}} onClick={runTest}>
                <div className="screen_text">
                    {/* <img src={fast_icon} alt="Thunder"/> */}
                    <h1> {showMessage} </h1> 
                    <br></br>
                    <h1> {showMessage2} </h1>
                </div>
            </div>
        );
    }

    else {
        return (  
            <div className="homescreen" >
                <div className="screen_text">
                    <img src={fast_icon} alt="Thunder"/>
                    <h1>When the color changes from Grey to Bisque <br></br> Click as fast as you can</h1>
                    <h2>Repeat as many times as you want and check your average resoponse time in History 👈</h2>
                    <br></br>
                    <button className="btn-grad" onClick={runTest}>Ready!</button>
                </div>
            </div>
        );
    }
}
 
export default Home;