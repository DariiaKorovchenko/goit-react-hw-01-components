import userData from 'user.json';
import { Profile } from './Profile/Profile';
import statisticsData from 'data.json';
import { Statistics } from './Statistics/Statistics';
import friendsData from 'friends.json';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <Profile
        url={userData.avatar}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" items={statisticsData} />
      <FriendList friends={friendsData} />
    </div>
  );
};
