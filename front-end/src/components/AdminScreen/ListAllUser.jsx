import React from 'react';
import { useEffect, useState } from 'react'
import { Table} from 'reactstrap';
import Header from "../Header/Header";
import { getAllUsers,deleteUser } from '../../redux/apiRequest';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Component } from 'react';
import {useParams } from 'react-router-dom';
import  NavAdmin from './NavAdmin';

import { deleteUserFailed, deleteUserSuccess, deleteUserStart  } from "../../redux/userSlice";

const ListAllUser = () => {
    let axiosJWT = axios.create();
    const [listAllUser, setListAllUser] = useState({})
    const token = localStorage.getItem('jwtLogin')
    const url = process.env.REACT_APP_URL_AXIOS;
    const {id} =useParams();

useEffect(() => {
    (async () => {
        try {
            const res = await axios.get(url + '/user/getAllUsers/',
                {
                    headers: {                         
                        token: `Bearer ${token}`,
                        accept: 'application/json'
                    }
                }
            );
            console.log(res);
            setListAllUser(res.data);
        } catch (err) {
            console.log(err);
        }
    })()
},[])

  return (
    <>                   
    {listAllUser? <>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-100">
                <tr>
                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    No
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">
                    Name
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Avatar
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Email
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Username
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                    Action
                    </th>
                </tr>

                </thead>
                <tbody className="divide-y divide-gray-200">
                <tr>
                    <th scope="row"> 1 </th>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    John Doe
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        <img src={listAllUser.imageAvatar} alt="" />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {listAllUser.email}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {listAllUser.username}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        <button >Detail</button>
                        <button>Delete</button>
                    </td>
                </tr>
    
                </tbody>
            </table>
        </div>
    </> : <></>}                          
        
    </>
  )
}

export default ListAllUser



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