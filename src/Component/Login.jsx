import React, { useState, useCallback } from 'react';
import './index.css';
import { useNavigate } from 'react-router';

const Login = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            const users = JSON.parse(storedUsers);
            const user = users.find((user) => user.username === username && user.password === password);
            if (user) {
                localStorage.setItem('authenticated', true);
                // window.location.href = '/questions';
                return navigate('/question')

            } else {
                setError('Invalid credentials');
            }
        } else {
            alert(setError('No users found SignUp Firs '))
            navigate("/signup")
        }
    },[username, password]);

    return (
        <div className=" bg-gradient-to-r from-indigo-200 to-yellow-100  flex flex-col w-full h-lvh gap-20 text-center items-center">
            <div className="w-full flex flex-row justify-center items-center text-center">
                <h1 id="quiz" className='bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent items-center text-center text-3xl border-b border-stone-500 font-semibold'>Quiz Game</h1>
            </div>
            <div className="bg-white text-black min-w-fit py-8 rounded-3xl flex flex-col justify-center gap-8 items-center text-center">
                <div>
                    <h2 id="login" className="text-3xl font-semibold bg-gradient-to-r from-cyan-800 to-yellow-500 bg-clip-text text-transparent ">Login</h2>
                </div>
                <div className="p-10">
                    <form onSubmit={handleSubmit} >
                        <label className="text-xl font-mono">
                            Username:
                            <input type="text" placeholder='enter name' value={username} required className="border border-zinc-700 px-2 py-1 rounded-xl outline-none " onChange={(e) => setUsername(e.target.value)} />
                        </label>
                        <br /><br />
                        <label className="text-xl font-mono">
                            Password:
                            <input type="password" placeholder='enter password' value={password} required className="border border-zinc-700 px-2 py-1 rounded-xl outline-none " onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <br />
                        <br />
                        <hr />
                        <br />
                        <button type='submit' className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-950 via-lime-500 to-lime-400 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                LogIn & Let's Play
                            </span>
                        </button>
                        {/* <button type="submit">Login</button> */}
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;