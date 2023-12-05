import BSI from '../Assets/bsi 1.png';
import ANDMNTAU from '../Assets/Group 72.png';
import BINUS from '../Assets/binus 1.png';

function Footer() {
  return (
    <ul className="list-unstyled d-flex footer-container mb-2">
      <li className="mt-4">
        <p>Powered By</p>
      </li>
      <li className="mt-1">
        <img src={BSI} alt="bsi" className="img-fluid" style={{ width: '120px', height: '3vh' }} />
      </li>
      <li className="mt-1">
        <img src={ANDMNTAU} alt="andamantau" className="img-fluid" style={{ width: '125px', height: '5vh' }} />
      </li>
      <li>
        <img src={BINUS} alt="binus" className="img-fluid" style={{ width: '125px', height: '8vh' }} />
      </li>
    </ul>
  );
}

export default Footer;
