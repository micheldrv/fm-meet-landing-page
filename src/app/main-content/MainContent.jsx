import "./MainContent.scss";
import NumberDisplay from "../../shared/number-display/NumberDisplay";
import womanInVideocall from "../../assets/desktop/image-woman-in-videocall.jpg";
import womenVideochatting from "../../assets/desktop/image-women-videochatting.jpg";
import menInMeeting from "../../assets/desktop/image-men-in-meeting.jpg";
import manTexting from "../../assets/desktop/image-man-texting.jpg";

export default function MainContent() {
  return (
    <>
      <div className="main-content">
        <NumberDisplay value="01" />
        <div className="main-images">
          <img src={womanInVideocall} alt="woman in videocall" />
          <img src={womenVideochatting} alt="women videochatting" />
          <img src={menInMeeting} alt="men in meeting" />
          <img src={manTexting} alt="max texting" />
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
