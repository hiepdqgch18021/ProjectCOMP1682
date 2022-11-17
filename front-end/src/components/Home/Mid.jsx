import React from 'react'
import { useSelector } from 'react-redux';

import StoryForm from "../Story/StoryForm"
import StoryData from "../Story/StoryData"
import StoryTypeDetail from './StoryTypeDetail';

function Mid(username) {
    const user = useSelector((state) => state.auth.login.currentUser);

  return (   
    <>
    <div className="homeMid mt-28">
        <div className="midContent">
        <StoryForm />
        {/* {(!username || username === user.username) && <StoryForm />} */}
        <StoryData/>
        {/* <StoryTypeDetail/> */}
        </div>
    </div>
    </>
  )
}

export default Mid