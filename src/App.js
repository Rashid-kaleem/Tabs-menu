import { useEffect, useState } from 'react';
import './App.css';
const url = 'https://course-api.com/react-tabs-project';


function App() {

  const [jobs,setJobs] = useState([]);
  const [loading, setloading] = useState(true);
  const [value, setValue] = useState(0);

  const fetchJobs = async()=>{
    const response = await fetch(url)
    const newJobs = await response.json()

    setJobs(newJobs);
    setloading(false);
    console.log(newJobs);
  }

  useEffect(()=>{
    fetchJobs();

  },[])

  
    if(loading){
      return <section className='section loading'>
        <h1>loading...</h1>
      </section>
    }

    const {company,dates,duties,title} = jobs[value];

    return (
      <section className='section'>
        <div className='title'>
          <h2>experience</h2>
          <div className='underline'></div>
        </div>
        <div className='jobs-center'>
          <div className='btn-container'>
            {
              jobs.map((item,index)=>{
                return <button
                 onClick={()=>{setValue(index)}}
                 className={`job-btn ${index===value && 'active-btn'}`}>
                  {item.company}</button>

              })
            }
          </div>


          <article className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates} </p>
            {
              duties.map((duty,index)=>{
                return <div key={index} className='job-desc'>           
                  <p>{duty}</p>
                </div>

              })
            }
          </article>
        </div>

      </section>
    )
   
}

export default App;
