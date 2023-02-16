import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { FriendContainer, FriendItem, FriendsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendContainer>
      <FriendsList>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendItem key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </FriendItem>
        ))}
      </FriendsList>
    </FriendContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string,
    })
  ).isRequired,
};
