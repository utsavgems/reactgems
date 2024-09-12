import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="shadow-1" />
      <div className="shadow-2" />
      <div className="pattern-1">
        <img src="/images/more-ways-pattern-1.png" alt="more-ways-pattern-1" />
      </div>
      <div className="container">
        <div className="footer-con text-center">
          <div className="footer-logo fs-60 fw-black zoom-animation">Dappster.io</div>
          <div className="multicolor-spacers gx-0">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <ul className="footer-links">
            <li>
              <a href="#" className="fs-18 fw-semi-bold">
                 Home
              </a>
            </li>
            <li>
              <a href="#" className="fs-18 fw-semi-bold">
                App Store
              </a>
            </li>
            <li>
              <a href="#" className="fs-18 fw-semi-bold">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="fs-18 fw-semi-bold">
                Support
              </a>
            </li>
            <li>
              <a href="http://216.8.191.165:8880/next/#" className="fs-18 fw-semi-bold">
                Launch OS
              </a>
            </li>
          </ul>
          <div className="multicolor-spacers gx-0">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="social-links">
            <a href="#">
              <img src="/images/facebook.png" alt="facebook" />
            </a>
            <a href="#">
              <img src="/images/twitter.png" alt="twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="mb-0 fs-16 fw-bold">
          © 2024 Dappster. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
