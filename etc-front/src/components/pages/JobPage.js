import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {formatISO9075} from "date-fns";
import {UserContext} from "../UserContext";
import {Link} from 'react-router-dom';
import { Navigate } from "react-router-dom";
import Navbar from '../components/Navbar';
export default function JobPage() {
  const [jobInfo,setJobInfo] = useState(null);
  const {userInfo} = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const {id} = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/job/${id}`)
      .then(response => {
        response.json().then(jobInfo => {
          setJobInfo(jobInfo);
        });
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:4000/vacancy/job/${id}`)
      .then(response => {
        response.json().then(jobInfo => {
          setJobInfo(jobInfo);
        });
      });
  }, []);
  const deletejob = async (id) => {
  
    const res2 = await fetch(`http://localhost:4000/job/${jobInfo._id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
        console.log("error");
    } else {
        console.log("vacancy deleted");
        alert("Vacancy Deleted Successfully!");
        setRedirect(true);
       
    }
   



}
if (redirect){
  return <Navigate to={'/'} />
}

  if (!jobInfo) return '';

  return (
    <>
      <div className="">
       <Navbar />
       <div className='topspace'>
      </div>
       </div>
    <div style={{maxWidth: '1100px', marginLeft:'300px', marginRight: '300px', color: '#8a181b', fontFamily:`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif` }} className="post-page">
      <h1>{jobInfo.title}</h1>
      <time>{formatISO9075(new Date(jobInfo.createdAt))}</time>
      <div className="author">by @{jobInfo.author.username}</div>
      {userInfo.id === jobInfo.author._id && (
        <div className="edit-row">
          <Link className="edit-btn" to={`/editJob/${jobInfo._id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            Edit this Vacancy
          </Link>
          
          <button className="delete-btn" onClick={() => deletejob(jobInfo._id)}>Delete Job</button>
        </div>
      )}

    <div className="content" dangerouslySetInnerHTML={{__html:jobInfo.content}} />
    </div>
    </>
  );
}