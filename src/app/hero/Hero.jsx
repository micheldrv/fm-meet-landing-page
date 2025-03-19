import "./Hero.scss";
import Button from "../../shared/button/Button";
import hero from "../../assets/tablet/image-hero.png";
import heroLeft from "../../assets/desktop/image-hero-left.png";
import heroRight from "../../assets/desktop/image-hero-right.png";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-image">
          <img src={hero} alt="" />
        </div>
        <div className="hero-content-grid">
          <div className="hero-image-left">
            <img src={heroLeft} alt="" />
          </div>
          <div className="hero-content">
            <h1>
              Group Chat
              <br />
              for Everyone
            </h1>
            <p>
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>
            <div className="hero-buttons">
              <Button text="Download" accentedText="v1.3" />
              <Button text="What is it?" color="purple" />
            </div>
          </div>
          <div className="hero-image-right">
            <img src={heroRight} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
