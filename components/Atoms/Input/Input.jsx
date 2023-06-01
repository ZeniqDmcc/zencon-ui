import PropTypes from 'prop-types';

function Input({ type, placeholder, value}) {
  return (
    <input type={type} placeholder={placeholder} value={value} />
  )
}

Anchor.propTypes = {
  type: propTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input