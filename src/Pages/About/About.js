import React from 'react';
import { json } from 'react-router-dom';

const About = () => {


    const handledData = (e)=>{
       
        e.preventDefault();
        const booking=  {
            name :e.target.name.value,
            age: e.target.age.value,
            school: e.target.school.value,
            district:e.target.district.value
 
        }
        console.log(booking)

        fetch(`http://localhost:5000/helloData`,{
            method:'POST',
           
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        

    }

    return (
        <div class="nav-prblm">  
            <p>I will sent data from this data </p>

            <form onSubmit={handledData}>
            <input type="text"name='name'  placeholder="Name" class="input input-bordered w-full max-w-xs" />
           <input type="number" name='age' placeholder="Age" class="input input-bordered w-full max-w-xs" />
           <input type="text" name='school' placeholder="school" class="input input-bordered w-full max-w-xs" />
           <input type="text" name='district' placeholder='district'   class="input input-bordered w-full max-w-xs" />
           <input type="submit" value='submit' placeholder="Type here" class="btn btn-primary font-bold text-white w-full max-w-xs" />
        </form>


        </div>
    );
};

export default About;