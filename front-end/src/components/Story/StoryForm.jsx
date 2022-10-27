import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";


const StoryForm = () => {
    const user = useSelector((state) => state.auth.login.currentUser);

    const url = process.env.REACT_APP_URL_AXIOS;
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [storyFile, setStoryFile] = useState({});
    const navigate = useNavigate()
    const submitStory = async (e) => {
        const token = localStorage.getItem('jwtLogin')
        console.log(storyFile);
        e.preventDefault();
        try {
            const res = await axios.post(url + '/story/uploadStory', {
                storyType: type,
                storyTitle: title,
                storyContent: content,
                storyImage: storyFile
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
            navigate("/")
        } catch (err) {
            console.log(err);
        }
    }


    const [topicData, setTopicData] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(url + '/admin/getAllTypes');
                console.log(res);
                setTopicData(res.data);
            } catch (err) {
                console.log(err);
            }
        })()
    }, []);

    return (
        <>
            <header className='sidebar'>
                <Header />
            </header>
            <main>
                <section>
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="mt-5 ml-20 md:col-span-2 md:mt-0">
                            <form onSubmit={(e) => submitStory(e)}>
                                <div className="shadow sm:overflow-hidden sm:rounded-md">
                                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700"> Up your story</label>
                                            <div className="mt-1 flex items-center">
                                                <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                    </svg>
                                                </span>
                                                <span className="ml-3">
                                                    {user.username}
                                                </span>
                                            </div>
                                        </div>


                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="flex text-sm font-medium text-gray-700">
                                                Type
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                onChange={(e) => setType(e.target.value)}
                                            >
                                                {topicData.map((t) => (
                                                    <option>{t.type}</option>
                                                ))}
                                            </select>

                                        </div>


                                       
                                            <label for="UserEmail" className="flex text-sm font-medium text-gray-700">
                                                Title
                                            </label>

                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={3}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Content of the story"
                                                onChange={(e) => setTitle(e.target.value)}
                                            />
                                        


                                        <label htmlFor="about" className="flex text-sm font-medium text-gray-700">
                                            Content
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={3}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Content of the story"
                                                onChange={(e) => setContent(e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Story photo</label>
                                            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                                <div className="space-y-1 text-center">
                                                    <svg
                                                        className="mx-auto h-12 w-12 text-gray-400"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <div className="flex text-sm text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                                        >
                                                            <span>Upload a file</span>
                                                            <input id="file-upload"
                                                                name="file-upload"
                                                                type="file" className="sr-only"
                                                                onChange={(e) => setStoryFile(e.target.files[0])}
                                                            />
                                                        </label>
                                                        <p className="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </section>
            </main>
            <footer>
                <span>
                    "Yesterday is history. Tomorrow is a mystery, but today is a gift. That’s why it’s called the present"
                </span>
            </footer>
        </>
    );
}

export default StoryForm;










