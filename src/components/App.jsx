import userData from '../data/user.json';
import { Profile } from './Profile/Profile';
import statisticsData from '../data/data.json';
import { Statistics } from './Statistics/Statistics';
import friendsData from '../data/friends.json';
import { FriendList } from './FriendList/FriendList';
import transactionsData from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

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
      <TransactionHistory items={transactionsData} />
    </div>
  );
};
