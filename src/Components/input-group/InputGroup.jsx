import "./inputGroup.css";

const InputGroup = ({ label, id, inputProps, onChange, value }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...inputProps} onChange={onChange} value={value} />
    </div>
  );
};

export default InputGroup;
