import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GiPadlock } from 'react-icons/gi';
import Footer from "../Component/Footer";
import Saly from '../Assets/Saly1.png';
import Sun from '../Assets/Sun.png';

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleGoBack = () => {
    navigate("/");
  }

  return(
    <div className="App">
        <div className="forpass-page-container">
        <img src={Sun} alt="sun" className="sun-img"/>
            <div className="centered-icon">
                <GiPadlock className="padlock-icon"/>
            </div>
            <h1>Lupa Kata Sandi</h1>
            <span>Masukkan email dan kami akan mengirim tautan untuk kembali ke akun anda</span>
            <section className="forpass-form-container">
            <form>
                <div className="email-input">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                </div>
                <div className="button-container">
                  <button type="submit" className="send-link-button">Kirim Tautan Masuk</button>
                  <button onClick={handleGoBack} className="go-back-button">Kembali ke Halaman Masuk</button>
                </div>
            </form>
            </section>
            <Footer/>
            <img src={Saly} alt="saly" className="saly-img"/>
        </div>
    </div>
    );
}

export default ForgotPassword;