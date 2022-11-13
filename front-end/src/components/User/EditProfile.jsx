import Header from "../Header/Header";
import React, { useEffect, useState } from 'react';
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';




const EditProfile = () => {

    const url = process.env.REACT_APP_URL_AXIOS;
    const [userInfoData, setUserInfoData] = useState()
    const token = localStorage.getItem('jwtLogin')
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(url + '/user/getOneUsers/' + id,
                    {
                        headers: {
                            token: `Bearer ${token}`,
                            accept: 'application/json'
                        }
                    }
                );
                console.log(res);
                setUserInfoData(res.data);
            } catch (err) {
                console.log(err);
            }
        })()
    }, [id]);

const deleteAccount = async(_id)=>{
    try {
        await axios.delete(url + `/user/deleteUser/${_id}`,{
            headers: {
                token: `Bearer ${token}`,
                accept: 'application/json'
            }
        })
        alert("delete user success")
        console.log("delete user success")
        navigate("/")
      } catch (error) {
        console.log(error);
      }
    }



    return (
        <>
            <Header />
            {userInfoData && (
                <section className="bg-gray-900 text-white">
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-lg text-center">
                            <h3 className="text-3xl font-bold sm:text-4xl">Edit Your Profile</h3>
                            <p className="mt-4 text-gray-300">
                                Change your information
                            </p>
                        </div>


                        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">

                                <h2 className="text-xl font-bold text-white">Avatar</h2>
                                <div className="changeAvatar">
                                    <img src={userInfoData.imageAvatar}
                                        className=" flex justify-center "
                                        alt="" />
                                    <input type="file" />

                                </div>

                            </div>

                            <div
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">

                                <h2 className="mt-4 text-xl font-bold text-white">Username</h2>
                                <input
                                    className="text-black font-bold"
                                    type="text"
                                    defaultValue={`${userInfoData.username}`} />
                            </div>
                            <div
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">

                                <h2 className="mt-4 text-xl font-bold text-white">Email</h2>
                                <input
                                    className="text-black font-bold"
                                    type="text"
                                    defaultValue={`${userInfoData.email}`} />
                            </div>
                            <div
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">

                                <h2 className="mt-4 text-xl font-bold text-white">Name</h2>
                                <input
                                    className="text-black font-bold"
                                    type="text"
                                    defaultValue={`${userInfoData.name}`} />
                            </div>
                            <div
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">

                                <h2 className="mt-4 text-xl font-bold text-white">Date Of Birth</h2>
                                <input
                                    className="text-black font-bold"
                                    type="dateTime"
                                    defaultValue={`${userInfoData.DoB}`} />
                            </div>
                            <div
                                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">

                                <h2 className="mt-4 text-xl font-bold text-white">About Me</h2>
                                <input
                                    className="text-black font-bold"
                                    type="text"
                                    defaultValue={`${userInfoData.aboutMe}`} />
                            </div>
                        </div>

                        <div className="mt-12 text-center flex p-4">
                            <button
                                className="mt-8 inline-flex items-center rounded border border-pink-600 bg-pink-600 px-8 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-pink-500"
                            >
                                <span className="text-sm font-medium"> Save And Change </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cloud-upload-fill ml-2 w-10 h-10" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0z" />
                                </svg>
                            </button>

                            <button
                                className="mt-8 inline-flex items-center rounded border border-red-600 bg-red-600 px-8 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-pink-500"
                               onClick={() =>deleteAccount(userInfoData._id)} 
                            >
                                <span className="text-sm font-medium"> Delete Account</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x ml-2 w-10 h-10" viewBox="0 0 16 16">
                                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708Z" />
                                </svg>
                            </button>

                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default EditProfile;
