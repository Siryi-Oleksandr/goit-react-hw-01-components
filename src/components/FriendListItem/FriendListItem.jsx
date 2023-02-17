import PropTypes from 'prop-types';
import { FriendName, FriendStatus } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <FriendStatus
        style={{ backgroundColor: isOnline ? 'green' : 'tomato' }}
      ></FriendStatus>
      <img className="avatar" src={avatar} alt={name} width="140" />
      <FriendName>{name}</FriendName>
    </>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
};
