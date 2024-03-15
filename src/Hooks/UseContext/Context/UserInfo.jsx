import React from 'react';
import UserContext from './UserContext';
import DashBoard from '../DashBoardCompo/DashBoard';

const UserInfo = ({Children}) => {
   const obj = {
     name : "jigar",
     age: 21
   }
    // console.log(obj);
  return (
    <>
      UserInfo
      <UserContext.Provider value={obj}>
         <DashBoard/>
         {/* {Children} */}
      </UserContext.Provider>
     </>
  );
};

export default UserInfo;