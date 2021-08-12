import React, { useState } from 'react';
import { firebaseClient } from '../lib/firebaseClient';

const Login = (_props:any) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <div className="bg-gray-200">
      <div className="h-screen flex justify-center items-center">
        <div className="bg-white rounded-lg w-2/5 px-16 py-16">
          <h2 className="text-2xl text-center text-green-700 mb-10 font-serif">Login Form</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              E-Mail
            </label>
            <input
              className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-600 focus:border-green-600 focus:z-10 sm:text-sm"
              type={'email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={'Email'}
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-600 focus:border-green-600 focus:z-10 sm:text-sm"
              type={'password'}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder={'Password'}
            />
          </div>
            <button
              className="w-full py-1 rounded-full bg-green-600 text-gray-100 mb-2 focus:outline-none"
              onClick={async () => {
                await firebaseClient.auth().signInWithEmailAndPassword(email, pass);
                window.location.href = '/blog';
              }}
            >
              Log in
            </button>
            <button
              className="w-full py-1 rounded-full bg-green-600 text-gray-100  focus:outline-none"
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
  );
};

export default Login