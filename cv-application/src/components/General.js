import { Component } from "react";
import InputBox from './InputBox';

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='general'>
        <h1>Personal Info</h1>
        <div className="midLine"></div>
        <h2>Name</h2>
        <InputBox />
        <h2>Email</h2>
        <InputBox />
        <h2>Phone Number</h2>
        <InputBox />
        <div className="longLine"></div>
      </div>
    )
  }
};

export default General;