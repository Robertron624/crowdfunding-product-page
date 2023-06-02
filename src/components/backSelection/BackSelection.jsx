import "./index.scss";
import PropTypes from "prop-types";

const BackSelection = ({ pledge, selectedPledge, setSelectedPledge }) => {
    const {id, title, description, pledgeAmount, left } = pledge;

    const handleSelect = () => {
        setSelectedPledge(id);
    };

    const disabled = pledgeAmount && left === 0;

    return (
        <div
            className={`pledge-container ${
                selectedPledge == id ? "selected-pledge" : ""
            } ${disabled ? "disabled-pledge" : ""}`}
        >
            <div className="inner">
              <div className="pledge-top">
                <label className="sr-only" htmlFor={`pledge-${id}`}></label>
                  <input
                    onChange={handleSelect}
                    type="radio" 
                    name={`pledge-${id}`}
                    checked={selectedPledge == id}
                  />
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
            {selectedPledge == id && (
                <div className="enter-pledge">
                  <p>
                    Enter your pledge
                  </p>
                  <div className="amount-continue">
                    <span className="amount">
                      <label className="sr-only" htmlFor="amount-input">
                        Enter your pledge
                      </label>
                      $
                      <input
                        type="number"
                        id="amount-input"
                        placeholder={pledgeAmount}
                        min={pledgeAmount}
                      />
                    </span>
                    <button className="continue">Continue</button>
                  </div>
                </div>
            )}
        </div>
    );
};

BackSelection.propTypes = {
    pledge: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        pledgeAmount: PropTypes.number,
        description: PropTypes.string.isRequired,
        left: PropTypes.number,
    }),
    selectedPledge: PropTypes.number,
    setSelectedPledge: PropTypes.func.isRequired,
};

export default BackSelection;