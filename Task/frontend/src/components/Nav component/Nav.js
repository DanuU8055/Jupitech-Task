import { Link } from "react-router-dom";

import "./Nav.css";
function Nav() {
  
      return(
<>
      <li className="list">
        <ul> <Link to="/">Home</Link></ul>
        <ul> <Link to="/manageuser">Manage User</Link></ul>
        <ul><Link to ="/register">Register</Link></ul>
      </li>
    </>
      )
    }
  

export default Nav;
