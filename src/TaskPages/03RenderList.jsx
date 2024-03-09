import React from 'react';

const  RenderList = () => {
       
    const arr = ["jigar","kasamali","manan","virendr","shubham","naman","pratik"]

    return (
        <>
          <div>
            {
                arr.map((value,i) => {
                     return (
                        <li key={i}>name :{value}</li>
                     )
                })
            }
          </div>
        </>
    );
};

export default RenderList;