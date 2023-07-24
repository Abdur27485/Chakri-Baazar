import axios from 'axios';
import React from 'react';

const ITCompanies = () => {
    axios.get('https://chakri-baazar-server-abdur27485.vercel.app/bdCompanies')
    .then(response => {
        console.log('bdCompanies:',response);
    })
    axios.get('https://chakri-baazar-server-abdur27485.vercel.app/globalCompanies')
    .then(response => {
        console.log('globalCompanies:',response);
    })
    return (
        <div>
            
        </div>
    );
};

export default ITCompanies;