import React from "react";
import logoImage from "../Images/logoImage.png";

function footer() {
  return (
    <div className="footer">
      <footer className="footer">
        <div className="footer__logo-box">
          <img src={logoImage} className="footer__logo-image" alt="Full logo" />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Contact us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Carrers
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <p className="footer__copyright">
              Built by{" "}
              <a href="/" className="footer__link">
                lokesh kumar
              </a>{" "}
              copyright &copy; by lokesh kumar You are allowed to use this
              webpage for personal and commercial use, but NOT to claim it as
              your own design.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
