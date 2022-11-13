import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from "../Header/Header";
import ListStoryType from "./ListStoryType"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const StoryTypeDetail = () => {

  const [oneTypeStoryData, setOneTypeStoryData] = useState([])
  const url = process.env.REACT_APP_URL_AXIOS;
  const token = localStorage.getItem("jwtLogin")
  const {type} = useParams();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url + `/story/getOneTypeStory/${type}`,
          {
            headers: {
              token: `Bearer ${token}`, //Authorization
              accept: 'application/json' //Content-Type
            }
          }
        );
        console.log(res);
        setOneTypeStoryData(res.data);
      } catch (err) {
        console.log(err);
      }
    })()
  }, []);
  return (

    <>
      <Header />
      
        {oneTypeStoryData.map((stdt) => (      
        <article className="flex mt-4 mb-3 bg-white transition hover:shadow-xl"
          key={stdt._id}
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
              src={stdt.storyPhotos}
              className="aspect-square h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between">

            <div className='mt-1 flex'>
              
              <Link to={`/UserProfile/${stdt.userID._id}` }
                className="group flex shrink-0 ml-4 items-center rounded-lg transition"
                
              >
                <span className="sr-only">User Profile</span>

                <img
                  alt="Man"
                  src={stdt.userID.imageAvatar}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <p className="ml-2 hidden text-left text-xs sm:block">
                  <div className="block font-medium">{stdt.userID.name}</div>
                  {/* <div className="block font-medium">{stdt.userID.username}</div>
                  <div className="text-gray-500">{stdt.userID.email}</div> */}
                </p>
              </Link>
            </div>

            <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6 ">
              <div className='mt-0'>
                <h6 className="font-semibold flex text-sm  text-gray-700">
                  Type of story : {stdt.storyType}
                </h6>
                <h7 className="font-semibold flex text-sm  text-gray-700">
                  Title of story: {stdt.storyTitle}
                </h7>
              </div>
              <p className="mt-4 text-sm font-normal h-40 leading-relaxed overflow-y-scroll">
                {stdt.storyContent}
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
      

  )
}


export default StoryTypeDetail