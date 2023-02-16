import PropTypes from 'prop-types';
// import css from '../TaskTitle/TaskTitle.module.css';
import { Title } from './TaskTitle.styled';

export const TaskTitle = ({ text }) => {
  return <Title>{text}</Title>;
};

TaskTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
