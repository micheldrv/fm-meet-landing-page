import "./Footer.scss";
import Button from "../../shared/button/Button";
import NumberDisplay from "../../shared/number-display/NumberDisplay";

export default function Footer() {
  return (
    <footer>
      <NumberDisplay value="02" />
      <div className="footer-content">
        <div className="footer-text">
          <h2>Experience more together</h2>
          <p>
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
          <Button text="Download" accentedText="v1.3" color="purple" />
        </div>
      </div>
    </footer>
  );
}
