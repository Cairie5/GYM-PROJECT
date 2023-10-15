import React,{useState} from "react";


function Page() {

    const [exercises , setExercises] = useState([])
    
   
      async function Main () {
       const {data} = await axios.get('http://127.0.0.1:5555/exercises/:id')
       setExercises(data)
       }
   useEffect(() => {Main()}, [])


    return (
        <div>
            <h1></h1>
        </div>
    );
}

export default Page;