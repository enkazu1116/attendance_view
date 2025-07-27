"use client";
export default function Login() {
  return (
      <div className="border-2 rounded-lg shadow-lg text-center flex flex-col items-center mt-16 w-[400px] mx-auto p-8 bg-white">
          <h1 className="text-3xl font-bold mb-6 text-gray-700">Supabase Login</h1>
          
          <form className="flex flex-col w-full gap-4">
              <div className="flex flex-col text-left">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-600">Email</label>
                  <input
                      id="email"
                      type="email"
                      placeholder="example@mail.com"
                      className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
              </div>

              <div className="flex flex-col text-left">
                  <label htmlFor="password" className="text-sm font-semibold text-gray-600">Password</label>
                  <input
                      id="password"
                      type="password"
                      placeholder="Password"
                      className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
              </div>

              <div className="flex justify-between mt-2">
                  <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  >
                      Login
                  </button>
                  <button
                      type="button"
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
                  >
                      Cancel
                  </button>
              </div>
          </form>

          <p className="mt-6 text-sm text-gray-600">
              Don’t have an account?{" "}
              <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
          </p>
      </div>
  );
}