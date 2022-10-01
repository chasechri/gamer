import React from "react";
import FriendList from "../components/FriendList";
import UserCard from "../components/UserCard";
import ReachOut from "../components/ReachOut";

const Profile = () => {
  return (
    <div>
      <UserCard></UserCard>
      <ReachOut></ReachOut>
      <FriendList></FriendList>
    </div>
  );
};

export default Profile;
