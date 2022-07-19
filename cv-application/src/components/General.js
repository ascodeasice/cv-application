import { Component } from "react";
import InputBox from './InputBox';

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Name</h2>
        <InputBox />
        <h2>Email</h2>
        <InputBox />
        <h2>Phone Number</h2>
        <InputBox />
      </div>
    )
  }
};

export default General;