import "./index.scss";
import PropTypes from "prop-types";

const ThankYou = ({handlePledgeDoneClose}) => {
    return (
        <div className="thankyou-container">
            <div className="thankyou-content">
                <img className="check-icon" src="/icon-check.svg" alt="check icon" />
                <h2>Thanks for your support!</h2>
                <p>
                    Your pledge brings us one step closer to sharing Mastercraft
                    Bamboo Monitor Riser worldwide. You will get an email once
                    our campaign is completed.
                </p>
                <button onClick={handlePledgeDoneClose}>Got it!</button>
            </div>
        </div>
    );
};

ThankYou.propTypes = {
    handlePledgeDoneClose: PropTypes.func.isRequired,
};

export default ThankYou;
