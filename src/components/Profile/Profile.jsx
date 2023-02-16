import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileStats,
  ProfileStatsItem,
  ProfileDesc,
  UserName,
  UserLocation,
  UserTag,
  StatsQuantty,
  StatsLabel,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileCard>
      <ProfileDesc>
        <img src={avatar} alt={username} width={300} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </ProfileDesc>

      <ProfileStats>
        <ProfileStatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantty>{followers}</StatsQuantty>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantty>{views}</StatsQuantty>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantty>{likes}</StatsQuantty>
        </ProfileStatsItem>
      </ProfileStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
