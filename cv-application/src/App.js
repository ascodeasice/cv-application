import { Component } from "react"
import Header from './components/Header';
import General from './components/General';
import Education from './components/Education';
import Job from './components/Job';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <General />
        <Education />
        <Job />
      </div>
    )
  }
}