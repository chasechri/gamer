import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';

const Profile = () => {
  const { username } = useParams();

  const [addFriend] = useMutation(ADD_FRIEND);
  const { data } = useQuery(QUERY_ME, {
    variables: { username: username },
  });

   const user = data?.me || {};

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
      <h2 id="profileheader">Viewing {`${user.username}'s`} profile</h2>
      
    </div>
  );
};

export default Profile;