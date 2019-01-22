import React from 'react';

const Homepage = () => {
  return(
    <div>
      <h1 id="homepage-text">Welcome to GetItDone 2</h1>
      <div>
        <label htmlFor="name"><b>Enter your username:</b></label>
        <input maxLength="30" type="name" id="name" />
      </div>
    </div>
  )
}
//     <p id="username">Enter your username:</p>
export default Homepage;