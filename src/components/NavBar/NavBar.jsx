import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <ul className="navbar">
        {/* <li className="logo"><a href="#">LOGO</a></li> */}
        <li className="name">
          <a href="#">_KARTHIK_</a>
        </li>

        
        <div className="navbar-end">
          <li className="courses">
            <a href="#">Courses</a>
          </li>
          <li className="projects">
            <a href="#">Projects</a>
          </li>
          <li className="about">
            <a href="#">About</a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default NavBar;
