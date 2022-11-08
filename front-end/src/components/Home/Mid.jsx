import React from 'react'

import StoryForm from "../Story/StoryForm"



function Mid(username) {
  return (   
    <>
    <div className="homeMid">
        <div className="midContent">
        {(!username || username === user.username) && <StoryForm />}

        </div>
    </div>
    </>
  )
}

export default Mid