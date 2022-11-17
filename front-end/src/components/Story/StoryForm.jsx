import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./story.css"
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
            alert("upload story success")
        } catch (err) {
            console.log(err);
            alert("upload story fail")

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

        // <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="share " onSubmit={(e) => submitStory(e)}>
            <div className="shareTop">
                <img
                    className="shareProfileImg"
                    src={
                        user.imageAvatar
                            ? user.imageAvatar
                            : "https://cdn-icons-png.flaticon.com/128/1177/1177568.png"
                    }
                    alt=""
                />
                <textarea
                    placeholder={"What's in your tale " + user.name + "?"}
                    className="shareInput"
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>

            <form className="shareBottom" >
                <div className="shareOptions">

                    <label htmlFor="file" className="shareOption">
                        <svg
                            className="mx-auto h-6 w-6 text-gray-400"
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
                        <span className="shareOptionText">Photo</span>
                        <input
                            style={{ display: "none" }}
                            type="file"
                            id="file"
                            accept=".png,.jpeg,.jpg"
                            onChange={(e) => setStoryFile(e.target.files[0])}
                        />
                    </label>

                    <div className="shareOption">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="shareIcon bi bi-bookmarks-fill" viewBox="0 0 16 16">
                            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z" />
                            <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1H4.268z" />
                        </svg>
                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            onChange={(e) => setType(e.target.value)}
                        >
                            {topicData.map((t) => (
                                <option>
                                    {t.type}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="shareOption">
                        <label
                            for="UserEmail"
                            class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                            <input
                                type="text"
                                id="UserEmail"
                                placeholder="Story Title"
                                class="peer w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                onChange={(e) => setTitle(e.target.value)}
                            />

                            <span
                                class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                            >
                                Story Title
                            </span>
                        </label>

                    </div>
                </div>
                <button className="shareButton" type="submit">
                    Share
                </button>
            </form>

        </div>
        // </div>

    );
}

export default StoryForm;


{/* <form onSubmit={(e) => submitStory(e)}>
<div className="shadow sm:overflow-hidden sm:rounded-md">
    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
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
                        </label>
                    </div>
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
</form> */}











