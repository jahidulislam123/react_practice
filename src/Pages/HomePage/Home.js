import React, { useEffect, useState } from 'react';
import SmallHome from './SmallHome';

const Home = () => {
    const[helloData , setHelloData]=useState('');
    useEffect(()=>{
        fetch('http://localhost:5000/helloData')
        .then(res=>res.json())
        .then(data=>setHelloData(data));

    },[])
    return (
        <div class="nav-prblm"> 
            <h2>How are you ?</h2>
            <h2>How are you ?</h2>
            <h2>How are you ?</h2>
            <h2>How are you ?</h2>
            <h2>The amount of the {helloData.length}</h2>

            {
                helloData.map((cat)=> <SmallHome
                key={cat.id}
                cat={cat}
                >

                </SmallHome> )


            }
            <br></br>


        </div>
    );
};

export default Home;