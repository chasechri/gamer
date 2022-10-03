import React from "react";
import FriendList from "../components/FriendList";
import UserCard from "../components/UserCard";
import ReachOut from "../components/ReachOut";
import ReachOutList from "../components/ReachOutList";

const Profile = () => {
  return (
    <div>
      <div>
        <UserCard></UserCard>
        <div>
          <ReachOut></ReachOut>
          <ReachOutList></ReachOutList>
        </div>
      </div>
      <div>
        <FriendList></FriendList>
      </div>
    </div>
  );
};

export default Profile;
