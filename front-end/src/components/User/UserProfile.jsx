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
    const user = useSelector((state) => state.auth.login?.currentUser);
    const url = process.env.REACT_APP_URL_AXIOS;
    const token = localStorage.getItem("jwtLogin")
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
                                checkUser={user._id === id}
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



{/* <div className="col-lg-6 col-md-6 col-sm-10 story-container-detail">
                <div className="p-3 my-2 rounded">
                    <Toast>
                    <ToastHeader>
                        <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhV_YoJ0gNyssnXbp6_t4rgpBKLDvThH_3w&usqp=CAU"
                        alt="Workflow"          
                        className="avt-str-content-display"
                        />
                    
                        <span>Yang Young</span>
                
                        <UncontrolledDropdown nav inNavbar >
                        <DropdownToggle nav caret>
                            ...          
                        </DropdownToggle>
                        <DropdownMenu >

                            <DropdownItem>
                            <NavLink href="">Edit</NavLink>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Delete</DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                    </ToastHeader>
                    
                    <ToastBody className="toast-body">
                        <div className="content-text-display">
                        <div className="story-content-display">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda quis dolorum vitae ea quam nihil officiis, est sit, aliquid possimus nesciunt nulla eos necessitatibus ducimus? Exercitationem non repellat amet.
                        </div>
                        <div className="story-image-display">
                        <img
                            className="mx-auto mb-px h-40 w-auto"
                            src="https://sbooks.net/wp-content/uploads/2021/10/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg"
                            alt="Workflow"
                        />
                        </div>
                        
                        <div className="action-content-display">
                            <div className="like-action">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                            <span>500</span>
                            </div>

                            <div className="comment-action">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-heart" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.965 12.695a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2Zm-.8 3.108.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125ZM8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                            </svg>
                            <span>100</span>
                            </div>
                            
                        </div>
                        </div>
                    </ToastBody>
                    </Toast>
                </div>
            </div> */}