import { useState } from "react";
import EducationOverview from "./EducationOverview";
import uniqid from 'uniqid';
import '../styles/Education.css'

const Education = () => {
  const [schools, setSchools] = useState([]);

  const addSchool = () => {
    setSchools(schools.concat({
      id: uniqid(),
      name: 'school name',
      title: 'bachelor, master. PhD...',
      date: 'date(year - year)',
      editing: false
    }))
  }

  const deleteSchool = (id) => {
    setSchools(schools.filter((school) => school.id !== id));
  }

  const editSchool = (id) => {
    const newSchools = structuredClone(schools);// NOTE use deep copy, newSchools=schools(shallow copy) won't re-render
    newSchools.forEach((school) => {
      if (school.id === id) {
        school.editing = true;
      }
    });

    setSchools(newSchools);
  }

  const resubmitSchool = (id) => {
    const newSchools = structuredClone(schools); // NOTE use deep copy, newSchools=schools(shallow copy) won't re-render
    newSchools.forEach((school) => {
      if (school.id === id) {
        school.name = document.getElementById(`name${id}`).value;
        school.title = document.getElementById(`title${id}`).value;
        school.date = document.getElementById(`date${id}`).value;
        school.editing = false;
      }
    });

    setSchools(newSchools);
  }

  const showBtn = () => {
    document.getElementById('addSchoolBtn').style.display = 'block';
  }

  const hideBtn = () => {
    document.getElementById('addSchoolBtn').style.display = 'none';
  }

  return (
    <div className='educationContainer'>
      <div onMouseOver={showBtn} onMouseLeave={hideBtn} className="titleWrapper">
        <h1 id='addSchoolTitle'>Education experience</h1>
        <button id='addSchoolBtn' onClick={addSchool} className="inputBoxButton">Add</button>
      </div>
      <EducationOverview schools={schools} editSchool={editSchool}
        resubmitSchool={resubmitSchool} deleteSchool={deleteSchool} />
      <div className="longLine"></div>
    </div>
  )
};

export default Education;