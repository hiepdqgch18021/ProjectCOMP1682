import Header from "../Header/Header";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./UserProfile.css"
import StoryIndividual from "../Story/StoryIndividual";
import UserInfo from "./UserInfo";
import "./EditProfile"
import ListDiary from "../Diary/ListDiary";
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

const UserProfile = () => {
    const url = process.env.REACT_APP_URL_AXIOS;
    const token = localStorage.getItem("jwtLogin")
    const user = useSelector((state) => state.auth.login?.currentUser);
    const { id } = useParams();

    const [storyData, setStoryData] = useState({});
    const [loading, setLoad] = useState();

    useEffect(() => {
        (async () => {
            setLoad(true)
            try {
                const res = await axios.get(url + `/story/getAllIndividualStory/${id}`,
                    {
                        headers: {
                            token: `Bearer ${token}`,
                            accept: 'application/json'
                        }
                    }
                );
                // console.log(res);
                setStoryData(res.data);
            } catch (err) {
                console.log(err);
            }
            setLoad(false)
        })()

    }, [id]);

    return (
        <>

            <Header />

            <main className='main-user-profile mt-28'>
                <section className="profile-diary-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-2 d-none d-lg-block d-md-block"></div>
                            {/* -----------profile-container---- */}
                            <UserInfo
                                users={storyData.user}
                            />

                        </div>
                    </div>
                </section>

                <section className="story-container mt-10" >

                    <div className="ml-20 mr-10 col-lg-18 col-md-8 col-sm-8 story-content-container ">

                        <StoryIndividual
                            stories={storyData.story}
                            loading={loading}
                            checkUser={user._id === id}
                            imageAvatar={storyData.user?.imageAvatar}
                            name={storyData.user?.name}
                        />

                    </div>

                    <div className="col-2 ml-5 d-none d-lg-block d-md-block diary-container">
                        {user._id === id && <ListDiary />}
                    </div>
                </section>
            </main>


        </>
    );
}

export default UserProfile;
