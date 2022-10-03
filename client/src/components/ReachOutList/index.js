import React from "react";
import { Link } from "react-router-dom";

const ReachOutList = ({ reactions }) => {
  return (
    <div className="">
      <div className="">
        <span className="">Messages</span>
      </div>
      <div className="">
        {reactions &&
          reactions.map((reaction) => (
            <p className="" key={reaction._id}>
              {reaction.reactionBody} {"// "}
              <Link
                to={`/profile/${reaction.username}`}
                style={{ fontWeight: 700 }}
              >
                {reaction.username} on {reaction.createdAt}
              </Link>
            </p>
          ))}
      </div>
    </div>
  );
};

export default ReachOutList;
