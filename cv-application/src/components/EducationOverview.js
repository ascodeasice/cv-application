import { Component } from "react";
import uniqid from 'uniqid';

class EducationOverview extends Component {
  constructor(props) {
    super(props);
  }

  showBtn = (id) => {
    document.getElementById(`editBtn${id}`).style.display = 'inline';
    document.getElementById(`deleteBtn${id}`).style.display = 'inline';
  }

  hideBtn = (id) => {
    document.getElementById(`editBtn${id}`).style.display = 'none';
    document.getElementById(`deleteBtn${id}`).style.display = 'none';
  }

  render() {
    const { schools, editSchool, resubmitSchool, deleteSchool } = this.props;
    return (
      <div>
        {
          schools.map((school) => {
            if (school.editing) {
              return (
                <div key={uniqid()} >
                  <div className="midLine"></div>
                  <h2 key={uniqid()}>Name</h2>
                  <input key={uniqid()} id={`name${school.id}`} defaultValue={school.name} />
                  <h2 key={uniqid()}>Title</h2>
                  <input key={uniqid()} id={`title${school.id}`} defaultValue={school.title} />
                  <h2 key={uniqid()}>Date</h2>
                  <input key={uniqid()} id={`date${school.id}`} defaultValue={school.date} />
                  <button key={uniqid()} onClick={() => resubmitSchool(school.id)} className='inputBoxButton'>Done</button>
                </div>
              )
            }
            else {
              return (
                <div key={uniqid()} onMouseOver={() => this.showBtn(school.id)} onMouseLeave={() => this.hideBtn(school.id)}>
                  <div className="midLine"></div>
                  <h2 key={uniqid()}>Name</h2>
                  <p key={uniqid()}>{school.name}</p>
                  <h2 key={uniqid()}>Title</h2>
                  <p key={uniqid()}>{school.title}</p>
                  <h2 key={uniqid()}>Date</h2>
                  <p key={uniqid()}>{school.date}</p>
                  <button key={uniqid()} id={`editBtn${school.id}`} className="editBtn" onClick={() => editSchool(school.id)} >Edit</button>
                  <button key={uniqid()} id={`deleteBtn${school.id}`} className="deleteBtn" onClick={() => deleteSchool(school.id)}>Delete</button>
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