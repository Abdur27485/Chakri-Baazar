import axios from 'axios';
import React from 'react';

const ExperiancedJobs = () => {

    axios.get('https://chakri-baazar-server-abdur27485.vercel.app/experiancedJobs')
    .then(response => {
        console.log('experiancedJobs:',response);
    })
    return (
        <div>
            
        </div>
    );
};

export default ExperiancedJobs;