import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GiPadlock } from 'react-icons/gi';

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
            <div className="centered-icon">
                <GiPadlock className="padlock-icon"/>
            </div>
            <h1>Lupa Kata Sandi</h1>
            <p>Masukkan email dan kami akan mengirim tautan untuk kembali ke akun anda</p>
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
                <button type="submit">Kirim Tautan Masuk</button>
                <button onClick={handleGoBack}>Kembali ke Halaman Masuk</button>
            </form>
            </section>
        </div>
    </div>
    );
}

export default ForgotPassword;