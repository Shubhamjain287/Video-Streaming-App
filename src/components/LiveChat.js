import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRandomComment, getRandomNames } from '../utils/helper';
import { addMessage } from '../utils/reducers/chatSlice';
import ChatMessage from './ChatMessage';

const LiveChat = () => {

  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    
    const interval = setInterval(()=>{
        console.log("API Polling");
        dispatch(addMessage({
            name : getRandomNames(),
            message: getRandomComment(30)
        }));
    },4000)
  
    return () => {
      clearInterval(interval);
    }
  }, []);
  

  return (
    <div>
        <div className='ml-2 p-2 h-[500px] shadow-lg border border-gray-400 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {
            chatMessage.map((comment,index) => {
                return <ChatMessage key={index} name={comment.name} message={comment.message} />
            })
        }
        </div>
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage({
                name: "Shubham Jain",
                message: liveMessage
            }));
            setLiveMessage("");
        }}>
            <div className='m-2 p-2 border border-black w-full'>
                <input className='w-80 border border-black px-2' value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} type="text" />
                <button className='mx-2 bg-green-300 p-2 rounded-lg'> Send </button>
            </div>
        </form>
    </div>
  )
}

export default LiveChat;