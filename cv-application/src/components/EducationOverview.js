import { Component } from "react";
import uniqid from 'uniqid';

class EducationOverview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { schools, editSchool, resubmitSchool, deleteSchool } = this.props;
    return (
      <div>
        {
          schools.map((school) => {
            if (school.editing) {
              return (
                <div key={uniqid()}>
                  <h2 key={uniqid()}>Name</h2>
                  <input name='name' key={uniqid()} id={`name${school.id}`} defaultValue={school.name} />
                  <h2 key={uniqid()}>Title</h2>
                  <input name='title' key={uniqid()} id={`title${school.id}`} defaultValue={school.title} />
                  <h2 key={uniqid()}>Date</h2>
                  <input name='date' key={uniqid()} id={`date${school.id}`} defaultValue={school.date} />
                  <button key={uniqid()} onClick={() => resubmitSchool(school.id)}>Done</button>
                </div>
              )
            }
            else {
              return (
                <div key={uniqid()}>
                  <h2 key={uniqid()}>Name</h2>
                  <p key={uniqid()}>{school.name}</p>
                  <h2 key={uniqid()}>Title</h2>
                  <p key={uniqid()}>{school.title}</p>
                  <h2 key={uniqid()}>Date</h2>
                  <p key={uniqid()}>{school.date}</p>
                  <button key={uniqid()} onClick={() => editSchool(school.id)}>Edit</button>
                  <button key={uniqid()} onClick={() => deleteSchool(school.id)}>Delete</button>
                </div>
              )
            }
          })
        }
      </div>
    )
  }

};

export default EducationOverview