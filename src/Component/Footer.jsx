import BSI from '../Assets/bsi 1.png';
import ANDMNTAU from '../Assets/Group 72.png';
import BINUS from '../Assets/binus 1.png';

function Footer() {

    return(
            <ul className="footer-container">
                <li>
                    <p>Powered By</p>
                </li>
                <li>
                    <img src={BSI} alt="bsi" style={{width : '120px', height : '3vh', verticalAlign: 'middle'}}/>
                </li>
                <li>
                    <img src={ANDMNTAU} alt="andamantau" style={{width : '125px', height : '5vh', verticalAlign: 'middle'}}/>
                </li>
                <li>
                    <img src={BINUS} alt="binus" style={{width : '125px', height : '10vh', verticalAlign: 'middle'}}/>
                </li>
            </ul>
    );
}

export default Footer;