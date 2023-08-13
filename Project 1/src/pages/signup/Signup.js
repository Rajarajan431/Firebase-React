import React, { useState } from 'react'

import { useSignup } from '../../hooks/useSignup'

//styles
import './Signup.css'

export default function Signup() {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[displayName,setDispayName] = useState("")
  const[thumbnail, setThumbNail] = useState(null)
  const[thumbnailerror, setThumbnailError] = useState(null)
  const{ signup, isPending, error  } = useSignup()


  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email,password,displayName,thumbnail)
  }



  const handleFileChange = (e) => {
    setThumbNail(null)
    
    //getting the file/data
    let selected = e.target.files[0]

    //checking certain conditions
    if(!selected) {
      setThumbnailError("Please select a file")
      return
    }

    if(!selected.type.includes("image")) { 
      setThumbnailError("File must be an image")
      return
    }

    if(selected.size > 100000) {
      setThumbnailError("File must be less than 100kb")
      return
    }

    setThumbnailError(null)
    setThumbNail(selected)
    console.log("Thumbnail updated")

  }


  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
        <span>Email:</span>

        <input 
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        
        />
      </label>

      <label>
        <span>Password:</span>
        
        <input 
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        
        />
      </label>

      <label>
        <span>Display Name:</span>
        
        <input 
          required
          type="text"
          onChange={(e) => setDispayName(e.target.value)}
          value={displayName}
        
        />
      </label>

      <label>
        <span>Upload Photo</span>
        
        <input 
          required
          type="file"
          onChange={handleFileChange}

         />

        { thumbnailerror && <div className="error">{thumbnailerror}</div> }

      </label>
      { !isPending && <button className='btn'>Sign up</button> }
      { isPending && <button className='btn'>Loading...</button> }
      { error && <div className='error'>{error}</div> }
    </form>
  )
}
