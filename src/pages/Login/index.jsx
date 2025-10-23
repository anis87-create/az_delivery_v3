import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../store/features/authSlice';

const Login = () => {
  const [form, setForm] = useState({
      email:'',
      password:'',
  }); 
  const { users } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    try {
       const userFound = users.find(user => user.email === form.email);
       if(userFound){
           dispatch(login(form));
           if(userFound.currentRole === 'customer'){
             navigate('/');
           } else {
            navigate('/restaurant-dashboard');
           }
           
       }
       
    } catch (error) {
      
    }
    dispatch(login(form))
  }
  return (
    <div className="h-screen bg-white overflow-hidden">
      <div className="h-full w-full flex">
        {/* Form Section */}
        <div className="w-1/2 p-8 lg:p-12 flex items-center justify-center">
          <div className="max-w-md w-full">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
              <p className="mt-2 text-gray-600">Sign in to your account</p>
            </div>

              <form className="space-y-6" onSubmit={onSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your email"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your password"
                    onChange={handleChange}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <Link to="/forgot-password" className="text-orange-500 hover:text-orange-600">
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
                >
                  Sign In
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-orange-500 hover:text-orange-600 font-medium">
                      Sign up
                    </Link>
                  </p>
                </div>
            </form>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/2 bg-gradient-to-br from-orange-400 to-orange-600">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Food delivery"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Login