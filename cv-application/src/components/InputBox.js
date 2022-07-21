import { useState } from "react";

const InputBox = () => {

  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState('click me to edit');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const edit = () => {
    setEditing(true);
  }

  const resubmit = () => {
    setEditing(false);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.resubmit();
    }
  }

  if (editing) {
    return (
      <div>
        <input type='text' onChange={handleChange} defaultValue={value} onKeyDown={handleKeyDown} />
        <button className="inputBoxButton" onClick={resubmit}>Done</button>
      </div>
    )
  } else {
    return (
      <p onClick={edit}>{value === '' ? 'click me to edit' : value}</p>
    )
  }
};

export default InputBox;