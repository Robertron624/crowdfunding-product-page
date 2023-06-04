import './pledge.scss'
import PropTypes from 'prop-types';

const Pledge = ({pledge}) => {

  const {title, pledgeAmount, description, left} = pledge

  const isDeactivated = left === 0;

  return (
    <div className={`pledge ${isDeactivated ? 'disabled': ''}`}>
      <div className="pledge-top">
        <h4>
          {title}
        </h4>
        <p className='amount'>
          Pledge ${pledgeAmount} or more
        </p>
      </div>
      <p className='description'>
        {description}
      </p>
      <div className="left-buttons">
        <p className='left'>
          <span>{left}</span> left
        </p>
        <button className={`${isDeactivated ? 'deactivated' : ''}`} disabled={isDeactivated}>
          {isDeactivated ? 'Out of Stock' : 'Select Reward'}	
        </button>
      </div>
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