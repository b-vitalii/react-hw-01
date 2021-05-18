import React from "react";
import ReactDom from "react-dom";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendsList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./json/user.json";
import statData from "./json/statistical-data.json";
import friends from "./json/friends.json";
import transactions from "./json/transactions.json";


let App = () => {
  let { name, tag, location, avatar, stats } = userData;
  return (
    <>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
        
      />
      <Statistics title="Upload stats" stats={statData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
