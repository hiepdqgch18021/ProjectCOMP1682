import { useEffect, useState } from 'react'
import { createDispatchHook, useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { Table,Button } from 'reactstrap';

import Header from "../Header/Header";
import { getAllUsers,deleteUser } from '../../redux/apiRequest';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Component } from 'react';
import {useParams } from 'react-router-dom';
const dispatch = useDispatch();
import { deleteUserFailed, deleteUserSuccess, deleteUserStart  } from "../../redux/userSlice";

let axiosJWT = axios.create();

//   ListAllUser.accessToken,axiosJWT
class ListAllUser extends React.Component {

    state = {
        ListAllUser:[]
    };

async componentDidMount() {
    let res = await axios.get('http://localhost:5000/api/user/getAllUsers');
    this.setState({
        ListAllUser:res && res.data ? res.data :[]
    });
    console.log('>>> check res',res.data);


    
    DeleteUserHandler = async(id,dispatch) => {
        dispatch(deleteUserStart()); 
        try {
            const res = await axios.delete(`http://localhost:5000/api/user/${id}`)
            dispatch(deleteUserSuccess(res.data));   
        } catch (err) {
            dispatch(deleteUserFailed(err.response.data));
        }
}
}
render() { 

        let {ListAllUser} = this.state;
        
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
                                            <th>Email</th>   
                                            <th>Username</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>       
                                    <tbody>
                                    {ListAllUser && ListAllUser.length >0 &&
                                    ListAllUser.map((user,index)=>{
                                        return(
                                        <tr key={user.id}>
                                            <th scope="row">{index+1}</th>
                                            <td>{user.name}</td>
                                            <td>
                                                <img src={user.imageAvatar} alt="" />
                                            </td>
                                            <td>{user.email}</td>
                                            <td>{user.username}</td>
                                            <td> 
                                                 <Button onClick={()=> this.viewDetailHandler(user.id)} >Detail</Button>
                                                 <Button onClick={()=>this.DeleteUserHandler(user.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                        )
                                    })                                    
                                    }   
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
}

export default ListAllUser;



// viewDetailHandler = (user)=>{

//     this.props.history.push(`/user/${user.id}}`);
//     }

// async DeleteUserHandler(id){
//     await axios.delete(`/user/${id}`);
//     // deleteUser(id);
//   };

  

    // useEffect(() => {  
    //     if(ListAllUser){
    //     getAllUsers(ListAllUser, dispatch); //.accessToken
    //     }
    //  },[])