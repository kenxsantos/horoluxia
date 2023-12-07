import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../context/ContextProvider';
const Profile = () => {
  // const navigate = useNavigate();
  // const { userToken } = useStateContext();

  // useEffect(() => {
  //   if (!userToken) {
  //     navigate('/login');
  //   } else {
  //     navigate('/admin');
  //   }
  // }, [userToken, navigate]);
  return (
    <div>Profile</div>
  )
}

export default Profile