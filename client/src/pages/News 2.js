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

//  if (user.username) {
//     return (
//         <Navigate to="/profile:username" />;
//     )
//  }
  

  if (!user?.username) {
    return (
      <h4>
        NO USER EXISTS
      </h4>
      
    );
  }

  return (
    
    <div className='container flex mx-10 py-5 px-5 my-2 bg-gray-300 items-center border-black border-2'>
    <h2 className='px-1 flex underline justify-center'> Welcome signToken {`${user.username}'s`} profile</h2>
    <p className='flex justify-center'>{`${user.email}'s`}</p>
    <p className='flex justify-center'>{`${user.comments}'s`}</p>
  
   
       <div> <ReachOutList comments={user.comments} />
      

      <ReachOut postId={user._id} />
    </div>
    
  </div>

  );
 
};


export default News;