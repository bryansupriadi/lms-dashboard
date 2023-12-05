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
      <div className="login-page-container d-flex flex-column align-items-center justify-content-center text-center">
        <img src={Sun} alt="sun" className="sun-img position-absolute ms-auto" style={{ width: "140px", height: "140px", marginBottom: "50vh", left: "30vh" }} />
        <h1 className="display-6 mb-5" style={{marginBottom : "80px"}}>Selamat Datang!</h1>
        <div className="login-form-container mb-5">
        <form>
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label ">Email</label>
            <input
              type="email"
              className="form-control border border-black"
              id="email"
              value={email}
              onChange={handleEmailChange}
              style={{width : "300px"}}
            />
          </div>
          <div className="mb-5 text-start">
            <label htmlFor="password" className="form-label">Kata Sandi</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control border border-black"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                style={{width : "300px"}}
              />
              <span onClick={toggleShowPassword} className="password-icon">
                {showPassword ? (
                  <AiOutlineEye style={{ opacity: "0.6" }} />
                ) : (
                  <AiOutlineEyeInvisible style={{ opacity: "0.6" }} />
                )}
              </span>
            </div>
          </div>
          <button type="button" className="btn btn-primary " style={{width: "150px"}} onClick={handleSubmit}>
            Masuk
          </button>
        </form>
      </div>
      <Footer />
      <img src={Saly} alt="saly" className="saly-img" />
    </div>
  );
}

export default LoginForm;
