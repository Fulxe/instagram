import "./Navbar.css";
import Logo from "./Logo.jpg";
import { Outlet, Link } from "react-router-dom";
import Pro from "./term-bg-1-3d6355ab.jpg";
import { useState } from "react";

function Navbar() {
  const [more, setMore] = useState();
  return (
    <div style={{ display: "flex" }}>
      <div className="main">
        <div className="up">
          <img src={Logo} />
        </div>
        <div className="center">
          <div>
            <svg
              aria-label="Home"
              class="_ab6-"
              color="#fafafa"
              fill="#fafafa"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path>
            </svg>
            <Link to="/Home">Home</Link>
          </div>
          <div>
            <svg
              aria-label="Search"
              class="_ab6-"
              color="#fafafa"
              fill="#fafafa"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="16.511"
                x2="22"
                y1="16.511"
                y2="22"
              ></line>
            </svg>
            <p>Search</p>
          </div>
          <div>
            <svg
              aria-label="Explore"
              class="_ab6-"
              color="#fafafa"
              fill="#fafafa"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <polygon
                fill="none"
                points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
              <polygon
                fill-rule="evenodd"
                points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
              ></polygon>
              <circle
                cx="12.001"
                cy="12.005"
                fill="none"
                r="10.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></circle>
            </svg>
            <p>Explore</p>
          </div>
          <div>
            <svg
              aria-label="Reels"
              class="_ab6-"
              color="#fafafa"
              fill="#fafafa"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <line
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                x1="2.049"
                x2="21.95"
                y1="7.002"
                y2="7.002"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="13.504"
                x2="16.362"
                y1="2.001"
                y2="7.002"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="7.207"
                x2="10.002"
                y1="2.11"
                y2="7.002"
              ></line>
              <path
                d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <path
                d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <p>Reels</p>
          </div>
          <div>
            <svg
              aria-label="Messenger"
              class="_ab6-"
              color="#fafafa"
              fill="#fafafa"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="1.739"
              ></path>
              <path
                d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <p>Messages</p>
          </div>
          <div>
            <svg
              aria-label="Notifications"
              class="_ab6-"
              color="#fafafa"
              fill="#fafafa"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
            </svg>
            <p>Notifications</p>
          </div>
          <div>
            <svg
              aria-label="New post"
              class="_ab6-"
              color="#fafafa"
              fill="#fafafa"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="6.545"
                x2="17.455"
                y1="12.001"
                y2="12.001"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="12.003"
                x2="12.003"
                y1="6.545"
                y2="17.455"
              ></line>
            </svg>
            <p>Create</p>
          </div>
          <div>
            <img src={Pro} />
            <Link to="/Profile">Profile</Link>
          </div>
        </div>
        <div className="down">
          {more && (
            <div className="more">
              <div>
                <p>Settings</p>
                <svg
                  aria-label="Settings"
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
              <div>
                <p>Saved</p>
                <svg
                  aria-label="Saved"
                  class="_ab6-"
                  color="#fafafa"
                  fill="#fafafa"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <polygon
                    fill="none"
                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></polygon>
                </svg>
              </div>
              <div>
                <p>Switch appearance</p>
                <svg
                  aria-label="Theme icon"
                  class="_ab6-"
                  color="#fafafa"
                  fill="#fafafa"
                  height="24"
                  role="img"
                  viewBox="0 0 16 16"
                  width="24"
                >
                  <path
                    d="M8.05 16C3.61 16 0 12.39 0 7.95 0 3.99 2.83.65 6.72 0c.49-.03.87.22.99.6.11.38-.05.78-.41 1-1.7.93-2.75 2.69-2.75 4.61 0 2.89 2.35 5.25 5.25 5.25a5.25 5.25 0 0 0 4.61-2.74c.19-.37.61-.54 1.01-.4.42.14.66.56.58 1.01A8.044 8.044 0 0 1 8.05 16zM5.8 1.32c-2.78.93-4.73 3.56-4.73 6.63 0 3.85 3.13 6.99 6.99 6.99 3.04 0 5.66-1.93 6.61-4.72a6.301 6.301 0 0 1-4.87 2.31c-3.48 0-6.31-2.83-6.31-6.31-.01-1.93.86-3.71 2.31-4.9zm9.54 7.89s0 .01 0 0c0 .01 0 0 0 0z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div>
              <p>Your activity</p>
                <svg
                  aria-label="Your activity"
                  class="_ab6-"
                  color="#fafafa"
                  fill="#fafafa"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M12 1.505a10.5 10.5 0 11-7.424 17.924"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <polyline
                    fill="none"
                    points="8.893 15.108 12 12 12.012 12.012 12.012 5.793"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></polyline>
                  <circle cx="7.24" cy="2.651" r="1.125"></circle>
                  <circle cx="3.515" cy="5.83" r="1.125"></circle>
                  <circle cx="1.636" cy="10.353" r="1.125"></circle>
                  <circle cx="2.01" cy="15.235" r="1.125"></circle>
                </svg>
              </div>
              <div>
              <p>Report a problem</p>
                <svg
                  aria-label="Report a problem"
                  class="_ab6-"
                  color="#fafafa"
                  fill="#fafafa"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M18.001 1h-12a5.006 5.006 0 0 0-5 5v9.005a5.006 5.006 0 0 0 5 5h2.514l2.789 2.712a1 1 0 0 0 1.394 0l2.787-2.712h2.516a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5Zm3 14.005a3.003 3.003 0 0 1-3 3h-2.936a1 1 0 0 0-.79.387l-2.274 2.212-2.276-2.212a1 1 0 0 0-.79-.387H6a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h12a3.003 3.003 0 0 1 3 3Zm-9-1.66a1.229 1.229 0 1 0 1.228 1.228A1.23 1.23 0 0 0 12 13.344Zm0-8.117a1.274 1.274 0 0 0-.933.396 1.108 1.108 0 0 0-.3.838l.347 4.861a.892.892 0 0 0 1.77 0l.348-4.86a1.106 1.106 0 0 0-.3-.838A1.272 1.272 0 0 0 12 5.228Z"></path>
                </svg>
              </div>
              <div><p>Switch account</p></div>
              <div><p>Log out</p></div>
            </div>
          )}
          <div className="down-second" onClick={() => setMore(!more)}>
            <svg
              aria-label="Settings"
              class="_ab6-"
              color="#fafafa"
              fill="#fafafa"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="3"
                x2="21"
                y1="4"
                y2="4"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="3"
                x2="21"
                y1="12"
                y2="12"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="3"
                x2="21"
                y1="20"
                y2="20"
              ></line>
            </svg>
            <p>More</p>
          </div>
        </div>
      </div>
      <div style={{ height: "100vh" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
