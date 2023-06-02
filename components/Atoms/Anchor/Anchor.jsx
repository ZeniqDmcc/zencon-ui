import PropTypes from "prop-types";

const Anchor = ({ href, text }) => (
  <a href={href}>
    <>{text}</>
  </a>
);

Anchor.propTypes  = {
  href: PropTypes.string,
  text: PropTypes.string,
};

export default Anchor;