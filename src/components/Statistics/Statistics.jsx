import PropTypes from 'prop-types';
import {
  StatisticsCard,
  Title,
  StatisticsList,
  StatisticsItem,
} from './Statistics.styled';
import getRangomColor from 'utils/randomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <Title>{title}</Title>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem
              key={id}
              stats={stats}
              style={{ backgroundColor: getRangomColor() }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
