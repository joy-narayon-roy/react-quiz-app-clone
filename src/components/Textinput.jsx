import "./styles/Textinput.css";
export default function Textinput({ icon, ...rest }) {
  return (
    <div className="textInput">
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
