import  React,{ useEffect, useState } from 'react'
import axios from 'axios';
import {Link,useNavigate } from 'react-router-dom';
import  NavAdmin from './NavAdmin';


const ListAllUser = () => {
    
    const [listAllUsers, setListAllUser] = useState([])
    const token = localStorage.getItem('jwtLogin')
    const url = process.env.REACT_APP_URL_AXIOS;
    const navigate = useNavigate();

useEffect(() => {
    
    (async () => {
        try {
            const res = await axios.get(url + '/user/getAllUsers',
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
},[]);

const deleteAccount = async(_id)=>{

    try {
        await axios.delete(url + `/user/deleteUser/${_id}`,{
            headers: {
                token: `Bearer ${token}`,
                accept: 'application/json'
            }
        })
        alert("delete user success")
        console.log("delete user success")
        navigate("/ListAllUser")
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <>   
    <NavAdmin />                
    
    <div className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-100">
                <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    No
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Avatar
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Email
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Username
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Action
                    </th>
                </tr>

                </thead>
                <tbody className="divide-y divide-gray-200">
{listAllUsers.map((l,index)=>(
                <tr key={l._id}>
                    <th scope="row">{index + 1}</th>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                   { l.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        <img src={l.imageAvatar} alt="" className='w-12 h-12'/>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {l.email}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {l.username}
                    </td>
                    <td className=" px-4 py-2 text-gray-700">
                        <button 
                            className="rounded bg-blue-100 px-3 py-1.5 text-xs font-medium ">
                           <Link to={`/EditProfile/${l._id}`} className="no-underline">
                            Detail
                            </Link>
                        </button>
                        <button 
                            className="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700"
                            onClick={() =>deleteAccount(l._id)}
                            >
                            Delete
                        </button>
                    </td>
                </tr>
    ))}
                </tbody>
            </table>
    </div>
                        
        
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