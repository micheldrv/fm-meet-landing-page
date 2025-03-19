import "./Button.scss";

export default function Button({ text, accentedText = "", color = "blue" }) {
  return (
    <button className={color}>
      <span>{text}</span>
      {accentedText ? <span className="accented">{accentedText}</span> : null}
    </button>
  );
}
