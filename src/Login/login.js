import "./login.css";
import Logo from "./Instagram_logo.svg.png";
import Fc from "./124010.png";
import Nuur from "./Screenshot 2022-12-27 170322.png";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";


function Login() {
  return (
    <div className="Login">
      <div className="login-center">
        <div className="login-img">
          <img src={Nuur} />
        </div>
        <div className="login-up">
          <div className="login">
            <img src={Logo} />
            <div className="login-input">
              <input placeholder="Phone number, username, or email" />
              <input placeholder="Password" />
            </div>
              <button value={"log in"} href="../home" >Log in</button>
            <div className="login-hr">
              <div></div>
              <p>OR</p>
              <div></div>
            </div>
            <div className="login-social">
              <img src={Fc} />
              <p>Log in with facebook</p>
            </div>
            <div className="login-pass">Forgot password?</div>
          </div>
          <div className="logup">
            <p>Don't have an account?</p>
            <Link to="/Sign">Sign up</Link>
          </div>
          <div className="get-app">
            <div>Get the app.</div>
            <div className="get-app2">
              <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" />
              <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
