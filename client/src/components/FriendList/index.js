import React from "react";
import { Link } from "react-router-dom";

const FriendList = (friends, username, friendCount) => {
  if (!friends || !friends.length) {
    return <p className="">{username}, make some friends!</p>;
  }

  return (
    <div>
      <h4>Friends</h4>
      <h5>
        {username}'s {friendCount} {friendCount === 1 ? "friend" : "friends"}
      </h5>
      {friends.map((friend) => (
        <button className="" key={friend._id}>
          <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
        </button>
      ))}
    </div>
  );
};

export default FriendList;
