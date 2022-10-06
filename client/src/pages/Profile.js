import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME  } from '../utils/queries';

import UserCard from "../components/UserCard";
import { QUERY_CARDS } from '../utils/queries';


const Profile = () => {
  const { username } = useParams();

  const { data } = useQuery(QUERY_ME, {
    variables: { username: username },
  });
  
  const user = data?.me ||  {};

  console.log(data)
  console.log(user.platform)
  console.log(user.username)
  console.log(user.email)
  console.log(user.rank)

  const { data: cardData } = useQuery(QUERY_CARDS);


	// checking if there's data to card (if not then store it in empty array)
	const originalCards = cardData?.cards || [];
	console.log(originalCards)


  if (!user?.username) {
    return (
      <h4>
        No registered players with this username. Please check the homepage again for the full list!
      </h4>
      
    );
  }

  return (
    <div>
    <br></br>
    <h2 >Viewing {`${user.username}'s`} profile</h2>
    <UserCard cards={user} />
    <p>xbox, ps4, ps5</p>
    
  </div>
  );
};

export default Profile;