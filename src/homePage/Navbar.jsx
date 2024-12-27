import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 font-hostGrotesk">

<div className="w-[75%]">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:bg-light-blue hover:text-dark-blue5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 -w-52 p-2 shadow">
        <li className='duration-200 ease-in hover:bg-light-blue hover:text-dark-blue5 rounded-xl'><a>Home</a></li>
        <li className='duration-200 ease-in hover:bg-light-blue hover:text-dark-blue5 rounded-xl'><a>About</a></li>
        <li className='duration-200 ease-in hover:bg-light-blue hover:text-dark-blue5 rounded-xl'><a>Contact</a></li>
      </ul>
    </div>
    <p className="text-xl font-bold ml-3">IELTS <span className='text-2xl text-blue'>N</span> Center</p>
  </div>
    <div className='w-[25%] flex justify-end gap-3 font-nunito'>
      <button className='btn sm2:w-24 sm2:text-base bg-transparent border-2 border-blue3 text-blue3 hover:border-dark-blue4 hover:bg-transparent hover:text-dark-blue4 '>Sign In</button>
      <button className='btn sm2:w-24 sm2:text-base bg-blue3 text-white hover:bg-dark-blue3 duration-200 ease-in-out active:scale-90'>Log In</button>
    </div>
</div>
  )
}

export default Navbar