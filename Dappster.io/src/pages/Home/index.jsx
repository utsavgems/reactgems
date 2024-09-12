import React,{  useEffect } from "react";
import Slider from "react-slick";
import ScrollAnimation from 'react-animate-on-scroll';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


export default function Home() {
  const { ref: countUpRef, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.3,    
  });

  useEffect(() => {
    // Convert NodeList to Array
    const animated = Array.from(document.querySelectorAll('.animated-right'));
    const animations = Array.from(document.querySelectorAll('.animation-left'));
    const flashAnimations = Array.from(document.querySelectorAll('.flash-animation'));
    const zoomAnimations = Array.from(document.querySelectorAll('.zoom-animation'));
    const flexAnimations = Array.from(document.querySelectorAll('.flex-animation'));
    const blurAnimations = Array.from(document.querySelectorAll('.blur-animation'));
    const upsideAnimations = Array.from(document.querySelectorAll('.upside-animation'));

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (animated.includes(entry.target)) {
            entry.target.classList.add('animated');
          } 
          if (animations.includes(entry.target)) {
            entry.target.classList.add('animations');
          } 
          if (flashAnimations.includes(entry.target)) {
            entry.target.classList.add('flash-trigger'); 
          } 
          if (zoomAnimations.includes(entry.target)) {
            entry.target.classList.add('zoom-animation'); 
          } 
          if (flexAnimations.includes(entry.target)) {
            entry.target.classList.add('flex-animation'); 
          } 
          if (blurAnimations.includes(entry.target)) {
            entry.target.classList.add('blur-animation'); 
          } 
          if (upsideAnimations.includes(entry.target)) {
            entry.target.classList.add('upside-animation'); 
          }
        } else {
          if (animated.includes(entry.target)) {
            entry.target.classList.remove('animated');
          } 
          if (animations.includes(entry.target)) {
            entry.target.classList.remove('animations');
          } 
          if (flashAnimations.includes(entry.target)) {
            entry.target.classList.remove('flash-trigger'); 
          } 
          if (zoomAnimations.includes(entry.target)) {
            entry.target.classList.remove('zoom-animation'); 
          } 
          if (flexAnimations.includes(entry.target)) {
            entry.target.classList.remove('flex-animation'); 
          } 
          if (blurAnimations.includes(entry.target)) {
            entry.target.classList.remove('blur-animation'); 
          } 
          if (upsideAnimations.includes(entry.target)) {
            entry.target.classList.remove('upside-animation'); 
          }
        }
      });
    }, {
      threshold: 0.3
    });

    // Observe the elements
    animated.forEach(element => observer.observe(element));
    animations.forEach(element => observer.observe(element));
    flashAnimations.forEach(element => observer.observe(element));
    zoomAnimations.forEach(element => observer.observe(element));
    flexAnimations.forEach(element => observer.observe(element));
    blurAnimations.forEach(element => observer.observe(element));
    upsideAnimations.forEach(element => observer.observe(element));

    return () => {
      // Cleanup: Unobserve the elements
      animated.forEach(element => observer.unobserve(element));
      animations.forEach(element => observer.unobserve(element));
      flashAnimations.forEach(element => observer.unobserve(element));
      zoomAnimations.forEach(element => observer.unobserve(element));
      flexAnimations.forEach(element => observer.unobserve(element));
      blurAnimations.forEach(element => observer.unobserve(element));
      upsideAnimations.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <>
      <section className="personal-cloud-sec overflow-hidden common-sec" >
        <div className="shadow-1" />
        <div className="shadow-2" />
        <div className="shadow-3" />
        <div className="container-fluid g-0">
          <div className="row align-items-center g-0">
            <div className="col-lg-6">
              <div className="personal-cloud-con">
              
            
                <div className="sec-head" ref={countUpRef}>
                  <span className="sec-sub-title d-block color-blue fs-18 fw-bold upside-animation">
                   <span>WORLD</span>  <span>NO.1</span>  <span>CRYPTO</span> <span>OPERATING</span> <span>SYSTEM</span>
                  </span>
                  <h1 className="sec-title fs-60 fw-semi-bold upside-animation">
                    Your Personal{" "}
                    <span className="fw-black d-inline-block ">
                      Cloud Operating System
                    </span>
                  </h1>
                  <p className="fs-20 upside-animation">
                  <span>
                    Community-based open source software focused on delivering
                    simple personal cloud experience around Docker ecosystem.</span>
                  </p>
                </div>
                <a href="http://216.8.191.165:8880/next/#" className="btn btn-blue">
                  Launch OS
                </a>
               
              </div>

              <div className="personal-cloud-happy-clients-wrap">
                <div className="container">
                  <div className="personal-cloud-happy-clients d-flex align-items-center">
                    <div className="personal-cloud-happy-clients-img">
                      <img
                        src="/images/personal-cloud-happy-clients.png"
                        alt="personal-cloud-happy-clients"
                      />
                    </div>
                    <div className="personal-cloud-happy-clients-con">
                      <h6 className="personal-cloud-happy-clients-title fs-40 fw-bold color-blue" ref={countUpRef}>
                      {/* {inView && <CountUp start={900} end={950} duration={1.5} />} */}
                      950+
                      </h6>
                      <span className="personal-cloud-happy-clients-sub-title fs-18 fw-bold">
                        HAPPY CLIENTS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="personal-cloud-img flash-animation">
                <img src="/images/personal-cloud.png" className="personal-cloud-images" alt="personal-cloud" />
                <div className="pattern-2 ">
                  <img
                  className="more-ways-pattern-img"
                    src="/images/more-ways-pattern-1.png"
                    alt="more-ways-pattern-1"
                  />
                </div>
                <div className="star">
                  <img src="/images/two-star.svg" alt="two-star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="discover-amazing-sec common-sec">
        <div className="shadow-1" />
        <div className="pattern-1">
          <img
            src="/images/discover-amazing-pattern-1.png"
            alt="discover-amazing-pattern-1"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="discover-amazing-con">
                <div className="sec-head animated-right">
                  <h2 className="sec-title fw-black fs-40">
                    Discover Amazing{" "}
                    <span className="color-blue">Self-Hosted</span> Apps
                  </h2>
                  <p className="fs-20">
                    Boost your managed cloud with over 20 pre-installed docker
                    based apps and 50+ community-verified apps from app store.
                  </p>
                </div>
                
                <a href="#" className="btn btn-blue">
                  Go to App Store
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="discover-amazing-boxes">
                <div className="row align-items-center  ">
                  <div className="col-sm-6 ">
                    <div className="discover-amazing-box ">
                    <h6
                        className="discover-amazing-box-title fs-60 fw-bold"
                        ref={countUpRef}
                      >
                        {inView && <CountUp start={0} end={20} duration={2.5} />}
                        +
                      </h6>
                      <p className="fs-22 fw-medium">
                        Pre Installed Docker Based Apps
                      </p>
                    </div>
                    <div className="discover-amazing-box">
                      <h6 className="discover-amazing-box-title fs-60 fw-bold"  ref={countUpRef}>
                      {inView && <CountUp start={0} end={25} duration={3} />}
                      +
                      </h6>
                      <p className="fs-22 fw-medium">
                        Community-Verified, Self- Hosted Apps
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="discover-amazing-box">
                      <h6 className="discover-amazing-box-title fs-60 fw-bold">
                        PI&amp;X86
                      </h6>
                      <p className="fs-22 fw-medium">
                        Wide Device <br />
                        Compatibility
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="multicolor-spacers gx-0">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <section className="more-ways-sec common-sec">
        <div className="shadow-1" />
        <div className="pattern-1">
          <img
            src="/images/more-ways-pattern-1.png"
            alt="more-ways-pattern-1"
          />
        </div>
        <div className="pattern-2">
          <img
            src="/images/more-ways-pattern-2.png"
            alt="more-ways-pattern-2"
          />
        </div>
        <div className="container">
          <div className="more-ways-con">
            <div className="sec-head text-center flex-animation">
              <h3 className="sec-title fw-black fs-40 ">
                More Features To Manage{" "}
                <span className="color-blue">Backups</span> With Dappster
              </h3>
            </div>
          </div>
          <div className="position-relative">
            <div className="shadow-2" />
            <div className="star">
              <img src="/images/two-star.svg" alt="two-star" />
            </div>
            {/* <Slider
              {...{
                dots: true,
                arrows: false,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
              }}
              className="more-ways-slider"
            > */}
              <div className="more-ways-slide">
                <div className="more-ways-slide-img">
                  <img
                    src="/images/more-ways-slide-1.png"
                    alt="more-ways-slide-1"
                  />
                </div>
              </div>
              {/* <div className="more-ways-slide">
                <div className="more-ways-slide-img">
                  <img
                    src="/images/more-ways-slide-1.png"
                    alt="more-ways-slide-1"
                  />
                </div>
              </div>
              <div className="more-ways-slide">
                <div className="more-ways-slide-img">
                  <img
                    src="/images/more-ways-slide-1.png"
                    alt="more-ways-slide-1"
                  />
                </div>
              </div>
              <div className="more-ways-slide">
                <div className="more-ways-slide-img">
                  <img
                    src="/images/more-ways-slide-1.png"
                    alt="more-ways-slide-1"
                  />
                </div>
              </div> */}
            {/* </Slider> */}
          </div>
        </div>
      </section>
      <section className="build-home-sec common-sec">
        <div className="shadow-1" />
        <div className="shadow-2" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="build-home-con ">
                <div className="sec-head animated-right">
                  <h4 className="sec-title fw-black fs-40 " >
                    Build Your Home <span className="color-blue">Data</span>{" "}
                    Center
                  </h4>
                </div>
                <div className="build-home-boxes ">
                  <div className="build-home-box">
                    <div className="build-home-box-img zoom-animation">
                      <img
                        src="/images/partner-box-icon-1.png"
                        alt="partner-box-icon-1"
                      />
                    </div>
                    <div className="build-home-box-con zoom-animation">
                      <span className="fs-20 fw-semi-bold">
                        Share files across the network
                      </span>
                    </div>
                  </div>
                  <div className="build-home-box">
                    <div className="build-home-box-img zoom-animation">
                      <img
                        src="/images/partner-box-icon-1.png"
                        alt="partner-box-icon-1"
                      />
                    </div>
                    <div className="build-home-box-con zoom-animation">
                      <span className="fs-20 fw-semi-bold">
                        Protect your privacy data
                      </span>
                    </div>
                  </div>
                  <div className="build-home-box">
                    <div className="build-home-box-img zoom-animation">
                      <img
                        src="/images/partner-box-icon-1.png"
                        alt="partner-box-icon-1"
                      />
                    </div>
                    <div className="build-home-box-con zoom-animation">
                      <span className="fs-20 fw-semi-bold">
                        Manage all files in foldersa
                      </span>
                    </div>
                  </div>
                  <div className="build-home-box">
                    <div className="build-home-box-img zoom-animation">
                      <img
                        src="/images/partner-box-icon-1.png"
                        alt="partner-box-icon-1"
                      />
                    </div>
                    <div className="build-home-box-con zoom-animation">
                      <span className="fs-20 fw-semi-bold">
                        Freely add disks &amp; expansion spaces
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="build-home-img">
                <div className="star">
                  <img src="/images/two-star.svg" alt="two-star" />
                </div>
                <img src="/images/build-home.png" alt="build-home" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="build-home-sec common-sec dextalkapp">
        <div className="shadow-1" />
        <div className="shadow-2" />
        <div className="container">
          <div className="row">
          <div className="col-lg-6">
              <div className="build-home-img dextalk">
                <div className="star dextalkapp">
                  <img src="/images/two-star.svg" alt="two-star" className="dextalk-star"/>
                </div>
                <img src="/images/dextalk-home.png" className="dextalk-homeimg" alt="build-home" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="build-home-con ">
                <div className="sec-head animation-left">
                  <h4 className="sec-title fw-black fs-40 " >
                   Your App <span className="color-blue">Dextalk</span>{" "}
                    
                  </h4>
                </div>
                <div className="build-home-boxes ">
                  <div className="build-home-box">
                    <div className="build-home-box-img zoom-animation">
                      <img
                        src="/images/dextalk-chat.png"
                        alt="partner-box-icon-1"
                      />
                    </div>
                    <div className="build-home-box-con zoom-animation">
                      <span className="fs-20 fw-semi-bold">
                       Live chat & group chat 
                      </span>
                    </div>
                  </div>
                  <div className="build-home-box">
                    <div className="build-home-box-img zoom-animation">
                      <img
                        src="/images/colorwallet.png"
                        alt="partner-box-icon-1"
                      />
                    </div>
                    <div className="build-home-box-con zoom-animation">
                      <span className="fs-20 fw-semi-bold">
                      Crypto Wallet & transfer
                      </span>
                    </div>
                  </div>
                  <div className="build-home-box">
                    <div className="build-home-box-img zoom-animation">
                      <img
                        src="/images/dextalk-ringer.png"
                        alt="partner-box-icon-1"
                      />
                    </div>
                    <div className="build-home-box-con zoom-animation">
                      <span className="fs-20 fw-semi-bold">
                       Instant voice & video calls 
                      </span>
                    </div>
                  </div>
                  <div className="build-home-box">
                    <div className="build-home-box-img zoom-animation">
                      <img
                        src="/images/multiple-devices.png"
                        alt="partner-box-icon-1"
                      />
                    </div>
                    <div className="build-home-box-con zoom-animation">
                      <span className="fs-20 fw-semi-bold">
                      Use desktop, tablet, & mobile
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </section>
      <div className="multicolor-spacers gx-0">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <section className="appstore-sec common-sec">
        <div className="shadow-3" />
        <div className="container">
          <div className="appstore-con">
            <div className="sec-head flex-animation">
              <h4 className="sec-title fs-40 fw-black">
                Your Web3 <span className="color-blue">Appstore</span>
              </h4>
              <p className="fs-20 upside-animation">
            <span>Support your </span> 
            <span>pick of </span> 
            <span>Web3 chains </span> 
            <span>and apps by </span> 
            <span> running them on </span> 
            <span> your dappnode.</span> 
              
                 
              </p>
            </div>
            <div className="appstore-search">
              {/* <input
                type="text"
                className="form-control border-0 bg-transparent fs-18"
                placeholder="Search and launch directly into dappster"
              /> */}
              <button type="button" className="btn btn-blue app-store-btn">
                Go to App Store
              </button>
              <a href="http://216.8.191.165:8880/next/#" className="btn btn-blue lunch-os-btn">
                  Launch OS
                </a>
            </div>
          </div>
          <div className="position-relative">
            <div className="shadow-1" />
            <div className="shadow-2" />
            <div className="star">
              <img src="/images/two-star.svg" alt="two-star" />
            </div>
            <Slider
              {...{
                dots: true,
                arrows: false,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
              }}
              className="appstore-slider"
            >
              <div className="appstore-slide">
                <div className="appstore-slide-img">
                  <img
                  className="appstore-slide-images"
                    src="/images/appstore-slide-1.png"
                    alt="appstore-slide-1"
                  />
                </div>
              </div>
              <div className="appstore-slide">
                <div className="appstore-slide-img">
                  <img
                    src="/images/appstore-slide-1.png"
                    alt="appstore-slide-1"
                  />
                </div>
              </div>
              <div className="appstore-slide">
                <div className="appstore-slide-img">
                  <img
                    src="/images/appstore-slide-1.png"
                    alt="appstore-slide-1"
                  />
                </div>
              </div>
              <div className="appstore-slide">
                <div className="appstore-slide-img">
                  <img
                    src="/images/appstore-slide-1.png"
                    alt="appstore-slide-1"
                  />
                </div>
              </div>
            </Slider>
          </div>
          <div className="text-center">
            <a href="#" className="btn btn-blue AppStore-btn">
              Launch AppStore
            </a>
            <a href="#" className="btn btn-black Dappstorsos-btn">
              Launch Dappstore OS
            </a>
          </div>
          <div className="appstore-boxes animated-right">
            <div className="appstore-boxes-row">
              <div className="appstore-box">
                <div className="appstore-box-img">
                  <img
                    src="/images/appstore-icon-1.png"
                    alt="appstore-icon-1"
                  />
                </div>
                <span className="appstore-box-title fw-semi-bold fs-18">
                  Ethereum Validator
                </span>
              </div>
              <div className="appstore-box">
                <div className="appstore-box-img">
                  <img
                    src="/images/appstore-icon-2.png"
                    alt="appstore-icon-2"
                  />
                </div>
                <span className="appstore-box-title fw-semi-bold fs-18">
                  Bitcoin Node
                </span>
              </div>
              <div className="appstore-box">
                <div className="appstore-box-img">
                  <img
                    src="/images/appstore-icon-3.png"
                    alt="appstore-icon-3"
                  />
                </div>
                <span className="appstore-box-title fw-semi-bold fs-18">
                  Gnosis Validator
                </span>
              </div>
              <div className="appstore-box">
                <div className="appstore-box-img">
                  <img
                    src="/images/appstore-icon-4.png"
                    alt="appstore-icon-4"
                  />
                </div>
                <span className="appstore-box-title fw-semi-bold fs-18">
                  Store Nodes
                </span>
              </div>
              <div className="appstore-box">
                <div className="appstore-box-img">
                  <img
                    src="/images/appstore-icon-5.png"
                    alt="appstore-icon-5"
                  />
                </div>
                <span className="appstore-box-title fw-semi-bold fs-18">
                  Rotki
                </span>
              </div>
            </div>
            <div className="appstore-boxes-row">
              <div className="appstore-box">
                <div className="appstore-box-img">
                  <img
                    src="/images/appstore-icon-5.png"
                    alt="appstore-icon-5"
                  />
                </div>
                <span className="appstore-box-title fw-semi-bold fs-18">
                  Rotki
                </span>
              </div>
              <div className="appstore-box">
                <div className="appstore-box-img">
                  <img
                    src="/images/appstore-icon-4.png"
                    alt="appstore-icon-4"
                  />
                </div>
                <span className="appstore-box-title fw-semi-bold fs-18">
                  Store Nodes
                </span>
              </div>
              <div className="appstore-box">
                <div className="appstore-box-img">
                  <img
                    src="/images/appstore-icon-1.png"
                    alt="appstore-icon-1"
                  />
                </div>
                <span className="appstore-box-title fw-semi-bold fs-18">
                  Ethereum Validator
                </span>
              </div>
              <div className="appstore-box">
                <div className="appstore-box-img">
                  <img
                    src="/images/appstore-icon-2.png"
                    alt="appstore-icon-2"
                  />
                </div>
                <span className="appstore-box-title fw-semi-bold fs-18">
                  Bitcoin Node
                </span>
              </div>
              <div className="appstore-box">
                <div className="appstore-box-img">
                  <img
                    src="/images/appstore-icon-3.png"
                    alt="appstore-icon-3"
                  />
                </div>
                <span className="appstore-box-title fw-semi-bold fs-18">
                  Gnosis Validator
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="install-sec common-sec ">
        <div className="shadow-1 "  />
        <div className="container ">
          <div className="install-con ">
            <div className="sec-head text-center ">
              <h4 className="sec-title fs-40 fw-black flex-animation">
                Install <span className="color-blue">Dappster</span> Anywhere
              </h4>
              <p className="fs-20 upside-animation">
              <span>  Dappster runs on </span>
              <span>  Raspberry Pi 5, </span>
              <span>  Pi4, NUC — </span>
              <span>  or even a potato. </span>
              <span>  Or maybe not </span>
                
              </p>
            </div>
          </div>
          <div className="install-boxes ">
            <div className="row">
              <div className="col-lg-6">
             
                
                <div className="install-box box-1 rasberrypie-box ani-box1 ">
                  <div className="install-box-img ">
                    {/* <img src="/images/install-box-1.png" alt="install-box-1" /> */}
                  </div>
                  <div className="install-box-for rasberrypie-box-for">
                    <div className="install-box-for-img rasberrypie-box-img zoom-animation">
                      <img
                        src="/images/install-box-icon-1.png"
                        alt="/images/install-box-icon-1"
                      />
                    </div>
                    <div className="install-box-for-con mt-5 animated-right">
                      <h6 className="install-box-for-title fs-20 fw-bold ">
                        Install On Rasberrypie
                      </h6>
                      <span className="install-box-for-sub-title fs-18">
                        Run dappster on rasberry pi4 or pi5 in just a few clicks
                        no technical skills required
                      </span>
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
                  <div className="dappster-bullets animated-right">
                  <ul>
                    <li className="fs-20 fw-semi-bold">Rasberry Pi4 or Pi5</li>
                    <li className="fs-20 fw-semi-bold">32GB+ microSD</li>
                    <li className="fs-20 fw-semi-bold">Power Supply</li>
                    <li className="fs-20 fw-semi-bold">Ethernet Cable</li>
                  </ul>
                  </div>

                  <a href="#" className="btn btn-blue">
                    How to Install
                  </a>
                </div>
      
              </div>
              <div className="col-lg-6">
                <div className="install-box rasberrypie-box ani-box2">
                  <div className="install-box-img">
                    {/* <img src="/images/install-box-2.png" alt="install-box-2" /> */}
                  </div>
                  
                  <div className="install-box-for rasberrypie-box-for">
                    <div className="install-box-for-img  rasberrypie-box-img zoom-animation">
                      <img
                        src="/images/install-box-icon-2.png"
                        alt="/images/install-box-icon-2"
                      />
                    </div>
                    <div className="install-box-for-con mt-5 animation-left">
                      <h6 className="install-box-for-title fs-20 fw-bold">
                        Install On Rasberrypie
                      </h6>
                      <span className="install-box-for-sub-title fs-18">
                        Run dappster on rasberry pi4 or pi5 in just a few clicks
                        no technical skills required
                      </span>
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
                  <div className="dappster-bullets animation-left">
                  <ul>
                    <li className="fs-20 fw-semi-bold">Rasberry Pi4 or Pi5</li>
                    <li className="fs-20 fw-semi-bold">32GB+ microSD</li>
                    <li className="fs-20 fw-semi-bold">Power Supply</li>
                    <li className="fs-20 fw-semi-bold">Ethernet Cable</li>
                  </ul>
                  </div>
                  <a href="#" className="btn btn-blue">
                    How to Install
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="multicolor-spacers gx-0">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <section className="navigation-dock-sec common-sec">
        <div className="shadow-1" />
        <div className="shadow-2" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="navigation-dock-box-1">
                <div className="sec-head zoom-animation">
                  <h5 className="sec-title fs-40 fw-black">
                    <span className="color-blue">Navigation</span>. Dock Of The
                    Town.
                  </h5>
                  <p className="fs-20">
                    The facelift of dock icons brings a modern, refreshed look
                    at your Dappster.
                  </p>
                </div>
                <a href="#" className="btn btn-blue">
                  Launch Now
                </a>
                <div className="navigation-dock-img">
                  <img
                    src="/images/navigation-box-1.png"
                    alt="navigation-box-1"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="navigation-dock-box-2">
                <div className="sec-head zoom-animation">
                  <h5 className="sec-title fs-40 fw-black">
                    <span className="color-blue">Widgets</span>. Grasp It At A
                    Glance.
                  </h5>
                  <p className="fs-20">
                    Set of widgets for you to personalize your homepage.
                  </p>
                </div>
                <div className="navigation-dock-img">
                  <img
                    src="/images/navigation-box-2.png"
                    alt="navigation-box-2"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="navigation-dock-box-3">
                <div className="sec-head ">
                  <h5 className="sec-title fs-40 fw-black zoom-animation">
                    Snappy <span className="color-blue">Search</span> Enters The
                    Chat
                  </h5>
                  <p className="fs-20 upside-animation">
                  <span>Access apps, </span>
                  <span>actions and </span>
                  <span>settings with a </span>
                  <span> single shortcut</span>
                
                      
                  </p>
                </div>
                <div className="appstore-search">
                  {/* <input
                    type="text"
                    className="form-control border-0 bg-transparent fs-18"
                    placeholder="Search and launch directly into dappster"
                  /> */}
                  <button type="button" className="btn btn-blue app-store-btn">
                    Go to App Store
                  </button>
                  <a href="http://216.8.191.165:8880/next/#" className="btn btn-blue lunch-os-btn">
                  Launch OS
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partners-sec common-sec">
        <div className="shadow-1" />
        <div className="shadow-2" />
        <div className="container">
          <div className="partners-con">
            <div className="sec-head text-center ">
              <h4 className="sec-title fs-40 fw-black flex-animation">
                <span className="color-blue">Partners</span> And{" "}
                <span className="color-blue">Builders</span>
              </h4>
              <p className="fs-20 upside-animation">
              <span>Dappster can help you </span>
              <span>to decentralize your </span>
              <span>protocol and allow</span>
              <span> users to run private </span>
              <span>instances of your app.</span>
                  
                
              </p>
            </div>
          </div>
          <div className="install-boxes">
            <div className="row">
              <div className="col-lg-6">
                <div className="install-box box-1 ">
                  <div className="partners-box-img ">
                    <img
                    className="partner-img-icon-1 zoom-animation"
                      src="/images/partner-box-icon-1.png"
                      alt="partner-box-icon-1"
                    />
                  </div>
                  <div className="install-box-for ">
                    <div className="install-box-for-img zoom-animation">
                      <img
                        src="/images/partners-box-icon-3.png"
                        alt="partners-box-icon-3"
                      />
                    </div>
                    <div className="install-box-for-con animated-right">
                      <h6 className="install-box-for-title fs-26 fw-bold mb-0">
                        Decentralize Your Network With Dappster
                      </h6>
                    </div>
                  </div>
                  <ul className="animated-right">
                    <li className="fs-20 fw-semi-bold">
                      Access a distrubuted network of nodes
                    </li>
                    <li className="fs-20 fw-semi-bold">
                      Release custom hardware and bring your brand into the
                      homes of Web3 users
                    </li>
                    <li className="fs-20 fw-semi-bold">
                      Access a distrubuted network of nodes
                    </li>
                  </ul>
                  <a href="#" className="btn btn-blue">
                    Work With Us
                  </a>
                  <a href="#" className="btn btn-black">
                    Our Partners
                  </a>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="install-box ">
                  <div className="partners-box-img ">
                    <img
                    className="partner-img-icon-2 zoom-animation"
                      src="/images/partners-box-icon-2.png"
                      alt="partners-box-icon-2"
                    />
                  </div>
                  <div className="install-box-for  ">
                    <div className="install-box-for-img zoom-animation">
                      <img
                        src="/images/partners-box-icon-3.png"
                        alt="partners-box-icon-3"
                      />
                    </div>
                    <div className="install-box-for-con animation-left">
                      <h6 className="install-box-for-title fs-26 fw-bold mb-0">
                        Build For The Dappster <br />
                        App Store
                      </h6>
                    </div>
                  </div>
                  <ul className="animation-left ">
                    <li className="fs-20 fw-semi-bold">
                      Create a Dappster-ready version of your app with our
                      simple SDK
                    </li>
                    <li className="fs-20 fw-semi-bold">
                      Make your app available to thousands of node-runners
                    </li>
                    <li className="fs-20 fw-semi-bold">
                      Bring auto-updates to your infra runners
                    </li>
                  </ul>
                  <a href="#" className="btn btn-blue">
                    Github
                  </a>
                  <a href="#" className="btn btn-black">
                    Devs Doc
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="multicolor-spacers gx-0">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <section className="superpowers-sec common-sec">
        <div className="container">
          <div className="superpowers-con">
            <div className="sec-head text-center ">
              <h4 className="sec-title fw-black fs-40 zoom-animation">
                The Superpowers Are <span className="color-blue">Dappster</span>
              </h4>
              <p className="fs-20 upside-animation">
              <span>Dappster can help you </span>
              <span>to decentralize your </span>
              <span>protocol and allow</span>
              <span> users to run private </span>
              <span>instances of your app.</span>
              </p>
            </div>
          </div>
          <div className="superpowers-boxes ">
            <div className="row">
              <div className="col-lg-6">
                <div className="superpowers-box ">
                  <div className="sec-head animated-right">
                    <h5 className="sec-title fs-40 fw-black color-blue">
                      Network
                    </h5>
                    <p>
                      Use apps like Pi-Hole, Tailscale &amp; Transmission to
                      harness unlimited networking capabilities.
                    </p>
                  </div>
                  <div className="superpowers-box-row ">
                    <div className="superpowers-box-con ">
                      <div className="superpowers-box-icon zoom-animation">
                        <img
                          src="/images/partners-box-icon-3.png"
                          alt="partners-box-icon-3"
                        />
                      </div>
                      <div className="superpowers-box-text animated-right">
                        <span className="fs-16 fw-medium color-blue">
                          Pi-Hole
                        </span>
                        <h6 className="fs-22 fw-bold">
                          Block Ads On Your Entire Network
                        </h6>
                      </div>
                    </div>
                    <div className="superpowers-box-img ">
                      <img
                        src="/images/superpowers-box-1.png"
                        alt="superpowers-box-1"
                      />
                    </div>
                  </div>
                  <div className="multicolor-spacers">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="superpowers-box-row">
                    <div className="superpowers-box-con ">
                      <div className="superpowers-box-icon zoom-animation">
                        <img
                          src="/images/partners-box-icon-3.png"
                          alt="partners-box-icon-3"
                        />
                      </div>
                      <div className="superpowers-box-text animated-right">
                        <span className="fs-16 fw-medium color-blue">
                          Tailscale
                        </span>
                        <h6 className="fs-22 fw-bold">
                          Magically Access Your Dappster From Anywhere
                        </h6>
                      </div>
                    </div>
                    <div className="superpowers-box-img ">
                      <img
                        src="/images/superpowers-box-2.png"
                        alt="superpowers-box-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="superpowers-box">
                  <div className="sec-head animated-right">
                    <h5 className="sec-title fs-40 fw-black color-blue">
                      Automate
                    </h5>
                    <p>
                      Home automation? Check. Custom workflow automation? Check.
                      IoT automation? Check. Self-hosted and local? Check.
                    </p>
                  </div>
                  <div className="superpowers-box-row ">
                    <div className="superpowers-box-con ">
                      <div className="superpowers-box-icon zoom-animation">
                        <img
                          src="/images/partners-box-icon-3.png"
                          alt="partners-box-icon-3"
                        />
                      </div>
                      <div className="superpowers-box-text animated-right">
                        <span className="fs-16 fw-medium color-blue">
                          Home Assistant
                        </span>
                        <h6 className="fs-22 fw-bold">
                          Automate Your Entire Home Using Dappster
                        </h6>
                      </div>
                    </div>
                    <div className="superpowers-box-img ">
                      <img
                        src="/images/superpowers-box-3.png"
                        alt="superpowers-box-3"
                      />
                    </div>
                  </div>
                  <div className="multicolor-spacers">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="superpowers-box-row">
                    <div className="superpowers-box-con ">
                      <div className="superpowers-box-icon zoom-animation">
                        <img
                          src="/images/partners-box-icon-3.png"
                          alt="partners-box-icon-3"
                        />
                      </div>
                      <div className="superpowers-box-text animated-right">
                        <span className="fs-16 fw-medium color-blue">
                          Homebridge
                        </span>
                        <h6 className="fs-22 fw-bold">
                          Bringing Homekit Support To Any Smart Home Device
                        </h6>
                      </div>
                    </div>
                    <div className="superpowers-box-img">
                      <img
                        src="/images/superpowers-box-4.png"
                        alt="superpowers-box-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="superpowers-box">
                  <div className="sec-head animated-right">
                    <h5 className="sec-title fs-40 fw-black">Social</h5>
                    <p>
                      Run your personal Matrix server, an RSS aggregator, or
                      even custom ad-blocking front-ends for YouTube, Reddit,
                      &amp; Twitter.
                    </p>
                  </div>
                  <div className="superpowers-box-row">
                    <div className="superpowers-box-con ">
                      <div className="superpowers-box-icon zoom-animation">
                        <img
                          src="/images/partners-box-icon-3.png"
                          alt="partners-box-icon-3"
                        />
                      </div>
                      <div className="superpowers-box-text animated-right">
                        <span className="fs-16 fw-medium color-blue">
                          Nostr Relay
                        </span>
                        <h6 className="fs-22 fw-bold">
                          Backup All Your Nostr Activity In Real-Time
                        </h6>
                      </div>
                    </div>
                    <div className="superpowers-box-img">
                      <img
                        src="/images/superpowers-box-5.png"
                        alt="superpowers-box-5"
                      />
                    </div>
                  </div>
                  <div className="multicolor-spacers">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="superpowers-box-row">
                    <div className="superpowers-box-con ">
                      <div className="superpowers-box-icon zoom-animation">
                        <img
                          src="/images/partners-box-icon-3.png"
                          alt="partners-box-icon-3"
                        />
                      </div>
                      <div className="superpowers-box-text animated-right">
                        <span className="fs-16 fw-medium color-blue">
                          Invidious
                        </span>
                        <h6 className="fs-22 fw-bold">
                          Browse Youtube Without Giving Up Your Privacy Oh, And
                          No Ads
                        </h6>
                      </div>
                    </div>
                    <div className="superpowers-box-img">
                      <img
                        src="/images/superpowers-box-6.png"
                        alt="superpowers-box-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="superpowers-box ">
                  <div className="sec-head animated-right">
                    <h5 className="sec-title fs-40 fw-black">Develop</h5>
                    <p>
                      Run custom Docker containers with Portainer, self-host
                      your Git repos in your home, code anywhere with browser.
                    </p>
                  </div>
                  <div className="superpowers-box-row">
                    <div className="superpowers-box-con ">
                      <div className="superpowers-box-icon zoom-animation">
                        <img
                          src="/images/partners-box-icon-3.png"
                          alt="artners-box-icon-3"
                        />
                      </div>
                      <div className="superpowers-box-text animated-right">
                        <span className="fs-16 fw-medium color-blue">
                          Portainer
                        </span>
                        <h6 className="fs-22 fw-bold">
                          Run Custom Docker Containers On Your Dappster
                        </h6>
                      </div>
                    </div>
                    <div className="superpowers-box-img">
                      <img
                        src="/images/superpowers-box-7.png"
                        alt="superpowers-box-7"
                      />
                    </div>
                  </div>
                  <div className="multicolor-spacers">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="superpowers-box-row">
                    <div className="superpowers-box-con ">
                      <div className="superpowers-box-icon zoom-animation">
                        <img
                          src="/images/partners-box-icon-3.png"
                          alt="partners-box-icon-3"
                        />
                      </div>
                      <div className="superpowers-box-text animated-right">
                        <span className="fs-16 fw-medium color-blue">
                          Gitea
                        </span>
                        <h6 className="fs-22 fw-bold">
                          Self-Host Your Git Repos On Your Dappster
                        </h6>
                      </div>
                    </div>
                    <div className="superpowers-box-img">
                      <img
                        src="/images/superpowers-box-8.png"
                        alt="superpowers-box-8"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="open-community-sec text-center common-sec">
        <div className="shadow-1" />
        <div className="shadow-2" />
        <div className="container">
          <div className="open-community-con">
            <div className="sec-head ">
              <h4 className="sec-title fs-40 fw-black flex-animation">
                An <span className="color-blue">Open</span> &amp;{" "}
                <span className="color-blue">Supportive</span> Community
              </h4>
              <p className="fs-20 upside-animation">
              <span>Share and </span>
              <span>discuss your </span>
              <span>ideas in </span>
              <span> the community </span>
                 
              </p>
            </div>
          </div>
          <div className="open-community-img">
            <div className="star">
              <img src="/images/two-star.svg" alt="two-star" />
            </div>
            <div className="star">
              <img src="/images/two-star.svg" alt="two-star" />
            </div>
            <img src="/images/open-supportive.png" alt="open-supportive" />
          </div>
          <div className="text-center">
            <a href="#" className="btn btn-blue discord-btn">
              <img src="/images/discord.png" alt="discord" /> Join Discord
            </a>
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
      </section>
      <div className="multicolor-spacers gx-0">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <section className="faq-sec common-sec">
        <div className="shadow-1" />
        <div className="shadow-2" />
        <div className="container">
          <div className="faq-con">
            <div className="sec-head text-center flex-animation">
              <h4 className="sec-title fs-40 fw-black">
                Frequently Asked <span className="color-blue">Questions</span>
              </h4>
            </div>
            <div className="accordion" id="faq">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button fs-18 fw-semi-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                    aria-expanded="true"
                    aria-controls="faq1"
                  >
                    Can I use Dappster for free? Are the Apps also free?
                  </button>
                </h2>
                <div
                  id="faq1"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body">
                    <p className="fs-18">
                      Dappster is open-source and free. The applications in
                      Dappster also come from the open source community, most of
                      which are free. But it must be noted that some
                      applications also provide value-added services which may
                      incur a fee.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button fs-18 fw-semi-bold collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                    aria-expanded="false"
                    aria-controls="faq2"
                  >
                    Does Dappster collect my private data/information?
                  </button>
                </h2>
                <div
                  id="faq2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body">
                    <p className="fs-18">
                      Dappster is open-source and free. The applications in
                      Dappster also come from the open source community, most of
                      which are free. But it must be noted that some
                      applications also provide value-added services which may
                      incur a fee.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button fs-18 fw-semi-bold collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq4"
                    aria-expanded="false"
                    aria-controls="faq4"
                  >
                    I cannot access Dappster local after I installed Dappster,
                    why?
                  </button>
                </h2>
                <div
                  id="faq4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body">
                    <p className="fs-18">
                      Dappster is open-source and free. The applications in
                      Dappster also come from the open source community, most of
                      which are free. But it must be noted that some
                      applications also provide value-added services which may
                      incur a fee.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button fs-18 fw-semi-bold collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                    aria-expanded="false"
                    aria-controls="faq3"
                  >
                    After I installed Dappster, I can't access it by IP, why?
                  </button>
                </h2>
                <div
                  id="faq3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body">
                    <p className="fs-18">
                      Dappster is open-source and free. The applications in
                      Dappster also come from the open source community, most of
                      which are free. But it must be noted that some
                      applications also provide value-added services which may
                      incur a fee.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="democratizing-sec overflow-hidden common-sec">
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="democratizing-con">
                <div className="sec-head animated-right">
                  <h4 className="sec-title fs-40 fw-black">
                    Democratizing Data And Giving Service Control Back To Your
                    Hands.
                  </h4>
                  <p>
                    Project Dappster started as a community-based open-source
                    project focused on delivering a simple personal cloud
                    experience around the Docker ecosystem. Dappster aims to
                    redefine the private cloud digital experience for creators
                    and developers through data democratization and enabling
                    everyone to take that goal to a new scale.
                  </p>
                </div>
                <a href="#" className="btn btn-blue">
                  Launch Now
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="democratizing-img">
                <div className="pattern-1">
                  <img
                    src="/images/more-ways-pattern-1.png"
                    alt="more-ways-pattern-1"
                  />
                </div>
                <div className="star">
                  <img src="/images/two-star.svg" alt="two-star" />
                </div>
                <img src="/images/democratizing.png" className="democratizing-img" alt="democratizing" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="multicolor-spacers gx-0">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </>
  );
}
