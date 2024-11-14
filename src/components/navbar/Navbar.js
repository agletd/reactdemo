import {NavLink} from "react-router-dom";
import BtnDarkMode from "../buttonDarkMode/btnDarkMode";
import "./style.css";

const Navbar = () => {
    const activeLink = "nav-list__link nav-list__link--active"
    const normalLink = "nav-list__link";
    return ( 
        <nav className="nav">
          <div className="container">
              <div className="nav-row">
                <NavLink to="/" className="logo">
                    <strong>Freelancer</strong> portfolio
                </NavLink>

                <BtnDarkMode/>

                  <ul className="nav-list">
                      <li className="nav-list__item"><NavLink className={({isActive}) => isActive ? activeLink : normalLink} to="/">Home</NavLink></li>
                      <li className="nav-list__item"><NavLink className={({isActive}) => isActive ? activeLink : normalLink} to="/projects">Projects</NavLink></li>
                      <li className="nav-list__item"><NavLink className={({isActive}) => isActive ? activeLink : normalLink} to="/contacts">Contacts</NavLink></li>
                  </ul>
              </div>
          </div>
        </nav>
     );
}
 
export default Navbar;