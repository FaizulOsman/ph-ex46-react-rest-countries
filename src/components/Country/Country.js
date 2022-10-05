import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, flags, population } = props.country;
    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <img width={100} src={flags.png} alt="" />
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;