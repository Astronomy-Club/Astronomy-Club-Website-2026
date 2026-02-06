import React from 'react';
import {Link} from "react-router-dom";


function Home() {
  return (
    <>
      <h1>
        ASTRONOMY CLUB IIT BHU
      </h1>
      <h2>
        Welcome to our official website
      </h2>
      <Link to = "/projects">
        <button>Projects</button>
      </Link>
      <Link to = "/activities">
        <button>Activities</button>
      </Link>
    </>
  )
}
export default Home;
