import React from 'react';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';
import StoryDetail from './StoryEdit';
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

        <div className="block  mt-4 mb-3 bg-white transition hover:shadow-xl">

          <article className="flex"
            key={s._id}
          >
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">

            </div>
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

{/* <div className="sticky top-0 ml-0">              
              <details className="group relative mt-0">
                <summary className="block">
                  <div>
                    <div className="prose max-w-none group-open:hidden">
                      <p>
                        p1
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                        veniam dicta beatae eos ex error culpa delectus rem tenetur,
                        architecto quam nesciunt, dolor veritatis nisi minus
                        inventore, rerum at recusandae?
                      </p>
                    </div>
                    <span className="mt-4 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                      Read More
                    </span>
                  </div>
                </summary>

                <div className="prose max-w-none pb-6">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                    veniam dicta beatae eos ex error culpa delectus rem tenetur,
                    architecto quam nesciunt, dolor veritatis nisi minus inventore,
                    rerum at recusandae?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                    nam sapiente nobis ea veritatis error consequatur nisi
                    exercitationem iure laudantium culpa, animi temporibus non! Maxime
                    et quisquam amet. A, deserunt!
                  </p>
                </div>
              </details>
              <form className="mt-8">
                
                <div className="mt-8 flex">
                  <div>
                    <label htmlFor="quantity" className="sr-only">
                      Qty
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      min={1}
                      defaultValue={1}
                      className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="ml-3 block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </form>
            </div> */}



