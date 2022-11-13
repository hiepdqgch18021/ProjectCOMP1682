import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';


const StoryIndividual = ({ stories, username, email, imageAvatar, checkUser, loading }, props) => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const url = process.env.REACT_APP_URL_AXIOS;
  const navigate = useNavigate();

  const deleteStory = async (_id) => {
    try {
      await axios.delete(url + `/story/deleteStory/${_id}`)
      alert("delete topic success")
      console.log("delete topic success")
      navigate("/UserProfile/:id")
    } catch (error) {
      console.log(error);
    }
  }

  const editStory = async (_id) => {
    try {
      await axios.put(url + `/story/updateStory/${_id}`)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {(loading === false) &&
        <>
          {stories.map((s) => (

            <article className="flex mt-4 mb-3 bg-white transition hover:shadow-xl"
              key={s._id}
            >
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                  dateTime="2022-10-10"
                  className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                >

                  <span>2022</span>
                  <span className="w-px flex-1 bg-gray-900/10" />
                  <span>Oct 10</span>
                </time>
              </div>
              <div className="hidden sm:block sm:basis-56">
                <img
                  alt=""
                  src={s.storyPhotos}
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">

                <div className='mt-3 flex'>
                  <Link
                    to={`/UserProfile/${s.userID}`}
                    className="group flex shrink-0 ml-4 items-center rounded-lg transition"
                  >
                    <span className="sr-only">User Profile</span>

                    <img
                      alt="Man"
                      src={imageAvatar}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <p className="ml-2 hidden text-left text-xs sm:block">
                      <strong className="block font-medium">{username}</strong>
                      <span className="text-gray-500">{email}</span>
                    </p>
                  </Link>

                  {checkUser &&
                    <>
                      <button
                        className='ml-20 mb-3'
                        onClick={() => deleteStory(s._id)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                      </button>
                      <button
                        className='ml-20 mb-3'

                        onClick={toggle}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                      </button>

                      <Modal isOpen={modal} toggle={toggle} fullscreen>
                        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                        <ModalBody>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                          culpa qui officia deserunt mollit anim id est laborum.
                        </ModalBody>
                        <ModalFooter>
                          <Button color="primary" onClick={() => editStory(s._id)}>
                            Save
                          </Button>{' '}
                          <Button color="secondary" onClick={toggle}>
                            Cancel
                          </Button>
                        </ModalFooter>
                      </Modal>


                    </>
                  }
                </div>

                <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <div>
                    <h6 className="font-semibold uppercase flex text-sm  text-gray-700">
                      Type of story : {s.storyType}
                    </h6>
                    <h7 className="font-semibold uppercase flex text-sm  text-gray-700">
                      Title of story: {s.storyTitle}
                    </h7>
                  </div>
                  <p className="mt-2 font-semibold  flex text-base font-normal  leading-relaxed  line-clamp-3">
                    {s.storyContent}
                  </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                  <a
                    href='/storyDetail/:id'
                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                  >
                    Read Story Detail
                  </a>
                </div>
              </div>
            </article>
          ))}

        </>}

    </>
  )
}

export default StoryIndividual