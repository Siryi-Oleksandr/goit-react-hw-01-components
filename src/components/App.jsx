import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { TaskTitle } from './TaskTitle/TaskTitle';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 28,
        color: '#010101',
      }}
    >
      <TaskTitle text="1 - Профіль соціальної мережі" />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <TaskTitle text="2- Секція статистики" />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <TaskTitle text="3 - Список друзів" />
      <FriendList friends={friends} />
      <TaskTitle text="4 - Історія транзакцій" />
      <TransactionHistory items={transactions} />
    </div>
  );
};
