import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createAxios } from '../../createInstance';
import { logout } from "../../redux/apiRequest";
import axios from "axios";
import { logoutFailed, logoutStart, logoutSuccess } from "../../redux/authSlice";
import "./header.css";
import { useState } from "react";

const Header = ({ direction, ...args }) => {

  const user = useSelector((state) => state.auth.login.currentUser);
  const token = localStorage.getItem('jwtLogin')

  // -----------------------------------------------------
  const accessToken = user?.accessToken;
  const id = user?._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let axiosJWT = createAxios(user, dispatch, logoutSuccess)
  const url = process.env.REACT_APP_URL_AXIOS;

  const handleLogout = async () => {
    // logout(dispatch, id,navigate,accessToken)
    dispatch(logoutStart());
    try {
      await axios.post(url + "/auth/logout", id, {
        // headers: { token: `Bearer ${accessToken}` },

        headers: {
          token: `Bearer ${token}`,
          accept: 'application/json'
        }

      });
      localStorage.clear("jwtLogin");
      dispatch(logoutSuccess())
      navigate("/login");
    } catch (err) {
      console.log(err);
      dispatch(logoutFailed())
    }

  };

  const [searchUser, setSearchUser] = useState([])
  const searchHandle = (e) => {
    let checkInputTouched;
    const searchValue = e.target.value;
    checkInputTouched = setTimeout(() => {
      if (searchValue.length >= 1) {
        (async () => {
          try {
            const res = await axios.get(url + '/user/searchUser?search=' + searchValue,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                  token: `Bearer ${token}`,
                  accept: 'application/json'
                }
              }
            );
            setSearchUser(res.data);
          } catch (err) {
            console.log(err);
          }
        })()
      } else {
        setSearchUser([]);
      }
    }, 800)
  }

  return (
    <>
      <header aria-label="Page Header" className="bg-gray-100 fixed w-full h-24 header top-0">
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center sm:justify-between sm:gap-4">
            <Link to={"/"}>
              <img src="../logoStory.jpg" alt="" className=" w-14 h-14 rounded-full" />
            </Link>
            <div className="relative hidden sm:block items-center">
              <label className="sr-only" htmlFor="search">
                {" "}
                Search{" "}
              </label>
              <input
                className="h-10 w-full rounded-lg border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56"
                id="search"
                type="search"
                placeholder="Search user..."
                onChange={searchHandle}
              />
              <div className="absolute top-1/2 right-1 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
              <div className="flex gap-4">
                <button
                  type="button"
                  className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
                >
                  <span className="sr-only">Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>

                <Link
                  to="/"
                  className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                >
                  <span className="sr-only">Home</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                  </svg>
                </Link>

                <Link
                  to="/Messenger"
                  className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                >
                  <span className="sr-only">Messenger</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                    <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </Link>
              </div>


              <div className="group flex shrink-0 items-center rounded-lg transition"
                onClick={() => navigate(`/UserProfile/${user._id}`)}
              >

                <img
                  alt="Man"
                  src={user.imageAvatar}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <p className="ml-2 hidden text-left text-xs sm:block">
                  <strong className="block font-medium">{user.username}</strong>
                  <span className="text-gray-500">{user.email}</span>
                </p>

              </div>


              <div class="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
                <Link
                  to={"/logout"}
                  class="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  onClick={handleLogout}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="listFriendSearch">
        {searchUser.length > 0 && <>
          {searchUser.map((s) => (
            <Link to={`/UserProfile/${s._id}`}
              className="group block shrink-0 ml-0 pl-8 items-center top-80 w-80 bg-gray-100"
            >
              <div className="flex">
                <img
                  alt="Man"
                  src={s.imageAvatar}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <p className="ml-2 hidden text-left text-xs sm:block">
                  <div className="block font-medium">{s.username}</div>
                  <div className="text-gray-500">{s.name}</div>
                </p>
              </div>
            </Link>
          ))}
        </>}
      </div>


    </>



  );

};

export default Header;




























