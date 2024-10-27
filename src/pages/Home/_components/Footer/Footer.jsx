import React from "react";
import "./Footer.css";
import instagram from "../../../../assets/Images/Home/instagram.png";
import youtube from "../../../../assets/Images/Home/youtube.png";
import linkedin from "../../../../assets/Images/Home/linkedin.png";
import twitter from "../../../../assets/Images/Home/twitter.png";
import { Link } from "react-router-dom";
import Logo from "assets/Icons/logo.png";
const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__inner">
          <div className="company__info">
            <div className="header">
              <img src={Logo} alt="" className="w-[270px] h-[60px] mt-12" />
            </div>
            <p className="company__about">
              Ad eu adipisicing enim incididunt dolor. P ariatur sunt non tempor
              nostrud anim officia exercitation ullamco excepteur
            </p>
          </div>
          <div className="footer__links">
            <Link to="/">Home</Link>
            <Link to="/">about us</Link>
            <Link to="/">products</Link>
            <Link to="/">investors</Link>
            <Link to="/">buzz</Link>
            {/* <Link to="/">Spice Encyclopedia</Link> */}
          </div>
          <div className="footer__contact__info">
            <div className="footer__contact__header">Contact us via</div>
            <div className="contacts">
              {/* <p className="footer__contact1">
                Tel : <span>+91-22-4881 5100</span> (30 Lines)
              </p>
              <p className="footer__contact1">
                Fax : <span> +91-22-4881 5101</span>
              </p> */}

              <p className="footer__contact1">
                Email : <span>info@blgandsons.com </span> | <br />
                <span>grievances@blgandsons.com</span>
              </p>
            </div>
          </div>
          <div className="footer__social__info">
            <div className="footer__contact__header">Follow us on</div>
            <div className="social__icons">
              <img src={instagram} alt="" className="social" />
              <img src={youtube} alt="" className="social" />
              <img src={linkedin} alt="" className="social" />
              <img src={twitter} alt="" className="social" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">Copyright © 2024</div>
    </>
  );
};

export default Footer;
