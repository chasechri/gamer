import React from 'react';
import { useParams } from 'react-router-dom';

// import ReachOutList from '../components/ReachOutList';
// import ReachOut from '../components/ReachOut';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_CARD } from '../utils/queries';

const PlayerCard = (props) => {
  const { id: cardId } = useParams();

  const { loading, data } = useQuery(QUERY_CARD, {
    variables: { id: cardId },
  });

  const card = data?.card || {};

 

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {card.username}
          </span>{' '}
          card on {card.createdAt}
        </p>
        <div className="card-body">
          <p>{card.rank}</p>
        </div>
      </div>

      {/* {card.commentCount > 0 && (
        <ReachOutList comments={card.comments} />
      )}

      {Auth.loggedIn() && <ReachOut cardId={card._id} />} */}
    </div>
  );
};

export default PlayerCard;