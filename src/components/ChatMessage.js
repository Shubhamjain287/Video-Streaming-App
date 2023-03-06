import React from "react";

const ChatMessage = ({name, message}) => {
  return (
    <div>
      <div className="m-2 px-1 flex bg-gray-300 rounded-lg">
        <div className="mx-2 p-2">
          <img
            className="h-10"
            alt="Profile"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VHh-mjL_Rc8IL60D77dMDPL_fNhosHuag&usqp=CAU"
          />
        </div>
        <div className="">
          <p className="font-bold"> {name} </p>
          <div className=""> {message} </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
