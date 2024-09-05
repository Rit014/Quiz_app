import React from 'react';
import './index.css';

const Completed = () => {
    return (
        <>
            <div className=" w-full h-lvh text-white flex flex-col gap-1 text-center bg-gradient-to-r from-indigo-200 to-yellow-100 items-center">
                <h1 id="quiz" className='text-orange-600 items-center text-center text-2xl border-b border-stone-500 font-bold'>Quiz Game</h1>
                <div id="heading" className='w-11/12 h-lvh flex flex-row justify-center items-center text-center text-2xl  text-orange-700'>
                    <p className='font-semibold text-2xl'>You Have Complete Your Quizzz!!!</p>
                </div>
            </div>
        </>
    )
}

export default Completed;
