import React from 'react';
import { useParams } from 'react-router-dom';

import ReachOutList from '../components/ReachOutList';
import ReachOut from '../components/ReachOut';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';

const SingleThought = (props) => {
  const { id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId },
  });

  const post = data?.post || {};

 

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {post.username}
          </span>{' '}
          post on {post.createdAt}
        </p>
        <div className="card-body">
          <p>{post.rank}</p>
        </div>
      </div>

      {post.commentCount > 0 && (
        <ReachOutList comments={post.comments} />
      )}

      {Auth.loggedIn() && <ReachOut postId={post._id} />}
    </div>
  );
};

export default SingleThought;
