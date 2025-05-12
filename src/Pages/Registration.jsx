import React, { useState } from "react";
import { Link } from 'react-router-dom'

function Registration () {
 const  [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(false);
 

  function Verify (e){
   e.preventDefault();
    if (fullName&& email && password && confirmPassword&& isChecked) { 
      console.log(fullName, email, password, confirmPassword, isChecked);
    } else {
      setError(true);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-600 to-purple-600 flex items-center justify-center">
    <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Registration
      </h2>
      <form onSubmit={Verify} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Confirm password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.value)}
        />

        {error && (
          <p className="text-red-600">Please fill in all credentials</p>
        )}
    
        {<Link to="/login">
          <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Register
        </button>
        </Link> }
    
      </form>
      <div className="text-center mt-4 text-sm text-gray-600">
        <a href="#" className="hover:underline">
          Already have an account?
        </a>{" "}
        |
{  <Link to="/login">     
          <a href="#" className="hover:underline ml-2">
            Login
          </a>
      </Link>}
      </div>
    </div>
  </div>
  )
}
export default Registration;