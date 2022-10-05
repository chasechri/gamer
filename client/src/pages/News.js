import React from 'react';
import { Navigate, useParams } from 'react-router-dom';


import ReachOutList from '../components/ReachOutList';
import ReachOut from '../components/ReachOut';

import { useQuery } from '@apollo/client';
import { QUERY_USER  } from '../utils/queries';




const News = () => {
    const { username } = useParams();
  
    const { data } = useQuery(QUERY_USER, {
      variables: { username: username },
    });
  console.log(data);

  const user = data?.user ||  {};

// navigate to personal profile page if username is yours
if (user.username) {
    return <Navigate to="/profile:username" />;
  }
  

  if (!user?.username) {
    return (
      <h4>
        NO USER EXISTS
      </h4>
      
    );
  }

  return (
    <div>
  
  <div> <ReachOutList comments={user.comments} />
      

      <ReachOut postId={user._id} />
    </div>
       
    
  </div>

  );
 
};


export default News;