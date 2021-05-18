import PropTypes from 'prop-types';
import style from './friendsStyle.module.css';

export default function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <li key={id} className={style.item}>
      {isOnline ? (
        <span className={style.onlineStatus} />
      ) : (
        <span className={style.offLineStatus} />
      )}
      <img className={style.avatar} src={avatar} alt="" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  avatar: "",
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
