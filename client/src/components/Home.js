import React from 'react';
import "./Home.css"

function Home(){
    return (
        <div>
            <h1>GYM</h1>
            <div className='navbar'>
            <span>About</span> 
            <Link to={"/Signin"}>Signin</Link>
            <Link to={"/Signup"}>Signup</Link>
            </div>
        </div>
    )
}

export default Home;