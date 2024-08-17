import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex items-center shadow-sm'>
      <img
        className='h-8'
        alt='usericon'
        src='https://static.vecteezy.com/system/resources/thumbnails/007/407/996/small_2x/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg'
      ></img>
      <span className=' font-bold px-2'>{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
