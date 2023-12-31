import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({
  url,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
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
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.stats_item}>
          <span className={css.label}>Views </span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.stats_item}>
          <span className={css.label}>Likes </span>
          <span className={css.quantity}>{likes}</span>
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
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
