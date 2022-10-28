import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';


const StoryIndividual = ({ stories,username,email,imageAvatar,loading }) => {
  const url = process.env.REACT_APP_URL_AXIOS;

  const navigate = useNavigate();

  const deleteStory = async (_id) => {
    try {
      await axios.delete(url + `/story/deleteStory/${_id}`)
      alert("delete topic success")
      console.log("delete topic success")
      navigate("/UserProfile/:id")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {(loading === false ) &&
        <>
          {stories.map((s) => (

            <article className="flex mt-4 mb-3 bg-white transition hover:shadow-xl"
              key={s._id}
            >
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                  dateTime="2022-10-10"
                  className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                >

                  <span>2022</span>
                  <span className="w-px flex-1 bg-gray-900/10" />
                  <span>Oct 10</span>
                </time>
              </div>
              <div className="hidden sm:block sm:basis-56">
                <img
                  alt="Guitar"
                  src={s.storyPhotos}
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">

                <div className='mt-3 flex'>
                  <Link 
                    to={`/UserProfile/${s.userID}`}
                    className="group flex shrink-0 ml-4 items-center rounded-lg transition"
                  >
                    <span className="sr-only">User Profile</span>

                    <img
                      alt="Man"
                      src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <p className="ml-2 hidden text-left text-xs sm:block">
                      <strong className="block font-medium">{username}</strong>
                      <span className="text-gray-500">{email}</span>
                    </p>
                  </Link>
                  <button className='ml-20 mb-3' onClick={() => deleteStory(s._id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </div>

                <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <div>
                    <h6 className="font-semibold uppercase flex text-sm  text-gray-700">
                      Type of story : {s.storyType}
                    </h6>
                    <h7 className="font-semibold uppercase flex text-sm  text-gray-700">
                      Title of story: {s.storyTitle}
                    </h7>
                  </div>
                  <p className="mt-2 font-semibold  flex text-base font-normal  leading-relaxed  line-clamp-3">
                    {s.storyContent}
                  </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                  <a
                    href='/storyDetail/:id'
                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                  >
                    Read Story Detail
                  </a>
                </div>
              </div>
            </article>
          ))}

        </>}

    </>
  )
}

export default StoryIndividual