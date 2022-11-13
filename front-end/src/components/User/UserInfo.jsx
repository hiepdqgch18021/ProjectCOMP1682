import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { List, ListInlineItem, } from "reactstrap";
import { useParams } from "react-router-dom";

const UserInfo = ({checkUser}) => {

    const url = process.env.REACT_APP_URL_AXIOS;
    const [userInfoData, setUserInfoData] = useState()
    const token = localStorage.getItem('jwtLogin')
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
        })()
    }, [id]);

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
                                    {checkUser &&
                                    <button>
                                        <Link to={`/EditProfile/${userInfoData._id}`} >
                                        {/* {`/EditProfile/${userInfoData._id}`} */}
                                            Edit Profile
                                        </Link>
                                    </button>
                                    }
                                    
                                </div>
                            </div>

                            <div className="profile-info sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">

                                <div className="profile-parameter">

                                    <List type="inline">
                                        <ListInlineItem>
                                            50 <span>Post</span>
                                        </ListInlineItem>
                                        <ListInlineItem>
                                            20 <span>Follower</span>
                                        </ListInlineItem>
                                        <ListInlineItem>
                                            30 <span>Following</span>
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