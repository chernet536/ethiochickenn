import Job from "../Job";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
export default function VacancyPage(){
    
    
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
       fetch('http://localhost:4000/vacancy').then(response => {
        response.json().then(jobs => {
            setJobs(jobs);
        });
       });
    }, []);
    return(
        <>
        <div className="jobs">
            <Navbar />
        </div>
        <div className='topspace'>

       </div>
       
    
       
          {jobs.length > 0 && jobs.map(job =>(
            <Job {...job}/>
          ))}
       </> 
    );
}