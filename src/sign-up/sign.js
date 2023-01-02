import "./sign.css";
import Footer from "../footer/footer";
import Logo from "./Instagram_logo.svg.png";
import Fc from "./124010.png";

function Sign() {
  return (
    <div className="Sign">
      <div className="sign-center">
        <div className="login-center">
          <div className="login">
            <img src={Logo} />
            <div className="description">
              <p>Sign up to see photos and videos from your friends.</p>
            </div>
            <button className="sign-fc">
              <img src={Fc} />
              <p>Log in with facebook </p>
            </button>
            <div className="login-hr">
              <div></div>
              <p>OR</p>
              <div></div>
            </div>
            <div className="login-input">
              <input placeholder="Email" />
              <input placeholder="Username" />
              <input placeholder="Password" />
            </div>
            <p className="learn-more">
              People who use our service may have uploaded your contact
              information to Instagram. Learn More
            </p>
            <p className="privacy">
              By signing up, you agree to our Terms , Privacy Policy and Cookies
              Policy .
            </p>
            <button className="sign-fc">Sign up</button>
          </div>
        </div>
        <div className="second">
          <p>Have an account?</p>
          <a href="/">Log in</a>
        </div>
        <div className="get-app">
          <div>Get the app.</div>
          <div className="get-app2">
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" />
            <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sign;
