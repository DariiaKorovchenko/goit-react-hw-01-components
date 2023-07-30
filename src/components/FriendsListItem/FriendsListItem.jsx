import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friend_card}>
      <span
        className={isOnline ? css.status_online : css.status_offline}
      ></span>

      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
