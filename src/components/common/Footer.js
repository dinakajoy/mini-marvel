import React from 'react';
import icon from '../../images/icon.png';
import marvelInsider from '../../images/marvel_insider.png';
import mastercard from '../../images/mastercard-crop.png';
import FooterNav from './FooterNav';
import './Common.css';

function Footer() {
  return (
    <>
      <footer className="App-footer">
        <div className="sec1-sec2sec3">
          <section className="footer-one">
            <img className="footer-one__logo" src={icon} alt="Marvel" />
          </section>
          <div className="sec2-sec3">
            <section className="footer-two">
              <div className="bold-link">
                <a href="https://www.marvel.com/corporate/about">ABOUT MARVEL</a>
                <a href="https://www.marvel.com/help">HELP/FAQS</a>
                <a href="https://www.marvel.com/help">CAREERS</a>
                <a href="https://www.marvel.com/corporate/interns">INTERSHIPS</a>
              </div>
            </section>
            <section className="footer-three">
              <div>
                <a href="https://www.marvel.com/corporate/advertising">ADVERTISING</a>
                <a href="https://www.marvelhq.com/">MARVELHQ.COM</a>
                <a href="https://www.marvel.com/redeem">REDEEM DIGITAL COMICS</a>
              </div>
            </section>
          </div>
        </div>

        <section className="footer-four">
          <div className="footer-four-grid2 space-down">
            <div><img src={marvelInsider} alt="Marvel" /></div>
            <div className="footer-four-flex">
              <h4>MARVEL INSIDER</h4>
              <p>Get Rewarded for Being a Marvel Fan</p>
            </div>
          </div>
          <div className="footer-four-grid2">
            <div><img src={mastercard} alt="Marvel" /></div>
            <div className="footer-four-flex">
              <h4>MARVEL MASTERCARD®</h4>
              <p>6 Card Designs—Unlimited Cashback</p>
            </div>
          </div>
        </section>

        <section className="footer-five">
          <h4 className="space-down">FOLLOW MARVEL</h4>
          <div className="social-links">
            <i className="fa fa-facebook-official"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-tumblr"></i>
            <i className="fa fa-youtube-play"></i>
            <i className="fa fa-snapchat-ghost"></i>
            <i className="fa fa-pinterest"></i>
          </div>
        </section>     
      </footer>
        <nav className="App-footer2">
          <a className="" target="_self" href="https://disneytermsofuse.com">Terms of Use</a>
          <a className="" target="_self" href="https://privacy.thewaltdisneycompany.com/en">Privacy Policy</a>
          <a className="" target="_self" href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-california-privacy-rights">Your California Privacy Rights</a>
          <a className="" target="_self" href="https://privacy.thewaltdisneycompany.com/en/dnsmi/">Do Not Sell My Info</a>
          <a className="" target="_self" href="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy">Children's Online Privacy Policy</a>
          <a className="" target="_self" href="https://www.marvel.com/corporate/license_tou">License Agreement</a>
          <a className="" target="_self" href="http://preferences-mgr.truste.com/?pid=disney01&amp;aid=marvel01&amp;type=marvel">Interest-Based Ads</a>
          <a className="" target="_self" href="https://www.marvel.com/corporate/insider_terms">Marvel Insider Terms</a>
          <span className="">© 2020 MARVEL</span>
        </nav>
      <FooterNav />
    </>
  );
}

export default Footer;