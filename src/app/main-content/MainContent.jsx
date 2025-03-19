import "./MainContent.scss";
import NumberDisplay from "../../shared/number-display/NumberDisplay";

export default function MainContent() {
  return (
    <>
      <div className="main-content">
        <NumberDisplay value="01" />
        <div className="main-images">
          <img src="src/assets/desktop/image-woman-in-videocall.jpg" />
          <img src="src/assets/desktop/image-women-videochatting.jpg" />
          <img src="src/assets/desktop/image-men-in-meeting.jpg" />
          <img src="src/assets/desktop/image-man-texting.jpg" />
        </div>
        <div className="main-text-content">
          <div className="main-title">
            <p>Built for modern use</p>
            <h2>Smarter meetings, all in one place</h2>
          </div>
          <p>
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </div>
      </div>
    </>
  );
}
