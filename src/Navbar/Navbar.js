import "./Navbar.css";
import Logo from "./-11598646248tgqsowbvzg.png";

function Navbar() {
  return (
    <div className="main">
      <div className="up">
        <img src={<Logo />} />
      </div>
      <div className="center"></div>
      <div className="down"></div>
    </div>
  );
}

export default Navbar;
