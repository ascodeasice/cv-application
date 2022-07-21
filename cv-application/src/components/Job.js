import { useState } from "react";
import uniqid from 'uniqid';
import JobOverview from './JobOverview';
import '../styles/Job.css';

const Job = () => {
  const [jobs, setJobs] = useState([]);

  const editJob = (id) => {
    const newJobs = structuredClone(jobs);// deep copy
    newJobs.forEach((job) => {
      if (job.id === id) {
        job.editing = true;
      }
    })
    setJobs(newJobs);
  }

  const resubmitJob = (id) => {
    const newJobs = structuredClone(jobs); // deep copy
    newJobs.forEach((job) => {
      if (job.id === id) {
        job.editing = false;
        job.companyName = document.getElementById(`companyName${id}`).value;
        job.title = document.getElementById(`title${id}`).value;
        job.mainTasks = document.getElementById(`mainTasks${id}`).value;
        job.date = document.getElementById(`date${id}`).value;
      }
    })
    setJobs(newJobs);
  }

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  }

  const addJob = () => {
    setJobs(jobs.concat({
      id: uniqid(),
      companyName: 'company name',
      title: 'position title',
      mainTasks: 'main tasks of the job',
      date: 'date(from and until)',
      editing: false
    }));
  }

  const showBtn = () => {
    document.getElementById('addJobBtn').style.display = 'block';
  }

  const hideBtn = () => {
    document.getElementById('addJobBtn').style.display = 'none';
  }


  return (
    <div className="jobContainer">
      <div className="titleWrapper" onMouseOver={showBtn} onMouseLeave={hideBtn}>
        <h1>Practical experience</h1>
        <button id='addJobBtn' className="inputBoxButton" onClick={addJob}>Add</button>
      </div>
      <JobOverview jobs={jobs} editJob={editJob}
        resubmitJob={resubmitJob} deleteJob={deleteJob} />
    </div>
  )
};

export default Job;