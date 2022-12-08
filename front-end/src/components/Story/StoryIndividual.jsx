import React, { useRef } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Comment from './Comment';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from 'reactstrap';
import { format } from "timeago.js";



const StoryIndividual = ({ stories, name, imageAvatar, checkUser, loading }) => {
  const user = useSelector((state) => state.auth.login?.currentUser);

  const url = process.env.REACT_APP_URL_AXIOS;
  const token = localStorage.getItem('jwtLogin')

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

  const [modal, setModal] = useState(false);
  const changeContentRef = useRef()
  const toggle = () => setModal(!modal);
  const [unmountOnClose, setUnmountOnClose] = useState(true);

  const GetEditContent = async () => {

  }

  const saveEdit = async (_id) => {
    try {
      const res = await axios.put(url + `/story/updateStory/${_id}`,
        {
          storyContent: changeContentRef.current.value,
        },
        {
          headers: {
            token: `Bearer ${token}`,
            accept: 'application/json'
          }
        }
      )
      console.log(res.data);
      alert("edit content of story success")
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {(loading === false) &&
        <div className="block mt-4 mb-3 bg-white transition hover:shadow-xl">
          {stories.map((s) => (
            <div className="block  mt-4 mb-3 bg-white transition hover:shadow-xl" >

              <article className="flex"
                key={s._id}
              >

                <div className="hidden sm:block sm:basis-56">
                  <img
                    alt="story photo"
                    src={s.storyPhotos ? s.storyPhotos : "https://cdn.writermag.com/2016/07/shutterstock_403756669.jpg"}
                    className="aspect-square h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col ">

                  <div className='mt-1 flex'>
                    <Link to={`/UserProfile/${s.userID._id}`}
                      className="group flex shrink-0 ml-4 items-center rounded-lg transition"

                    >
                      <span className="sr-only">User Profile</span>

                      <img
                        alt="avatar"
                        src={imageAvatar}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <p className="ml-2 hidden text-left text-xs sm:block">
                        <div className="block font-medium">{name}</div>

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

                        <div onClick={() => { GetEditContent() }}>
                          <button
                            className='ml-20 mb-3'
                            onClick={toggle}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                              <path d="M15.502 .94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                          </button>
                        </div>
                      </>
                    }

                    <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
                      <ModalHeader toggle={toggle}>Edit story content</ModalHeader>
                      <ModalBody>
                        <Input
                          type="textarea"
                          rows={5}
                          defaultValue={`${s.storyContent}`}
                          ref={changeContentRef}
                        />
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={saveEdit}>
                          Update
                        </Button>
                      </ModalFooter>
                    </Modal>

                  </div>

                  <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6 ">
                    <div className='mt-0'>
                      <h6 className="font-semibold flex text-sm  text-gray-700">
                        Type of story : {s.storyType}
                      </h6>
                      <h7 className="font-semibold flex text-sm  text-gray-700">
                        Title of story: {s.storyTitle}
                      </h7>
                      <time
                        dateTime=""
                        className="flex items-center justify-between gap-4 text-xs text-gray-400"
                      >
                        <p>update at : {format(s.updatedAt)}</p>
                      </time>
                    </div>

                    <details className="group relative mt-0">
                      <summary className="block">
                        <div>
                          <div className="prose max-w-none group-open:hidden  font-normal  text-sm leading-relaxed">
                            {s.storyContent.slice(0, 225) + "..."}
                          </div>
                          <span className=" mt-2 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                            ...Read More
                          </span>

                        </div>
                      </summary>

                      <div className="prose max-w-none pb-6 font-normal  text-sm leading-relaxed">
                        {s.storyContent.slice(0, 225)}
                        {s.storyContent.slice(225,)}
                      </div>
                    </details>
                  </div>


                </div>
              </article>
              <Comment
                storyID={s._id}
              />
            </div>
          ))}


        </div>

      }

    </>
  )
}

export default StoryIndividual;

