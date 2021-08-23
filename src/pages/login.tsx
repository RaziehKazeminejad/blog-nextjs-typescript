import React, { useState } from 'react';
import { firebaseClient } from '../lib/firebaseClient';
import Image from 'next/image';
import LoginImage from "../../public/Login.png"

const Login = (_props:any) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <div className="w-full flex flex-wrap pt-20">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Welcome.</p>
          <div className="flex flex-col pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
              <label className="text-lg">E-Mail</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setEmail(e.target.value)}  
              />
            </div>
            <div className="flex flex-col pt-4">
              <label className="text-lg">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" 
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <button
              className="bg-blue-800 rounded text-white font-bold text-sm hover:bg-blue-700 p-2 mt-8"
              onClick={async () => {
                await firebaseClient.auth().signInWithEmailAndPassword(email, pass);
                window.location.href = '/blog';
              }}
            >
              Log in
            </button>
            <button
              className="bg-blue-800 rounded text-white font-bold text-sm hover:bg-blue-700 p-2 mt-8"
              onClick={async () => {
                await firebaseClient
                  .auth()
                  .createUserWithEmailAndPassword(email, pass);
                window.location.href = '/blog';
              }}
            >
              Create account
            </button>
          </div>
        </div>
      </div>

      <div className="w-1/2 pt-28">
        <Image className="object-cover w-full hidden md:block" src={LoginImage}/>
      </div>
    </div>
  );
};

export default Login