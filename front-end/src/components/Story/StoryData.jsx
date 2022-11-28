import React from 'react';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import axios from 'axios';
import Comment from './Comment';

const StoryHome = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const url = process.env.REACT_APP_URL_AXIOS;
  const token = localStorage.getItem("jwtLogin")


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
        console.log(res.data);
        setStoryData(res.data.sort((s1,s2)=>{
          return new Date(s2.createdAt) - new Date(s1.createdAt);
        })
        );
      } catch (err) {
        console.log(err);
      }
    })()
  }, []);


  return (
    <>
      {storyData.map((s) => (
        <div className="block  mt-4 mb-3 bg-white transition hover:shadow-xl" >
          <article className="flex"
            key={s._id}
          >
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">

            </div>
            <div className="hidden sm:block sm:basis-56">
              <img
                alt="story photo"
                src={s.storyPhotos ? s.storyPhotos : "https://w0.peakpx.com/wallpaper/867/933/HD-wallpaper-writing-pen-neon-icon-blue-background-neon-symbols-writing-pen-neon-icons-writing-pen-sign-education-signs-writing-pen-icon-education-icons.jpg"}
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
                    src={s.userID.imageAvatar}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <p className="ml-2 hidden text-left text-xs sm:block">
                    <div className="block font-medium">{s.userID.name}</div>
                    
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
            </div>
          </article>
          
          <Comment 
          storyID = {s._id}
          />

        </div>
  
      
      ))}
    </>
  );
}

export default StoryHome;




