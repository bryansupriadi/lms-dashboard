import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Sun from '../Assets/Sun.png';
import Saly from '../Assets/Saly1.png';
import Footer from "./Footer";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = () => {
    navigate("/dashboard")
  }

  return (
    <div className="App">
      <div className="login-page-container">
        <img src={Sun} alt="sun" className="sun-img"/>
        <h1>Selamat Datang!</h1>
        <section className="login-form-container">
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
            <div className="password-input">
                <label htmlFor="password">Kata Sandi</label>
                <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <span onClick={toggleShowPassword} className="password-icon">
                    {showPassword ? <AiOutlineEye style={{opacity: "0.6"}} /> : <AiOutlineEyeInvisible style={{opacity: "0.6"}} />}
                </span>
            </div>
                <h5 style={{ margin: "10px 0 30px 10px" }}>
                    Lupa kata sandi?
                    <Link
                        to="/forgot-password"
                        style={{ textDecoration: "none", fontWeight: "lighter", marginLeft: "5px"}}
                    >
                        Hubungi kami
                    </Link>
                </h5>
            <button onClick={handleSubmit}>Masuk</button>
          </form>
        </section>
        <Footer/>
        <img src={Saly} alt="saly" className="saly-img"/>
      </div>
    </div>
  );
}

export default LoginForm;
