import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./story.css"
import { useNavigate } from "react-router-dom";

const StoryForm = ({ username }) => {
    const user = useSelector((state) => state.auth.login.currentUser);
    const desc = useRef();
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
        <div className="share" onSubmit={(e) => submitStory(e)}>
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
                    // ref={desc}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>

            <form className="shareBottom" >
                <div className="shareOptions">

                    <label htmlFor="file" className="shareOption">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="shareIcon bi bi-image-alt" viewBox="0 0 16 16">
                            <path d="M7 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm4.225 4.053a.5.5 0 0 0-.577.093l-3.71 4.71-2.66-2.772a.5.5 0 0 0-.63.062L.002 13v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.5l-4.777-3.947z" />
                        </svg>
                        <span className="shareOptionText">Photo or Video</span>
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
                                <option>{t.type}</option>
                            ))}
                        </select>
                    </div>

                    <div className="shareOption">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="shareIcon bi bi-blockquote-left" viewBox="0 0 16 16">
                            <path d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm-5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm.79-5.373c.112-.078.26-.17.444-.275L3.524 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282c.024-.203.065-.37.123-.498a1.38 1.38 0 0 1 .252-.37 1.94 1.94 0 0 1 .346-.298zm2.167 0c.113-.078.262-.17.445-.275L5.692 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282a1.75 1.75 0 0 1 .118-.492c.058-.13.144-.254.257-.375a1.94 1.94 0 0 1 .346-.3z" />
                        </svg>
                        <input
                            id="about"
                            name="about"
                            rows={3}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Title of your tale"
                            onChange={(e) => setTitle(e.target.value)}
                        />
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











