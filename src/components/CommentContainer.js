import React from "react";

const commentData = [
  {
    name: "Jino",
    text: "hai helo how are you",
    replies: [],
  },
  {
    name: "Jino",
    text: "hai helo how are you",
    replies: [
      {
        name: "Jino",
        text: "hai helo how are you",
        replies: [],
      },
      {
        name: "Jino",
        text: "hai helo how are you",
        replies: [],
      },
      {
        name: "Jino",
        text: "hai helo how are you",
        replies: [],
      },
      {
        name: "Jino",
        text: "hai helo how are you",
        replies: [],
      },
    ],
  },
  {
    name: "Jino",
    text: "hai helo how are you",
    replies: [],
  },
  {
    name: "Jino",
    text: "hai helo how are you",
    replies: [],
  },
  {
    name: "Jino",
    text: "hai helo how are you",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg m-2'>
      <img
        className="'w-12 h-8"
        alt='user'
        src='https://static.vecteezy.com/system/resources/thumbnails/007/407/996/small_2x/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg'
      />

      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div>
        <Comment key={index} data={comment} />
        <div className='pl-5 border-l-black ml-5'>
          <CommentList key={index} comments={comment.replies} />
        </div>
      </div>
    );
  });
};

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'> Comments:</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
