import userData from 'user.json';
import { Profile } from './Profile/Profile';
import statisticsData from 'data.json';
import { Statistics } from './Statistics/Statistics';

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
    </div>
  );
};
