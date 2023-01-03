import "./sign.css";
import Footer from "../footer/footer";
import Logo from "./Instagram_logo.svg.png";
import Fc from "./124010.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function Sign() {
  // const navigate = useNavigate();
  const [value, setValue] = useState({});

  const create = async () => {
    try {
      // console.log(value);
      await axios.post(`http://localhost:1000`, {
        firstName: value.username,
        email: value.email,
        password: value.password,
      });
      setValue({});
      // naviga
    } catch (error) {
      console.log(error);
    }
  };
  // function log() {
  //   if (value.email && value.password && value.username) {
  //     navigate("/home");
  //   } else {
  //     return alert("nothing");
  //   }
  //   setValue();
  // }
  // const [username , setusername] = useState('');
  // const [password , setpassword] = useState('');
  // const [email , setemail] = useState('');

  // useEffect(() => {
  //   axios.get("http://localhost:1000")
  //   .then(
  //     (res) => {
  //       console.log(res);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }, []);

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
              <input
                placeholder="Email"
                type={"email"}
                onChange={(e) => setValue({ ...value, email: e.target.value })}
              />
              <input
                placeholder="Username"
                type={"username"}
                onChange={(e) =>
                  setValue({ ...value, username: e.target.value })
                }
              />
              <input
                placeholder="Password"
                type={"password"}
                onChange={(e) =>
                  setValue({ ...value, password: e.target.value })
                }
              />
            </div>
            <p className="learn-more">
              People who use our service may have uploaded your contact
              information to Instagram. Learn More
            </p>
            <p className="privacy">
              By signing up, you agree to our Terms , Privacy Policy and Cookies
              Policy .
            </p>
            <button className="sign-fc" onClick={() => create()}>
              Sign up
            </button>
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
