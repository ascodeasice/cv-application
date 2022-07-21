import Header from './components/Header';
import General from './components/General';
import Education from './components/Education';
import Job from './components/Job';
import './styles/App.css';

const App = () => {
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

export default App;