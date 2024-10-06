import logo from '../../assets/images/output.png'
import { Outlet, Link } from 'react-router-dom' 
import './Navbar.css'

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <img src={logo} alt="Logo" /> 
        <ul className="navlink">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/auth">Sign In</Link></li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
}
