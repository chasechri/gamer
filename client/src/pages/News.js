import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";



import UserCard from '../components/UserCard';
import UserForm from '../components/UserForm';



import { useQuery } from '@apollo/client';
import { QUERY_POST,  } from '../utils/queries';



const News = () => {
  const { username } = useParams();

  const { data } = useQuery(QUERY_POST, {
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

    <a href="https://www.ea.com/games/apex-legends/news#game-updates" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon= {faPerson}></FontAwesomeIcon>
      </a>
 
    <p className='flex justify-center'>{`${user.email}'s`}</p>
    <p className='flex justify-center'>Friend Count{`${user.friendCount}'s`}</p>
    <a href="https://www.ea.com/games/apex-legends/news#game-updates" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon= {faPerson}></FontAwesomeIcon>
      </a>
      
    <div> <UserCard posts={user.posts} />
      <p>testing</p>

      <UserForm />
    </div>
 
      
   
    
  </div>

  );
 
};


export default News;