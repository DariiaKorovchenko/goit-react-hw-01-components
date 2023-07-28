import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ url, name, tag, location, stats }) => {
  return (
    <div className={css.profile}>
      <div className="description">
        <img src={url} alt={name} className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats_item}>
          <span className={css.label}>Followers </span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.stats_item}>
          <span className={css.label}>Views </span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.stats_item}>
          <span className={css.label}>Likes </span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
