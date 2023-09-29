import {format} from "date-fns";
import { Link } from "react-router-dom";



export default function Job({_id, title, description, deadline, createdAt, author}){
    return(
  
         <div  className="post">
             <div className="texts">
                <Link to={`job/${_id}`}>
                   <h2>{title}</h2>
                </Link>
                <p className="info">
                   <a className="author">{author.username}</a>
                   <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
                </p>
                <p className="summary">{description}</p>
              </div>
          </div>

           
       
        
          
    );
}