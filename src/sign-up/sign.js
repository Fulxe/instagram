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
            <p className="Learn more">
              People who use our service may have uploaded your contact
              information to Instagram. Learn More
            </p>
          </div>
        </div>
        <div className="second"></div>
        <div className="third"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Sign;
