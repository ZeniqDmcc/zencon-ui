import React from 'react';
import CustomButton from "../../Atoms/Button/CustomButton"
import PropTypes from 'prop-types'
import GreenButton from '../../Atoms/Button/GreenButton';

const ButtonOuter = "flex gap-5 1024px:flex-col"

function ButtonGroup({ button1Link, button1Text, button2Link, button2Text }) {
  return (
    <div className={ButtonOuter}>
        <GreenButton href={button2Link} text={button2Text} />
        <CustomButton href={button1Link} text={button1Text} />
    </div>
  )
}

ButtonGroup.propTypes = {
  button1Link: PropTypes.string.isRequired,
  button1Text: PropTypes.string.isRequired,
  button2Link: PropTypes.string.isRequired,
  button2Text: PropTypes.string.isRequired,
}

export default ButtonGroup;
