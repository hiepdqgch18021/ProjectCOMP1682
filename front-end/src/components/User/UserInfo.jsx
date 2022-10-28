import React from 'react'

import {Button, NavLink, List, ListInlineItem,} from "reactstrap";



const UserInfo = () => {
    return (
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
    )
}

export default UserInfo