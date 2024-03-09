import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

const UserCard = () => {
    const value = useContext(UserContext)
         
    return (
        <> 
             UserCard
              <p>{value.name}</p>
              <p>{value.age}</p>
              {/* <h2>name : {props.data}</h2> */}
        </>
    );
};

export default UserCard;