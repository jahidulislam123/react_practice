import React, { useState } from 'react';
import "./new.css"
const News = () => {

    const [name, setName] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    const id = '23' ; // Replace with the actual user ID

    fetch(`http://localhost:5000/helloData/23`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
}


    return (
        <div class="nav-prblm">
            <h2>Hi how are you ?</h2>
            <h2>Hi how are you ?</h2>
            <h2>Hi how are you ?</h2>
           
            <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      
      <button type="submit">Update User</button>
    </form>
          
        </div>
    );
};

export default News;