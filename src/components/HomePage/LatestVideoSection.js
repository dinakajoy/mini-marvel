import React from 'react';
import './HomePage.css';

function LatestVideoSection() {
  return (
    <section className="latestVideo">
      <h2>Latest Videos</h2>
      <div className="latestVideo-grid">
        <div className="latestVideo-videos">
          {/* <img src={`${process.env.PUBLIC_URL}/images/latest-vid1.jpg`} alt="Marvel Latest Videos" width="100%" /> */}
        </div>
        <div className="latestVideo-moreVideos inner-scroll">
          <div className="video">
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/latest-vid2.jpg`} alt="Marvel Latest Videos" width="100%" />
            </div>
            <h4>DIY Captain Marvel's Star of Hala!</h4>
          </div>
          <div className="video">
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/latest-vid3.jpg`} alt="Marvel Latest Videos" width="100%" />
            </div>
            <h4>DIY Captain Marvel's Star of Hala!</h4>
          </div>
          <div className="video">
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/latest-vid4.jpg`} alt="Marvel Latest Videos" width="100%" />
            </div>
            <h4>DIY Captain Marvel's Star of Hala!</h4>
          </div>
          <div className="video">
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/latest-vid5.jpg`} alt="Marvel Latest Videos" width="100%" />
            </div>
            <h4>DIY Captain Marvel's Star of Hala!</h4>
          </div>
          <div className="video">
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/latest-vid6.jpg`} alt="Marvel Latest Videos" width="100%" />
            </div>
            <h4>DIY Captain Marvel's Star of Hala!</h4>
          </div>
          <div className="video">
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/latest-vid7.jpg`} alt="Marvel Latest Videos" width="100%" />
            </div>
            <h4>DIY Captain Marvel's Star of Hala!</h4>
          </div>
          <div className="video">
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/latest-vid8.jpg`} alt="Marvel Latest Videos" width="100%" />
            </div>
            <h4>DIY Captain Marvel's Star of Hala!</h4>
          </div>
          <div className="video">
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/latest-vid9.jpg`} alt="Marvel Latest Videos" width="100%" />
            </div>
            <h4>DIY Captain Marvel's Star of Hala!</h4>
          </div>
          <div className="video">
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/latest-vid10.jpg`} alt="Marvel Latest Videos" width="100%" />
            </div>
            <h4>DIY Captain Marvel's Star of Hala!</h4>
          </div>
          <div className="video">
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/latest-vid11.jpg`} alt="Marvel Latest Videos" width="100%" />
            </div>
            <h4>DIY Captain Marvel's Star of Hala!</h4>
          </div>
          <div className="video">
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/latest-vid12.jpg`} alt="Marvel Latest Videos" width="100%" />
            </div>
            <h4>DIY Captain Marvel's Star of Hala!</h4>
          </div>
        </div>
      </div>

      <div className="vvn">
        <div className="title">Marvel Culture & Lifestyle</div>
          <h3>DIY Captain Marvel's Star of Hala!</h3>
          <p>Your Marvel Mission was to create Captain Marvel's Star of Hala using only safe household items! Lorraine Cink highlights a few of her favorites while making her own Star of Hala!</p>
        </div>
    </section>
  );
}

export default LatestVideoSection;
