import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import { Navigate } from "react-router-dom";
import Editor from "../Editor";
import Navbar from '../components/Navbar';



export default function CreateJob(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [redirect, setRedirect] = useState(false);

   async function createNewJob(ev){
    const data = new FormData();
    data.set('title', title);
    data.set('description', description);
    data.set('deadline', deadline);
   
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/vacancy', {
        method: 'POST',
        body: data,
        credentials: 'include',
    });
     if(response.ok){
        setRedirect(true);
     }
   }

     if (redirect){
        return <Navigate to={'/'} />
     }

    return(
      <>
      <div className="">
       <Navbar />
       <div className='topspace'>
      </div>
       </div>
        <form onSubmit={createNewJob}>
            <input type="title"
               placeholder={'Title'} 
               value={title}
               onChange={ev => setTitle(ev.target.value)} />
            <input type="description" 
               placeholder={'Job Description'}
               value={description}
               onChange={ev => setDescription(ev.target.value)} /> 
            <input type="deadline"
              placeholder={'Deadline'}
              value={deadline}
              onChange={ev => setDeadline(ev.target.value)} />


            <button style={{marginTop:'5px'}}>Create Job</button>
        </form>
        </> 
    );
}