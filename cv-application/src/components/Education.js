import { Component } from "react";
import EducationOverview from "./EducationOverview";
import uniqid from 'uniqid';
import '../styles/Education.css'

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schools: [],
    };
  }

  addSchool = () => {
    this.setState({
      schools: this.state.schools.concat({
        id: uniqid(),
        name: 'school name',
        title: 'title',
        date: 'date(year - year)',
        editing: false
      }),
    });
  }

  deleteSchool = (id) => {
    this.setState({
      schools: this.state.schools.filter((school) => school.id !== id)
    });
  }

  editSchool = (id) => {
    const newSchools = this.state.schools;
    newSchools.forEach((school) => {
      if (school.id === id) {
        school.editing = true;
      }
    });

    this.setState({
      schools: newSchools
    });
  }

  resubmitSchool = (id) => {
    const newSchools = this.state.schools;
    newSchools.forEach((school) => {
      if (school.id === id) {
        school.name = document.getElementById(`name${id}`).value;
        school.title = document.getElementById(`title${id}`).value;
        school.date = document.getElementById(`date${id}`).value;
        school.editing = false;
      }
    });

    this.setState({
      schools: newSchools
    });
  }

  showBtn = () => {
    document.getElementById('addSchoolBtn').style.display = 'block';
  }

  hideBtn = () => {
    document.getElementById('addSchoolBtn').style.display = 'none';
  }

  render() {
    const { schools } = this.state;
    return (
      <div className='educationContainer'>
        <div onMouseOver={this.showBtn} onMouseLeave={this.hideBtn} className="titleWrapper">
          <h1 id='addSchoolTitle'>Education experience</h1>
          <button id='addSchoolBtn' onClick={this.addSchool} className="inputBoxButton">Add</button>
        </div>
        <EducationOverview schools={schools} editSchool={this.editSchool}
          resubmitSchool={this.resubmitSchool} deleteSchool={this.deleteSchool} />
        <div className="longLine"></div>
      </div>
    )
  }
};

export default Education;