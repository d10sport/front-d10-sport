import { Link } from "react-router-dom";
import { LogoHeader } from "../../utils/icons/icons";
import './header_page.css';

export default function HeaderPage() {
  return (
    <nav id="nav_header" className="nav_page">
      <LogoHeader />
      <ul className="list__nav_page">
        <li className="items__nav">
          <Link to={'/about-us'} className="a-linear__nav_page text-sm">
            Quienes somos
          </Link>
        </li>
        <li className="items__nav">
          <Link to={'/services'} className="a-linear__nav_page text-sm">
            Servicios
          </Link>
        </li>
        <li className="items__nav">
          <Link to={'/contact'} className="a-linear__nav_page text-sm">
            Contactanos
          </Link>
        </li>
      </ul>
      <button className="login__nav_page text-sm">D10+</button>
    </nav>

  );
}