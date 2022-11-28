import React, { useState, useEffect } from "react";
import NavAdmin from './NavAdmin';
import axios from "axios";


const token = localStorage.getItem('jwtLogin')
const url = process.env.REACT_APP_URL_AXIOS;

const AddTopic = () => {
  const [type, setType] = useState('');
  const addType = async (e) => {
    try {
      const res = await axios.post(url + '/admin/addType', {
        type: type
      },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            token: `Bearer ${token}`,
            accept: 'application/json'
          }
        }
      );
      console.log(res);
      alert("Add Story's type success")
    } catch (err) {
      console.log(err);
      alert("Add Story's type fail")

    }
  }


  const deleteType = async (_id) => {
    try {
      await axios.delete(url + `/admin/deleteType/${_id}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            token: `Bearer ${token}`,
            accept: 'application/json'
          }
        }
      )
      console.log("delete Type success");
      alert("delete story's type success");

    } catch (error) {
      console.log(error);
      alert("delete story's type fail");
    }
  }

  const [TypeData, setTypeData] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url + '/admin/getAllTypes',
          {
              headers: {
                  token: `Bearer ${token}`,
                  accept: 'application/json'
              }
          }
        );
        console.log(res);
        setTypeData(res.data);
      } catch (err) {
        console.log(err);

      }
    })()
  }, []);


  return (

    <>
      <NavAdmin />


      <div className="hidden lg:relative lg:col-span-2 lg:block">
        <img
          alt="Art"
          src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1  sm:grid-cols-2">
          <form onSubmit={(e) => addType(e)}>
            <h5>Add Type of story</h5>

            <label
              htmlFor="addType"
              className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                type="text"
                id="Type"
                placeholder="Type For Story"
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                onChange={(e) => setType(e.target.value)}
              />
              <span className="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Type of story
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
              <p className="font-medium">List All Type</p>
              <nav
                aria-label="Footer Nav"
                className="mt-4 flex flex-col space-y-2"
              >

                <>
                  <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                      <thead className="bg-gray-100">
                        <tr>

                          <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            <div className="flex items-center gap-2">
                              No
                            </div>
                          </th>
                          <th className="whitespace-nowrap px-6 py-2 text-center font-medium text-gray-900">
                            <div className="flex align-middle items-center ">
                              Type
                            </div>
                          </th>

                          <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Action
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-gray-200">
                        {TypeData.map((t, index) => (
                          <tr key={t._id}>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                              {index + 1}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                              {t.type}
                            </td>

                            <td className="whitespace-nowrap px-4 py-2">
                              <button
                                className="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700"
                                onClick={() => deleteType(t._id)}
                              >
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


    </>
  )
}

export default AddTopic