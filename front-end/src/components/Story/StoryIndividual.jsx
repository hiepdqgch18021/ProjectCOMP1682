import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Comment from './Comment';


const StoryIndividual = ({ stories, name, imageAvatar, checkUser, loading }) => {
  const user = useSelector((state) => state.auth.login?.currentUser);

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

  const editStory = async (_id) => {
    try {
      await axios.put(url + `/story/updateStory/${_id}`)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {(loading === false) &&
        <div className="block  mt-4 mb-3 bg-white transition hover:shadow-xl">
          {stories.map((s) => (

            <article className="flex"
              key={s._id}
            >
           
              <div className="hidden sm:block sm:basis-56">
                <img
                  alt="story photo"
                  src={s.storyPhotos}
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
              
              <div className="flex flex-1 flex-col ">

                <div className='mt-1 flex'>

                  <Link to={`/UserProfile/${s.userID._id}`}
                    className="group flex shrink-0 ml-4 items-center rounded-lg transition"

                  >
                    <span className="sr-only">User Profile</span>

                    <img
                      alt="avatar"
                      src={imageAvatar}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <p className="ml-2 hidden text-left text-xs sm:block">
                      <div className="block font-medium">{name}</div>
                     
                    </p>
                  </Link>
                  {checkUser &&
                    <>
                      <button
                        className='ml-20 mb-3'
                        onClick={() => deleteStory(s._id)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                      </button>


                      <button
                        className='ml-20 mb-3'
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 .94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                      </button>
                    </>
                  }

                </div>

                <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6 ">
                  <div className='mt-0'>
                    <h6 className="font-semibold flex text-sm  text-gray-700">
                      Type of story : {s.storyType}
                    </h6>
                    <h7 className="font-semibold flex text-sm  text-gray-700">
                      Title of story: {s.storyTitle}
                    </h7>
                    <time
                      dateTime=""
                      className="flex items-center justify-between gap-4 text-xs text-gray-400"
                    >
                      <p>update at : {s.updatedAt}</p>
                    </time>
                  </div>

                  <details className="group relative mt-0">
                    <summary className="block">
                      <div>
                        <div className="prose max-w-none group-open:hidden  font-normal  text-sm leading-relaxed">
                          {s.storyContent.slice(0, 225) + "..."}
                        </div>
                        <span className=" mt-2 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                          ...Read More
                        </span>

                      </div>
                    </summary>

                    <div className="prose max-w-none pb-6 font-normal  text-sm leading-relaxed">
                      {s.storyContent.slice(0, 225)}
                      {s.storyContent.slice(225,)}
                    </div>
                  </details>
                </div>
              <Comment />
              </div>
            </article>
            
          ))}
          

        </div>
        }

    </>
  )
}

export default StoryIndividual;

