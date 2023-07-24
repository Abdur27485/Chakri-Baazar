import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import SwitchSelector from "react-switch-selector";

const Banner = () => {

    const [toggle, setToggle] = useState("Find a Job");


    const options = [
        {
            label: <span>Find a Job</span>,
            value: "Find a Job",
            selectedBackgroundColor: "#0097e6",
        },
        {
            label: "Find a Candidate",
            value: "Find a Candidate",
            selectedBackgroundColor: "#0097e6"
        }
    ];
    const onChange = (newValue) => {
        console.log(newValue);
        setToggle(newValue);
    };

    const initialSelectedIndex = options.findIndex(({ value }) => value === "Find a Job");
    console.log(initialSelectedIndex)

    return (
        <div className='bg-HomeBanner bg-no-repeat bg-cover w-full'>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-full bg-black bg-opacity-20 p-4 pt-40 text-center py-20'>

                <div>
                    <h1 className='text-white text-2xl lg:text-5xl mb-4 lg:mb-8'>Yout Gateway To Excicting Opportunities!</h1>
                    <p className='text-gray-100 text-base lg:text-xl'>Whether you're a professional seeking for new challenge, a fresher eager to kick-start your journey or hiring manager looking for employees, We have got you covered.</p>
                </div>

                <div>
                    <div className='text-white w-1/2 ml-5'>
                        <SwitchSelector
                            onChange={onChange}
                            options={options}
                            initialSelectedIndex={initialSelectedIndex}
                            backgroundColor={"#353b48"}
                            fontColor={"#f5f6fa"}
                        />
                    </div>
                    {
                        toggle === "Find a Job" ?
                            <form className='bg-gray-200 rounded-md py-5 flex gap-5 flex-wrap pl-10' onSubmit={(e) => e.preventDefault()}>
                                <input type="text" className='py-2 pl-2 rounded-md' placeholder='eg. Web Dev, Designer' />
                                <input type="text" className='py-2 pl-2 rounded-md' placeholder='Category' />
                                <input type="text" className='py-2 pl-2 rounded-md' placeholder='Location' />
                                <Button>Search</Button>
                            </form> 
                            :
                            <form className='bg-gray-200 rounded-md py-5 flex gap-5 flex-wrap pl-10' onSubmit={(e) => e.preventDefault()}>
                            <input type="text" className='py-2 pl-2 rounded-md' placeholder='eg. Abdul, Jhankar' />
                            <input type="text" className='py-2 pl-2 rounded-md' placeholder='Category' />
                            <input type="text" className='py-2 pl-2 rounded-md' placeholder='Location' />
                            <Button>Search</Button>
                    </form>
            }
                </div>
            </div>
        </div>
    );
};

export default Banner;