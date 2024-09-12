import React, { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const body = document.body;
      if (scrollTop > 10) {
        body.classList.add("is-sticked");
      } else {
        body.classList.remove("is-sticked");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    document.body.classList.toggle("nav-open");
  };

  return (
    <header className="header">
      <div className="header-text text-center fw-bold">
        WE'RE NO.1 CRYPTOCURRENCY OPERATING SYSTEM
      </div>
      <div className="header-inr">
        <div className="container Dappster-container">
          <div className="row align-items-center">
            <div className="col">
              <div className="header-logo fs-40 fw-black">Dappster.io</div>
            </div>
            <div className="col-auto">
              <div className="header-nav d-flex align-items-center">
                <div className="header-nav-inr">
                  <div className="header-logo d-lg-none d-block text-center fs-40 fw-black">
                    Dappster.io
                  </div>
                  <ul>
                    <li className="fs-18 fw-medium">
                      <a href="/"> Home</a>
                    </li>
                    <li className="fs-18 fw-medium">
                      <a href="appstore">App Store</a>
                    </li>
                    <li className="fs-18 fw-medium">
                      <a href="#">Features</a>
                    </li>
                    <li className="fs-18 fw-medium">
                      <a href="#">Support</a>
                    </li>
                  </ul>
                </div>
                <a href="http://216.8.191.165:8880/next/#" className="btn btn-blue">
                  Launch Os
                </a>
                <button
                  type="button"
                  className="header-nav-toggle-btn"
                  onClick={() => toggleMenu()}
                >
                  <span />
                </button>
              </div>
              <div
                className="nav-overlay d-xl-none"
                onClick={() => toggleMenu()}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="multicolor-spacers gx-0">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </header>
  );
}
