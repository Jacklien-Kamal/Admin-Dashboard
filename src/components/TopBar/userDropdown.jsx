import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';

export default function UserDropdown() {
      const [menuOpen, setMenuOpen] = useState(false);
    
  return (
    <div>

   <button onClick={() => setMenuOpen(!menuOpen)} onBlur={()=>{setMenuOpen(!menuOpen)}}>
            <FaUserCircle className='text-primary-light' />
          </button>  
          
          {/* User Menu */}
      {menuOpen && (
          <div className="absolute text-sm mt-3 bg-primary-light text-white dark:bg-secondary-body  dark:text-black shadow rounded p-2 z-50 " onBlur={()=>setMenuOpen(!menuOpen)}>
          <button className="block w-full text-left px-2 py-2 hover:bg-gray-700 hover:text-gray-100">
            Profile
          </button>
          <button className="block w-full text-left px-2 py-2 hover:bg-gray-700 hover:text-gray-100">
            My Account
          </button>
        </div>
      )}  
      </div>
        
        )
}
