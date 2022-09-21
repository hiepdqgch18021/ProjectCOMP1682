import Header from "../Header/Header";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, NavLink,List,ListInlineItem,Toast,ToastHeader,UncontrolledDropdown,
         DropdownToggle,DropdownMenu,DropdownItem,ToastBody } from "reactstrap";
import "./UserProfile.css"
import "./EditProfile"


const UserProfile = () => {
    return (         
        <>
        <header className='sidebar'>
              <Header/>
        </header>

        <main className='main-user-profile'>
            <section className="profile-diary-container">
                <div className="container">
                    <div className="row">
                        <div className="col-2 d-none d-lg-block d-md-block"></div>
{/* -----------profile-container---- */}
                        <div className="col-lg-8 col-md-8 col-sm-10 profile-container">
                        <div className="lg:w-4/6 mx-auto">

                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3  sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-10 h-10"
                                    viewBox="0 0 24 24"
                                    >
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                    </svg>
                                </div>

                                <div className="flex flex-col items-center text-center justify-center">
                                    <h4 className="font-bold title-font mt-4 text-gray-900 text-lg">
                                    Yang Young
                                    </h4> 
                                    <Button>
                                        <NavLink href="/EditProfile" >
                                            Edit Profile
                                        </NavLink> 
                                    </Button>     
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
                            <div className="profile-nick-name">
                                <span>nick name</span>
                            </div>
                            <div className="profile-story">
                                <span>
                                 Story:  
                                </span>
                                blanditiis fuga aut odit nobis unde sint eveniet, doloremque labore distinctio pariatur.                               
                            </div>

                            </div>
                        </div>
                    </div>

                        </div>
{/* --------Diary----------*/}
                        <div className="col-2 d-none d-lg-block d-md-block diary-container">
                        <div className="topic-title">
                            <h3>
                            <span>Your Diary</span>
                            </h3>
                        </div>

                        <div className="list-topic">
                            <nav className="navbar bg-light">
                            <div className="container-fluid">
                                <form className="d-flex form-search-topic" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                                </form>
                            </div>
                            </nav>

                            <div className="topic-element">
                                <div className='btn-topic-element'>
                                    <NavLink href="/DiaryDetail">
                                    <div className="topic-name">  
                                    <span>#4 Detective novels</span>
                                    </div>
                                    <div className="topic-amount">
                                    <span> 15/2/2022 </span>
                                    </div>
                                    </NavLink>
                                </div>

                                <div className='btn-topic-element'>
                                    <div className="topic-name">
                                        <span>#3 Historical fiction</span>                                  
                                    </div>
                                    <div className="topic-amount">
                                    <span> 20/8/2022 </span>
                                    </div>
                                </div>
                                <div className='btn-topic-element'>
                                    <div className="topic-name"> 
                                    <span>#2 Romance novels</span> 
                                    </div>
                                    <div className="topic-amount">
                                    <span> 2/9/2022 </span>
                                    </div>
                                </div>
                                <div className='btn-topic-element'>
                                    <div className="topic-name">  
                                     <span>#1 Fantasy novels</span>
                                    </div>
                                    <div className="topic-amount">
                                    <span> 22/10/2022 </span>
                                    </div>
                                </div>            
                            </div>
                            <div className="btn-add-diary">
                                <NavLink href="/DiaryForm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg>
                                </NavLink>
                            </div>
                        </div>
                        </div>
                        {/* <div className="col-2 d-none d-lg-block d-md-block "></div> */}
                    </div>
                </div>
            </section> 

            <section className="story-container">
            <div className="col-2 d-none d-lg-block d-md-block "></div>

            <div className="col-lg-6 col-md-6 col-sm-10 story-container-detail">
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
            </div>
            <div className="col-2 d-none d-lg-block d-md-block "></div>    
            </section>
        </main>


        </>
     );
}
 
export default UserProfile;