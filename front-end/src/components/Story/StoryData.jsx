import React from 'react';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

const StoryHome = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const url = process.env.REACT_APP_URL_AXIOS;
  const token = localStorage.getItem("jwtLogin")
  const { id } = useParams();
  const navigate = useNavigate();

  const [storyData, setStoryData] = useState([])
 
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url + '/story/getAllStory',
          {
            headers: {
              token: `Bearer ${token}`, //Authorization
              accept: 'application/json' //Content-Type
            }
          }
        );
        console.log(res);
        setStoryData(res.data);
      } catch (err) {
        console.log(err);
      }
    })()
  }, []);


  return (
    <>
  
      {storyData.map((s) => (      
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
              alt=""
              src={s.storyPhotos}
              className="aspect-square h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between">

            <div className='mt-1 flex'>
              
              <Link to={`/UserProfile/${s.userID._id}` }
                className="group flex shrink-0 ml-4 items-center rounded-lg transition"
                
              >
                <span className="sr-only">User Profile</span>

                <img
                  alt="Man"
                  src={s.userID.imageAvatar}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <p className="ml-2 hidden text-left text-xs sm:block">
                  <div className="block font-medium">{s.userID.username}</div>
                  <div className="text-gray-500">{s.userID.email}</div>
                </p>
              </Link>
            </div>

            <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6 ">
              <div className='mt-0'>
                <h6 className="font-semibold flex text-sm  text-gray-700">
                  Type of story : {s.storyType}
                </h6>
                <h7 className="font-semibold flex text-sm  text-gray-700">
                  Title of story: {s.storyTitle}
                </h7>
              </div>
              <p className="mt-4 text-sm font-normal h-40 leading-relaxed overflow-y-scroll">
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
    </>
  );
}

export default StoryHome;