import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(friendID);

  useEffect(() => {
    // setIsOnline(friendID);    
    return console.log(1)
  },[friendID]);

  return {
    isOnline,
    setIsOnline,
  }

}


export default useFriendStatus;
