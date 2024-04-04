import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='w-[80%] transition ease-in-out delay-100 mt-[30px] mb-[30px] md:w-[60%] flex flex-col gap-5 p-5 justify-center items-center rounded-md bg-white'>
            <img src={logo} className='mt-[30px]' alt="" />

            <h2 className="text-center text-[22px] md:text-[28px] mb-[10px] font-bold leading-9 tracking-tight text-gray-900">Login</h2>

            <input type="email" id="email" name="email" placeholder="Email" className="w-full md:w-[60%] border-gray-300 border rounded-md px-4 py-4 focus:outline-none focus:border-blue-500" />

            <input type="password" id="password" name="password" placeholder="Password" className="w-full md:w-[60%] border-gray-300 border rounded-md px-4 py-4 focus:outline-none focus:border-blue-500" />

            <div className="w-full md:w-[60%] flex flex-col justify-center items-end">
                <a href="#" className="md:text-[15px] text-[12px] hover:underline">Forgot password?</a>
            </div>
            <button className="bg-[#003049] w-full md:w-[60%] text-[20px] font-bold text-white px-4 py-2 rounded-md">Login</button>

            <div className="w-full md:w-[60%] flex flex-col justify-center items-end">
                <a href="#" className="md:text-[15px] text-[12px] hover:underline">Not a member?</a>
            </div>

            <div className="w-full md:w-[60%]">
                <Link to="/auth/signup" className="block"><button className="bg-[#D62828] w-full text-[20px] font-bold text-white px-4 py-2 rounded-md">Sign up</button></Link>
            </div>

            <p className="text-gray-600 md:text-[15px] mb-[30px] text-[12px]">Sign up using</p>

        </div>
    )
}

export default Login