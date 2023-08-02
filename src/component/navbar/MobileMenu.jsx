import { Link } from "react-scroll";
import './mobilemenu.css';
const MobileMenu = (props) => {
  return (
    <div>
      <div className={`menue hamenu${props.handelManue}`}>
      <nav>
        <ul>
          <li>
            <Link
              spy={true}
              to="home"
              smooth={true}
              activeClass="activeClass">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              to="sirvices"
              smooth={true}
              activeClass="activeClass">
              <span>Skills</span>
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              to="work"
              smooth={true}
              activeClass="activeClass">
              <span>Process</span>
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              to="portfolio"
              smooth={true}
              activeClass="activeClass">
              <span>Portfolio</span>
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              to="testimonial"
              smooth={true}
              activeClass="activeClass">
              <span>Gallery</span>
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              to="contect"
              smooth={true}>
              <span>Contect</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  )
}

export default MobileMenu
