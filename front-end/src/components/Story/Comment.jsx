import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./story.css"
import { Link, useNavigate } from "react-router-dom";

const Comment = ({ storyID }) => {

  const user = useSelector((state) => state.auth.login.currentUser);
  const navigate = useNavigate()
  const url = process.env.REACT_APP_URL_AXIOS;
  const [commentInput, setCommentInput] = useState('')
  const token = localStorage.getItem('jwtLogin');
  const addComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(url + '/story/addComment?storyID=' + storyID, {
        comment: commentInput
      },
        {
          headers: {
            token: `Bearer ${token}`,
            accept: 'application/json'
          }
        }
      );
      console.log(res);
      navigate("/")
      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("upload comment fail")

    }
  };

  const handleGetComment = async () => {
    try {
      const res = await axios.get(url + '/story/getAllComments?storyID=' + storyID,
        {
          headers: {
            token: `Bearer ${token}`, //Authorization
            accept: 'application/json' //Content-Type
          }
        }
      );
      console.log(res);
      setCommentData(res.data);

    } catch (err) {
      console.log(err);
    }
  }
  const [commentData, setCommentData] = useState([])

  return (
    <div className="comment">
      <details className="group">

        <summary
          className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          onClick={() => { handleGetComment() }}
        >
          <span className="font-medium"> Comment </span>
          <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
              <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </span>
        </summary>

        <nav aria-label="Users Nav" className="mt-2 ml-2 mr-2 mb-0 h-80 flex flex-col space-y-1 bg-white-200 rounded-lg overflow-y-scroll">
          <div className="commentContainer h-60">
            <div className="commentInput" >

              <form className="relative" onSubmit={(e) => addComment(e)}>
                <input
                  type="text"
                  id="UserEmail"
                  placeholder="Comments"
                  class="w-full rounded-md border-gray-200 py-2.5 pr-10 shadow-sm sm:text-sm"
                  onChange={(e) => setCommentInput(e.target.value)}
                />

                <span class="absolute inset-y-0 right-0 grid w-10 place-content-center">
                  <button
                    type="submit"
                    class="rounded-full bg-green-600 p-0.5 text-white hover:bg-green-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                    </svg>
                  </button>
                </span>

              </form>

            </div>

            {commentData.map((cm) => (
              <div className="commentContent flex bg-slate-300 rounded-lg mt-1" key={cm._id}>

                <Link to={`/UserProfile/${cm.userID._id}`}
                  className="group flex shrink-0 ml-4 items-center rounded-lg transition"
                >
                  <img
                    alt="avatar"
                    src={cm.userID.imageAvatar}
                    className="h-10 w-10 rounded-full mt-0 object-cover"
                  />

                </Link>

                <div className=" ml-0 mt-2 block pb-0">
                  <Link to={`/UserProfile/${cm.userID._id}`}
                    className="group shrink-0  items-center rounded-lg"
                  >
                    <p className=" text-black text-left text-xs sm:block mt-4">
                      <div className="font-semibold ml-2 mt-8">{cm.userID.name}</div>
                    </p>
                  </Link>

                  <div className='mt-0 ml-2'>
                    <p className="  text-xs text-black-200">
                      {cm.comment}
                    </p>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </nav>

      </details>
    </div>
  )
}

export default Comment