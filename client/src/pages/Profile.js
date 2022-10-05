import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonBooth } from "@fortawesome/free-solid-svg-icons";



import UserCard from '../components/UserCard';
import UserForm from '../components/UserForm';



import { useQuery } from '@apollo/client';
import { QUERY_ME,  } from '../utils/queries';



const Profile = () => {
  const { username } = useParams();

  const { data } = useQuery(QUERY_ME, {
    variables: { username: username },
  });
  
  const user = data?.me ||  {};

  if (!user?.username) {
    return (
      <h4>
        NO USER EXISTS
      </h4>
      
    );
  }

  return (
    <div className='container flex mx-10 py-5 px-5 my-2 bg-gray-300 items-center border-black border-2'>
    <h2 className='px-1 flex underline justify-center'> Welcome to {`${user.username}'s`} profile</h2>
 
    <p className='flex justify-center'>{`${user.email}'s`}</p>
    <p className='flex justify-center'>Friend Count{`${user.friendCount}'s`}</p>
    <div> <UserCard posts={user.posts} />
      <p>testing</p>

      <UserForm />
    </div>
 
    <a href="https://www.ea.com/games/apex-legends/news#game-updates" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon= {faPersonBooth}></FontAwesomeIcon>
      </a>
      
   
    
  </div>

  );
 
};


export default Profile;
