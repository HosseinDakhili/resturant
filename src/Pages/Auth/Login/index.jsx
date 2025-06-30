import React, { useContext } from 'react'
import useFormFields from '../../../Utils/useFormFields'
import { AuthContext } from '../../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import notify from '../../../Utils/Notify'

export default function Login() {
  const [fields,handleChange] = useFormFields({userame:'',password:''})
  const {handleToken} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleSubmit =  async(e) =>{
    e.preventeDefault()
    try {
const res = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fields)
            });      const date = await res.json()
      notify('success','Login successfully')
      handleToken(data.token)
      navigate('/')
    } catch (error) {
      notify('error','username or password is incorrect')
      
    }
  }
  

 return (
    <form className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">
          Login form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              required
              onChange={handleChange}
              value={fields?.username || ''}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              onChange={handleChange}
              value={fields?.password || ''}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-xl shadow-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </form>
  );
}
