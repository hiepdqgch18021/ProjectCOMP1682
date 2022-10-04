import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { Table,Button } from 'reactstrap';

import Header from "../Header/Header";
import { getAllUsers,deleteUser } from '../../redux/apiRequest';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const ListAllUser = () => {

// const user = useSelector((state) =>state.auth.login?.currentUser);
// const userList = useSelector((state) => state.users.users?.allUsers);

const[ListAllUser,setListAllUser] = useState([]);

const dispatch = useDispatch();
const navigate = useNavigate();
let axiosJWT = axios.create();

const DeleteUser = (id) => {
    deleteUser(ListAllUser?.accessToken,dispatch,id,axiosJWT);
  };

  

    useEffect(() => {  
        if(ListAllUser){
        getAllUsers(ListAllUser, dispatch); //.accessToken
        }
     },[])
     
    return (
        <>
            <header className='sidebar'>
                <Header />
            </header>
            <main>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, non vel deleniti possimus eligendi nam nemo iste voluptatem tempore ipsam iure voluptates ut aspernatur provident vero odio nisi explicabo? Blanditiis?
                            </div>
                            <div className="col-9">
                                <h1>LIST ALL USER</h1>
                                
                                <Table hover responsive size="">
                                    <thead>
                                        <tr>                                        
                                            <th>No</th>
                                            <th>Name</th>
                                            <th>Avatar</th>   
                                            <th>Username</th>
                                            <th>Password</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                    {userList?.map((user) =>{
                                return(
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.imageAvatar}</td>                                                                                
                                            <td>{user.password}</td>
                                            <td>  
                                                <Button color="danger" onClick={()=>DeleteUser(user._id)} >Delete</Button>
                                            </td>
                                        </tr>   
                                        )
                                    })}                                                              
                                    </tbody>
                                </Table>
                                
                            </div> 

                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default ListAllUser;