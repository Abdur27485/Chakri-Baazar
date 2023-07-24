import axios from 'axios';
import React from 'react';

const FresherJobs = () => {

    axios.get('https://chakri-baazar-server-abdur27485.vercel.app/fresherJobs')
        .then(response => {
            console.log('fresherJobs:',response);
        })
    return (
        <div>

        </div>
    );
};

export default FresherJobs;