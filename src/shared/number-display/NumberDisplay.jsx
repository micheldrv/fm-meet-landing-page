import "./NumberDisplay.scss";

export default function NumberDisplay({ value }) {
  return (
    <div className="number-display">
      <div className="rectangle"></div>
      <div className="number">
        <span>{value}</span>
      </div>
    </div>
  );
}
