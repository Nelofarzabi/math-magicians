import { Link } from 'react-router-dom';
import './styles/nav.css';

export default function Menu() {
  return (
    <>
      <div className="navbar">
        <nav className="nav">
          <h1 className="logo">Math Magicians</h1>
          <ul className="nav-items">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/calculator">Calculator</Link></li>
            <li className="nav-item"><Link to="/quote">Quote</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}
