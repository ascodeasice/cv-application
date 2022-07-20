import { Component } from "react"
import Header from './components/Header';
import General from './components/General';
import Education from './components/Education';
import Job from './components/Job';
import './styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='mainContainer'>
        <Header />
        <div id="mainContent">
          <div id="infoContainer">
            <General />
            <Education />
            <Job />
          </div>
        </div>
      </div>
    )
  }
}