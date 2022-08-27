import React, { useEffect } from 'react'
import Team_card from './Team_card'
import { useState } from 'react'
import Loading from './Loading';

import Data from '../data/team.json';

function Team() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    // fetch data from file and set state
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setData(Data);
            setLoading(false);
        }, 3500);
    } , []);

    

    

    return (
        <div className=" pt-20 text-center mx-auto dark:bg-[#182232]">
            <h1 className='lg:text-6xl text-2xl dark:text-white font-mono'>Team</h1>
            <p className='dark:text-white font-extralight font-mono pt-5'>
                We are a team of passionate developers who are passionate about building great products.
            </p>
            <div className="lg:px-24 sm:p-5">

                <div className=" grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                    {loading ? (data.map(e => { return <Loading/>}))  : data.map((item, index) => {return <Team_card key={index} data={item} />})}
                </div>
            </div>


        </div>
    )
}

export default Team