import "./login.css";
import Logo from "./Instagram_logo.svg.png";
import Fc from "./124010.png";
import SS from "./screenshot1.png"

function Login() {
  return (
    <div className="Login">
      <div className="login-center">
        <div className="login-img">
          <img src={SS} />
        </div>
        <div className="login-up">
          <div className="login">
            <img src={Logo} />
            <div className="login-input">
              <input placeholder="Phone number, username, or email" />
              <input placeholder="Password" />
            </div>
            <button>Log in</button>
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
            <p className="cursor">Sign up</p>
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
      <div className="login-footer">
        <div className="footer1">
          <p>Meta</p>
          <p>About</p>
          <p>Blog</p>
          <p>Jobs</p>
          <p>Help</p>
          <p>API</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Top account</p>
          <p>Locations</p>
          <p>Instagram Lite</p>
          <p>Contact Uploading & Non-Users</p>
        </div>
        <div className="footer2">
          <p>English</p>
          <p>© 2022 Instagram from Meta</p>
        </div>
      </div>
    </div>
  );
}

export default Login;