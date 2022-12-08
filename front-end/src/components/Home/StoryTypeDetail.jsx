import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from "../Header/Header";
import { Link} from 'react-router-dom';
import axios from 'axios';
import Comment from '../Story/Comment';

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

        <div className="block mt-28 mb-3 bg-white transition hover:shadow-xl">

          <article className="flex"
            key={stdt._id}
          >
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">

            </div>
            <div className="hidden sm:block sm:basis-56">
              <img
                alt="story photo"
                src={stdt.storyPhotos? stdt.storyPhotos :"https://cdn.writermag.com/2016/07/shutterstock_403756669.jpg"}
                className="aspect-square h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col ">

              <div className='mt-1 flex'>

                <Link to={`/UserProfile/${stdt.userID._id}`}
                  className="group flex shrink-0 ml-4 items-center rounded-lg transition"

                >
                  <span className="sr-only">User Profile</span>

                  <img
                    alt="avatar"
                    src={stdt.userID.imageAvatar}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <p className="ml-2 hidden text-left text-xs sm:block">
                    <div className="block font-medium">{stdt.userID.name}</div>
          
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
                  <time
                    dateTime=""
                    className="flex items-center justify-between gap-4 text-xs text-gray-400"
                  >
                    <p>update at : {stdt.updatedAt}</p>
                  </time>
                </div>

                <details className="group relative mt-0">
                  <summary className="block">
                    <div>
                      <div className="prose max-w-none group-open:hidden  font-normal  text-sm leading-relaxed">
                        {stdt.storyContent.slice(0, 225) + "..."}
                      </div>
                      <span className=" mt-2 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                        ...Read More
                      </span>

                    </div>
                  </summary>

                  <div className="prose max-w-none pb-6 font-normal  text-sm leading-relaxed">
                    {stdt.storyContent.slice(0, 225)}
                    {stdt.storyContent.slice(225,)}
                  </div>
                </details>
              </div>
            </div>
          </article>

          <Comment 
          storyID = {stdt._id}
          />
        </div>
      ))}



    </>
      

  )
}


export default StoryTypeDetail