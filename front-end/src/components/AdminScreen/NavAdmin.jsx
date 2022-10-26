import React from 'react'

const NavAdmin = () => {
  return (

    <nav className="flex border-b border-gray-100 text-sm font-medium">
      <a href="/AddTopic" className="-mb-px border-b border-current p-4 text-cyan-500">
        Add Topic
      </a>
      <a
        href="/ListAllUser"
        className="-mb-px border-b border-transparent p-4 hover:text-cyan-500"
      >
        All User
      </a>
    </nav>
  )
}

export default NavAdmin;