import React from 'react'
import { Link } from 'react-router-dom'

//hooks
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


//assests
import Temple from '../assets/temple.svg'

//styles
import './Navbar.css'

export default function Navbar() {

  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()

  return (
    <div className='navbar'>
        <ul>
            <li className='logo'>
                <img src={Temple} alt="MyChat logo" />
                <span>MyChats</span>
            </li>

            { !user && (
              <>
                <li><Link to="/login">Login</Link></li> 
                <li><Link to="/signup">Signup</Link></li> 
              </>
              )} 
          
          { user && (
            <li>
                { isPending && <button className='btn'>Logging out...</button> }
                {!isPending && <button className='btn' onClick={logout}>Logout</button> }
            </li> 
          )} 
        </ul>
    </div>
  )
}
