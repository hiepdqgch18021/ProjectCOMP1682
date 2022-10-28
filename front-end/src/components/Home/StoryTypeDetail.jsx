import React from 'react'
import Header from "../Header/Header";

const StoryTypeDetail = () => {
  return (
    
    <>
     <header className='sidebar'>
        <Header />
      </header>
      <main className='main-home-page'>

        <section className="home-page-container ">

          <div className="container">
            <div className="row">
              {/* <div className="col-2 d-none d-lg-block d-md-block "></div> */}

              <div className="col-lg-10 col-md-10 col-sm-10 story-content-container ">
                <StoryHome />
              </div>

              <div className=" col-2 d-none d-lg-block d-md-block list-topic-container ">

                <ListStoryType/>

              </div>


              <div className="col-2 d-none d-lg-block d-md-block "></div>

            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default StoryTypeDetail