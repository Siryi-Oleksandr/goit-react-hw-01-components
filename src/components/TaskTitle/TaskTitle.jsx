import PropTypes from 'prop-types';
import css from '../TaskTitle/TaskTitle.module.css'

export const TaskTitle = ({ text }) => {
    return <h2 className={css.title}>{ text}</h2>
}

TaskTitle.propTypes = {
    text: PropTypes.string.isRequired
}