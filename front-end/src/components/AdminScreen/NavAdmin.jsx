import React from 'react'
import {Link} from 'react-router-dom'
const NavAdmin = () => {
  return (

    <nav className="flex border-b border-gray-100 text-sm font-medium ">
      <Link to="/AddTopic" className="-mb-px border-b border-current p-4 text-cyan-500">
        Add Topic
      </Link>

      <Link
        to="/ListAllUser"
        className="-mb-px border-b border-transparent p-4 hover:text-cyan-500"
      >
        All User
      </Link>
    </nav>
  )
}

export default NavAdmin;