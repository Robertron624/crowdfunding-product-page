import './pledge.scss'
import PropTypes from 'prop-types';

const Pledge = ({pledge}) => {

  const {title, pledgeAmount, description, left} = pledge

  return (
    <div className={`pledge ${left == 0 ? 'disabled': ''}`}>
      <h4>
        {title}
      </h4>
      <p className='amount'>
        Pledge ${pledgeAmount} or more
      </p>
      <p className='description'>
        {description}
      </p>
      <p className='left'>
        <span>{left}</span> left
      </p>
      <button disabled={left == 0}>
        Select Reward
      </button>
    </div>
  )
}

Pledge.propTypes = {
  pledge: PropTypes.shape({
    title: PropTypes.string.isRequired,
    pledgeAmount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    left: PropTypes.number.isRequired
  })
}

export default Pledge