// import React,{ useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import Header from "../Header/Header";
// import ListStoryType from "./ListStoryType"
// import { Link, useNavigate } from 'react-router-dom';

// import axios from 'axios';

// const StoryTypeDetail = () => {

//   const [oneTypeStoryData, setOneTypeStoryData] = useState([])
//   const url = process.env.REACT_APP_URL_AXIOS;
//   const token = localStorage.getItem("jwtLogin")
//   const {type} = useParams();


//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await axios.get(url + `/getOneTypeStory/${type}`,
//           {
//             headers: {
//               token: `Bearer ${token}`, //Authorization
//               accept: 'application/json' //Content-Type
//             }
//           }
//         );
//         console.log(res);
//         setOneTypeStoryData(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     })()
//   }, []);
//   return (

//     <>
//       <header className='sidebar'>
//         <Header />
//       </header>

//       <main className='main-home-page'>

//         <section className="home-page-container ">
//           <div className="container">
//             <div className="row">
//               {/* <div className="col-2 d-none d-lg-block d-md-block "></div> */}
//               <div className="col-lg-10 col-md-10 col-sm-10 story-content-container ">
                
//                 {oneTypeStoryData.map((s) => (
//                   <article className="flex mt-4 mb-3 bg-white transition hover:shadow-xl"
//                     key={s._id}
//                   >
//                     <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
//                       <time
//                         dateTime="2022-10-10"
//                         className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
//                       >

//                         <span>2022</span>
//                         <span className="w-px flex-1 bg-gray-900/10" />
//                         <span>Oct 10</span>
//                       </time>
//                     </div>
//                     <div className="hidden sm:block sm:basis-56">
//                       <img
//                         alt="Guitar"
//                         src={s.storyPhotos}
//                         className="aspect-square h-full w-full object-cover"
//                       />
//                     </div>
//                     <div className="flex flex-1 flex-col justify-between">

//                       <div className='mt-3 flex'>
//                         <Link to={`/UserProfile/${s.userID._id}`}
//                           className="group flex shrink-0 ml-4 items-center rounded-lg transition"

//                         >
//                           <span className="sr-only">User Profile</span>

//                           <img
//                             alt="Man"
//                             src={s.userID.imageAvatar}
//                             className="h-10 w-10 rounded-full object-cover"
//                           />
//                           <p className="ml-2 hidden text-left text-xs sm:block">
//                             <div className="block font-medium">{s.userID.username}</div>
//                             <div className="text-gray-500">{s.userID.email}</div>
//                           </p>
//                         </Link>
//                         {/* 
//             <button className='ml-20 mb-3' onClick={() => deleteStory(s._id)}>
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
//                 <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
//               </svg>
//             </button> */}

//                       </div>

//                       <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
//                         <div>
//                           <h6 className="font-semibold uppercase flex text-sm  text-gray-700">
//                             Type of story : {s.storyType}
//                           </h6>
//                           <h7 className="font-semibold uppercase flex text-sm  text-gray-700">
//                             Title of story: {s.storyTitle}
//                           </h7>
//                         </div>
//                         <p className="mt-2 text-base font-normal  leading-relaxed ">
//                           {s.storyContent.slice(1, 200)}
//                           {" "} <span onClick={() => { }}>see more</span>
//                         </p>
//                       </div>

//                       <div className="sm:flex sm:items-end sm:justify-end">
//                         <a
//                           href='/storyDetail/:id'
//                           className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
//                         >
//                           Read Story Detail
//                         </a>
//                       </div>
//                     </div>
//                   </article>
//                 ))}

//               </div>


//               <div className=" col-2 d-none d-lg-block d-md-block list-topic-container ">

//                 <ListStoryType />

//               </div>


//               <div className="col-2 d-none d-lg-block d-md-block "></div>

//             </div>
//           </div>
//         </section>

//       </main>
//     </>
//   )
// }

// export default StoryTypeDetail