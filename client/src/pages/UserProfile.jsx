import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import Avatar from '../images/avatar12.jpg'


const UserProfile = () => {
  const [avatar,setAvatar] = useState(Avatar)
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [currentPassword,setCurrentPassword]=useState('')
  const [newPassword,setNewPassword]=useState('')
  const [confirmNewPassword,setConfirmNewPassword]=useState('')



  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`/myposts/fdsdf`} className='btn'>My Posts</Link>
        <div className="profile__details">
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={avatar} alt="" />
            </div>
            {/* form to update avatar*/}
            <form action="" className="avatar__form">
              <input type='file' name='avatar' id='avatar' onChange={e => setAvatar(e.target.files[0])} accept="png,jpg,jpeg"/>
              <label htmlFor='avatar'><FaEdit/></label>
            </form>
            <button className="profile__avatar-btn"><FaCheck /></button>
          </div>
          <h1>Mahendra Jakhar</h1>
          {/* form to update user details */}
          <form action=""  className="form profile__form">
          <p className="form__error-message">This is a error messagge</p>
          <input type="text" name="" id="" placeholder='Full Name' value={name} onChange={e=>setName(e.target.value)}/>
          <input type="text" name="" id="" placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
          <input type="text" name="" id="" placeholder='Current Password' value={currentPassword} onChange={e=>setCurrentPassword(e.target.value)}/>
          <input type="text" name="" id="" placeholder='New Password' value={newPassword} onChange={e=>setNewPassword(e.target.value)}/>
          <input type="text" name="" id="" placeholder='Confirm New Password' value={confirmNewPassword} onChange={e=>setConfirmNewPassword(e.target.value)}/>
          <button type="submit" className="btn primary">Update details</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserProfile