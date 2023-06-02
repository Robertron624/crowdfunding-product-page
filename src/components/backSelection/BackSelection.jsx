import "./index.scss";
import PropTypes from "prop-types";

const BackSelection = ({ pledge }) => {
    const { title, description, pledgeAmount, left } = pledge;

    return (
        <div className="pledge-container">
            <div className="pledge-top">
                <input type="radio" name="pledge" />
                <div className="name-amount">
                    <h4>{title}</h4>
                    {pledgeAmount && (
                        <p className="pledge-amount">
                            Pledge ${pledgeAmount} or more
                        </p>
                    )}
                </div>
            </div>
            <p className="pledge-description">{description}</p>
            {pledgeAmount && (
                <div className="pledge-bottom">
                    <p className="pledge-left">
                        {left}
                        <span>left</span>
                    </p>
                </div>
            )}
        </div>
    );
};

BackSelection.propTypes = {
    pledge: PropTypes.shape({
        title: PropTypes.string.isRequired,
        pledgeAmount: PropTypes.number,
        description: PropTypes.string.isRequired,
        left: PropTypes.number,
    }),
};

export default BackSelection;
