import PropTypes from 'prop-types';
import style from './friendsStyle.module.css';
import FriendListItem from './FriendsListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={style.list}>
      {friends.map(friend => (
        <FriendListItem
          isOnline={friend.isOnline}
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
}

FriendList.protoType = {
  friends: PropTypes.array,
};