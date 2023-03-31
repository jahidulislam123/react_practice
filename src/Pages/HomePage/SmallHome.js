import React from 'react';

const SmallHome = ({cat}) => {
    const{_id,name,age,school}=cat;
    return (
        <div>
            <h2>{_id} </h2>
            <h2>{name} </h2>
            <h2>{age} </h2>
            <h2>{school} </h2>
        </div>
    );
};

export default SmallHome;