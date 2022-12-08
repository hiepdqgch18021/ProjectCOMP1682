import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { List, ListInlineItem, } from "reactstrap";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

const UserInfo = () => {

    const url = process.env.REACT_APP_URL_AXIOS;
    const [userInfoData, setUserInfoData] = useState()
    const token = localStorage.getItem('jwtLogin')
    const user = useSelector((state) => state.auth.login?.currentUser);
    const { id } = useParams();
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
        })

        (async () => {
            try {
                const res = await axios.get(url + '/user/getOneUsers/' + user._id,
                    {
                        headers: {
                            token: `Bearer ${token}`,
                            accept: 'application/json'
                        }
                    }
                );
                console.log(res);
                setFollowed(res.data)
            } catch (err) {
                console.log(err);
            }
        })

    }, [id]);

    const [followed, setFollowed] = useState(user.followings.includes(id));

    const handleFollow = async (req, res) => {
        try {
            if (!followed) {
               const res = await axios.put(url + "/user/follow/" + id, { userId: user._id })
                setFollowed(!followed)
                console.log(res)
                window.location.reload();
            } else {
                await axios.put(url + "/user/unFollow/" + id, { userId: user._id })
                setFollowed(!followed)
                window.location.reload();
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="col-lg-8 col-md-8 col-sm-10 profile-container">
                {userInfoData && (
                    <div className="lg:w-4/6 mx-auto">
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3  sm:pr-8 sm:py-8">
                                <div className="w-30 h-30 inline-flex items-center justify-center ">
                                    <img
                                        alt="Man"
                                        src={userInfoData.imageAvatar}
                                        className="h-30 w-30 rounded-full "
                                    />

                                </div>

                                <div className="flex flex-col items-center text-center justify-center">
                                    <h4 className="font-bold title-font mt-4 text-gray-900 text-lg">
                                        {userInfoData.name}
                                    </h4>
                                    {user._id === id ?
                                        <button>
                                            <Link to={`/EditProfile/${userInfoData._id}`} >
                                                Edit Profile
                                            </Link>
                                        </button>
                                        :
                                        <button
                                            className='followButton flex bg-blue-400 text-center items-center w-16 h-10 '
                                            onClick={handleFollow}
                                        >
                                            {followed ? "UnFollow" : "Follow"}

                                            {followed ?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-dash-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
                                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                                </svg>
                                            }
                                        </button>

                                    }

                                </div>
                            </div>

                            <div className="profile-info sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">

                                <div className="profile-parameter">

                                    <List type="inline">
                                        <ListInlineItem>
                                             <span>Post</span>
                                        </ListInlineItem>
                                        <ListInlineItem>
                                            {userInfoData.followers.length} <span>Follower</span>
                                        </ListInlineItem>
                                        <ListInlineItem>
                                            {userInfoData.followings.length}<span>Following</span>
                                        </ListInlineItem>
                                    </List>
                                </div>

                                <div className="profile-story">
                                    <span>
                                        Story:
                                    </span>
                                    {userInfoData.aboutMe}
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}

export default UserInfo;