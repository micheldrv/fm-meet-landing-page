import "./Hero.scss";
import Button from "../../shared/button/Button";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-image">
          <img src="src/assets/tablet/image-hero.png" alt="" />
        </div>
        <div className="hero-content-grid">
          <div className="hero-image-left">
            <img src="src/assets/desktop/image-hero-left.png" alt="" />
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
            <img src="src/assets/desktop/image-hero-right.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
