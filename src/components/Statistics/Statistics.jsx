import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, items }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat_list}>
        {items.map(item => (
          <li
            className={css.stat_item}
            key={item.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}> {item.label}</span>
            <span className={css.percentage}> {item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}