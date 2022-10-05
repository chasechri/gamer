import React from 'react';
import { useParams } from 'react-router-dom';



import { useQuery } from '@apollo/client';
import { QUERY_ME,  } from '../utils/queries';



const Profile = () => {
  const { username } = useParams();

  const { data } = useQuery(QUERY_ME, {
    variables: { username: username },
  });
  
  const user = data?.me ||  {};

  console.log(data)
   

  

  
  
  if (!user?.username) {
    return (
      <h4>
        NO USER EXISTS
      </h4>
      
    );
  }

  
  

  return (
    <div>
    <br></br>
    <h2 >Viewing {`${user.username}'s`} profile</h2>
    <p>{`${user.email}'s`}</p>
    <p>xbox, ps4, ps5</p>
    
  </div>
  );
};

export default Profile;
