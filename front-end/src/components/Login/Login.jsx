import React, { useState } from "react";
import { loginUser } from "../../redux/apiRequest";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); //to not loading page again
    const newUser = {
      //the name have to same title in req.body in postman
      username: username,
      password: password,
    };
    loginUser(newUser, dispatch, navigate);
  }

  return (
    <>
      <section className="relative bg-[url(https://cdn.wallpapersafari.com/45/25/CHmXcK.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25" />
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-1 lg:block lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Story
              <strong className="block font-extrabold text-rose-700">
                Be author for your life
              </strong>
            </h1>
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to="/register"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Register
              </Link>
            </div>
          </div>

          <form className="max-w-xl text-center sm:text-right" onSubmit={handleLogin}>
            <label
              htmlFor="Username"
              className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="Username"
                placeholder="Username"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                onChange={(e) => setUsername(e.target.value)}
              />
              <span className="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Username
              </span>
            </label>
            <label
              htmlFor="Password"
              className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="password"
                id="Password"
                placeholder="Password"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Password
              </span>
            </label>



            <button
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              onSubmit={handleLogin}>
              Login
            </button>
          </form>

        </div>

      </section>

    </>


  );
}

export default Login;






























