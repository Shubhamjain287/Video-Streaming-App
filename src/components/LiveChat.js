import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRandomComment, getRandomNames } from '../utils/helper';
import { addMessage } from '../utils/reducers/chatSlice';
import ChatMessage from './ChatMessage';

const LiveChat = () => {

  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    
    const interval = setInterval(()=>{
        console.log("API Polling");
        dispatch(addMessage({
            name : getRandomNames(),
            message: getRandomComment(30)
        }));
    },500)
  
    return () => {
      clearInterval(interval);
    }
  }, []);
  

  return (
    <div className='ml-2 p-2 h-[500px] shadow-lg border border-gray-400 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {
            chatMessage.map((comment,index) => {
                return <ChatMessage key={index} name={comment.name} message={comment.message} />
            })
        }
    </div>
  )
}

export default LiveChat;