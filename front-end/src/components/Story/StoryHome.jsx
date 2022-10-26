import React from 'react';
import {useEffect,useState} from 'react'
import {useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';
import {  Toast,UncontrolledDropdown,ToastHeader,ToastBody,DropdownItem,
            DropdownToggle,DropdownMenu,NavLink} from 'reactstrap';
const StoryHome = () => {
    const user = useSelector((state)=>state.auth.login?.currentUser);
    const url = process.env.REACT_APP_URL_AXIOS;
    const [storyData, setStoryData] = useState()
    const token = localStorage.getItem("jwtLogin")
    const {id} =useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!user){
          navigate("/login");
        };
      
        (async () => { 
          try {
              const res = await axios.get(url + '/story/getOneStory/' + id,
                  {
                      headers: {                   
                          token: `Bearer ${token}`,
                          accept: 'application/json'
                      }
                  }
              );
              console.log(res);
              setStoryData(res.data);
          } catch (err) {
              console.log(err);
          }
      })()
      
      },[]);

  return (
    <>
    {storyData? 
                    <>
                    <Toast>
                    <ToastHeader> 
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhV_YoJ0gNyssnXbp6_t4rgpBKLDvThH_3w&usqp=CAU"
                        alt="Workflow" 
                        width={32}
                        height={32}
                        classname="avt-str-content-display"
                      />
                      <span>{user.username}</span>

                        <UncontrolledDropdown nav inNavbar >
                          <DropdownToggle nav caret>
                            ...          
                          </DropdownToggle>
                          <DropdownMenu >
                            <DropdownItem>
                              <NavLink href="">Edit</NavLink>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem >Delete</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </ToastHeader>

                    <div className="story-body">
                      <ToastBody className="toast-body">
                        <div className="content-text-display">
                          <div className="story-content-display">
                             {storyData.storyTitle}
                          </div>
                          <div className="story-content-display">
                             {storyData.storyContent}
                          </div>
                          
                          <div className="story-image-display">
                          <img
                            className="mx-auto mb-px h-40 w-auto"
                            src={storyData.storyPhotos}
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
                    </div>
                    </Toast>
                    </> : <></>
                  }  
    </>
  );
}

export default StoryHome;