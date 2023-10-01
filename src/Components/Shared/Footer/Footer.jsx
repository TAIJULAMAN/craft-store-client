import { Link } from "react-router-dom";
import logo from '../../../assets/logo/logo.png';

const Footer = () => {
    return (
        <footer className="footer p-10  bg-lime-300 text-base-content">
        <aside>
         <Link>
         <img className="w-14 h-14" src={logo} alt="" />
         </Link>
          <p>Arts And Crafts<br/>Providing unique arts and crafts since 2023</p>
        </aside> 
        <nav>
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Branding</a> 
          <a className="link link-hover">Design</a> 
          <a className="link link-hover">Marketing</a> 
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <h2>@copywright 2023</h2>
      </footer>
    );
};

export default Footer;