import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Home = () => {

    const navigate = useNavigate();

    const goToSignUp = () => {
        return navigate("/signup")
    }

    const goToLogin = () => {
        return navigate("/login")
    }

    return (
        <>
            <div className="text-white flex flex-col gap-2 items-center bg-gradient-to-r from-indigo-200 to-yellow-100 w-full h-lvh">
                <h1 id="quiz" className='bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent items-center text-center text-3xl border-b border-stone-500 font-semibold'>Quiz Game</h1>
                <div className="w-10/12 h-lvh flex flex-col gap-3 justify-center items-center text-center ">
                    <h1 id="heading" className=" text-sky-950 font-bold">Play this amazing game and justify your knowledge</h1>
                    <div className="w-full flex flex-row justify-center gap-5">
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
                            onClick={goToSignUp}>
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                SignUp
                            </span>
                        </button>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
                            onClick={goToLogin}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Login
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
