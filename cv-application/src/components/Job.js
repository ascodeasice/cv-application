import { Component } from "react";
import uniqid from 'uniqid';
import JobOverview from './JobOverview';

class Job extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [
        {
          id: uniqid(),
          companyName: 'company name',
          title: 'position title',
          mainTasks: 'main tasks of the job',
          date: 'date(from and until)',
          editing: false
        }],
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

  render() {
    return (
      <div>
        <h2>Practical experience </h2>
        <button onClick={this.addJob}>Add</button>
        <JobOverview jobs={this.state.jobs} editJob={this.editJob}
          resubmitJob={this.resubmitJob} deleteJob={this.deleteJob} />
      </div>
    )
  }
};

export default Job;