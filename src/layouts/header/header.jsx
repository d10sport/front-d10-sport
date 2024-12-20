import { LogoHeader } from "@utils/icons/icons";
import { Link } from "react-router-dom";
import './header.css';

export default function Header() {
  var urlAcademy = `https://academia.${window.location.host}/`
  return (
    <nav id="nav_header" className="nav fixed">
      <LogoHeader />
      <ul className="list__nav">
        <li className="items__nav">
          <Link to={'/about-us'} className="a-linear__nav text-sm text-[#000]">
            Quienes somos
          </Link>
        </li>
        <li className="items__nav">
          <Link to={'/services'} className="a-linear__nav text-sm text-[#000]">
            Servicios
          </Link>
        </li>
        <li className="items__nav">
          <Link to={'/contact'} className="a-linear__nav text-sm text-[#000]">
            Contactanos
          </Link>
        </li>
      </ul>
      <a target="_blank" href={urlAcademy} className="login__nav text-sm text-[#fff] hover:text-white text-center bg-[#000]">D10+</a>
    </nav>

  );
}