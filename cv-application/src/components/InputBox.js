import { Component } from "react";

class InputBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      value: 'click me to edit'
    }
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  edit = () => {
    this.setState({
      editing: true
    })
  }

  resubmit = () => {
    this.setState({
      editing: false
    })
  }

  render() {
    const { editing, value } = this.state;
    if (editing) {
      return (
        <div>
          <input type='text' onChange={this.handleChange} value={value} />
          <button onClick={this.resubmit}>Done</button>
        </div>
      )
    } else {
      return (
        <p onClick={this.edit}>{value === '' ? 'click me to edit' : value}</p>
      )
    }
  }
};

export default InputBox;