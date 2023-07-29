import css from './FriendList.module.css';
import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsListItem
          avatar={avatar}
          key={id}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};
