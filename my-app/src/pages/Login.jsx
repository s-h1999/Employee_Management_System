import React from 'react';

const Login = () => {
  return (
    // 1. Small Screen: Full-width, light gray background
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8 lg:p-12">
      
      {/* 2. Container: Adjusts max-width based on screen size */}
      <div className="w-full max-w-md md:max-w-2xl lg:max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Branding Visual 
            - Hidden on Small (Mobile)
            - 40% Width on Medium (Tablet)
            - 50% Width on Large (Desktop)
        */}
        <div className="hidden md:flex md:w-2/5 lg:w-1/2 bg-indigo-700 p-8 lg:p-16 flex-col justify-center text-white">
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-4xl font-extrabold tracking-tight">
              EMS Portal
            </h2>
            <p className="text-indigo-100 text-sm lg:text-lg leading-relaxed">
              Access your personalized dashboard, track attendance, and manage tasks efficiently.
            </p>
            <div className="h-1.5 w-12 bg-white/30 rounded-full"></div>
          </div>
        </div>

        {/* Right Side: Login Form 
            - Full width on Small
            - 60% Width on Medium
            - 50% Width on Large
        */}
        <div className="w-full md:w-3/5 lg:w-1/2 p-6 sm:p-10 lg:p-16">
          <div className="mb-8 lg:mb-12">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Sign In</h1>
            <p className="text-gray-500 mt-2 text-sm lg:text-base">
              Enter your credentials to access the system.
            </p>
          </div>

          <form className="space-y-5 lg:space-y-7">
            <div>
              <label className="block text-xs lg:text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
                Employee Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all duration-200"
                placeholder="name@company.com"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-xs lg:text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Password
                </label>
                <a href="#" className="text-xs lg:text-sm text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all duration-200"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-bold py-3 lg:py-4 rounded-xl shadow-lg shadow-indigo-200 transition-all"
            >
              Login to Dashboard
            </button>
          </form>

          {/* Footer for Mobile/Desktop */}
          <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs lg:text-sm text-gray-400">© 2026 TechCorp Inc.</p>
            <button className="text-xs lg:text-sm font-medium text-gray-600 hover:text-indigo-600">
              Support Center
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Login;