import React, {useState,useEffect} from 'react';
import axios from '../api/axios';

function Exercises(){
    const [exercises , setExercises] = useState([])
    
   
      async function Main () {
       const {data} = await axios.get('http://127.0.0.1:5555/exercises')
       setExercises(data)
       }
   useEffect(() => {Main()}, [])
      
   const handleClick = () => {
    return (
      <>
      
      </>
    )
   }
   
   
   return ( <>


     <div style={{width:"100%", display:"flex",alignItems:"center", justifyContent:"space-between" ,flexFlow:"wrap" }}>
           {exercises.map((exercise ,index ) => (
             <div className="card text-bg-success mb-3" style={{width: "18rem"}}>
             <div className="card-header">{exercise.type}</div>
             <div className="card-body">
               <h5 className="card-title">{exercise.name}</h5>
               <p className="card-header">
               <ul>
               <li>{exercise.type}</li>
               <li>{exercise.difficulty}</li>
                <li>{exercise.muscle}</li>
               </ul>
               </p>
               <button type="button" class="btn btn-light"><a>MORE</a></button>


             </div>
           </div>
           
             ))}
           
           </div>
   
   
   </> )
   
   }
   
   
   export default Exercises
