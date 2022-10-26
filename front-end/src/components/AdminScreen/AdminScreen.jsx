import React, { useState, useEffect } from "react";
import { Label, navLink } from 'reactstrap';
import ListAllUser from './ListAllUser';
import NavAdmin from './NavAdmin';
import axios from "axios";



const AdminScreen = () => {

  const url = process.env.REACT_APP_URL_AXIOS;
  const [topic, setTopic] = useState('');

  const addTopic = async (e) => {
    // const token = localStorage.getItem('jwtLogin')
    try {
      const res = await axios.post(url + '/admin/addTopic', {
        topic: topic
      },
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //     token: `Bearer ${token}`,
        //     accept: 'application/json'
        //   }
        // }
      );
      console.log(res);

    } catch (err) {
      console.log(err);
    }
  }

  const [topicData, setTopicData] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url + '/admin/getAllTopics'
          // {
          //     headers: {
          //         token: `Bearer ${token}`,
          //         accept: 'application/json'
          //     }
          // }
        );
        console.log(res);
        setTopicData(res.data);
      } catch (err) {
        console.log(err);
      }
    })()
  }, []);


  return (
    <>
      <NavAdmin />
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Admin Page
              {/* <span className="sm:block"> Increase Conversion. </span> */}
            </h1>
            <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
              This is screen of admin, which allow you manage this web
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/get-started"
              >
                Get Started
              </a>
              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------------------            */}
      <section>


        <div className="hidden lg:relative lg:col-span-2 lg:block">
          <img
            alt="Art"
            src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
          <div className="grid grid-cols-1  sm:grid-cols-2">
            <form onSubmit={(e) => addTopic(e)}>
              <h5>Add Topic for story</h5>

              <label
                htmlFor="addTopic"
                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="text"
                  id="topic"
                  placeholder="Topic For Story"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  onChange={(e) => setTopic(e.target.value)}
                />
                <span className="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Topic
                </span>
              </label>
              <button
                class="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
              >
                Add
              </button>
            </form>

            <div className=" gap-4 sm:grid-cols-2">
              <div>
                <p className="font-medium">List All Topic</p>
                <nav
                  aria-label="Footer Nav"
                  className="mt-4 flex flex-col space-y-2"
                >

                  <>
                    <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="sticky inset-y-0 left-0 bg-gray-100 px-4 py-2 text-left">
                              <label className="sr-only" htmlFor="SelectAll">
                                Select All
                              </label>
                              <input
                                className="h-5 w-5 rounded border-gray-200"
                                type="checkbox"
                                id="SelectAll"
                              />
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                              <div className="flex items-center gap-2">
                                ID
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 text-gray-700"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                              <div className="flex items-center gap-2">
                                Topic
                              </div>
                            </th>

                            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                              Action
                            </th>
                          </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                          {topicData.map((t,index) => (
                            <tr>
                              <td className="sticky inset-y-0 left-0 bg-white px-4 py-2">
                                <label className="sr-only" htmlFor="Row1">
                                  Row 1
                                </label>
                                <input
                                  className="h-5 w-5 rounded border-gray-200"
                                  type="checkbox"
                                  id="Row1"
                                />
                              </td>
                              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {index+1}
                              </td>
                              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                {t.topic}
                              </td>

                              <td className="whitespace-nowrap px-4 py-2">
                                <button className="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700">
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                  </>

                </nav>
              </div>

            </div>



          </div>

        </div>

      </section>
    </>
  );
}

export default AdminScreen;


{/* <form action="" onSubmit={(e)=>addTopic(e)}>
          <label
            htmlFor="addTopic"
            className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="text"
              id="topic"
              placeholder="Topic For Story"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              onChange={(e)=>setTopic(e.target.value)}
            />
            <span className="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Topic
            </span>
          </label>
          <button
            class="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
          >
            Add
          </button>
        </form> */}