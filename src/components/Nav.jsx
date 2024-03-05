import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import logoImg from "../assets/images/logo_img.png";
import login from "../assets/images/login.png";
import signup from "../assets/images/signup.png";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <div className={styles.navWrapper}>
      <nav className={`${styles.navBar} ${isScrolled ? styles.sticky : ""}`}>
        <img src={logoImg} alt="logo_img" />
        {/* <h1>Homeverse</h1> */}
        <ul
          className={`${styles.navItems} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
        >
          <div className={styles.impBtn}>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/house" onClick={closeMobileMenu}>
                House
              </Link>
            </li>
            <li>
              <Link to="/price" onClick={closeMobileMenu}>
                Price
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </div>
          <div className={styles.loginSignupBtn}>
            <li>
              <Link to="/login" onClick={closeMobileMenu}>
                <img src={login} alt="login" />
              </Link>
            </li>
            <li>
              <Link to="/signup" onClick={closeMobileMenu}>
                <img src={signup} alt="signup" />
              </Link>
            </li>
          </div>
        </ul>
        <div
          className={`${styles.mobileMenuIcon} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
          onClick={toggleMobileMenu}
        >
          <GiHamburgerMenu className={styles.hamburgerMenu} />
        </div>
      </nav>
    </div>
  );
}
export default Nav;
