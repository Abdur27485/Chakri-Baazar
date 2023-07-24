import React from 'react';
import Banner from './components/Banner';
import FresherJobs from './components/FresherJobs';
import ExperiancedJobs from './components/ExperiancedJobs';
import ITCompanies from './components/ITCompanies';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <FresherJobs></FresherJobs>
           <ExperiancedJobs></ExperiancedJobs>
           <ITCompanies></ITCompanies>
        </div>
    );
};

export default Home;