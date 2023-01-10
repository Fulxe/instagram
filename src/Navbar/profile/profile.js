import "./profile.css";
import Pro from "../term-bg-1-3d6355ab.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [settings, setSettings] = useState(false);

  function logout() {
    navigate("/");
  }

  return (
    <div className="profile">
      <div className="pro-center">
        <div className="pro-up">
          <div className="up-left">
            <input
              type="file"
              class="filepond"
              name="filepond"
              accept="image/png, image/jpeg, image/gif"
            />
          </div>
          <div className="up-right">
            <div className="first">
              <p></p>
              <button>Edit profile</button>
              <svg
                onClick={() => setSettings(!show)}
                aria-label="Options"
                class="_ab6-"
                color="#fafafa"
                fill="#fafafa"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <circle
                  cx="12"
                  cy="12"
                  fill="none"
                  r="8.635"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></circle>
                <path
                  d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
            <div className="second">
              <p>posts</p>
              <p>followers</p>
              <p>following</p>
            </div>
            <div className="third">
              <p>Fulxe</p>
            </div>
          </div>
        </div>
        <div className="pro-posts">
          <button onClick={() => setShow(!show)}>Add post</button>
          <div className="post"></div>
        </div>
      </div>
      {show && (
        <div className="add">
          <div className="add-post">
            <input className="Name" placeholder="Name"></input>
            <input className="Description" placeholder="description"></input>
            <input className="Image" type={Image} placeholder="image"></input>
            <button>Post</button>
            <button onClick={() => setShow(false)}>Cancel</button>
          </div>
        </div>
      )}
      {settings && (
        <div className="Settings">
          <div className="settings-center">
            <button>Change password</button>
            <button>QR Code</button>
            <button>Apps and Websites</button>
            <button>Notifications</button>
            <button>Privacy and security</button>
            <button>Supervision</button>
            <button>Login activity</button>
            <button>Emails from Instagram</button>
            <button>Report a problem </button>
            <button onClick={() => logout()}>Log out</button>
            <button onClick={() => setSettings(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
