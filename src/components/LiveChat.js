import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRamdomName, makeid } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const time = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRamdomName(),
          message: makeid(20),
        })
      );
    }, 2000);
    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <>
      <div className=' w-full h-[600px] ml-2 p-2 border border-black bg-sl-100 rounded-lg  overflow-y-scroll flex flex-col-reverse'>
        {ChatMessages.map((mess, i) => {
          return (
            <ChatMessage key={i} name={mess.name} message={mess.message} />
          );
        })}
      </div>
      <form
        className='w-full p-2 ml-2 border border-black flex'
        onSubmit={(e) => {
          console.log("abc");
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Jino",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className='w-85'
          type='text'
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className='px-2 mx-2 bg-green-100'>Submit</button>
      </form>
    </>
  );
};

export default LiveChat;
