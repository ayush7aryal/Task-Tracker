import PropTypes from "prop-types";

const Button = ({ name, color, onClickk }) => {
  return (
    <button
      onClick={onClickk}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {name}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
