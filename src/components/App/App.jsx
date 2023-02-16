import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { TaskTitle } from 'components/TaskTitle/TaskTitle';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Container } from 'components/App/App.styled';

export const App = () => {
  return (
    <Container>
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
    </Container>
  );
};
