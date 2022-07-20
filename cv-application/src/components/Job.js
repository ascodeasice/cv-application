import { Component } from "react";
import uniqid from 'uniqid';
import JobOverview from './JobOverview';
import '../styles/Job.css';

class Job extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
    };
  }

  editJob = (id) => {
    const newJobs = this.state.jobs;
    newJobs.forEach((job) => {
      if (job.id === id) {
        job.editing = true;
      }
    })
    this.setState({
      jobs: newJobs
    })
  }

  resubmitJob = (id) => {
    const newJobs = this.state.jobs;
    newJobs.forEach((job) => {
      if (job.id === id) {
        job.editing = false;
        job.companyName = document.getElementById(`companyName${id}`).value;
        job.title = document.getElementById(`title${id}`).value;
        job.mainTasks = document.getElementById(`mainTasks${id}`).value;
        job.date = document.getElementById(`date${id}`).value;
      }
    })
    this.setState({
      jobs: newJobs
    })
  }

  deleteJob = (id) => {
    this.setState({
      jobs: this.state.jobs.filter((job) => job.id !== id)
    });
  }

  addJob = () => {
    this.setState({
      jobs: this.state.jobs.concat({
        id: uniqid(),
        companyName: 'company name',
        title: 'position title',
        mainTasks: 'main tasks of the job',
        date: 'date(from and until)',
        editing: false
      })
    })
  }

  showBtn = () => {
    document.getElementById('addJobBtn').style.display = 'block';
  }

  hideBtn = () => {
    document.getElementById('addJobBtn').style.display = 'none';
  }


  render() {
    return (
      <div className="jobContainer">
        <div class="titleWrapper" onMouseOver={this.showBtn} onMouseLeave={this.hideBtn}>
          <h1>Practical experience</h1>
          <button id='addJobBtn' className="inputBoxButton" onClick={this.addJob}>Add</button>
        </div>
        <JobOverview jobs={this.state.jobs} editJob={this.editJob}
          resubmitJob={this.resubmitJob} deleteJob={this.deleteJob} />
      </div>
    )
  }
};

export default Job;