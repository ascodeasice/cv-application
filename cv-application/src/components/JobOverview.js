import uniqid from 'uniqid';

const JobOverview = (props) => {
  const showBtn = (id) => {
    document.getElementById(`editBtn${id}`).style.display = 'inline';
    document.getElementById(`deleteBtn${id}`).style.display = 'inline';
  }

  const hideBtn = (id) => {
    document.getElementById(`editBtn${id}`).style.display = 'none';
    document.getElementById(`deleteBtn${id}`).style.display = 'none';
  }


  const { jobs, resubmitJob, editJob, deleteJob } = props;
  return (
    <div>
      {
        jobs.map((job) => {
          if (job.editing) {
            return (
              <div key={uniqid()}>
                <div className="midLine"></div>
                <h2 key={uniqid()}>Company Name</h2>
                <input key={uniqid()} id={`companyName${job.id}`} defaultValue={job.companyName} />
                <h2 key={uniqid()}>Title</h2>
                <input key={uniqid()} id={`title${job.id}`} defaultValue={job.title} />
                <h2 key={uniqid()}>Main Tasks</h2>
                <input key={uniqid()} id={`mainTasks${job.id}`} defaultValue={job.mainTasks} />
                <h2 key={uniqid()}>Date</h2>
                <input key={uniqid()} id={`date${job.id}`} defaultValue={job.date} />
                <button key={uniqid()} onClick={() => resubmitJob(job.id)} className='inputBoxButton'>Done</button>
              </div>
            )
          } else {
            return (
              <div key={uniqid()} onMouseOver={() => { showBtn(job.id) }} onMouseLeave={() => { hideBtn(job.id) }}>
                <div className="midLine"></div>
                <h2 key={uniqid()}>Company name</h2>
                <p key={uniqid()}>{job.companyName}</p>
                <h2 key={uniqid()}>Title</h2>
                <p key={uniqid()}>{job.title}</p>
                <h2 key={uniqid()}>Date</h2>
                <p key={uniqid()}>{job.date}</p>
                <h2 key={uniqid()}>Main Tasks</h2>
                <p key={uniqid()}>{job.mainTasks}</p>
                <button key={uniqid()} id={`editBtn${job.id}`} onClick={() => editJob(job.id)}>Edit</button>
                <button key={uniqid()} id={`deleteBtn${job.id}`} onClick={() => deleteJob(job.id)}>Delete</button>
              </div>
            )
          }
        })
      }

    </div>
  )
};

export default JobOverview;